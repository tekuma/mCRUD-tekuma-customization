'use strict';

angular.module('crudApp')
  .controller('MediaCtrl', function ($scope, Upload, $timeout, $http, socket, $mdDialog, Settings, Toast) {

  $scope.imageDetails = function(img) {
  $mdDialog.show({
    templateUrl: '/app/media/image-details.html',
    controller: function($scope, $mdDialog) {
        $scope.img = img;
        $scope.delete = function(img){
          if(Settings.demo){
            Toast.show({
              type: 'error',
              text: 'Delete not allowed in demo mode'
            });
            return;
          }
          var confirm = $mdDialog.confirm()
            .title('Would you like to delete the media permanently?')
            .textContent('Media once deleted can not be undone.')
            .ariaLabel('Delete Media')
            .ok('Please do it!')
            .cancel('Cancel');
          $mdDialog.show(confirm).then(function() {
            $http.delete('/api/media/' + img._id).then(function() {
              $mdDialog.hide();
            },handleError);
          }, function() {
            $mdDialog.hide();
          });
        }
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    }
  }).then(function(answer) {
    // $scope.alert = 'You said the information was "' + answer + '".';
  }, function() {
    // $scope.alert = 'You cancelled the dialog.';
  });
  }
    // Start query the database for the table
    $scope.loading = true;
    $http.get('/api/media/').then(function(res) {
      $scope.loading = false;
      $scope.data = res.data;
      socket.syncUpdates('media', $scope.data);
    }, handleError);

    function handleError(error) { // error handler
        $scope.loading = false;
        if(error.status === 403){
          Toast.show({
            type: 'error',
            text: 'Not authorised to make changes.'
          });
        }
        else{
          Toast.show({
            type: 'error',
            text: error.status
          });
        }
    }
    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });
    $scope.$watch('file', function () {
        if ($scope.file != null) {
            $scope.files = [$scope.file];
        }
    });
    $scope.log = '';

    $scope.upload = function (files) {
        if(Settings.demo){
            Toast.show({
              type: 'error',
              text: 'Uploading not allowed in demo mode'
            });
            return;
        }
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              if (!file.$error) {
                Upload.upload({
                    url: 'api/media',
                    data: {
                      username: $scope.username,
                      file: file
                    }
                }).then(function (resp) {
                    $timeout(function() {
                        $scope.log = 'file: ' +
                        resp.config.data.file.name +
                        ', Response: ' + JSON.stringify(resp.data) +
                        '\n' + $scope.log;
                        $scope.result = resp.data;
                    });
                }, function (response) {
                    if (response.status > 0) {
                        $scope.errorMsg = response.status + ': ' + response.data;
                    }
                }, function (evt) {
                    var progressPercentage = parseInt(100.0 *
                    		evt.loaded / evt.total);
                    $scope.log = 'progress: ' + progressPercentage +
                    	'% ' + evt.config.data.file.name + '\n' +
                      $scope.log;
                    $scope.progress =
                          Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                });
              }
            }
        }
    };
});
