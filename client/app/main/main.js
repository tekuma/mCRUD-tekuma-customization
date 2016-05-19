'use strict';

angular.module('crudApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        title: 'AngularJS CRUD Example with Material Design'
      });
  });
