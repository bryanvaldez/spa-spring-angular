'use strict';

angular.module('app').constant('OnpeModalConst', {
});

angular.module('app').controller('modalController', ['$scope', 'OnpeModalConst', '$mdDialog', 'ReporteService', 'modalId', function ($scope, OnpeModalConst, $mdDialog, ReporteService, modalId) {

        var self = this;
        $scope.dataResumen = [];
        $scope.dataResumenPeru = [];
        $scope.dataResumenExtranjeros = [];
        $scope.dataTipoSolucion = [];
        $scope.totalPE = [];
        $scope.totalEX = [];
        $scope.totalPEEX = [];
        $scope.sumDistritosPE = 0;
        $scope.sumElectoresPE = 0;
        $scope.sumLocalesPE = 0;
        $scope.sumMesasPE = 0;
        $scope.sumCiudadesEX = 0;
        $scope.sumElectoresEX = 0;
        $scope.sumLocalesEX = 0;
        $scope.sumMesasEX = 0;
        $scope.getListaDistritosAsignados = [];
        $scope.getListaDistritosFaltantes = [];

        if (modalId === 1) {
            getElectoresAsignar();
            getResumen();
        } else if (modalId === 2) {           
            getListaDistritosAsignados();
            getListaDistritosFaltantes();
        }
        
        function getListaDistritosAsignados() {
            ReporteService.getListaDistritosAsignados()
                    .then(
                            function (data) {
                                $scope.getListaDistritosAsignados = data;
                            },
                            function (errResponse) {
                                console.error('Error while Elector Vip Adan:' + errResponse);
                            }
                    );
        }
        
        function getListaDistritosFaltantes() {
            ReporteService.getListaDistritosFaltantes()
                    .then(
                            function (data) {
                                $scope.getListaDistritosFaltantes = data;
                            },
                            function (errResponse) {
                                console.error('Error while Elector Vip Adan:' + errResponse);
                            }
                    );
        }

        $scope.close = function () {
            $mdDialog.cancel();
        };

        $scope.sumar = function (contador, cantidad) {
            contador += cantidad;
        };

        $scope.verExcel = function () {
          
            window.open(C_SERVER + "/reporte/getListaDistritosExcel/");
            $mdDialog.cancel();
        };
        
         $scope.verExcelAsignados = function () {
          
            window.open(C_SERVER + "/reporte/getListaDistritosAsignadosExcel/");
            $mdDialog.cancel();
        };
        
         $scope.verExcelFaltantes = function () {
          
            window.open(C_SERVER + "/reporte/getListaDistritosFaltantesExcel/");
            $mdDialog.cancel();
        };

        function getResumen() {
            ReporteService.getResumen()
                    .then(
                            function (data) {
                                $scope.dataResumen = data;
                                for (var h = 0; h < $scope.dataResumen.length; h++)
                                {
                                    if ($scope.dataResumen[h].C_AMBITO === 'PE')
                                    {
                                        $scope.dataResumenPeru.push({
                                            solucion: $scope.dataResumen[h].C_SOLUCION,
                                            distritos: $scope.dataResumen[h].N_UBIGEO,
                                            electores: $scope.dataResumen[h].N_ELECTORES,
                                            locales: $scope.dataResumen[h].N_LOCALES,
                                            mesas: $scope.dataResumen[h].N_MESAS
                                        });
                                    }
                                    else
                                    {
                                        $scope.dataResumenExtranjeros.push({
                                            solucion: $scope.dataResumen[h].C_SOLUCION,
                                            ciudades: $scope.dataResumen[h].N_UBIGEO,
                                            electores: $scope.dataResumen[h].N_ELECTORES,
                                            locales: $scope.dataResumen[h].N_LOCALES,
                                            mesas: $scope.dataResumen[h].N_MESAS
                                        });
                                    }
                                }

                                if ($scope.dataResumenPeru.length > 1)
                                {
                                    for (var h = 0; h < $scope.dataResumenPeru.length; h++) {
                                        $scope.sumDistritosPE += $scope.dataResumenPeru[h].distritos;
                                        $scope.sumElectoresPE += $scope.dataResumenPeru[h].electores;
                                        $scope.sumLocalesPE += $scope.dataResumenPeru[h].locales;
                                        $scope.sumMesasPE += $scope.dataResumenPeru[h].mesas;
                                    }
                                }
                                if ($scope.dataResumenExtranjeros.length > 1)
                                {
                                    for (var h = 0; h < $scope.dataResumenExtranjeros.length; h++) {
                                        $scope.sumCiudadesEX += $scope.dataResumenExtranjeros[h].ciudades;
                                        $scope.sumElectoresEX += $scope.dataResumenExtranjeros[h].electores;
                                        $scope.sumLocalesEX += $scope.dataResumenExtranjeros[h].locales;
                                        $scope.sumMesasEX += $scope.dataResumenExtranjeros[h].mesas;
                                    }
                                }
                            },
                            function (errResponse) {
                                console.error('Error while Elector Vip Adan:' + errResponse);
                            }
                    );
        }

        function getElectoresAsignar() {
            ReporteService.getElectoresAsignar()
                    .then(
                            function (data) {
                                $scope.ElectoresAsignar = data.dataElectores;
                                $scope.fechaVersion = data.fechaVersion;
                            },
                            function (errResponse) {
                                console.error('Error while Elector Vip Adan:' + errResponse);
                            }
                    );
        }

    }]);
