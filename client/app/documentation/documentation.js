'use strict';

angular.module('crudApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('documentation', {
        url: '/documentation',
        templateUrl: 'app/documentation/documentation.html',
        controller: 'DocumentationCtrl'
      })
      .state('highlight', {
        url: '/highlight',
        templateUrl: 'app/documentation/highlight.html',
        controller: 'DocumentationCtrl'
      });
  });
