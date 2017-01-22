angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  /*$ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  */

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $location) {
$scope.slides = [
    { image : 'img/offer1.jpg' },
    { image : 'img/offer2.jpg' },
    { image : 'img/offer3.jpg' },
    { image : 'img/offer4.jpg' }
  ];

  $scope.record = function() {
    var recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.lang = 'en-US';

    recognition.onresult = function(event) {
        if (event.results.length > 0) {
            var recognizedText = event.results[0][0].transcript;
            if(recognizedText == 'go') {
               $scope.go();
            } else {
              $scope.recognizedText = recognizedText;
              $scope.$apply();
            }

        }
    };

    recognition.start();
  };

  $scope.go = function() {
    // redirect to cars state.
    console.log('go function');
    $location.path('/app/categories/'+$scope.recognizedText);
  };

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('carlogosCtrl', function($scope, $stateParams, $ionicSideMenuDelegate) {
  $ionicSideMenuDelegate.toggleLeft();
})

.controller('carsCtrl', function($scope, $stateParams, $ionicSideMenuDelegate) {

    $scope.cars = [
    {
      img : 'img/car1.jpg',
      name : 'Selected',
      rating: '3.6',
      ratingmembers : '1,197',
      newprice : '1,998',
      oldprice : '4,995',
      offerpercent: '60',
      offermsg: 'Special price, Bank Offer'
      
    },
    {
      img : 'img/car3.jpg',
      name : 'Selected',
      rating: '3.6',
      ratingmembers : '1,197',
      newprice : '1,998',
      oldprice : '4,995',
      offerpercent: '60',
      offermsg: 'Special price, Bank Offer'
      
    },
    {
      img : 'img/car2.jpg',
      name : 'Selected',
      rating: '3.6',
      ratingmembers : '1,197',
      newprice : '1,998',
      oldprice : '4,995',
      offerpercent: '60',
      offermsg: 'Special price, Bank Offer'
      
    },
    {
      img : 'img/car3.jpg',
      name : 'Selected',
      rating: '3.6',
      ratingmembers : '1,197',
      newprice : '1,998',
      oldprice : '4,995',
      offerpercent: '60',
      offermsg: 'Special price, Bank Offer'
      
    }

    ];


})

.controller('cardetailssCtrl', function($scope, $stateParams, $ionicSideMenuDelegate) {
    $scope.cardetails = {
      main : 'img/car1.jpg',
      thumbnails : ['img/car1.jpg', 'img/car2.jpg', 'img/car3.jpg', 'img/car2.jpg', 'img/car3.jpg']
    };

    $scope.updateMain = function(src){
      $scope.cardetails.main = src;

    };

    $scope.ratings = {};

    $scope.reviews = [];
    var review1 = {};
    // loop sub images
});
