'use strict';
angular.module('app').controller('documentosController', ['$scope', '$mdDialog', 'DocumentosService', function ($scope, $mdDialog, DocumentosService) {

        $scope.fichasTecnicas = [];
        $scope.docReglas = [];

        $scope.openDocumentos = function () {
            getAll();
            getDocReglas();
        };

        $scope.downloadArchivo = function (opcion, ft) {   
            var title= (opcion === "reglas") ? "REGLAS" : "FICHA_TÉCNICA";
            
            window.open(C_SERVER + "/" + opcion + "/verArchivo/" + ft + "/"+title).document.title = "New Page";            
        };

        $scope.close = function () {
            $mdDialog.cancel();
        };

        function getAll() {
            DocumentosService.getAll()
                    .then(
                            function (data) {
                                if (data.length !== 0) {
                                    $scope.fichasTecnicas = data;
                                } else {
                                    $scope.fichasTecnicas = [];
                                }
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function getDocReglas() {
            DocumentosService.getDocReglas()
                    .then(
                            function (data) {
                                if (data.length !== 0) {
                                    $scope.docReglas = data;
                                } else {
                                    $scope.docReglas = [];
                                }
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            });
        }

        $scope.openDocumentos();
    }]);

angular.module('app').factory('DocumentosService', ['$http', '$q', function ($http, $q) {

        var REST_SERVICE_FT = C_SERVER + "/fichaTecnica";
        var REST_SERVICE_RG = C_SERVER + "/reglas";

        var factory = {
            getAll: getAll,
            getDocReglas: getDocReglas
        };

        return factory;

        function getAll() {
            var deferred = $q.defer();
            $http.get(REST_SERVICE_FT + "/getAllFichaTecnica")
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

        function getDocReglas() {
            var deferred = $q.defer();
            $http.get(REST_SERVICE_RG + "/getDocumento")
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
