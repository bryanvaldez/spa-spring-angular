'use strict';

angular.module('app').constant('OnpeHeaderConst', {
    REST_SERVICE_HEADER: C_SERVER + '/header/'
});

angular.module('app').controller('HeaderController', ['$scope', 'OnpeHeaderConst', '$mdDialog', '$mdSidenav', '$rootScope', 'HeaderService', 'Idle', '$window', function ($scope, OnpeHeaderConst, $mdDialog, $mdSidenav, $rootScope, HeaderService, Idle, $window) {

        Idle.watch();

        $scope.$on('IdleTimeout', function () {
            $window.location.href = C_SERVER + '/logout';
        });

        var self = this;
        self.proceso = {
            nombre: '',
            estado: 0,
            codigo: 0
        };


        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');
        function buildToggler(componentId) {
            return function () {
                $mdSidenav(componentId).toggle();
            };
        }

        $rootScope.$on('StatusOption', function (event, option) {
            $scope.view11 = false;
            findOptions();
            if (option.N_ORDEN == 13) {
                $scope.view11 = true;
                fetchProcess();
            }
        });

        $scope.openModalDocumentos = function (ev) {
            $mdDialog.show({
                templateUrl: C_SERVER + '/reglas/openDocumentos',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: false,
                fullscreen: false,
                bindToController: true,
                escapeToClose: true,
                scope: $scope,
                preserveScope: true
            }).then(function (answer) {

            }, function () {

            });
        };

        $scope.openModalFTFinal = function (ev) {
            $mdDialog.show({
                templateUrl: C_SERVER + '/fichaTecnica/openFichaTecnicaFinal',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: false,
                fullscreen: false,
                bindToController: true,
                escapeToClose: true,
                scope: $scope,
                preserveScope: true
            }).then(function (answer) {

            }, function () {

            });
        };

//        $scope.openHeaderModal = function (page, ev) {
//            $mdDialog.show({
//                targetEvent: ev,
//                templateUrl: OnpeHeaderConst.REST_SERVICE_HEADER + page,
//                controller: 'onpeComposer',
//                controllerAs: 'self'
//            });
//        };

        $scope.openHeaderModal = function(ev){
            $scope.controls = [{}];
            $mdDialog.show({
                templateUrl: OnpeHeaderConst.REST_SERVICE_HEADER + 'retroceder',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: false,
                bindToController: true,
                escapeToClose: true,
                scope: $scope,
                preserveScope: true,
                autoWrap: false
            }).then(function (answer) {

            }, function () {

            });
        };

        function findOptions() {
            HeaderService.findOptions()
                    .then(function (data) {
                        $scope.options = data;
                        $scope.optionsTemp = data;
                    }
                    );
        }
        ;

        $scope.retroceder = function (option) {
            $scope.toggleLeft();
            if (option != 0 && option != undefined) {
                var confirm = $mdDialog.confirm()
                        .title('Retroceder.')
                        .textContent('¿Desea restablecer la información hasta esta opción?').targetEvent()
                        .ok('Si').cancel('No');
                $mdDialog.show(confirm).then(function () {
                    execute(option);
                }, function () {
                });
            }
        };
        function execute(data) {
            $scope.execute = {type: "RECOVERY", data: data};
            $scope.$emit('executeProcedure', $scope.execute);
        }


        $scope.openModalGaleriaSoluciones = function (ev) {
            $mdDialog.show({
                templateUrl: C_SERVER + '/reglas/openTipoSolucion',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: false,
                fullscreen: false,
                bindToController: true,
                escapeToClose: true,
                scope: $scope,
                preserveScope: true
            }).then(function (answer) {
            }, function () {
            });
        };

        $scope.openModalConfiguracion = function (ev) {
            $mdDialog.show({
                templateUrl: C_SERVER + '/reglas/openModalConfig',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: false,
                fullscreen: false,
                bindToController: true,
                escapeToClose: true,
                scope: $scope,
                preserveScope: true
            }).then(function (answer) {
            }, function () {
            });
        };

        $scope.openFichaTecnicaEstimada = function () {
            window.open(C_SERVER + "/fichaTecnica/generateFVPdf");
        };

        $scope.openModalReglas = function (ev) {
            $mdDialog.show({
                templateUrl: C_SERVER + '/reglas/openModalReglas',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: false,
                fullscreen: false,
                bindToController: true,
                escapeToClose: true,
                scope: $scope,
                preserveScope: true
            }).then(function (answer) {
            }, function () {
            });
        };

        $scope.close = function () {
            $mdDialog.cancel();
        };

        function fetchProcess() {
            HeaderService.fetchProcess()
                    .then(
                            function (data) {
                                self.proceso.nombre = data.PROCESO;
                                self.proceso.estado = data.ESTADO_PROCESO;
                                PROCESO_STATUS = data.ESTADO_PROCESO;
                                self.proceso.codigo = data.CODIGO_PROCESO;
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );

        }

        function showMenu() {
            $scope.divRepor = document.getElementById("divReportes");
        }
        showMenu();
        fetchProcess();
    }]);

angular.module('app').factory('HeaderService', ['$http', '$q', function ($http, $q) {

        var REST_SERVICE_MODULE = C_SERVER + '/proceso/';
        var REST_SERVICE_HEADER = C_SERVER + '/header/';

        var factory = {
            fetchProcess: fetchProcess,
            findOptions: findOptions,
            closeBrowser: closeBrowser
        };

        return factory;

        function fetchProcess() {
            var deferred = $q.defer();
            $http.get(REST_SERVICE_MODULE + "getStatus")
                    .then(
                            function (response) {
                                deferred.resolve(response.data);
                            },
                            function (errResponse) {
                                console.log('Error while fetching Process');
                                deferred.reject(errResponse);
                            }
                    );
            return deferred.promise;
        }
        function findOptions() {
            var deferred = $q.defer();
            $http.get(REST_SERVICE_HEADER + 'options')
                    .then(
                            function (response) {
                                deferred.resolve(response.data);
                            },
                            function (errResponse) {
                                console.log('Error while fetching Process');
                                deferred.reject(errResponse);
                            }
                    );
            return deferred.promise;
        }

        function closeBrowser() {
            var deferred = $q.defer();
            $http.get(C_SERVER + 'logout')
                    .then(
                            function (response) {
                                deferred.resolve(response.data);
                            },
                            function (errResponse) {
                                console.log('Error while fetching Process');
                                deferred.reject(errResponse);
                            }
                    );
            return deferred.promise;
        }


    }]);