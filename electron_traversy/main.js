const electron = require("electron");
const url = require("url");
const path = require("path");

const {app, BrowserWindow, Menu, ipcMain} = electron;

// set env
process.env.NODE_ENV = "production";

let mainWindow;
let addWindow;

function createWindow(dctWindowPara, strHtmlPath){
    
    let newWindow;
    // Create new window
    newWindow = new BrowserWindow(dctWindowPara);

    // Load html into Window
    newWindow.loadURL(url.format({
        pathname:path.join(__dirname, strHtmlPath),
        protocol:"file",
        slashes: true
    }));

    return newWindow;
}

app.on("ready", () => {
    
    let windowPara = {
        // webPreferences:{
        //     nodeIntegration:true
        // }
        webPreferences: {
            nodeIntegration:true,
            preload: path.join(__dirname, 'preload.js')
        }
    }

    mainWindow = createWindow(windowPara, "index.html")

    // load the index.html of the app.
    // mainWindow.loadFile('index.html')


    // Quit app when closed
    mainWindow.on("closed", ()=>{
        app.quit();
    });

    // Create menu template
    const mainMenuTemplate = [
        {
            label:"File",
            submenu:[
                {
                    label: "Add Item",
                    click(){
                        createAddWindow();
                    }
                },
                {
                    label: "Clear Items",
                    click(){
                        mainWindow.webContents.send("item:clear");
                    }
                },
                {
                    label: "Quit",
                    click(){
                        app.quit();
                    },
                    accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q"
                }
            ]
        }
    ]

    // If mac, add empty object to menu
    if(process.platform == "darwin"){
        mainMenuTemplate.unshift({})
    }

    // Add developer tools item if not in production
    if(process.env.NODE_ENV !== "production"){
        mainMenuTemplate.push({
            label:"Developer Tools",
            submenu:[
                {
                    label:"Toggle DevTools",
                    click(item, focusedWindow){
                        focusedWindow.toggleDevTools()
                    },
                    accelerator: process.platform == "darwin" ? "Command+I" : "Ctrl+I"
                },
                {
                    role:"reload"
                }
            ]
        })
    }

    // Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    // Insert Menu
    Menu.setApplicationMenu(mainMenu);

})

ipcMain.on("item:add", function(e, item){

    mainWindow.webContents.send("item:add", item);
    addWindow.close()
});

function createAddWindow(){
    
    let windowPara = {
        
        width:300,
        height:200,
        title:"Add Shopping List Item",
        webPreferences: {
            nodeIntegration:true,
            preload: path.join(__dirname, 'preload.js')
        }
    }

    addWindow = createWindow(windowPara, "addWindow.html")

    // Garbage collection handle
    addWindow.on("close", ()=>{
        addWindow = null;
    });
}


// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) createWindow()
})

  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.