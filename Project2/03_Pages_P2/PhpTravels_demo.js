/**********************************************************************************
* 
*Created by: 
*
*Description: 
*
Projecct:		Project2
*
*
**********************************************************************************/


module.exports = (function (demoPage) {
	
	demoPage.loadingDemoPage = function (URL){
		
		//open page
		browser.get(URL);
		
		// click Product button
		//demoPage.productMenuButtonClick();
		
		// select Documentation option
		//demoPage.documentationButtonClick();
	
	
	
	};

	return demoPage;
	
})(require('../02_Functions_P2/basePageObj_P2.js'));

