var trottr = angular.module('trottr', ['ionic', 'ngRoute', 'ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "AuthController",
      templateUrl: "/views/auth.html"
    })
    .when('/login', {
      controller: "AuthLoginController",
      templateUrl: "/views/login.html"
    })
    .when('/register', {
      controller: "AuthRegisterController",
      templateUrl: "/views/register.html"
    })
    .when('/username', {
      controller: "AuthUsernameController",
      templateUrl: "/views/username.html"
    })
    // temporary
    .when('/home', {
      controller: "HomeController",
      templateUrl: "/views/home.html"
    });
  $routeProvider.otherwise({ redirectTo: '/' });
});
