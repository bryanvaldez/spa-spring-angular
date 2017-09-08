angular.module('app').factory('ReglasService', ['$http', '$q', function ($http, $q) {

        var REST_SERVICE = C_SERVER + "/reglas";

        var factory = {
            getAllTipoSolucion: getAllTipoSolucion,
            getDocumento: getDocumento,
            getAllRegla: getAllRegla,
            save: save,
            uploadFile: uploadFile,
            saveTipoSolucion: saveTipoSolucion
        };

        return factory;

        function getAllTipoSolucion() {
            var deferred = $q.defer();
            $http.get(REST_SERVICE + "/getAllTipoSolucion")
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

        function getDocumento() {
            var deferred = $q.defer();
            $http.get(REST_SERVICE + "/getDocumento")
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

        function getAllRegla() {
            var deferred = $q.defer();
            $http.get(REST_SERVICE + "/getAllReglas")
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

        function save(fd) {
            var deferred = $q.defer();
            $http.post(REST_SERVICE + '/save/', fd, {
                headers: {'Content-Type': undefined}
            }).then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.error('[SERVICE].Error.');
                        deferred.reject(errResponse);
                    }
            );
            return deferred.promise;
        }

        function uploadFile(fd) {
            var deferred = $q.defer();
            $http.post(REST_SERVICE + '/uploadFile/', fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            }).then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.error('[SERVICE].Error.');
                        deferred.reject(errResponse);
                    }
            );
            return deferred.promise;
        }

        function saveTipoSolucion(fd) {
            var deferred = $q.defer();
            $http.post(REST_SERVICE + '/saveTipoSolucion/', fd, {
                headers: {'Content-Type': undefined}
            }).then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.error('[SERVICE].Error.');
                        deferred.reject(errResponse);
                    }
            );
            return deferred.promise;
        }

    }]);