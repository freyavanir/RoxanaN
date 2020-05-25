/**********************************************************************************
* 
*Created by: 
*
*Description: 
*
*Project:			Project2
*
**********************************************************************************/


describe ('spec_phpDemoTravels', function (){
	
		var demoPage = require ('../03_Pages_P2/PhpTravels_demo.js');
		var testdata = require ('../04_InputData_P2/InputDataP2.json')
			testdata.forEach(function (data) {
				
				
				
				it ('Open PhPDemoTravel Page', function (){
				demoPage.loadingDemoPage (data.URL);
				
				
				
			}); // close Open PhPDemoTravel Page function
	
	
		
	});	// close testdata
	
	
}); // close main function