(function () {
  'use strict';

  angular.module('myFirstApp', [])
  .controller('myFirstController', function ($scope) {
    $scope.name = "";
    $scope.totalValue=0;

    $scope.calculateNumeric = function () {
      var totalNumericValue = calculateNumericValue($scope.name);
      $scope.totalValue = totalNumericValue;
    }

    function calculateNumericValue(string) {
      var totalNumericValue = 0;
      for (var i = 0; i < string.length; i++) {
        totalNumericValue += string.charCodeAt(i);
      }
      return totalNumericValue;
    }

  });

})();
