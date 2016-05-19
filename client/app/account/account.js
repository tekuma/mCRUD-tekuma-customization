'use strict';

angular.module('crudApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login?referrer',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('logout', {
        url: '/logout?referrer',
        referrer: '/',
        template: '',
        controller: function($state, Auth) {
          Auth.logout();
          $state.go('login');
        }
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupController',
        controllerAs: 'vm'
      })
      .state('forgot', {
        url: '/forgot?email',
        templateUrl: 'app/account/password/forgot.html',
        controller: 'PasswordController',
        controllerAs: 'vm'
      })
      .state('reset', {
        url: '/reset/:token',
        templateUrl: 'app/account/password/reset.html',
        controller: 'PasswordController',
        controllerAs: 'vm'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'vm',
        authenticate: true
      });
  })
  .run(function($rootScope, Auth) {
    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, current) {
      if (next.name === 'logout' && current && current.name && !current.authenticate) {
        next.referrer = current.name;
      }
    });

    $rootScope.$on('$stateChangeSuccess', function (evt, toState) {
      if(toState.title){
        window.document.title = toState.title + ' - Material CRUD';
      }else if(toState.name != 'crud-table'){
        var input = toState.name;
        input = input.replace(/([A-Z])/g, ' $1');
        input = input[0].toUpperCase() + input.slice(1);
        window.document.title = input + ' - Material CRUD';
      }
    });
  });
