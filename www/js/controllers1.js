angular.module('starter.login', [])

.controller('LoginCtrl', function($scope, $location) {
  $scope.submit = function(){
    console.log('login details');
    $location.path('app/playlists');
  };
  $scope.dashboard = function(){
    console.log('login details');
    $location.path('app/playlists');
  };
});
