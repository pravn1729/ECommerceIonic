Reference links:

https://www.tutorialspoint.com/ionic/ionic_js_popover.htm <-- ionic basics
http://ionicframework.com/docs/components/#forms-floating-labels <-- ionic framework docs

http://ionicmaterial.com/ <-- App Design
http://ionicmaterial.com/demo/docs/docs.html <-- App Design Demo
http://codepen.io/ionic/pens/public/ <-- App SVG elements

https://ionicframework.com/docs/v2/components/#list-dividers
http://ionicons.com/
https://www.tutorialspoint.com/ionic/ionic_grid.htm

ionic start <<projectname>> <<predefined template>>
ionic server <-- start server
ionic build android




Pages
--------
Login
Sign Up
Forgot password <-- optional


Categories(searchbox in sub header)
Products
Product Details (Ratings and Reviews) <-- Logic for authorizing products and calculating the belief(Integrity and Competence)

Important Code:
1) Clear text in controller rather than at AppConfig level
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $ionicConfig) {
  $scope.chat = Chats.get($stateParams.chatId);
  $ionicConfig.backButton.text("")
})


Css effects:
==============
1) Scroll header hide.

http://www.webdesignerdepot.com/2014/05/how-to-create-an-animated-sticky-header-with-css3-and-jquery/
