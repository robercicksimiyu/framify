<?php
//@ ALLOW CORS REQUESTS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

//@ HANDLE RUNTIME ERROR DISPLAY
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);	


	//@ PERFORM BASIC AUTHENTICATION & DEPENDENCY IMPORTATION
	include("__adminAuth.php");

	$command = @$_REQUEST["command"];
	unset( $_REQUEST["command"] );
	
	
	//# REMOVE THE CALLBACK VARIABLES 
	//! [REMOVE ONLY AFTER INCLUDING THE CONNECTION CLASSES TO ENABLE CORS]
	unset($_REQUEST["callback"]);
	unset($_REQUEST["_"]);
	
	if( @$command ){
		
		include("process.php");
		
		$proc = new Process( $connection );
				
		switch ($command) {
			
			//# ADDER HANDLER
			case 'add':
				echo $proc->addFunc( $_REQUEST );
				exit;
			break;
			
			//# SIMPLE GETTER HANDLER
			case 'get':
				echo $proc->getFunc( $_REQUEST );
				exit;
			break;
			
			//# ADVANCED GETTER FUNCTION
			case 'getAll':
				echo $proc->getAllFunc( $_REQUEST );
				exit;
			break;
			
			//# DELETION HANDLER
			case 'del':
				echo $proc->delFunc( $_REQUEST );
				exit;
			break;
			
			//# UPDATE HANDLER
			case 'update':
				echo $proc->updateFunc( $_REQUEST );
				exit;
			break;
			
			//# TRUNCATE HANDLER
			case 'truncate':
				echo $proc->truncateFunc( $_REQUEST );
				exit;
			break;
			
			//# TABLE DROP HANDLER
			case 'drop':
				echo $proc->truncateFunc( $_REQUEST );
				exit;
			break;
			
			default:
				echo $connection->wrapResponse( 500, "The required parameters were not met. Please ensure that they are defined" );
				exit;
			break;
			
		}
		
	}else{
		
		echo $connection->wrapResponse( 500, "The required parameters were not met. Please ensure that they are defined" );
		exit;
		
	}

?>
