'use strict';

angular.module('app').controller('loginCtrl', ['$scope','$timeout', function ($scope, $timeout) {
    
    $scope.user = "";
    $scope.password = "";
    $scope.focusUser = false;
    $scope.showHint = true;
    $scope.filterDni = "99999999";
    
    $timeout(function () {
        $scope.focusUser = true;
    }, 100);

    $scope.virtualKey = function (ev) {
        $scope.focusUser = false;
        if ($scope.password.length <= 21) {
            
            $scope.password = $scope.password + ev;
        }
        $scope.showHint = true;
    };
    
    $scope.backspace = function () {
        $scope.password = "";// $scope.password.substr(0, $scope.password.length - 1);
        $scope.showHint = true;
    };    
    
    $scope.KeyDown = function(keyEvent) {
      if (keyEvent.which === 13)
        return false;        
    }
    
}]);
