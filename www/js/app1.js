// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter.login', ['ui.router']).config(function ($stateProvider) {

//angular.module('starter.login',[], ['$stateProvider', function($stateProvider){
  //$ionicConfigProvider.backButton.previousTitleText(false);
  //$ionicConfigProvider.backButton.text("");
  $stateProvider
    .state('login', {
    url: '/',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
    
}]);
