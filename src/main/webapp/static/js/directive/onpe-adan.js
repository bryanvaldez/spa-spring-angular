(function(){
    'use strict';
    
        angular
            .module('onpeAdan', [])
            .directive('onpeAdanEstadoCarga', onpeAdanEstadoCarga)
            .directive('onpeAdanAsignar', onpeAdanAsignar)
            .directive('onpeAdanElector', onpeAdanElector)
            .directive('onpeAdanLineaProceso', onpeAdanLineaProceso)
            .directive('onpeAdanElectorHistorial', onpeAdanElectorHistorial)
            .directive('onpeAdanStepProcedure', onpeAdanStepProcedure)
            .factory('onpeAdanService', onpeAdanService)
            .constant('ConstOnpeAdan',{
                SECTION_GENERAL: 'GENERAL',
                SECTION_ELECTOR: 'ELECTOR',
                SECTION_LOCAL: 'LOCAL',
                SECTION_MESA: 'MESA',                
                
                C_SERVER:C_SERVER,
                REST_SERVICE_URI_LOCAL: C_SERVER+'/local/',
                REST_SERVICE_URI_ELECTOR: C_SERVER+'/elector/',
                REST_SERVICE_URI_ELECTOR_HISTORICAL: C_SERVER+'/elector/historico/'
            });
                           
        function onpeAdanEstadoCarga(){
            var directive = {
                restrict: 'E',
                template:[
                    '<div ng-if="data!=null ||data!=undefined || data != \'\'">',
                        '<md-toolbar ng-if="data==true" class="md-theme-light" style="background-color:#12a537;">',
                            '<h2 class="md-toolbar-tools" layout="row" layout-align="space-between center">',
                                '<span ng-bind="msgSuccess"></span>',
                                '<i style="color:#fff;" class="material-icons">done</i>',
                            '</h2>',
                        '</md-toolbar>',
                        '<md-toolbar ng-if="data==false" class="md-theme-light" style="background-color:#FFA000;">',
                            '<h2 class="md-toolbar-tools" layout="row" layout-align="space-between center">',
                                '<span ng-bind="msgLoading"></span>',
                                '<i style="color:#fff;" class="material-icons">hourglass_empty</i>',
                            '</h2>',
                            '<md-progress-linear md-mode="indeterminate"></md-progress-linear>',
                        '</md-toolbar>',
                        '<md-toolbar ng-if="data==\'error\'" class="md-theme-light" style="background-color:#FBC02D">',
                            '<h3 class="md-toolbar-tools" layout="row" layout-align="space-between center">',
                                '<span ng-bind="msgError"></span>',
                                '<i style="color:#fff;" class="material-icons">pan_tool</i>',
                            '</h3>',
                        '</md-toolbar>',                        
                     '</div>'
                ].join(''),                
                scope:{
                    data :'=',
                    msgLoading:'=',
                    msgSuccess:'=',
                    msgError:'='
                }
            };
            return directive;
            
            function link(scope, element, attrs, ctrl) {          
            }            
        }
        function onpeAdanAsignar(){
            var directive = {
                restrict: 'E',
                template:[
                    '<div class="onpeAdanAsignar" ng-cloak>',
                        '<div class="onpeAdanAsignarBody">',
                            '<div class="onpeAdanAsignarTitle" ng-bind="vm.asignarReasignar.title"></div>',
                            '<div class="onpeAdanAsignarStep" ng-bind="vm.asignarReasignar.step1"></div>',
                            '<md-select ng-if="!vm.local && vm.asignarReasignar.type == 1" ng-model="vm.local"  placeholder="Seleccione Local" ng-disabled="!vm.status">',
                                '<md-option ng-value="local" ng-repeat="local in vm.locales">{{ local.C_NOMBRE }}</md-option>',                    
                            '</md-select>',
                            '<md-list ng-if="vm.mesas && vm.asignarReasignar.type == 2">',
                                '<div ng-show="vm.mesas.length == 0" style="color:#dd2c00;text-align: center;" class="onpeAdanAsignarStep">No se agregaron Mesas.<md-icon class="material-icons">info</md-icon></div>',
                                '<md-list-item style="padding:0;" ng-repeat="mesa in vm.mesas">',
                                    '<p><strong>Mesa Nro: {{mesa}}</strong></p>',
                                    '<md-icon style="color:#4CAF50;" class="material-icons">check_circle</md-icon>',
                                    '<md-divider ></md-divider>',                             
                                '</md-list-item>',                                                    
                            '</md-list>',  
                            
                            
                            '<div ng-if="vm.mesas.length>0 && vm.asignarReasignar.type == 2" class="onpeAdanAsignarStep" ng-bind="vm.asignarReasignar.step2"></div>',                            
                            
                            '<md-list ng-if="vm.local && vm.asignarReasignar.type == 1">',
                                '<md-list-item style="padding:0;">',
                                    '<p><strong>{{vm.local.C_NOMBRE}}</strong></p>',
                                    '<md-button ng-click="vm.removeStep1()" style="background-color:#005780;font-size: 20px;" class="md-fab md-mini md-primary"  aria-label="trash"><md-icon class="material-icons">delete</md-icon></md-button>',
                                    '<md-divider ></md-divider>',                             
                                '</md-list-item>',                                                    
                            '</md-list>',

                            '<md-select ng-if="vm.mesas.length>0 && vm.asignarReasignar.type == 2" ng-model="vm.local"  placeholder="Seleccione Local" ng-disabled="!vm.status">',
                                '<md-option ng-value="local" ng-repeat="local in vm.locales">{{ local.C_NOMBRE }}</md-option>',                    
                            '</md-select>', 
                            
                            
                            
                        '</div>',    
                        '<div class="onpeAdanAsignarFooter">',
                            '<md-button ng-disabled="!vm.status || vm.local == undefined" ng-click="vm.btnSelectLocal({data: vm.local})" ng-class="{\'buttonTrue\': vm.status && vm.local != undefined,\'buttonFalse\': !vm.status || vm.local == undefined}">REASIGNAR</md-button>',
                        '</div>',
                    '</div>'     
                ].join(''),                
                scope:{
                    type :'=', 
                    elector :'=',
                    mesas : '=',
                    localtemp : '=',
                    btnSelectLocal:'&'                   
                },
                link: link,
                controller: onpeAdanAsignarController,
                controllerAs: 'vm',
                bindToController: true
            };
            return directive;
            function link(scope, element, attrs, ctrl) {          
            }            
        }
        function onpeAdanElector(){
            var directive = {
                restrict: 'E',
                template:[    
                    '<article>', 
                        '<div class="contenidoTituloMantenimiento EstadoOkMantenimiento" ng-cloak>', 
                            '<h1 class="tituloPincipal"><b>DNI: {{vm.elector.NUMELE}}</b></h1>',
                        '</div>',         
                        '</div>', 
                        '<div class="ContenedorMantenimientoCard EstadoOkMantenimiento  heightUsuario">', 
                            '<div class="datosPrincipalElector">',
                                '<img class="fotoElector" style="background-color: #f0f0f0;">',
                                '<div class="datosElectir">',
                                    '<p>Ubigeo: {{vm.elector.UBIGEO}}</p>',                                
                                    '<p>Asignacion Manual: No</p>',                                
                                    '<p>Edad: {{vm.elector.EDAD}}</p>',
                                '</div>',
                            '</div>',
                            '<div class="datosSecundariosElector ">',
                                '<p><strong>{{vm.elector.NOMBRES}} <br> {{vm.elector.APPAT}} {{vm.elector.APMAT}}</strong></p>',                                                                              
                                '<p>Preferencial:<b>{{ vm.elector.PREFERENCIAL}}</b></p>',
                                '<md-checkbox ng-change="vm.btnElectorVip({status:vm.bolean})" ng-model="vm.bolean" ng-disabled="vm.disabledElectorVip"  aria-label="vip">',
                                    'Elector VIP',
                                '</md-checkbox> ',             
                            '</div>',
                            '<div class="divinormal"></div>',                             
                            '<div ng-if="vm.elector.UBIGEO.substr(0,1) == \'9\' " class="datosSecundariosElector md-padding" >',
                                '<h3 class="tituloTerciario"><b> Ubigeo de Resicencia</b></h3>',
                                '<p class="datoExtran">Continente:<b> {{vm.elector.dataUbigeo.continente}} </b></p>',     
                                '<p class="datoExtran">Pais:<b> {{vm.elector.dataUbigeo.pais}} </b></p>',              
                                '<p class="datoExtran">Ciudad:<b> {{vm.elector.dataUbigeo.ciudad}} </b></p>',              
                                '<p class="datoExtran">ODPE:<b> {{vm.elector.dataUbigeo.odpe}} </b></p>',              
                           '</div>',
                        '</div>', 
                    '</article>' 
                ].join(''),                
                scope:{
                    data :'=',                    
                    disabledElectorVip:'=',
                    btnElectorVip: '&'
                },
                link: link,
                controller: onpeAdanElectorController,
                controllerAs: 'vm',
                bindToController: true
            };
            return directive;
            
            function link(scope, element, attrs, ctrl) {          
            }            
        }  
        function onpeAdanLineaProceso(){
            var directive = {
                restrict: 'E',
                template:[     
                    '<div  flex-xs="100"  flex-sm="100"  class="listaDePasosMenuOpcional">',
                        '<ul class="ListadePasos">',
                            '<li class="EstadoConcluido" ng-repeat="item in LineaTime">',
                                '<h3>{{item.NombrePaso}}</h3>',
                                '<span>{{item.FCfecha}}</span>',
                            '</li>',
                        '</ul>',
                        '<div class="barraLineaTiempo">',
                            '<div class="barraRealTime">',
                            '<div class="cargadorBarraTiempo" style=" height: {{vm.lineProcess}}"></div>',
                            '</div>',
                        '</div>',
                    '</div>'                  
                ].join(''),                
                scope:{
                    data :'='
                },
                link: link,
                controller: onpeAdanLineaProcesoController,
                controllerAs: 'vm',
                bindToController: true
            };
            return directive;
            
            function link(scope, element, attrs, ctrl) {          
            }            
        } 
        function onpeAdanElectorHistorial(){
            var directive = {
                restrict: 'E',
                template:[     
                    '<div flex-xs flex-gt-xs="100" layout="column">',                        
                        '<div>',
                            '<h2 class="tituloSecundario"><b>HISTORIAL DE LOCALES</b></h2>',                            
                        '</div>',                        
                        '<div ng-hide="vm.electorHistorical.length" style="text-align: center;">',
                        '<h3 class="md-headline">No se encontraron datos.<i class="material-icons"><i class="material-icons">cloud_off</i></i></h3>',
                        '</div>',
                        '<md-card style="border-top: 6px solid {{e.C_ACTUAL == 1?\'#12a537\':\'#005780\'}}" ng-repeat="e in vm.electorHistorical | orderBy:\'$index\':true ">',
                            '<md-card-title style="padding-right: 0;">',
                              '<md-card-title-text>',
                                '<div layout="row" layout-align="space-between center">',
                                    '<div layout="column">',
                                        '<span class="md-title" ng-bind="e.C_NOMBRE"></span>',
                                        '<span class="md-title" ng-bind="e.C_MESA"></span>',
                                    '</div>',
                                  '<md-button ng-if="e.C_ACTUAL == 0" style="background-color: #005780;margin: 0;min-width: 50px;" ng-disabled="true">',
                                      '<md-icon style="color:#fff;" class="material-icons">history</md-icon>',
                                  '</md-button>',
                                  '<md-button ng-if="e.C_ACTUAL == 1" style="background-color: #12a537;margin: 0;min-width: 50px;color: #fff;" ng-disabled="true">',
                                      'Actual',
                                  '</md-button>',                                  
                                '</div>',
                              '</md-card-title-text>',
                            '</md-card-title>',
                                '<md-divider></md-divider>',
                            '<md-card-content>',
                              '<div layout="row" layout-align="space-between center">',
                                '<span class="md-body-1" ng-bind="e.C_DESCRIPCION"></span>',
                                '<i ng-if="e.C_ESTADO==0" class="material-icons" style="color:#e94f44">highlight_off</i>',
                                '<i ng-if="e.C_ESTADO==1"class="material-icons" style="color:#12a537">done</i>',
                              '</div>',                   
                            '</md-card-content>',
                        '</md-card>',
                    '</div>'          
                ].join(''),                
                scope:{
                    data :'='
                },
                link: link,
                controller: onpeAdanElectorHistorialController,
                controllerAs: 'vm',
                bindToController: true
            };
            return directive;
            
            function link(scope, element, attrs, ctrl) {          
            }            
        }         
        function onpeAdanStepProcedure(){
            var directive = {
                restrict: 'E',
                template:[
                '<div layout="row" ng-repeat="b in vm.buttons">',    
                    '<md-button ng-if="b.viewList" ng-click="vm.btnView({data:b})" class="md-primary estilosBotonGeneral ButonPrincipal" aria-label="buttonProcedureSearch" style="margin: 2px;font-weight: bold;width: 20px;border-right: 2px solid #fff;">',
                        '<i class="material-icons">search</i>',
                    '</md-button>',                    
                    '<md-button  ng-click="vm.btnProcedure({data:b})" ng-disabled="b.disabled ||vm.obs ==true" class="md-primary estilosBotonGeneral ButonPrincipal" aria-label="buttonProcedure" style="margin: 2px;height: 55px;font-weight: bold;">',
                        '<span class="spanBotonGrande" ng-bind="b.name"></span>',
                        '<i class="material-icons">{{b.icon}}</i>',
                    '</md-button>',
                '</div>'
                ].join(''),                
                scope:{
                    step : '=',
                    close : '=',
                    perfilObs:'@',
                    electoresPorAsignar : '=', 
                    btnProcedure: '&',
                    btnView: '&'
                },
                link: link,
                controller: onpeAdanStepProcedureController,
                controllerAs: 'vm',
                bindToController: true
            };
            return directive;
            function link(scope, element, attrs, ctrl) {
            }            
        }    
    
        onpeAdanService.$inject = ['$http','$q','ConstOnpeAdan'];
        function onpeAdanService($http, $q, ConstOnpeAdan){

            var factory = {
                fetchAllLocalByUbigeo: fetchAllLocalByUbigeo,
                findElectorByHistorical:findElectorByHistorical,
                validateProcedure:validateProcedure,
                validateProcess:validateProcess
            };			
            return factory;
            function fetchAllLocalByUbigeo (ubigeo, code){
                var deferred = $q.defer();                               
                $http.get(ConstOnpeAdan.REST_SERVICE_URI_LOCAL+ "ubigeo/" +ubigeo + "/" +code)
                    .then(
                        function (response) {
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.log('Error enable Locals');
                            deferred.reject(errResponse);
                        }
                    );            
                return deferred.promise; 
            }                       
            function findElectorByHistorical(dni){
                var deferred = $q.defer();
                $http.get(ConstOnpeAdan.REST_SERVICE_URI_ELECTOR_HISTORICAL+dni)
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
            function validateProcedure(step) {
                var deferred = $q.defer();
                $http.get(ConstOnpeAdan.C_SERVER + "/execute/validate/"+step)
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
            function validateProcess(){
                var deferred = $q.defer();
                $http.get(ConstOnpeAdan.C_SERVER + "/proceso/status/")
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
        }          

        onpeAdanAsignarController.$inject = ['$scope', 'onpeAdanService','ConstOnpeAdan','$timeout', '$interval'];        
        function onpeAdanAsignarController($scope, onpeAdanService, ConstOnpeAdan, $timeout, $interval){
            var vm = this;            
            vm.status = false;     
            vm.locales = [];
            vm.mesas = [];            
            vm.statusStep1 = false;
            
            vm.asignarReasignar = {
                type:null,
                title:'',
                step1:'',
                step2:'',
                buttonSubmit:''
            };            
            vm.removeStep1 = removeStep1;
            
            $scope.$watch('vm.type', function(newValue, oldValue) { 
                if(vm.type != undefined && vm.type != null && vm.type != ''){
                    vm.local = null;
                    setTextForm(vm.type);
                }                  
            }, true);                          
            $scope.$watch('vm.elector', function(newValue, oldValue) { 
                if(vm.elector != undefined && vm.elector != null && vm.elector != ''){
                    setType(vm.elector, vm.type);
                }                  
            }, true);
            $scope.$watch('vm.mesas', function(newValue, oldValue) { 
                if(vm.mesas != undefined && vm.mesas != null && vm.mesas != ''){
                    setType(vm.mesas, vm.type);
                }                  
            }, true);                          
            function setTextForm(type){
                    if(type == ConstOnpeAdan.SECTION_ELECTOR){
                        vm.asignarReasignar.type = 1;
                        vm.asignarReasignar.title = "REASIGNAR";
                        vm.asignarReasignar.step1 = "1.Local de destino";
                    }
                    if(type == ConstOnpeAdan.SECTION_LOCAL || type == ConstOnpeAdan.SECTION_MESA){
                        vm.asignarReasignar.type = 2;
                        vm.asignarReasignar.title = "ASIGNAR";
                        vm.asignarReasignar.step1 = "1.Nro de Mesa/Mesas";
                        vm.asignarReasignar.step2 = "2.Local de destino";
                    }                
            }            
            function setType(data, type){
                if(type == ConstOnpeAdan.SECTION_ELECTOR){
                    if(data.N_VIP == 1){                                         
                        fetchAllLocalByUbigeo(data.UBIGEO, data.NUMELE);
                        vm.status = true;
                    }
                    if(data.N_VIP == 0){
                        vm.status = false;
                        removeStep1();
                    }
                }
                if(type == ConstOnpeAdan.SECTION_LOCAL || type == ConstOnpeAdan.SECTION_MESA){                    
                    fetchAllLocalByUbigeo(vm.localtemp.C_UBIGEO, vm.localtemp.C_CODIGO);                    
                    if(data.length > 0){
                        vm.status = true;
                        vm.mesas = [];
                        vm.mesas = data;
                    }else{
                        vm.status = false;
                    }
                } 
            }               
            function fetchAllLocalByUbigeo(ubigeo, code){                
                onpeAdanService.fetchAllLocalByUbigeo(ubigeo, code)
                    .then(function (d) {
                        setDataLocalByUbigeo(d);
                    }, function (errResponse) {
                        console.error('Error while fetching Locals');
                    });                  
            }            
            function setDataLocalByUbigeo(data){                
                vm.locales = data;
                statusStep(1, true);
            }            
            function statusStep(type, status){
                if(type == 1){
                    vm.statusStep1 = status;
                }
            }            
            function removeStep1(){
                vm.local = null;
            }
                          
        }  
        
        onpeAdanElectorController.$inject = ['$scope', 'onpeAdanService','ConstOnpeAdan','$timeout', '$interval'];        
        function onpeAdanElectorController($scope, onpeAdanService, ConstOnpeAdan, $timeout, $interval){
            var vm = this;
            vm.elector = null;            
            //vm.bolean = null;
            $scope.$watch('vm.data', function(newValue, oldValue) { 
                if(vm.data != undefined && vm.data != null && vm.data != ''){
                    vm.elector = vm.data;
                    if(vm.data.N_VIP == 1){
                        vm.bolean = true;
                    }
                    if(vm.data.N_VIP == 0){
                        vm.bolean = false;
                    }                                         
                }                    
            }, true);
                       
        }   
        
        onpeAdanLineaProcesoController.$inject = ['$scope', 'onpeAdanService','ConstOnpeAdan','$timeout', '$interval'];        
        function onpeAdanLineaProcesoController($scope, onpeAdanService, ConstOnpeAdan, $timeout, $interval){
                
            var vm = this;
            vm.constant= ConstOnpeAdan;
            vm.lineProcess = 0;
            
            $scope.$watch('vm.data', function(newValue, oldValue) { 
                if(vm.data != undefined && vm.data != null){
                    if(vm.data != ''){
                        setLineaProceso(vm.data);
                    }else{
                        console.log('Proceso Linear sin datos');
                    }
                }                    
            }, true);                

            var imagePath = 'static/img/ico-sea.png';

            $scope.LineaTime = [
                {
                    face: imagePath,
                    NombrePaso: 'Configuración',
                    FCfecha: '00/00/00',
                },
                {
                    face: imagePath,
                    NombrePaso: 'Carga Datos + Asignación Soluciones',
                    FCfecha: '00/00/00',
                },
                   {
                    face: imagePath,
                    NombrePaso: 'Asignación de Electores',
                    FCfecha: '00/00/00',
                },
                   {
                    face: imagePath,
                    NombrePaso: 'Conformación de Mesas',
                    FCfecha: '00/00/00',
                    },
                {
                    face: imagePath,
                    NombrePaso: 'BDONE + Ficha Técnicas',
                    FCfecha: '00/00/00',
                }

            ];
            
            function setLineaProceso(status){
                if (status == 1) {
                    vm.lineProcess = '10%';
                } else if (status == 2) {
                    vm.lineProcess = '28%';
                } else if (status == 3) {
                    vm.lineProcess = '51%';
                } else if (status == 4) {
                    vm.lineProcess = '73%';
                } else if (status == 5) {
                    vm.lineProcess = '100%';
                }else {
                    vm.lineProcess = '0%';
                }
            }
            
        }           
  
        onpeAdanElectorHistorialController.$inject = ['$scope', 'onpeAdanService','ConstOnpeAdan','$timeout', '$interval'];        
        function onpeAdanElectorHistorialController($scope, onpeAdanService, ConstOnpeAdan, $timeout, $interval){
                
            var vm = this;
            vm.constant= ConstOnpeAdan;
            vm.electorHistorical = [];
            
            $scope.$watch('vm.data', function(newValue, oldValue) {                
                if(vm.data != undefined && vm.data != null && vm.data != ''){                    
                    findElectorByHistorical(vm.data.NUMELE);
                }                
            }, true);                
            function findElectorByHistorical(dni){
                onpeAdanService.findElectorByHistorical(dni)
                    .then(function (d) {                      
                        vm.electorHistorical = angular.copy(d);                                                 
                    }, function (errResponse) {
                        console.error('Error while fetching Elector');
                    });                
            }

        }
        
        onpeAdanStepProcedureController.$inject = ['$scope', 'onpeAdanService','ConstOnpeAdan','$timeout', '$interval'];        
        function onpeAdanStepProcedureController($scope, onpeAdanService, ConstOnpeAdan, $timeout, $interval){
                
            var vm = this;
            vm.buttons = [];
            vm.activeButton = true;
            vm.obs = false;
            
            $scope.$watch('vm.step', function(newValue, oldValue) {
                if(vm.step != undefined && vm.step != null && vm.step != ''){
                    activeStep(vm.step);

                }
            }, true);
            $scope.$watch('vm.close', function(newValue, oldValue) {
                if(vm.close != undefined && vm.close != null && vm.close != ''){
                    if(vm.close){
                        validateProcess();
                    }
                }
            }, true);                        
            $scope.$watch('vm.electoresPorAsignar', function(newValue, oldValue) {
                if(vm.electoresPorAsignar != undefined && vm.electoresPorAsignar != null && vm.electoresPorAsignar != ''){
                    var data = JSON.parse(vm.electoresPorAsignar);
                    if(vm.step == 9){
                        validateProcedure(vm.step);
                    }
                }
            }, true);
            $scope.$watch('vm.perfilObs', function(newValue, oldValue) {
                if(vm.perfilObs != undefined && vm.perfilObs != null && vm.perfilObs != ''){
                    if(vm.perfilObs == 'true'){
                        vm.obs = true;
                    }
                }
            }, true);            

            var initialize = true; 
            
            function activeStep(step){
                if(step == 6){
                    vm.buttons.push({name:"Generar LEPA", value:'LEPA', on:true, icon:'', icon:'', viewList:false, disabled:false});
                }else if(step == 7 ){
                    vm.buttons.push({name:"Enviar LESA A SIGE", value:'SIGE1', on:true, icon:'send', viewList:false, disabled:false});
                    vm.buttons.push({name:"ACtualizar SIGE", value:'SIGE2', on:true, icon:'sync', viewList:false, disabled:false});
                }else if(step == 8){
                    vm.buttons.push({name:"ASIGNAR SEGÚN HISTÓRICO", value:'HISTORICO', on:true, icon:'timer', viewList:false, disabled:false});
                }else if(step == 9){
                    //getElectoresAsignar();
                }else if(step == 10){
                    vm.buttons.push({name:"Enviar LESA A SIGE", value:'SIGE3', on:true, icon:'send', viewList:false, disabled:false});
                    vm.buttons.push({name:"ACtualizar SIGE", value:'SIGE4', on:true, icon:'sync', viewList:false, disabled:false});
                }else if(step == 11){
                    vm.buttons.push({name:"HISTORICO MANUAL", value:'HISTORICO_MANUAL', on:true, icon:'timer', viewList:false, disabled:false});
                }else if(step == 12){
                    vm.buttons.push({name:"CONFORMACIÓN MESAS + BDONPE", value:'CONFORMACION', on:true, icon:'send', viewList:false, disabled:false});
                }else if(step == 13){
                    validateProcess();
                }else{
                    console.log("Procedimientos Inactivos");
                }
            } 

            function validateProcedure(step){
                onpeAdanService.validateProcedure(step)
                    .then(function (d) {
                        if(d.data > 0){
                            if(initialize)
                            vm.buttons.push({name:"ASIGNAR AUTOMATICAMENTE ("+d.data+") distritos", value:'ASIGNAR1', on:true, icon:'transfer_within_a_station', viewList:true, disabled:true});
                            initialize = false;
                        }else{
                            if(initialize)
                            vm.buttons.push({name:"ASIGNAR AUTOMATICAMENTE", value:'ASIGNAR1', on:true, icon:'transfer_within_a_station', viewList:true, disabled:false});
                            initialize = false;
                        }
                    }, function (errResponse) {
                        console.error('Error while fetching Elector');
                    });                
            }
            
            function validateProcess(){
                onpeAdanService.validateProcess()
                    .then(function (d) {
                        vm.buttons = [];                        
                        if(d.data == 4){
                            if(initialize)
                            vm.buttons.push({name:"CIERRE DEL PROCESO ELECTORAL", value:'CIERRE', on:true, icon:'remove_circle', viewList:false, disabled:true});
                            initialize = false;
                        }else{
                            if(initialize)
                            vm.buttons.push({name:"CIERRE DEL PROCESO ELECTORAL", value:'CIERRE', on:true, icon:'remove_circle', viewList:false, disabled:false});
                            initialize = false;
                        }
                    }, function (errResponse) {
                        console.error('Error while fetching Elector');
                    });                  
            }

        }         
 
})();