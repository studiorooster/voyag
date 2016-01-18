'use strict';

angular.module('voyagApp')
    .controller('MainController', function ($scope, $location) {
      $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
      };
    });
