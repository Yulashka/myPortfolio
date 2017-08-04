(function(angular) {
  'use strict';
var doctorApp = angular.module('doctor', ['ngRoute', '720kb.datepicker']);

// doctorApp.config(function($locationProvider) {
//   $locationProvider.html5Mode(true).hashPrefix('!');
// })

doctorApp.controller('MainController', function($scope, $route, $routeParams, $location) {
    console.log("main hello");
    
 })

doctorApp.controller('AboutController', function($scope, $routeParams) {
     console.log("about hello");
 })

doctorApp.controller('ScheduleController', function($scope, $routeParams) {
     console.log("schedule hello");
     
 })

doctorApp.controller('ServicesController', function($scope, $routeParams) {
     console.log("services hello");
 })

doctorApp.controller('DoctorController', function($scope, $routeParams) {
     console.log("doctor hello");
     var doc = $routeParams.name;
     $scope.doc = doc;
     $scope.foobar = "hello julia";
     console.log("hello " + doc);
 })

doctorApp.controller('ServiceController', function($scope, $routeParams) {
     console.log("services hello");
     var service = $routeParams.name;
     $scope.service = service;
     console.log("hello " + service);
 })

doctorApp.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'main.html',
    controller: 'MainController'
  })
  .when('/about', {
    templateUrl: 'about.html',
    controller: 'AboutController'
  })
  .when('/schedule', {
    templateUrl: 'schedule.html',
    controller: 'ScheduleController'
  })
  .when('/services', {
    templateUrl: 'services.html',
    controller: 'ServicesController'
  })
  .when('/service/:name', {
    templateUrl: 'service.html',
    controller: 'ServiceController'
  })
  .when('/doctor/:name', {
    templateUrl: 'doctor.html',
    controller: 'DoctorController'
  });

});
})(window.angular);