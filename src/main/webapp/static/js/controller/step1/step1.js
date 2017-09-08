'use strict';
app.controller('step1Ctrl', ['$scope','showReglas','showFicha', function ($scope,showReglas,showFicha) {
        
        $scope.showReglas=showReglas;
        $scope.showFicha=showFicha;
    }]);