'use strict';

class NavbarController {
  constructor(ToggleComponent, Auth, $attrs, Settings, $scope,$mdMedia) {

    var vm = this;
    vm.showDropdownMenu = false;
    vm.isLoggedIn = Auth.isLoggedIn;
    vm.isAdmin = Auth.isAdmin;
    vm.currentUser = Auth.getCurrentUser();
    $scope.$watch(function() { return $mdMedia('xs'); }, function(xs) {
      vm.smallScreen = xs;
    });
    vm.menu = Settings.menu;

    vm.toggleLeft = function(){
      ToggleComponent('left').open();
    };
    var originatorEv;
    vm.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
    vm.leftMenu = ($attrs.leftmenu === 'true');
  }
}

angular.module('crudApp')
  .controller('NavbarController', NavbarController);
