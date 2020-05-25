/**********************************************************************************
* 
*	Created by: 
*
*	Description: 
*
*	Project:		Project2
*
**********************************************************************************/

module.exports = (function () {
	
	var that = {};
	
	// click Product button
	that.productMenuButtonClick = function (){
		return element(by.xpath('/html/body/header/div[2]/div/nav/ul/li[3]/span/span')).click();
	}
	
	// click Documentation
	that.documentationButtonClick = function (){
		return element(by.xpath('/html/body/header/div[2]/div/nav/ul/li[3]/div/ul/li[2]/a')).click();
	}
	
	return that;
	
})();