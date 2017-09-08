'use strict';

angular.module('app').factory('ReporteService', ['$http', '$q', function ($http, $q) {
        
        //Componente Reportes
        var REST_SERVICE_ELECTOR_LOCALMESA_URI = C_SERVER + '/reporte/elector/localMesa';
        var REST_SERVICE_ELECTOR_LOW_URI = C_SERVER + '/reporte/elector/low';
        var REST_SERVICE_ELECTOR_URI = C_SERVER + '/reporte/elector';
        var REST_SERVICE_LOCAL_URI = C_SERVER + '/reporte/local';
        var REST_SERVICE_LOCAL_SOL_URI = C_SERVER + '/reporte/local/solucion';
        var REST_SERVICE_MESA_SOL_URI = C_SERVER + '/reporte/mesa/solucion';
        var REST_SERVICE_MESA_URI = C_SERVER + '/reporte/mesa';
        //Componente Asignar Reasignar
        var REST_SERVICE_MESA = C_SERVER + '/mesa/';
        var REST_SERVICE_LOCAL = C_SERVER + '/local/';
        var REST_SERVICE_ELECTOR = C_SERVER + '/elector/';
        //Procedures Asignar Reasignar 
        var REST_SERVICE_PROCEDURE = C_SERVER + '/execute/';
        var REST_SERVICE_DISTRITO = C_SERVER + '/reporte/';
        
        var REST_SERVICE_SOLUCION = C_SERVER + '/solucion/';
        
        var factory = {
            getElectores: getElectores,
            getElectoresLow: getElectoresLow,
            getElectoresByMesaOrLocal: getElectoresByMesaOrLocal,
            updateElectorVip:updateElectorVip,
            getLocales : getLocales,
            getLocalesSolucion : getLocalesSolucion,
            getMesasSolucion : getMesasSolucion,
            getMesas : getMesas,
            getItems : getItems,
            getDistritos : getDistritos, 
            getUbigeo: getUbigeo,
            getLocalByUbigeo: getLocalByUbigeo,
            getElectorByDni:getElectorByDni,
            excuteAsignar:excuteAsignar,
            excuteProcedure:excuteProcedure,
            getLocalById: getLocalById,
            getMesasByIdLocal: getMesasByIdLocal,
            getSolucionesIn: getSolucionesIn,            
            getLocalByMesa: getLocalByMesa,
            getListaDistritosAsignados:getListaDistritosAsignados,
            getListaDistritosFaltantes:getListaDistritosFaltantes,
            getResumen: getResumen,
            getAllTipoSolucion: getAllTipoSolucion,
            getElectoresAsignar:getElectoresAsignar,
            getStatusProcedure:getStatusProcedure
        };

        return factory;
        
        function getElectoresAsignar() {
            var deferred = $q.defer();
            $http.get(REST_SERVICE_DISTRITO + "/getElectoresAsignar/")
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
        
        function getAllTipoSolucion() {
            var deferred = $q.defer();
            $http.get(REST_SERVICE_SOLUCION + "/getAllTipoSolucion")
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
        
        function getResumen(){
            var deferred = $q.defer();            
            $http.get(REST_SERVICE_DISTRITO+"/getResumen/")
                .then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.log('Error enable Mesas by Local');
                        deferred.reject(errResponse);
                    }
                );            
            return deferred.promise;  
        }
           
        function getListaDistritosAsignados(){
            var deferred = $q.defer();            
            $http.get(REST_SERVICE_DISTRITO+"/getListaDistritosAsignados/")
                .then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.log('Error enable Mesas by Local');
                        deferred.reject(errResponse);
                    }
                );            
            return deferred.promise;  
        }
        
        function getListaDistritosFaltantes(){
            var deferred = $q.defer();            
            $http.get(REST_SERVICE_DISTRITO+"/getListaDistritosFaltantes/")
                .then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.log('Error enable Mesas by Local');
                        deferred.reject(errResponse);
                    }
                );            
            return deferred.promise;  
        }
       
        function customUrl(tipo, codigo, codigo2){
            if(codigo == undefined && codigo2 == undefined){
                codigo = tipo;
                codigo2 = tipo;
            }else{
                if(codigo2 == undefined){
                    codigo2 = codigo;  
                }
            }
            return "/"+tipo+"/"+codigo+"/"+codigo2;
        }
        
        function getElectores(tipo, codigo, codigo2) {            
            var ulr = customUrl(tipo, codigo, codigo2);
            var deferred = $q.defer();           
            $http.get(REST_SERVICE_ELECTOR_URI+ulr)
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
        
        function getElectoresLow(tipo, codigo, codigo2) {            
            var ulr = customUrl(tipo, codigo, codigo2);
            var deferred = $q.defer();           
            $http.get(REST_SERVICE_ELECTOR_LOW_URI+ulr)
                    .then(
                            function (response) {
                                deferred.resolve(response.data.data);
                            },
                            function (errResponse) {
                                console.log('Error while fetching Feedbacks');
                                deferred.reject(errResponse);
                            }
                    );            
            return deferred.promise;
        }
        
        function getElectoresByMesaOrLocal(tipo, codigo, codigo2) {
            if (codigo == null) {
                codigo = 0;
            }            
            var ulr = customUrl(tipo, codigo, codigo2);
            var deferred = $q.defer();           
            $http.get(REST_SERVICE_ELECTOR_LOCALMESA_URI+ulr)
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
        
        function updateElectorVip(dni, status){
            var deferred = $q.defer();
            $http.get(REST_SERVICE_ELECTOR+dni+'/'+status)
                .then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.log('Error enable Elector');
                        deferred.reject(errResponse);
                    }
                );            
            return deferred.promise;                 
        }    
        
        function getLocalByUbigeo(ubigeo){
            var deferred = $q.defer();
            $http.get(REST_SERVICE_LOCAL+ubigeo)
                .then(
                    function (response) {
                        deferred.resolve(response.data);                        
                    },
                    function (errResponse) {
                        console.log('Error while getting Item');
                        deferred.reject(errResponse);
                    }
                );            
            return deferred.promise; 
        }        
        
        function getLocales(tipo, codigo, codigo2) {
            var ulr = customUrl(tipo, codigo, codigo2); 
            var deferred = $q.defer();
            $http.get(REST_SERVICE_LOCAL_URI+ulr)
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
        
        function getLocalesSolucion(tipo, codigo, codigo2) {
            var ulr = customUrl(tipo, codigo, codigo2); 
            var deferred = $q.defer();
            $http.get(REST_SERVICE_LOCAL_SOL_URI+ulr)
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
        
        function getMesasSolucion(tipo, codigo, codigo2) {
            var ulr = customUrl(tipo, codigo, codigo2); 
            var deferred = $q.defer();
            $http.get(REST_SERVICE_MESA_SOL_URI+ulr)
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
        
        function getMesas(tipo, codigo, codigo2) {
            var ulr = customUrl(tipo, codigo, codigo2);         
            var deferred = $q.defer();
            $http.get(REST_SERVICE_MESA_URI+ulr)
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
        
        function getItems(tipo, value) {            
            var deferred = $q.defer();
            $http.get(REST_SERVICE_LOCAL_URI+"/item/"+tipo+"/"+value)
                .then(
                    function (response) {
                        deferred.resolve(response.data);                        
                    },
                    function (errResponse) {
                        console.log('Error while getting Item');
                        deferred.reject(errResponse);
                    }
                );            
            return deferred.promise;
        } 
        
        function getDistritos(ubigeo, value) {            
            var deferred = $q.defer();
            $http.get(REST_SERVICE_LOCAL_URI+"/distrito/"+ubigeo+"/"+value)
                .then(
                    function (response) {
                        deferred.resolve(response.data);                        
                    },
                    function (errResponse) {
                        console.log('Error while getting Item');
                        deferred.reject(errResponse);
                    }
                );            
            return deferred.promise;
        }
        
        function getUbigeo(ubigeo) {            
            var deferred = $q.defer();
            $http.get(REST_SERVICE_LOCAL_URI+"/ubigeo/"+ubigeo)
                .then(
                    function (response) {
                        deferred.resolve(response.data);                        
                    },
                    function (errResponse) {
                        console.log('Error while getting Item');
                        deferred.reject(errResponse);
                    }
                );            
            return deferred.promise;
        }
        
        function getElectorByDni(dni){
            var deferred = $q.defer();
            $http.get(REST_SERVICE_ELECTOR+dni)
                .then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.log('Error enable Elector');
                        deferred.reject(errResponse);
                    }
                );            
            return deferred.promise;                 
        }
        
        function excuteAsignar(data){
            var deferred = $q.defer();            
            $http({
                url:REST_SERVICE_PROCEDURE+'asignacion/',
                method: 'POST',
                data: data,     
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined} 
            }).then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('[SERVICE]Error');
                    deferred.reject(errResponse);
                }
            );                                     
            return deferred.promise;            
        }  
        
        function excuteProcedure(data){
            var deferred = $q.defer();            
            $http({
                url:REST_SERVICE_PROCEDURE,
                method: 'POST', 
                data: data,     
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined} 
            }).then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('[SERVICE]Error');
                    deferred.reject(errResponse);
                }
            );                                     
            return deferred.promise;              
        }
        
        function getLocalById(id){
            var deferred = $q.defer();
            $http.get(REST_SERVICE_LOCAL+id)
                .then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.log('Error enable Local');
                        deferred.reject(errResponse);
                    }
                );            
            return deferred.promise;                 
        }
        
        function getMesasByIdLocal(id){
            var deferred = $q.defer();            
            $http.get(REST_SERVICE_MESA+"/getMesasLocal/"+id)
                .then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.log('Error enable Mesas by Local');
                        deferred.reject(errResponse);
                    }
                );            
            return deferred.promise;                 
        }
        
        function getSolucionesIn(type) {
            var deferred = $q.defer();                      
            $http.get(REST_SERVICE_LOCAL + "/getSoluciones/"+type)
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
        
        function getLocalByMesa(mesa){
            var deferred = $q.defer();
            $http.get(REST_SERVICE_LOCAL+"/mesa/"+mesa)
                .then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.log('Error enable Local');
                        deferred.reject(errResponse);
                    }
                );            
            return deferred.promise;                 
        }
        
        function getStatusProcedure(step){
            var deferred = $q.defer();
            $http.get(REST_SERVICE_PROCEDURE+"status/"+step)
                .then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.log('Error enable Local');
                        deferred.reject(errResponse);
                    }
                );            
            return deferred.promise;                 
        }
        
                      
    }]);
