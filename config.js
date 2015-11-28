//BASIC IMPORTS
	global.fs 		= require("fs");
	global.fse 	= require("fs.extra");
	global.path 	= require('path');
	global.c   	= require("colors");
	global.crypto  = require("./crypto.js");
	
    //SET THE MODE FOR THE EVENT LOGGER { true === "verbose mode" && false === "log to file only" }
	global.dev	 	= true;
	
	//GET THE SCRIPT INSTALLATION DIRECTORY
    global.home = path.dirname( fs.realpathSync( __filename ) );
	

    //THE PATH TO THE LOG FILE
	global.log_path = "bixbyte/logs/main.log";
	//global.log_path = this.log_path;

    //FETCH THE BIXBYTE EVENT LOGGER
	global.log = require("./logger.js")(log_path, dev);

	//DEFINE THE COLOR SCHEME
	global.cs = c.setTheme({ success:'green', err:'red', info:'blue', gray:'gray', yell:'yellow'});
	
	//THE BIXBYTE CLOUD INITIALIZER SERVICE
	global.cloud_init = function( repo_data ){
						if( repo_data.response ){
							log("@framify".success + "\nInitializing cloud services for the project ".info + repo_data.message.name );
						}else{
							log('@framify\nFailed to initialize cloud services for the project '.err + repo_data.message.name + '\nYou have to ' + 'set'.info +' the' + ' github '.yell +' and ' +'google drive'.yell + ' services '+ 'manually'.info + '.\n')
						}
					};

	//FETCH THE BASIC PROJECT DIRECTORY CREATOR
	global.framify = require("./framify.js")(home, fs, fse, cloud_init );

	//FETCH THE BIXBYTE APPLICATION INFO OBJECT
	global.appinfo = require("./appinfo.js")(fs, home, cs);
		appinfo.gc();

	//FETCH THE BIXBYTE DRIVIFY APPLICATION OBJECT
	global.drivify = function( callback ){
					return require("./drivify.js")(fs, fse, color, callback);
				}

////EXPOSE THE ACTUAL SCRIPT PATH
//exports.home = home + "/";
//
////EXPOSE THE MAIN APPLICATION LOGGER
//exports.logStream = function(){	return fs.createWriteStream( home + "/.framify"); };
//
////EXPOSE THE EVENT LOGGER
//exports.log = log;
//
////EXPOSE THE COLORIFY OBJECT
//exports.color = cs;
//
////EXPOSE THE ADVANCED FILE SYSTEM OBJECT
//exports.fse = fse;
//
////EXPOSE THE REGULAR FILE SYSTEM OBJECT
//exports.fs = fs;
//
////EXPOSE THE CRYPTO MODULE 
//exports.crypto = crypto;
//
////EXPOSE THE FRAMIFY MODULE
//exports.framify = framify;
//
////EXPOSE THE APPINFO MODULE
//exports.appinfo = appinfo;
//
////EXPOSE THE DRIVIFY MODULE
//exports.drivify = drivify;