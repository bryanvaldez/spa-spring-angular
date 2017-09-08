'use strict';
angular.module('app').controller('fichaTFinalController', ['$scope', '$mdDialog', 'fichaTFinalService', function ($scope, $mdDialog, fichaTFinalService) {

        $scope.fichaTecnica = {};
        $scope.tipoEleccion = {};
        $scope.detalle = [];
        $scope.tiposAutoridad = [];

        $scope.openDocumentos = function () {
            getAll();
            getDocReglas();
        };

        $scope.downloadArchivo = function (ft) {
            window.open(C_SERVER + "/fichaTecnica/verArchivo/" + ft + "/FICHA_TÉCNICA");
        };

        $scope.close = function () {
            $mdDialog.cancel();
        };

        $scope.showPDF = function(){
            window.open(C_SERVER + "/fichaTecnica/generateFVPdf");
        };

        $scope.downloadExcel = function(){
            window.open(C_SERVER + "/fichaTecnica/downloadExcel");
        };
        
        $scope.downloadWord = function(){
            window.open(C_SERVER + "/fichaTecnica/downloadWord");
        };

        function getFichaTecnicaFinal() {
            fichaTFinalService.getFichaTecnicaFinal()
                    .then(
                            function (data) {
                                if (data.length !== 0) {
                                    $scope.tiposAutoridad = data.tiposAutoridad;
                                    $scope.fichaTecnica = data.fichaTecnica;
                                    $scope.tipoEleccion = data.tipoEleccion;
                                    $scope.detalle = data.detalleFT;
                                    $scope.periodicidad = data.periodicidad;
                                    for (var i = 0; i < $scope.detalle.length; i++) {
                                        for (var j = 0; j < $scope.tiposAutoridad.length; j++) {
                                            if ($scope.detalle[i].autoridad === $scope.tiposAutoridad[j].id) {
                                                $scope.detalle[i].descAutoridad = $scope.tiposAutoridad[j].descripcion;
                                            }
                                        }
                                    }
                                    $scope.fichaTecnica.ccpp = data.datos.CCPP;
                                    $scope.fichaTecnica.distritos = data.datos.DISTRITOS;
                                    $scope.fichaTecnica.eh = data.datos.EH;
                                    $scope.fichaTecnica.lv = data.datos.LV;
                                    $scope.fichaTecnica.mesas = data.datos.MESAS;
                                    $scope.fichaTecnica.odpes = data.datos.ODPES;
                                } else {
                                    $scope.fichaTecnica = {};
                                }
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        getFichaTecnicaFinal();
    }]);

angular.module('app').factory('fichaTFinalService', ['$http', '$q', function ($http, $q) {

        var REST_SERVICE_FT = C_SERVER + "/fichaTecnica";

        var factory = {
            getFichaTecnicaFinal: getFichaTecnicaFinal
        };

        return factory;

        function getFichaTecnicaFinal() {
            var deferred = $q.defer();
            $http.post(REST_SERVICE_FT + "/getFichaTecnicaFinal", {
                headers: {'Content-Type': undefined}
            })
                    .then(
                            function (response) {
                                deferred.resolve(response.data);
                            },
                            function (errResponse) {
                                console.log('Error while fetching Feedbacks');
                                deferred.reject(errResponse);
                            }
                    );
            return deferred.promise;
        }

    }]);
