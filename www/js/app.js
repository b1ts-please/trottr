var trottr = angular.module('trottr', ['ionic', 'ngRoute', 'ngResource', 'ui.router'])

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

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'views/login.html',
    controller: 'AuthLoginController'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'views/register.html',
    controller: 'AuthRegisterController'
  })
  .state('battle', {
    url: '/battle',
    templateUrl: 'views/battle.html',
    controller: 'BattleController'
  })
  .state('username', {
    url: '/username',
    templateUrl: 'views/username.html',
    controller: 'AuthUsernameController'
  })
  .state('map', {
    url: '/map',
    templateUrl: 'views/map.html',
    controller: 'MapController'
  })
  .state('profile', {
    url: '/profile',
    templateUrl: 'views/profile.html',
    controller: 'ProfileController'
  });

  $urlRouterProvider.otherwise('/login');
});
