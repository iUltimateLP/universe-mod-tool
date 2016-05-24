/*
#     #                                                #     #                  #######                      
#     # #    # # #    # ###### #####   ####  ######    ##   ##  ####  #####        #     ####   ####  #      
#     # ##   # # #    # #      #    # #      #         # # # # #    # #    #       #    #    # #    # #      
#     # # #  # # #    # #####  #    #  ####  #####     #  #  # #    # #    #       #    #    # #    # #      
#     # #  # # # #    # #      #####       # #         #     # #    # #    #       #    #    # #    # #      
#     # #   ## #  #  #  #      #   #  #    # #         #     # #    # #    #       #    #    # #    # #      
 #####  #    # #   ##   ###### #    #  ####  ######    #     #  ####  #####        #     ####   ####  ######
 
        Author  : Jonathan 'Johnny' Verbeek a.k.a iUltimateLP
        Purpose : Main JavaScript code for the Universe Mod Tool
*/

const electron = require("electron"); //Electron module
const app = electron.app //App shortcut
const BrowserWindow = electron.BrowserWindow; //Browser windows

let mainWindow; //Why let? Because otherwise it gets garbage-collected

function initWindow()
{
    mainWindow = new BrowserWindow({width: 900, height: 600, autoHideMenuBar: false, backgroundColor: "#263238"}); //#25373D #282830 #60646D #263238
    mainWindow.loadURL(`file://${__dirname}/../html/index.html`);
    
    mainWindow.on("closed", function() {
        mainWindow = null;    
    });
}

app.on("ready", initWindow); //When Electron has done all it's stuff, init the window!