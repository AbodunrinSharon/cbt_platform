<div align="center">
    <br />
    <img align="center" width="128" height="128" src="./readme/cbt_platform.png">
    <br />
    <br />
</div>

> With our CBT platform, you can easily setup and manage your very own CBT server for your schools or any institution.

# Building the app

1. Clone the repository
    ```sh
    git clone https://github.com/abodunrinsharon/cbt_platform.git
    ```

2. Install requirements
    ```sh
    npm install -r
    ```
    
3. Build the app
    ```sh
    npm run build
    ```
    This will build the app in `src` into a single index, css, and js file. Look in `src/dist` for the files.

4. In the dist, move the assets folder into the parent folder

4. In the index.html file of the built app, you will see "assets/index-########.css", and "assets/index-########.js". Simply remove the "assets/" leaving just the file
   name in the source.
   "########" being a random string of characters
6. Move all files into the `build` directory

7. In the main.js, go towards the bottom and delete `mainWindow.loadURL('http://localhost:8080/')`, and uncomment `mainWindow.loadURL('file://' + path.join(__dirname, 'index.html'));` in order to run correctly

8. Build the Electron app
   ```sh
   npm run dist
   ```
Open settings and click F5 for development tools
