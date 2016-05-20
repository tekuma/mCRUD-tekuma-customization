'use strict';
angular.module('crudApp')
  .controller('TaskCtrl', function ($scope) {
    $scope.options = [
      {field: 'image',dataType: 'image'},
      {field: 'name'},
      {field: 'info', noSort: true, noEdit: true},
      {field: 'category', dataType: 'select', options: ['Shopping', 'Promotions', 'SEO', 'Developments']},
      {field: 'active', dataType: 'boolean'}
    ];
  });

// 
// (function(){
//
// function TaskComponent($scope) {
//   $scope.options = [
//       {field: 'image',dataType: 'image'},
//       {field: 'name'},
//       {field: 'info', noSort: true, noEdit: true},
//       {field: 'category', dataType: 'select', options: ['Shopping', 'Promotions', 'SEO', 'Developments']},
//       {field: 'active', dataType: 'boolean'}
//     ];
//
// }
//
// angular.module('crudApp')
//   .component('task', {
//     templateUrl: 'app/task/task.html',
//     controller: TaskComponent
//   });
//
// // $scope.options = [
// //     {field: 'image',dataType: 'image'},
// //     {field: 'name'},
// //     {field: 'info', noSort: true, noEdit: true},
// //     {field: 'category', dataType: 'select', options: ['Shopping', 'Promotions', 'SEO', 'Developments']},
// //     {field: 'active', dataType: 'boolean'}
// //   ];
//
//
// })();
