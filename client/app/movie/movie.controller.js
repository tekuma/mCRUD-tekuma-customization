'use strict';

angular.module('crudApp')
  .controller('MovieCtrl', function ($scope) {
    $scope.options = [
      {field: 'image', title: 'Poster', dataType: 'image'},
      {field: 'name', heading: 'Title', noEdit: true},
    //  {field: 'unit type'},
    //  {field: 'rating', dataType: 'number'},
      {field: 'unittype', title: 'Unit Type', dataType: 'select', options: ['Studio', '1 Bedroom', '2 Bedroom', '3+ Bedroom'], noSort: true},
      {field: 'language', dataType: 'select', options: ['English', 'Hindi', 'French']},
      {field: 'releaseDate', dataType: 'date'},
      {field: 'active', heading: 'Status', dataType: 'boolean'}
    ];
  });
