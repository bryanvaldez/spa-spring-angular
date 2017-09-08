'use strict';

angular.module('app').constant('OnpeModuloConst',{    
    
    REST_SERVICE_MODULE: C_SERVER+'/modulo/',
    
    
    CONTROL_STEP_INACTIVE: false,
    CONTROL_STEP_ACTIVE: true,
    
    STATUS_LINE_INACTIVE: 0,
    STATUS_LINE_FINISHED: 1,
    STATUS_LINE_ACTIVE: 2,         

});

angular.module('app').controller('LineaController', ['$scope', 'OnpeModuloService', 'OnpeModuloConst', '$timeout', '$rootScope', function ($scope, OnpeModuloService, OnpeModuloConst, $timeout, $rootScope) {
    
    var vm = this;
    vm.constant = OnpeModuloConst;
    vm.module = null;
    vm.idMod = null;
    vm.flag = false;
    initModule(false);
    
    $rootScope.$on('StatusProcess', function(event, module) {
        initModule(true);
        vm.idMod = module;
    });
    
    function initModule(status){ 
        if(status){
            fecthAllModules();            
        }        
    }
    
    function fecthAllModules() {
        OnpeModuloService.fecthAllModules()
            .then(function (d) {
                currentModule(d);
            }, function (errResponse) {
                console.error('Error while fetching Process');
            });        
    }
    function currentModule(data){
        for(var i = 0; i < data.length; i++){
            if(data[i].N_MODULO_PK == vm.idMod ) {
                vm.module = angular.copy(data[i]);
                setModules(data);
                break;
            }
        }       
    }
    function setModules(data){
        vm.modules = [];
        vm.linea = 0;
        for(var i = 0; i < data.length; i++){
            var line = 100/data.length;
            if(data[i].N_ORDEN > vm.module.N_ORDEN ) {
                data[i].N_ESTADO =0;
                vm.modules.push(data[i]);
            }
            if(data[i].N_ORDEN < vm.module.N_ORDEN ) {
                data[i].N_ESTADO =1;
                vm.modules.push(data[i]);
                vm.linea = vm.linea +line;
            }            
            if(data[i].N_ORDEN == vm.module.N_ORDEN ) {
                data[i].N_ESTADO =2;
                vm.modules.push(data[i]);
                vm.linea = vm.linea +line;
            }

        }
        vm.flag = true;
    }

}]);


angular.module('app').factory('OnpeModuloService', ['$http', 'OnpeModuloConst', '$q', function ($http, OnpeModuloConst, $q) {

        var REST_SERVICE_MODULE = OnpeModuloConst.REST_SERVICE_MODULE;

        var factory = {
            fecthAllModules: fecthAllModules
        };

        return factory;
                
        function fecthAllModules(){
            var deferred = $q.defer();
            $http.get(REST_SERVICE_MODULE)
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
