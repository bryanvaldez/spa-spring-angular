'use strict';

angular.module('app').factory('MantenimientoService', ['$http', '$q', function ($http, $q) {

        var REST_SERVICE_URI_LOCAL = C_SERVER + '/local';

        var factory = {
            getUbigeo: getUbigeo
            , getSoluciones: getSoluciones
            , submitLocal: submitLocal            
            , enabledLocal: enabledLocal
            , disabledLocal: disabledLocal
        };

        return factory;

        function getUbigeo() {
            var deferred = $q.defer();
            $http.get(REST_SERVICE_URI_LOCAL + "/getUbigeo")
                    .then(
                        function (response) {                            
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            deferred.reject(errResponse);
                        }
                    );
            return deferred.promise;
        };
        
        function getSoluciones() {
            var deferred = $q.defer();
            $http.get(REST_SERVICE_URI_LOCAL + "/getSoluciones")
                    .then(
                        function (response) {                            
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            deferred.reject(errResponse);
                        }
                    );
            return deferred.promise;
        };
        
        function submitLocal(fd) {            
            var deferred = $q.defer();    
            $http.post(REST_SERVICE_URI_LOCAL+'/save/', fd, {                
                headers: {'Content-Type': undefined}                
            }).then(
                function (response){                    
                    deferred.resolve(response.data);
                },
                function (errResponse){
                    console.error('[SERVICE].Error.')
                    deferred.reject(errResponse);
                }
            ); 
            return deferred.promise;
        };    
        
        function enabledLocal(fd) {            
            var deferred = $q.defer();    
            $http.post(REST_SERVICE_URI_LOCAL+'/enabled/', fd, {                
                headers: {'Content-Type': undefined}                
            }).then(
                function (response){                    
                    deferred.resolve(response.data);
                },
                function (errResponse){
                    console.error('[SERVICE].Error.')
                    deferred.reject(errResponse);
                }
            ); 
            return deferred.promise;
        };  
        
        function disabledLocal(fd) {            
            var deferred = $q.defer();    
            $http.post(REST_SERVICE_URI_LOCAL+'/disabled/', fd, {                
                headers: {'Content-Type': undefined}                
            }).then(
                function (response){                    
                    deferred.resolve(response.data);
                },
                function (errResponse){
                    console.error('[SERVICE].Error.')
                    deferred.reject(errResponse);
                }
            ); 
            return deferred.promise;
        };  
        
    }]);
