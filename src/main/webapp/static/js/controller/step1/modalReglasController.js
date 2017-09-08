'use strict';
angular.module('app').controller('modalReglasController', ['$scope', '$http', '$mdDialog', 'ReglasService', '$timeout', function ($scope, $http, $mdDialog, ReglasService, $timeout) {

        $scope.tiposSolucion = [];
        $scope.reglas = [];

        function getAllTipoSolucion() {
            ReglasService.getAllTipoSolucion()
                    .then(
                            function (data) {
                                $scope.tiposSolucion = data;
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function getAllRegla() {
            ReglasService.getAllRegla()
                    .then(
                            function (data) {
                                $scope.reglas = data;
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }
       
        getAllTipoSolucion();
        getAllRegla();      

        $scope.close = function () {
            $mdDialog.cancel();
        };

    }]);