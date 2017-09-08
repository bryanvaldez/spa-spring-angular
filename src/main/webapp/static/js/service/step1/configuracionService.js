'use strict';

angular.module('app').factory('GeneralService', ['$http', '$q', function ($http, $q) {

        var REST_SERVICE = C_SERVER + "/step1/configuracion/";
        var REST_SERVICE_PROCESO = C_SERVER + "/proceso/";
        var factory = {
            getItems: getItems,
            save: save,
            saveConfig: saveConfig,
            getRangoEdad: getRangoEdad,
            validProces: validProces
        };

        return factory;

        function getItems() {
            var deferred = $q.defer();
            $http.get(REST_SERVICE + "getConfig/")
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
            $http.post(REST_SERVICE + "save/", fd, {
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


        function saveConfig(data) {
            var config = new FormData();
            config.append("data", data);
            var deferred = $q.defer();
            $http({
                url: REST_SERVICE,
                method: 'POST',
                data: config,
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
        
        function getRangoEdad() {
            var deferred = $q.defer();
            $http.get(REST_SERVICE + "getRangoEdad")
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

        function validProces() {
            var deferred = $q.defer();
            $http.get(REST_SERVICE_PROCESO + "isActive/")
                    .then(
                            function (response) {
                                deferred.resolve(response.data);
                            },
                            function (errResponse) {                                
                                deferred.reject(errResponse);
                            }
                    );
            return deferred.promise;
        }

    }]);