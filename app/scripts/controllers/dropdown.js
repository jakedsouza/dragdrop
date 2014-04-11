'use strict';

angular.module('dragdropApp')
  .controller('DropdownctrlCtrl', function ($scope) {
    $scope.items = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
