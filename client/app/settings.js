'use strict';
(function() {
angular.module('crudApp')
.constant('Settings', {
  demo: false,
  menu: {
    pages : [
  //    {text:'Books', icon: 'book', url: 'book', authenticate: true},
      {text:'1085 Boylston', icon: 'book', url: 'book', authenticate: true},
  //    {text:'Movies', icon: 'movie', url: 'movie', authenticate: true},
      {text:'80 Winter Street', icon: 'movie', url: 'movie', authenticate: true},
//      {text:'Contacts', icon: 'contacts', url: 'contact', authenticate: true},
//      {text:'Customers', icon: 'people', url: 'customer', authenticate: true},
//      {text:'Tasks', icon: 'assignment', url: 'task', authenticate: true},
//     {text:'Documentation', icon: 'description', url: 'documentation'},
      {text:'Media Library', icon: 'photo_library', url: 'media', authenticate: true}
    ],
    auth : [
      {text:'login', icon: 'perm_identity', url: 'login'},
      {text:'signup', icon: 'input', url: 'signup'}
    ],
    admin : [
      {text:'Change Password', icon: 'settings_applications', url: 'settings'},
      {text:'logout', icon: 'logout', url: 'logout'}
    ]
  }
});
})();
