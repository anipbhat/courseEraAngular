(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchList="";
    $scope.tooMuch="";

    $scope.CheckIfTooMuch = function () {
      var lunchList = $scope.lunchList;
      var length = lunchList.split(',').length;
      console.log(lunchList);
      console.log(length);
      if (lunchList == "" ) {
        $scope.tooMuch = "Please enter data first"
      } else if (length >=1 && length <= 3 ){
        $scope.tooMuch = "Enjoy!"
      } else {
        $scope.tooMuch = "Too much!"
      };

    }

  };

})();
