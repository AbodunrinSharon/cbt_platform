// CBT Platform Activity
const VERSION = '1.0.0';
const { app, BrowserWindow, dialog, ipcMain, shell } = require('electron');
const path = require('node:path');
const fs = require('node:fs');
const args = require('minimist')(process.argv);
const logger = require('./logger.js');
const log = logger.createLogger('[Main-Worker]');
const logFile = path.join(__dirname, '../latest.log');
const logEntry = [];
fs.truncate(logFile, 0, (err) => { if (err) log.error('Error truncating log file:', err) });
log.printLog((msg) => {
  logEntry.push(`${typeof msg == 'string' ? msg : msg.join(' ')}\n`);
});

log(`Starting CBT Main v${VERSION}`);
const server = require('./server.js');
const absoluteElectronPath = process.execPath;
const relativeElectronPath = path.relative(process.cwd(), absoluteElectronPath);
const electronPath = absoluteElectronPath.length < relativeElectronPath.length ? absoluteElectronPath : relativeElectronPath;
let mainWindow = null;
let rendererLog = log.createLogger('[CBT Main]');

let canEdit, isEditing;

const startServer = function () {
  if (!server.isRunning()) server.init(args.hostPort);
  else log.warn('Server is already running');
}

const stopServer = function () {
  if (server.isRunning()) server.stop();
}

function decorateURL(url) {
  const parsedUrl = new URL(url);
  parsedUrl.searchParams.append('utm_source', 'default_app');
  return parsedUrl.toString();
}

function logMessage() {
  for (let i = 0;i < logEntry.length;i++) {
    fs.appendFile(logFile, logEntry[i], err => {if (err) log.error('Error writing to log File')});
  }
}

function _quit() {
  log(`Closing and terminating\n CBT Main v${VERSION}`);
  stopServer();
  logMessage();
  for (let i = 0;i < logEntry.length;i++) {
    fs.appendFile(logFile, logEntry[i], err => {if (err) log.error('Error writing to log File')});
  }
  return;
}

async function createWindow () {
  await app.whenReady();
  const options = {
    width: 1000,
    height: 560,
    minWidth: 672,
    minHeight: 363,
    //icon: 'favicon.png',
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#0000',
      symbolColor: '#d3d3d3',
      height: 32
    },
    autoHideMenuBar: true,
    useContentSize: true,
    show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, '/preload.js')
    }
  };
  if (process.platform === 'linux') {
      options.icon = path.join(__dirname, 'favicon.png');
  }
  mainWindow = new BrowserWindow(options);
  mainWindow.on('ready-to-show', () => mainWindow.show());
  mainWindow.webContents.setWindowOpenHandler(details => {
    shell.openExternal(decorateURL(details.url));
    return { action: 'deny' };
  });
  mainWindow.webContents.session.setPermissionRequestHandler((webContents, permission, done) => {
    const parsedUrl = new URL(webContents.getURL());
    const options = {
      title: 'Permission Request',
      message: `Allow '${parsedUrl.origin}' to access '${permission}'?`,
      buttons: ['OK', 'Cancel'],
      cancelId: 1
    };
    dialog.showMessageBox(mainWindow, options).then(({ response }) => {
      done(response === 0);
    });
  });
  return mainWindow;
}

app.on('window-all-closed', function () {
  if (confirmQuit()) {
    if (process.platform !== 'darwin') app.quit();
    _quit();
  }
});

function isTrustedSender(webContents) {
  if (webContents !== (mainWindow && mainWindow.webContents)) {
    return false;
  }
  try {
    return url.fileURLToPath(webContents.getURL()) === indexPath;
  }
  catch {
    return false;
  }
}

function confirmQuit() {
  if (server.isRunning()) {
    return confirm('The server is still running, terminate?');
  } else {
    if (isEditing) {
      return confirm('You have unsaved changes, closing will discard these changes.');
    } else{
      return true;
    }
  }
}

function ipcHandlers() {
  ipcMain.handle('getArgs', () => {
    return args;
  });

  ipcMain.handle('getVersion', () => {
    return VERSION;
  });

  ipcMain.handle('isServerRunning', () => {
    return server.isRunning;
  });

  ipcMain.on('send-data', (event, data) => {
    switch (data.type) {
      case 'log':
        if (data.log == 'default') {
          rendererLog[Array.isArray(data.args) ? 'apply' : 'call'](console, data.args);
        } else {
          rendererLog[data.log][Array.isArray(data.args) ? 'apply' : 'call'](console, data.args);
        }
        break;

      case 'start-server':
        startServer();
        break;

      case 'stop-server':
        stopServer();
        break;

      default:
        break
    }
  });

  ipcMain.handle('bootstrap', (event) => {
    return isTrustedSender(event.sender) ? electronPath : null;
  });
}

const loadURL = async (appUrl) => {
  try {
    mainWindow =  await createWindow();
    await mainWindow.loadURL(appUrl);
    ipcHandlers();
    log(`Loaded URL: ${appUrl}`);
    mainWindow.show();
    if (args.dev) {mainWindow.webContents.openDevTools();log('DevTools opened')}
    mainWindow.focus();
  } catch (e) {
    if (args.hostPort) stopServer();
    log.error('Error loading URL')
    log.error(e);
  }
};

const loadFile = async (appPath) => {
  try {
    mainWindow =  await createWindow();
    await mainWindow.loadFile(appPath);
    ipcHandlers();
    log(`Loaded File: ${appPath}`);
    mainWindow.show();
    if (args.dev) {mainWindow.webContents.openDevTools();log('DevTools opened')}
    mainWindow.focus();
  } catch (e) {
    if (args.hostPort) stopServer();
    log.error('Error loading file')
    log.error(e);
  }
};

if (args.indexPath && !args.indexUrl) loadFile(path.resolve(app.getAppPath(), args.indexPath));
else if (args.indexURL) loadURL(path.resolve(app.getAppPath(), args.indexUrl));

exports.loadURL = loadURL;
exports.loadFile = loadFile;