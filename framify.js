//!tests 
//require("./config.js")
var Framify = function( home ){
	
	//fs 	= fs || require("fs");    
	//fse 	= fse || require("fs.extra");
	//home 	= home || require('path').dirname(fs.realpathSync(__filename));
	
	//IN-APP GARBAGE COLLECTION STRATEGY
//	var gc = function(){
//		
//		home = null;	delete home;
//		fse	 = null;	delete fse;
//		fs	 = null; 	delete fs;
//		
//	};
	
	//THE FRAME DIRECTORY STRUCTURE CREATOR
	this.mkdirs = function( homedir ){
		
        homedir = ( homedir || "framify\ test\ \app" ).replace(/ +/g, '_').toLowerCase();
		
		fs.exists( homedir, function name(exists) {
					         
			if(!exists){
				
				//INITIALIZE  THE PROJECT DIRECTORY IF NOT EXISTS ALREADY
				mkdir(homedir);
				
			}else{
				
				//INFORM THE USER THAT THE DIRECTORY ALREADY EXISTS 
				console.log("@framify\n".err + "Failed to initialize project: ".err + "A directory by that name already exists in the current path.\n" + "Please try another".info + "\n");
				
					
			};
            
		});
		
        
		//THE DIRECTORY INITIALIZER
		var mkdir = function( homedir ){
			
			console.log("@framify\n".success + "Initializing Project ".info + homedir + "\n");
	
	
				//FILE SOURCES		
				this.fromFiles = { 			
									main: 		[ home, "assets" ]
								};
				
				//FILE DESTINATIONS	
				this.toFiles = {			
									main: 		[ homedir ]
								};
				
							
				//CREATE THE REQUIRED FILES RECURSSIVELY
				for (var key in this.fromFiles ) {
					
					if (this.toFiles.hasOwnProperty(key)) {	
                        
						doFiles(  this.fromFiles[key].join().replace(/,/g, "/").replace( /\/\//g, "/").toString(), this.toFiles[key].join().replace(/,/g, "/").replace( /\/\//g, "/").toString()  );
                        
					};	
							
				};
			
		};
		
		//MOVE THE INITIALIZATION FILES TO THE RESPECTIVE DIRECTORIES
		var doFiles = function( fromFiles, toFiles ){
			
			fse.copyRecursive( fromFiles, toFiles, function(err){
                
				if(!err){
                                        
					console.log("@framify\n".success + "initialized \t".info +  toFiles + "\n" );
					cloud_init( { response: true, data: { message: cloud_callbacks, command: '' }});
                    
				}else{
                    
					console.log("@framify\n".err + "Failed \t" + err.message + "\n");
					cloud_init( { response: false, data: { message: cloud_callbacks, command: '' } });
                    
				}
                
			});
			
		};	
		
		
	};
	
};

//EXPOSE THE PROJECT INITIATOR
module.exports = function( home ){
   
    return new Framify( home ).mkdirs;
    
};