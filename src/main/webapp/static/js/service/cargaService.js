'use strict';

angular.module('app').factory('CargaService', ['$http', '$q', function ($http, $q) {

        var REST_SERVICE_URI = C_SERVER + '/carga';        
        
        var factory = {
            getLastUpload: getLastUpload,
            getVersionPadron: getVersionPadron,
            validate: validate,
            save: save,
            updateState: updateState,
            executeProcess: executeProcess,
            getEstado: getEstado
        };

        return factory;
       
        function getLastUpload(type) {            
            var deferred = $q.defer();            
            $http.get(REST_SERVICE_URI+"/get/"+type)
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
        
        function getVersionPadron() {            
            var deferred = $q.defer();            
            $http.get(REST_SERVICE_URI+"/getVersion/")
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
        
        function validate(fd) {
            var deferred = $q.defer();
            $http.post(REST_SERVICE_URI+'/validate/', fd, {                 
                transformRequest: angular.identity,                
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
        }   
        
        function save(fd) {            
            var deferred = $q.defer();    
            $http.post(REST_SERVICE_URI+'/save/', fd, {                
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
        }
        
        function updateState(id) {            
            var deferred = $q.defer();    
            $http.post(REST_SERVICE_URI+'/updateState/', id, {
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
        }
        
        function executeProcess(id) {            
            var deferred = $q.defer();    
            $http.post(REST_SERVICE_URI+'/process/', id, {
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
        }
        
        function getEstado(id) {            
            var deferred = $q.defer();    
            $http.post(REST_SERVICE_URI+'/getEstado/', id, {
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
        }
                
    }]);
