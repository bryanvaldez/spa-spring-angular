'use strict';
angular.module('app').controller('configuracionController', ['$scope', 'GeneralService', function ($scope, GeneralService) {
        var self = this;        
        self.procesoStatus = PROCESO_STATUS;
        $scope.config = [
            {
                id: 0,
                descripcion: '',
                dato: 0,
                cantColumnas: 0,
                columRpt: ''
            },
            {
                id: 0,
                descripcion: '',
                dato: {},
                cantColumnas: 0,
                columRpt: ''
            },
            {
                id: 0,
                descripcion: '',
                dato: {},
                cantColumnas: 0,
                columRpt: ''
            }
        ];
        $scope.rangoEdad = [];
        $scope.isSaving = false;
        function saveConfig() {                        
            var fd = new FormData();
            fd.append('dataConfig', angular.toJson($scope.config));
            GeneralService.save(fd)
                    .then(
                            function (data) {
                                if (data.success) {
                                    $scope.$emit('StepNext', true)
                                } else {
                                    console.log(data);
                                }
                            },
                            function (errResponse) {
                                console.log("Ocurrió un error.");
                                $scope.isSaving = false;
                            }
                    );
        }

        function getItems() {
            GeneralService.getItems()
                    .then(
                            function (data) {
                                if (data.length >= 3) {
                                    $scope.config[0].id = data[0].id;
                                    $scope.config[0].descripcion = data[0].descripcion;
                                    if (data[0].dato !== null) {
                                        $scope.config[0].dato = parseInt(data[0].dato);
                                    }
                                    $scope.config[0].cantColumnas = data[0].cantColumnas;
                                    $scope.config[0].columRpt = data[0].columRpt;

                                    $scope.config[1].id = data[1].id;
                                    $scope.config[1].descripcion = data[1].descripcion;
                                    var info1 = JSON.parse(data[1].dato);
                                    $scope.config[1].dato = info1;
                                    $scope.config[1].cantColumnas = data[1].cantColumnas;
                                    $scope.config[1].columRpt = data[1].columRpt;

                                    $scope.config[2].id = data[2].id;
                                    $scope.config[2].descripcion = data[2].descripcion;
                                    var info2 = JSON.parse(data[2].dato);
                                    $scope.config[2].dato = info2;
                                    for (var i = 0; i < $scope.config[2].dato.length; i++) {
                                        if ($scope.config[2].dato[i].valor === "0") {
                                            $scope.config[2].dato[i].valor = '';
                                        }
                                    }
                                    $scope.config[2].cantColumnas = data[2].cantColumnas;
                                    $scope.config[2].columRpt = data[2].columRpt;
                                }
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function getRangoEdad() {
            GeneralService.getRangoEdad()
                    .then(
                            function (data) {
                                $scope.rangoEdad = data;
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function validProcesoActivo() {
            GeneralService.validProces()
                    .then(
                            function (data) {                                
                                saveConfig();
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        $scope.checkC2 = function (item) {
            if (item.estado === 1) {
                item.estado = 0;
            } else {
                item.estado = 1;
            }
        };

        $scope.submitConfig = function () {
            $scope.isSaving = true;
            saveConfig();        
        };

        $scope.changeCantidadElectores = function (index, cantidad) {

            if (cantidad === "0") {
                $scope.config[2].dato[index].valor = '';
            }
        };

        getItems();
        getRangoEdad();
    }]);