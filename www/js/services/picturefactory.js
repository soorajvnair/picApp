(function(){ 
	
	var pictureFactory = function($http){
		
		var factory = {};
		
		factory.uploadPicture = function(picData){
			
			return $http.post('')
			
		}
		
		return factory;
		
	}
	
	angular.module('picApp')
		.factory('pictureFactory',pictureFactory);
	
 })();