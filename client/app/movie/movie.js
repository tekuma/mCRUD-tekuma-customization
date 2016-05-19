'use strict';

angular.module('crudApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('movie', {
        url: '/movie',
        templateUrl: 'app/movie/movie.html',
        controller: 'MovieCtrl',
        authenticate: true,
        title: 'Movies Database'
      });
  });
