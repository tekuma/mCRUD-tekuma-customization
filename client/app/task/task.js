'use strict';

// angular.module('crudApp')
//   .config(function ($stateProvider) {
//     $stateProvider
//       .state('task', {
//         url: '/task',
//         template: '<task></task>'
//       });
//   });

// angular.module('crudApp')
//   .config(function ($stateProvider) {
//     $stateProvider
//     .state('task', {
//       url: '/task',
//       templateUrl: 'app/task/task.html',
//       controller: 'TaskCtrl',
//       title: 'Easy Task Manager Single Page APP' });
//   });

angular.module('crudApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('task', {
        url: '/task',
        templateUrl: 'app/task/task.html',
        controller: 'TaskCtrl',
        title: 'Easy Task Manager Single Page APP',
        authenticate: true });
      });
