'use strict';

angular.module('crudApp')
  .controller('MovieCtrl', function ($scope) {
    $scope.options = [
      {field: 'image', title: 'Poster', dataType: 'image'},
      {field: 'name', heading: 'Title', noEdit: true},
      {field: 'production'},
      {field: 'rating', dataType: 'number'},
      {field: 'genre', dataType: 'select', options: ['Action', 'Comedy', 'Drama', 'Romance', 'SiFi', 'Thriller'], noSort: true},
      {field: 'language', dataType: 'select', options: ['English', 'Hindi', 'French']},
      {field: 'releaseDate', dataType: 'date'},
      {field: 'active', heading: 'Status', dataType: 'boolean'}
    ];
  });
