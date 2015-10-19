(function () {

	var pictureCtrl = function ($scope, $cordovaCamera, pictureFactory) {

		// local scope variables
		$scope.imageDefined = false;
		$scope.imageSrc = '';
		$scope.statusMessage = '';

		$scope.snapPicture = function () {
			$scope.imageDefined = false;
			console.log('inside snap picture method');

			try {

				document.addEventListener("deviceready", function () {

					var options = {
						quality: 50,
						destinationType: Camera.DestinationType.DATA_URL,
						sourceType: Camera.PictureSourceType.CAMERA,
						allowEdit: true,
						encodingType: Camera.EncodingType.JPEG,
						targetWidth: 300,
						targetHeight: 300,
						popoverOptions: CameraPopoverOptions,
						saveToPhotoAlbum: false,
						correctOrientation: true
					};

					$cordovaCamera.getPicture(options).then(function (imageData) {
						
						$scope.statusMessage = "Picture Saved!";
						$scope.imageDefined = true;
						$scope.imageSrc = "data:image/jpeg;base64," + imageData;
												
						
						//write factory call here 
					
					
					}, function (err) {
						// error
					});

				}, false);

			} catch (e) {

				console.log('Device not loaded!');

			}

		}

	}

	angular.module('picApp')
		.controller('pictureCtrl', pictureCtrl);

})();