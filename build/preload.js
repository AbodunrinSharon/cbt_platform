const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('bridge', {
  getArgs: () => ipcRenderer.invoke('getArgs'),
  getVersion: () => ipcRenderer.invoke('getVersion'),
  sendData : (data) => ipcRenderer.send('send-data', data)
});
