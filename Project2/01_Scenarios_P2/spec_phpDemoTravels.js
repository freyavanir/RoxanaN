/**********************************************************************************
* 
*Created by: 
*
*Description: 
*
*Project:			Project2
*
**********************************************************************************/

describe('spec_phpDemoTravels', function () {
	
	var loadPhpDemoTravels = require('../03_Pages_P2/PhpTravels_demo.js');
	var testdata = require('../04_InputData_P2/InputData.json');
		testdata.forEach (function (data) {
			
	it('Open phpDemoTravels', function () {
		loadPhpDemoTravels.LoadingDemoFunction (data.URL);
		

		});
	
	}); // close testdata

}); //close main function