angular.module('app').factory('FichaService', ['$http', '$q', function ($http, $q) {

        var REST_SERVICE = C_SERVER + "/fichaTecnica";

        var factory = {
            getAll: getAll,
            getTiposEleccion: getTiposEleccion,
            getTiposAutoridad: getTiposAutoridad,
            getOptionsPeriodicidad: getOptionsPeriodicidad,
            getDetFichaTecnica: getDetFichaTecnica,
            getFichaTecnica: getFichaTecnica,
            save1: save1,
            uploadFile: uploadFile,
            getDateToServer: getDateToServer
        };

        return factory;

        function getAll() {
            var deferred = $q.defer();
            $http.get(REST_SERVICE + "/getAllFichaTecnica")
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

        function getTiposEleccion() {
            var deferred = $q.defer();
            $http.get(REST_SERVICE + "/getAllTipoEleccion")
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

        function getTiposAutoridad() {
            var deferred = $q.defer();
            $http.get(REST_SERVICE + "/getAllTipoAutoridad")
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

        function getOptionsPeriodicidad() {
            var deferred = $q.defer();
            $http.get(REST_SERVICE + "/getOptionsPeriodicidad")
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

        function getDetFichaTecnica(fichaTecnica) {
            var deferred = $q.defer();
            $http.get(REST_SERVICE + "/getAllDetFichaTecnica/" + fichaTecnica)
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

        function getFichaTecnica(fichaTecnica) {
            var deferred = $q.defer();
            $http.get(REST_SERVICE + "/getFichaById/" + fichaTecnica)
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

        function save1(fd) {
            var deferred = $q.defer();
            $http.post(REST_SERVICE + '/save1/', fd, {
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
                        console.error('[SERVICE].Error.')
                        deferred.reject(errResponse);
                    }
            );
            return deferred.promise;
        }

        function getDateToServer() {
            var deferred = $q.defer();
            $http.get(REST_SERVICE + "/getDateToServer")
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