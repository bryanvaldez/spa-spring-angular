'use strict';
angular.module('app').constant('OnpeComposerConst',{    
    
    REST_SERVICE_OPCION: C_SERVER+'/opcion/',
    REST_SERVICE_HEADER: C_SERVER + '/header/',   
    REST_SERVICE_PROCEDURE : C_SERVER + '/execute/',    
    GENERAL_TYPE: 'PERU',    
    PROCEDURE_INIT: 1,
    PROCEDURE_SUCCESS: 2,
    PROCEDURE_ERROR: 3,    
    PROCEDURE_NO_INIT:4,    
    
    STEP_CARGA_DATOS:4,
    LEPA:6,
    SIGE:7,
    HISTORICO:8,
    HISTORICO_MANUAL:11,
    SIGE_MANUAL:10,
    REASIGNAR1:9,
    CIERRE:13,
    CONFORMACION:12,    
    EXIST:1,
    READY:2
});

angular.module('app').controller('onpeComposer', ['$scope','OnpeComposerConst','OnpeComposerService','$timeout','$rootScope', '$mdDialog', function ($scope, OnpeComposerConst, OnpeComposerService, $timeout, $rootScope, $mdDialog) {
    var vm = this;   
    var canvas, stage, exportRoot;
    vm.constant = OnpeComposerConst;        
    initComposer();
    vm.procedure = {message:""};        
    $rootScope.$on('StepNext', function(event, status) {
        nextOption();    
    });
    $rootScope.$on('StepBack', function(event, status) {
        backOption();
    });
    $rootScope.$on('currentOption', function(event, status) {
        findCurrentOption();
    });
    function initOption(){
        vm.option = {
            N_OPCION_PK:null,
            C_NOMBRE_OPCION:'',
            C_ENLACE:'',
            N_ORDEN:null,
            N_MODULO:null,
            N_PERFIL:null,
            N_ACTIVO:null,
            N_ESTADO:null,
            N_PROCEDIMIENTO:null
        };
    }
    function initComposer(){
        findCurrentOption();
    }
    function findCurrentOption() {
        OnpeComposerService.findCurrentOption()
            .then(function (d) {
                validateStepGeneral(d);
            }, function (errResponse) {
                console.error('Error while fetching Process');
            });        
    }
    function nextOption() {        
        OnpeComposerService.nextOption()
            .then(function (d) {
                validateStepGeneral(d);               
            }, function (errResponse) {
                console.error('Error while fetching Process');
            });        
    }
    function backOption() {
        OnpeComposerService.backOption(vm.option)
                .then(function (d) {
                    setOption(d);
                    $scope.$emit('StatusProcess', d.N_MODULO)
                }, function (errResponse) {
                    console.error('Error while fetching Process');
                });        
    }
    function setOption(d){
        initOption();
        if(d != null && d != '' && d!= undefined){
            vm.option = angular.copy(d);
            $scope.$emit('StatusProcess', d.N_MODULO);
            $scope.$emit('StatusOption', vm.option);
            STEP_GENERAL = vm.option.N_ORDEN;
            initEsceneProcedure(vm.option.N_ORDEN);            
            initProcedure(vm.option.N_PROCEDIMIENTO);
        }else{
            window.location = C_SERVER + "/logout"; 
        }
    }
    function updateAllOption(step){
        OnpeComposerService.updateAllOption(step)
            .then(function (d) {
                if(d.success){
                    findCurrentOption();
                }else{
                    console.log(d.message);
                }
            }
        );         
    }
    function validateStepGeneral(d){
        if(d.N_ORDEN == OnpeComposerConst.SIGE){
            validateSige(d);
        }else if(d.N_ORDEN == OnpeComposerConst.SIGE_MANUAL){
            validateSige(d);
        }else if(d.N_ORDEN == OnpeComposerConst.REASIGNAR1){
            validateReasignar1(d);
        }else if(d.N_ORDEN == OnpeComposerConst.CONFORMACION){
            validateConformacion(d);
        }else{
            setOption(d);                   
        }        
    }
    function validateSige(d){
        OnpeComposerService.validateSige()
            .then(function (data) {
                if(data.success){
                    setOption(d); 
                }else{
                    if(data.success != "false"){
                        nextOption(); 
                    }else{
                        window.location = C_SERVER + "/logout";
                    }                      
                }       
            }
        );
    }    
    function validateReasignar1(step){
        OnpeComposerService.validateUbigeos()
            .then(
                function (data) {
                    if(data.diferent5 > 0){
                        if(data.exist2 > 0 || data.exist3 > 0){
                            setOption(step);
                        }else{
                            if(data.exist4 > 0){
                                nextOption();
                            }else{
                                console.log("revisar");
                            }                        
                        }                        
                    }else{
                        updateAllOption(OnpeComposerConst.CONFORMACION);
                    }
                },
                function (errResponse) {
                    console.error('Error while Reporte Elector Adan:' + errResponse);
                }
            );                        
    }    
    function validateConformacion(step){
        OnpeComposerService.validateUbigeos()
            .then(
                function (data) {                      
                    if(data.exist3 > 0 || data.exist2 > 0){
                        updateAllOption(OnpeComposerConst.REASIGNAR1);
                    }else{
                        setOption(step);
                    }
                },
                function (errResponse) {
                    console.error('Error while Reporte Elector Adan:' + errResponse);
                }
            );       
    }   
    $rootScope.$on('executeProcedure', function(event, status) {
        vm.procedure = {message:""}; 
        if(status == 'CIERRE'){
            closeProcess();
            vm.option.N_PROCEDIMIENTO = 1;            
        }else if(status.type == 'RECOVERY'){
            retrocederC();
            recovery(status.data);
            vm.option.N_PROCEDIMIENTO = 1;            
        }else{
            vm.option.N_PROCEDIMIENTO = 1;            
            OnpeComposerService.updateOption(vm.option)
                .then(function (d) {
                    if(d.success){
                        OnpeComposerService.clearProcedure().then(function (data) {
                            if(data.success){
                                executeProcedure(); 
                                statusProcedure();                            
                            }
                        });                                          
                    }else{
                        console.log(d.message);
                    }
                }
            );             
        }
    });  
    function initProcedure(status, percentage){        
        if(status == OnpeComposerConst.PROCEDURE_INIT){
            statusProcedure(); 
        }
        if(status == OnpeComposerConst.PROCEDURE_SUCCESS){
            vm.procedure.message = "Proceso "+ vm.option.C_NOMBRE_OPCION +" Finalizado.";
            vm.option.N_PROCEDIMIENTO='';
            OnpeComposerService.updateOption(vm.option)
                .then(function (d) {
                    if(d.success){
                        $timeout(function () {
                            vm.procedure.message = "Cargando Vista...";
                            if(d.data.N_ORDEN == OnpeComposerConst.REASIGNAR1){
                                validateReasignar1(d.data);
                            }else if(d.data.N_ORDEN == OnpeComposerConst.STEP_CARGA_DATOS){ 
                                setOption(d.data);
                            }else{
                                nextOption();  
                            }
                        }, 3000);                        
                    }else{
                        console.log(d.message);
                    }
                }
            );            
        }
        if(status == OnpeComposerConst.PROCEDURE_ERROR){            
            errorProcedure("Incompleto, volver a ejecutar.");
        }
        if(status == OnpeComposerConst.PROCEDURE_NO_INIT){
            errorProcedure("Cancelado");
        }
    }
    function executeProcedure(){
        OnpeComposerService.executeProcedure()
            .then(
                function (data) {
                    if(data.success){
                        console.log("procedimiento ejecutado");
                    }else{
                        if(vm.option.N_ORDEN != OnpeComposerConst.STEP_CARGA_DATOS){
                            initProcedure(OnpeComposerConst.PROCEDURE_NO_INIT);
                        }
                    }
                },
                function (errResponse) {
                    console.error('Error while Elector Vip Adan:' + errResponse);
                }
            ); 
    }
    function statusProcedure(){
        OnpeComposerService.getStatusProcedure()
            .then(function (data) {
                if(data.status == OnpeComposerConst.PROCEDURE_INIT){
                    if(data.percentage != undefined && data.percentage != '0'){
                        vm.procedure.message = "Cargando "+ vm.option.C_NOMBRE_OPCION+": "+data.percentage+"%...";
                    }else{
                        vm.procedure.message = "Proceso "+vm.option.C_NOMBRE_OPCION+" Ejecutando";
                    }
                    $timeout(function () {statusProcedure();}, 3000);                    
                }
                if(data.status == OnpeComposerConst.PROCEDURE_SUCCESS){
                    initProcedure(data.status);
                }
                if(data.status == OnpeComposerConst.PROCEDURE_ERROR){
                    initProcedure(data.status);
                }
                if(data.status == undefined || data.status == null){
                    console.log("No se establecio conexion");
                }

            },function (errResponse) {
                console.error('Error while Elector Vip Adan:' + errResponse);
            }
        );                
    }
    function errorProcedure(message){
        var message = message;
        vm.procedure.message = "Carga "+ vm.option.C_NOMBRE_OPCION +": "+message;   
        vm.option.N_PROCEDIMIENTO='';
        OnpeComposerService.updateOption(vm.option)
            .then(function (d) {
                if(d.success){
                    $timeout(function () {
                        vm.procedure.message = "Regresando...";
                        vm.option.N_PROCEDIMIENTO = null;
                    }, 5000);                        
                }else{
                    console.log(d.message);
                }
            }
        );         
    }
    function closeProcess(){
        vm.procedure.message = "Proceso Carga "+ vm.option.C_NOMBRE_OPCION;
        OnpeComposerService.closeProcess()
            .then(function (d) {
                if (d.success) {
                    $timeout(function () {
                        vm.procedure.message = "Cargando Vista.";
                        vm.option = null;                      
                        findCurrentOption();                       
                    }, 10000); 
                }else{                  
                    console.log("Verificar conexion.")
                }
            }, function (errResponse) {
                console.error('Error while fetching Elector');
            });        
    }                                
    function recovery(opcion) {
        vm.procedure.message = "Restableciendo Datos.";    
        var fd = new FormData();
        fd.append('option', opcion);
        OnpeComposerService.executeProcessOption(fd)
            .then(function (d) {
                vm.procedure.message = "Cargando Vista "+d.C_NOMBRE_OPCION; 
                $scope.$emit('StatusProcess', d.N_MODULO);             
                    $timeout(function () {
                        vm.procedure.message = "Cargando Vista.";
                        setOption(d);                     
                    }, 2000);                 
                },function (errResponse) {
                    console.log("PROCESS ERROR: " + errResponse);
                }
            );
    };
    function initEsceneProcedure(process){
       if(process == OnpeComposerConst.LEPA){
           lepaEnviarC(); 
       }else if(process == OnpeComposerConst.HISTORICO || process == OnpeComposerConst.HISTORICO_MANUAL){
           historicoC();
       }else if(process == OnpeComposerConst.REASIGNAR1){
           reasignaionMesaUser();
       }else if(process == OnpeComposerConst.CONFORMACION){
           mesaC();
       }else if(process == OnpeComposerConst.CIERRE){
           cierreProcesC();
       }else if(process == OnpeComposerConst.STEP_CARGA_DATOS){
           cargaDatos();
       }else if(process == 'RECOVERY'){
           retrocederC();
       }else{
           retrocederC();
       }       
    }
    function reasignaionMesaUser() {
            canvas = document.getElementById("CanvasPreCarga");
            exportRoot = new lib.reasignacion();

            stage = new createjs.Stage(canvas);
            stage.addChild(exportRoot);
            stage.update();

            createjs.Ticker.setFPS(29);
            createjs.Ticker.addEventListener("tick", stage);
    }    
    function cargaDatos() {
            canvas = document.getElementById("CanvasPreCarga");
            exportRoot = new lib.cargandoDatos();

            stage = new createjs.Stage(canvas);
            stage.addChild(exportRoot);
            stage.update();

            createjs.Ticker.setFPS(29);
            createjs.Ticker.addEventListener("tick", stage);
    }    
    function lepaEnviarC() {
        canvas = document.getElementById("CanvasPreCarga");
        exportRoot = new lib.lepaEnviar();
        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();
        createjs.Ticker.setFPS(29);
        createjs.Ticker.addEventListener("tick", stage);
    }
    function historicoC() {
        canvas = document.getElementById("CanvasPreCarga");
        exportRoot = new lib.historico();
        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();
        createjs.Ticker.setFPS(29);
        createjs.Ticker.addEventListener("tick", stage);
    }   
    function mesaC() {
        canvas = document.getElementById("CanvasPreCarga");
        exportRoot = new lib.mesas();
        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();
        createjs.Ticker.setFPS(29);
        createjs.Ticker.addEventListener("tick", stage);
    }  
    function cierreProcesC() {
        canvas = document.getElementById("CanvasPreCarga");
        exportRoot = new lib.cierreProceso();
        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();
        createjs.Ticker.setFPS(29);
        createjs.Ticker.addEventListener("tick", stage);
    }
    function retrocederC() {
        canvas = document.getElementById("CanvasPreCarga");
        exportRoot = new lib.retroceder();
        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();
        createjs.Ticker.setFPS(29);
        createjs.Ticker.addEventListener("tick", stage);
    }     
}]);

angular.module('app').factory('OnpeComposerService', ['$http', 'OnpeComposerConst', '$q', function ($http, OnpeComposerConst, $q) {

        var REST_SERVICE_OPCION = OnpeComposerConst.REST_SERVICE_OPCION;
        var REST_SERVICE_HEADER = OnpeComposerConst.REST_SERVICE_HEADER;
        var REST_SERVICE_PROCEDURE = OnpeComposerConst.REST_SERVICE_PROCEDURE;
        var REST_SERVICE_ELECTOR_LOW_URI = C_SERVER + '/reporte/elector/low';
        var REST_SERVICE_PROCESO = C_SERVER + '/proceso/';        
        
        var factory = {
            findCurrentOption:findCurrentOption,
            nextOption:nextOption,
            backOption:backOption,
            executeProcessOption:executeProcessOption,
            updateOption:updateOption,
            updateAllOption:updateAllOption,
            executeProcedure:executeProcedure,
            getStatusProcedure:getStatusProcedure,
            validateSige:validateSige,
            clearProcedure:clearProcedure,
            validateReasignar1:validateReasignar1,
            getElectoresLow:getElectoresLow, 
            validateManualLepa:validateManualLepa,
            validateUbigeos:validateUbigeos,
            closeProcess:closeProcess            
        };
        return factory;
        function findCurrentOption(){
            var deferred = $q.defer();
            $http.get(REST_SERVICE_OPCION+'step/')
                .then(
                    function (response) {
                        if(response.status==204){
                            window.location = C_SERVER + "/main/";
                        }
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.log('Error while fetching View for Option.');
                        deferred.reject(errResponse);
                    }
                );            
            return deferred.promise;               
        }
        function nextOption() {
            var deferred = $q.defer();            
            $http.post(REST_SERVICE_OPCION+'step/next')
                .then(
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
        function backOption() {
            var deferred = $q.defer();            
            $http.post(REST_SERVICE_OPCION+'step/back')
                .then(
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
        function executeProcessOption(option) {
            var deferred = $q.defer();
            $http.post(REST_SERVICE_HEADER + 'executeProcessOption/', option, {
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
        };
        function updateOption(option){
            var deferred = $q.defer();
            $http.put(REST_SERVICE_OPCION, option)
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
        function updateAllOption(option){
            var deferred = $q.defer();
            $http.get(REST_SERVICE_OPCION + "update/"+option)
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
        function executeProcedure(data){
            var deferred = $q.defer();
            $http.get(REST_SERVICE_PROCEDURE)
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
        function getStatusProcedure(step){
            var deferred = $q.defer();
            $http.get(REST_SERVICE_PROCEDURE+"status")
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
        function validateSige(){
            var deferred = $q.defer();
            $http.get(REST_SERVICE_OPCION+"validate/sige/")
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
        function validateReasignar1(){
            var deferred = $q.defer();
            $http.get(REST_SERVICE_OPCION+"validate/reasignar1/")
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
        function clearProcedure(){
            var deferred = $q.defer();
            $http.get(REST_SERVICE_PROCEDURE+"clear")
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
        function validateManualLepa(step){
            var deferred = $q.defer();
            $http.get(REST_SERVICE_PROCEDURE+"validate/"+step)
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
        function validateUbigeos(){
            var deferred = $q.defer();
            $http.get(REST_SERVICE_PROCEDURE+"validate/")
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
        function closeProcess(){
            var deferred = $q.defer();
            $http.get(REST_SERVICE_PROCESO+"close/")
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
