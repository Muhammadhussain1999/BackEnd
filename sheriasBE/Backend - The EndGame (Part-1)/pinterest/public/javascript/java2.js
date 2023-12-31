angular.module("tabApp", []).controller("TabController", [
  "$scope",
  function ($scope) {
    $scope.tab = 1;

    $scope.setTab = function (newTab) {
      $scope.tab = newTab;
    };

    $scope.isSet = function (tabNum) {
      return $scope.tab === tabNum;
    };
  },
]);
