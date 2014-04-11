'use strict';

angular
  .module('dragdropApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/h5DragDrop', {
        templateUrl: 'views/h5dragdrop.html',
        controller: 'H5dragdropCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
