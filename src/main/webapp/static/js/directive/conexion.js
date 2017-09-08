'use strict';
angular.module('app').constant('OnpeConexionConst', {
    REST_SERVICE_CONNECTION: C_SERVER + '/conexion/',
    REST_SERVICE_CONNECTION_TEST: C_SERVER + '/conexion/test/',
    REST_SERVICE_PROCESO: C_SERVER + '/proceso/',
    STATUS_CONNECTION_FILE_FALSE: 0,
    STATUS_CONNECTION_FILE_TRUE: 1,
    STATUS_CONNECTION_RESPONSE_PENDING: 2,
    STATUS_CONNECTION_RESPONSE_FALSE: 3,
    STATUS_CONNECTION_RESPONSE_TRUE: 4,
    STATUS_CONNECTION_RESPONSE_DUPLICATE: 5,
    STATUS_PROCESS_INIT: 1,
    STATUS_PROCESS_CREATE: 2,
    STATUS_PROCESS_UPDATE: 3,
});

angular.module('app').controller('onpeConexion', ['$scope', 'OnpeConexionConst', 'OnpeConexionService', '$timeout', '$mdDialog', function ($scope, OnpeConexionConst, OnpeConexionService, $timeout, $mdDialog) {
        var vm = this;

        vm.constant = OnpeConexionConst;
        vm.date = new Date();

        initConnection();
        initProceso();
        initFilter();
        fecthAllProcess();

        vm.procesos = [];
        vm.action = vm.constant.STATUS_PROCESS_INIT;

        vm.enableProcess = enableProcess;

        vm.test = testConnection;
        vm.submit = submit;
        vm.add = addProcces;
        vm.edit = editProcess;
        vm.close = closeProcess;
        vm.change = fileChange;
        vm.clearMessage = clearMessage;
        vm.filterType = filterType;
        vm.isSaving = false;
        $scope.checkTodos = false;

        $scope.cambiarChecks = function () {
            if ($scope.checkTodos)
            {
                $scope.checkTodos = false;
                for (var i = 0; i < vm.filter.length; i++)
                {
                    i === 0 ? vm.filter[i].on = true : vm.filter[i].on = false;
                }
            }
            else {
                $scope.checkTodos = true;
                for (var i = 0; i < vm.filter.length; i++)
                {
                    vm.filter[i].on = true;
                }
            }
        };

        $scope.changeActionTodos = function (data) {
            switch (data.on) {
                case true:
                    for (var i = 0; i < vm.filter.length; i++)
                    {
                        if (vm.filter[i].on === true)
                        {
                            $scope.checkTodos = false;
                            break;
                        }
                    }
                    break;
                case false:
                    for (var i = 0; i < vm.filter.length; i++)
                    {
                        $scope.checkTodos = true;
                        if (vm.filter[i].on === false && data.value - 1 !== i)
                        {
                            $scope.checkTodos = false;
                            break;
                        }
                    }
                    break;
            }
        };

        function empezarActivos() {
            $scope.checkTodos = false;
            for (var i = 0; i < vm.filter.length; i++)
            {
                i === 0 ? vm.filter[i].on = true : vm.filter[i].on = false;
            }
        }

        function controller(status) {
            vm.action = status;
        }
        function fileChange(data) {
            $scope.$watch('data', function (newValue, oldValue) {
                if (newValue) {

                }
                if (data !== undefined && data.length > 0) {
                    if (data[0].lfFileName.substring(data[0].lfFileName.length - 5, data[0].lfFileName.length) === '.adan')
                    {
                        if (data[0].lfFile.size < 100) {

                            vm.connection.file = data[0].lfFile;
                            vm.connection.status = OnpeConexionConst.STATUS_CONNECTION_FILE_TRUE;
                        }
                        else
                        {
                            vm.connection.message = "Tamaño máximo: 1Kb.";
                            vm.connection.status = OnpeConexionConst.STATUS_CONNECTION_RESPONSE_FALSE;
                        }
                    }
                    else
                    {
                        vm.connection.message = "Tipo de extensión no válido.";
                        vm.connection.status = OnpeConexionConst.STATUS_CONNECTION_RESPONSE_FALSE;
                    }
                }
                else {
                    initConnection();
                    vm.proceso.C_CONEXION = "";
                }
            }, true);
        }

        function initConnection() {
            vm.connection = {
                file: null,
                limit: false,
                status: OnpeConexionConst.STATUS_CONNECTION_FILE_FALSE,
                message: '',
                creadential: ''
            };
        }
        function initProceso() {
            vm.proceso = {
                N_PROCESO_PK: null,
                C_NOMBRE: '',
                C_ALIAS: '',
                N_ESTADO: null,
                C_CONEXION: ''
            };
        }
        function initFilter() {
            vm.filter = [
                {name: "Activos", value: 1, on: true},
                {name: "Suspendidos", value: 2, on: false},
                {name: "Cancelados", value: 3, on: false},
                {name: "Finalizados", value: 4, on: false}
            ];
        }

        function submit() {
            vm.isSaving = true;
            if (vm.action == vm.constant.STATUS_PROCESS_CREATE) {
                vm.proceso.N_ESTADO = 1;
                saveProcess();
                empezarActivos();
            }
            if (vm.action == vm.constant.STATUS_PROCESS_UPDATE) {
                saveProcess();
            }
        }
        function saveProcess() {
            OnpeConexionService.saveProcess(vm.proceso)
                    .then(
                            function (data) {
                                vm.isSaving = false;
                                validateResponseProcess(data);
                            },
                            function (errResponse) {
                                console.error('Error while creating Process.');
                            }
                    );
        }
        function testConnection() {
            vm.connection.status = OnpeConexionConst.STATUS_CONNECTION_RESPONSE_PENDING;
            OnpeConexionService.testConnection(vm.connection.file)
                    .then(
                            function (data) {
                                $timeout(function () {
                                    validateResponseTest(data);
                                }, 1000);
                            },
                            function (errResponse) {
                                console.error('Error while testing Connection.');
                            }
                    );
        }

        function addProcces() {
            controller(vm.constant.STATUS_PROCESS_CREATE);
            if (vm.procesos == '') {
                $scope.formtArray = [];
                vm.procesos = angular.copy($scope.formtArray);
            }
            if (!vm.connection.limit) {
                $scope.formtArray = [];
                vm.procesos.push({});
                vm.connection.limit = true;
            }
        }
        function closeProcess(data) {
            if (vm.action == vm.constant.STATUS_PROCESS_CREATE) {
                vm.procesos.splice(-1, 1);
                vm.connection.limit = false;
            }
            initProceso();
            initConnection();
            controller(vm.constant.STATUS_PROCESS_INIT);
        }
        function editProcess(data) {

            OnpeConexionService.getUsuario(data.N_PROCESO_PK)
                    .then(function (d) {
                        if (d.success) {
                            controller(vm.constant.STATUS_PROCESS_UPDATE);
                            vm.proceso = angular.copy(data);
                        } else {
                            var alert = $mdDialog.alert({
                                title: 'Editar Proceso.',
                                textContent: d.message,
                                ok: 'ACEPTAR'
                            });
                            $mdDialog.show(alert).finally(function () {
                                alert = undefined;
                            });
                        }
                    }, function (errResponse) {
                        console.error('Error while enable connection');
                    });


        }

        function validateResponseTest(data) {
            if (data.success) {
                vm.proceso.C_CONEXION = data.credential;
                vm.connection.message = data.message;
                vm.connection.status = OnpeConexionConst.STATUS_CONNECTION_RESPONSE_TRUE;
            } else {
                vm.connection.message = data.message;
                vm.connection.status = OnpeConexionConst.STATUS_CONNECTION_RESPONSE_FALSE;
            }
        }
        function validateResponseProcess(data) {
            if (data.success) {
                controller(vm.constant.STATUS_PROCESS_INIT);
                initConnection();
                initProceso();
                fecthAllProcess();
            } else {
                vm.connection.message = data.message;
                vm.connection.status = OnpeConexionConst.STATUS_CONNECTION_RESPONSE_DUPLICATE;
                vm.connection.file = null;
                vm.connection.tipoM = data.tipo;
            }
        }

        function clearMessage() {
            vm.connection.message = '';
            if (vm.connection.status === OnpeConexionConst.STATUS_CONNECTION_RESPONSE_DUPLICATE) {
                vm.connection.status = OnpeConexionConst.STATUS_CONNECTION_RESPONSE_TRUE;
            }
        }

        function clearInputFile() {
            var inpuFileInsignia = document.getElementById("fileConexion");// angular.element("fileLogo");                
            var input1 = inpuFileInsignia.getElementsByClassName("lf-ng-md-file-input-button-remove");
            $timeout(function () {
                input1[0].children[1].click();
            }, 0);
        }
        function filterType(data) {
            var a = null;
            for (a in vm.filter) {
                var t = vm.filter[a];
                if ((t.on && data.N_ESTADO == t.value) || !data.N_ESTADO) {
                    return true;
                }
            }
        }

        function fecthAllProcess() {
            OnpeConexionService.fecthAllProcess()
                    .then(function (d) {
                        vm.procesos = d;
                    }, function (errResponse) {
                        console.error('Error while fetching Process');
                    });
        }


        function enableProcess(id) {
            OnpeConexionService.enableProcess(id)
                    .then(function (d) {
                        loadStep(d, id);
                    }, function (errResponse) {
                        console.error('Error while enable connection');
                    });
        }


        function fetchAllConnections() {
            OnpeConexionService.fecthAllConnections()
                    .then(function (d) {
                    }, function (errResponse) {
                        console.error('Error while fetching Process');
                    });
        }

        function loadStep(d, id) {
            if (d.success) {
                window.location = C_SERVER + "/dashboard/";
            } else {

                var confirm = $mdDialog.confirm()
                        .title('Proceso.')
                        .textContent(d.message).targetEvent()
                        .ok('Si').cancel('No');
                $mdDialog.show(confirm).then(function () {
                    loadProcess(id);
                }, function () {
                });

//                var alert = $mdDialog.alert({
//                    title: 'Proceso.',
//                    textContent: d.message,
//                    ok: 'ACEPTAR'
//                });
//                $mdDialog.show(alert).finally(function () {
//                    alert = undefined;
//                });                                
            }
        }

        function loadProcess(id) {
            OnpeConexionService.loadProcess(id)
                    .then(function (d) {
                        loadStep2(d.success);
                    }, function (errResponse) {
                        console.error('Error while enable connection');
                    });
        }

        function loadStep2(status) {
            console.log(status);
            if (status) {
                window.location = C_SERVER + "/dashboard/";
            }
        }
    }]);

angular.module('app').factory('OnpeConexionService', ['$http', 'OnpeConexionConst', '$q', function ($http, OnpeConexionConst, $q) {

        var REST_SERVICE_CONNECTION_TEST = OnpeConexionConst.REST_SERVICE_CONNECTION_TEST;
        var REST_SERVICE_CONNECTION = OnpeConexionConst.REST_SERVICE_CONNECTION;
        var REST_SERVICE_PROCESO = OnpeConexionConst.REST_SERVICE_PROCESO;

        var factory = {
            testConnection: testConnection,
            saveConnection: saveConnection,
            saveProcess: saveProcess,
            fecthAllProcess: fecthAllProcess,
            fecthAllConnections: fecthAllConnections,
            enableProcess: enableProcess,
            loadProcess: loadProcess,
            getUsuario: getUsuario
        };

        return factory;

        function testConnection(data) {
            var file = new FormData();
            file.append("file", data);
            var deferred = $q.defer();
            $http({
                url: REST_SERVICE_CONNECTION_TEST,
                method: 'POST',
                data: file,
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            }).then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.error('[SERVICE].Error.')
                        deferred.reject(errResponse);
                    }
            );
            return deferred.promise;
        }
        function saveConnection(data) {

        }
        function saveProcess(data) {
            var deferred = $q.defer();
            $http.post(REST_SERVICE_PROCESO, data)
                    .then(
                            function (response) {
                                deferred.resolve(response.data);
                            },
                            function (errResponse) {
                                console.error('[SERVICE]Error');
                                deferred.reject(errResponse);
                            }
                    );
            return deferred.promise;
        }
        function fecthAllConnections() {
            var deferred = $q.defer();
            $http.get(REST_SERVICE_CONNECTION)
                    .then(
                            function (response) {
                                deferred.resolve(response.data);
                            },
                            function (errResponse) {
                                console.log('Error while fetching Connections');
                                deferred.reject(errResponse);
                            }
                    );
            return deferred.promise;
        }
        function fecthAllProcess() {
            var deferred = $q.defer();
            $http.get(REST_SERVICE_PROCESO)
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
        function enableProcess(id) {
            var deferred = $q.defer();
            $http.get(REST_SERVICE_PROCESO + /get/ + id)
                    .then(
                            function (response) {
                                deferred.resolve(response.data);
                            },
                            function (errResponse) {
                                console.log('Error enable Process');
                                deferred.reject(errResponse);
                            }
                    );
            return deferred.promise;
        }

        function loadProcess(id) {
            var deferred = $q.defer();
            $http.get(REST_SERVICE_PROCESO + "load/" + id)
                    .then(
                            function (response) {
                                deferred.resolve(response.data);
                            },
                            function (errResponse) {
                                console.log('Error enable Process');
                                deferred.reject(errResponse);
                            }
                    );
            return deferred.promise;
        }

        function getUsuario(id) {
            var deferred = $q.defer();
            $http.get(REST_SERVICE_PROCESO + "getUsuario/" + id)
                    .then(
                            function (response) {
                                deferred.resolve(response.data);
                            },
                            function (errResponse) {
                                console.log('Error enable Process');
                                deferred.reject(errResponse);
                            }
                    );
            return deferred.promise;
        }

    }]);
