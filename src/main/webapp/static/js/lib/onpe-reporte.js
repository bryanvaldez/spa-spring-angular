(function(){
    'use strict';
    
        angular
            .module('onpeReporte', [])
            .directive('onpeReporteMesa', onpeReporteMesa)    
            .directive('onpeReporteLocal', onpeReporteLocal)
            .directive('onpeReporteElectores', onpeReporteElectores)
            .directive('onpeReporteElectoresLow', onpeReporteElectoresLow)
            .directive('onpeReporteElectoresByLocalOrMesa', onpeReporteElectoresByLocalOrMesa)
            .directive('onpeReporteMapa', onpeReporteMapa)
            .constant('ConstOnpeReporte',{
                INIT_MAPA: 'PERU',               
                COD_DEPARTAMENTO:'DPTO_CONT',
                COD_PROVINCIA:'PROV_PAIS',                
                MAPA_PERU: 'peruLow'
            });
                      
        function onpeReporteElectores(){
            var directive = {
                restrict: 'E',
                template:[
                    '<div class="onpeReporteMapContenido"  ng-cloak>',
                        '<div ng-if="vm.verTotalElectores">',
                            '<h2 class="tituloSecundario"><b>TOTAL ELECTORES</b></h2>',
                            '<p ng-bind="vm.electores.total.electores | number" class="onpeReporteMapBarCantidad"></p>', 
                            '<br>',
                        '</div>',
                        '<div ng-if="vm.verPorcentageGenero">',
                            '<h2 class="tituloSecundario">PORCENTAJE <strong>ELECTORES</strong></h2>',
                            '<div class="onpeReporteMapBarGenero">',
                                '<div class="{{vm.clase}}" style="width:{{vm.electores.porcentaje.mujer+\'%\'}}" >',
                                    '<span ng-bind="vm.electores.porcentaje.mujer?vm.electores.porcentaje.mujer + \'% Mujeres\':\'\'"></span>',
                                '</div>',
                                '<div class="{{vm.clase2}}" style="width:{{vm.electores.porcentaje.hombre+\'%\'}}" >',
                                    '<span ng-bind="vm.electores.porcentaje.hombre?vm.electores.porcentaje.hombre + \'% Hombres\':\'\'"></span>',
                                '</div>',
                            '</div>',                            
                        '</div>',                        
                        
                        '<md-list-item ng-if="vm.verCantidadPreferencial" class="onpeReporteMapSubBlockBold" >',                            
                            '<p class="onpeReporteMapSubBlockBoldTag">PREFERENCIALES</p>',
                            '<p class="onpeReporteMapSubBlockData" ng-bind="vm.electores.cantidad.preferencial | number""></p>',
                            '<md-divider ></md-divider>',
                        '</md-list-item>',
                                                                                                                                                                            
                        '<div ng-if="vm.verTotalElectoresGrafico" id="chartElectores"  class="chartElectores" style="width:100%;height:220px;font-size: 11px;"></div>',
                        '<div ng-if="vm.verCantidadTemporal">',
                            '<div class="onpeReporteMapContenidoSubTitle">ELECTORES <strong>EN LOCAL TEMPORAL</strong></div>',
                            '<p ng-bind="vm.electores.cantidad.temporal | number" class="onpeReporteMapBarCantidad"></p>',
                        '</div>',
                        '<md-list-item ng-if="vm.verTotalCpp" class="onpeReporteMapSubBlockBold" >',                            
                            '<p class="onpeReporteMapSubBlockBoldTag">TOTAL ELECTORES DE CCPP</p>',
                            '<p class="onpeReporteMapSubBlockData" ng-bind="vm.electores.total.cpp | number"></p>',                                                        
                            '<md-divider ></md-divider>',
                        '</md-list-item>',
                        '<md-list-item ng-if="vm.verElectoresPorAsignar" class="onpeReporteMapSubBlockBold" >',                            
                            '<p class="onpeReporteMapSubBlockBoldTag">ELECTORES POR ASIGNAR</p>',
                            '<p class="onpeReporteMapSubBlockData" ng-bind="vm.electores.total.electoresPorAsignar | number"></p>',                                                           
                            '<md-divider ></md-divider>', 
                        '</md-list-item>',    
                    '</div>'     
                ].join(''), 
                scope:{
                    data :'=',
                    activeGraphic: '=',
                    verTotalElectores: '=',
                    verPorcentageGenero: '=',
                    verTotalElectoresGrafico: '=', 
                    verCantidadPreferencial: '=',
                    verCantidadTemporal: '=',
                    verTotalCpp:'=',
                    verElectoresPorAsignar:'='
                },
                controller: onpeReporteControllerElectores,
                controllerAs: 'vm',
                bindToController: true
            };
            return directive;                     
        }  
        function onpeReporteElectoresLow(){
            var directive = {
                restrict: 'E',
                template:[
                    '<div class="onpeReporteMapContenido"  ng-cloak>',                        
                        '<div ng-if="vm.verTotalNoAsignados">',
                            '<h2 class="tituloSecundario">ELECTORES <strong>POR ASIGNAR</strong></h2>',                            
                            '<div class="TextoConBotonContenedorResult">',
                                '<p ng-bind="vm.electores.total.noAsignados | number" class="onpeReporteMapBarCantidad"></p>',
                                '<md-button ng-if="vm.verButtonTotalNoAsignados" ng-click="vm.btnTotalNoAsignados()" ng-disabled="vm.electores.total.noAsignados===0" class="md-fab md-mini estilosBotonGeneral">',
                                            '<i class="material-icons">&#xE2C4;</i>',
                                   ' </md-button>',                            
                            '</div>',
                        '</div>',  
                                                                        
                        '<div ng-if="vm.verPorcentageGeneroCpp">',
                            '<h2 class="tituloSecundario">PORCENTAJE <strong>ELECTORES CCPP</strong></h2>',
                            '<div class="onpeReporteMapBarGenero">',
                                '<div class="{{vm.clase}}" style="width:{{vm.electores.porcentaje.mujerCPP+\'%\'}}" >',
                                    '<span ng-bind="vm.electores.porcentaje.mujerCPP?vm.electores.porcentaje.mujerCPP + \'% Mujeres\':\'\'"></span>',
                                '</div>',
                                '<div class="{{vm.clase2}}" style="width:{{vm.electores.porcentaje.hombreCPP+\'%\'}}" >',
                                    '<span ng-bind="vm.electores.porcentaje.hombreCPP?vm.electores.porcentaje.hombreCPP + \'% Hombres\':\'\'"></span>',
                                '</div>',
                            '</div>',
                        '</div>',                                                
                        
                        
                        '<md-list>',
                            '<md-list-item ng-if="vm.verCantidadPreferencial" class="onpeReporteMapSubBlockBold" >',
                                '<p class="onpeReporteMapSubBlockBoldTag">PREFERENCIALES</p>',
                                '<p class="onpeReporteMapSubBlockData" ng-bind="vm.electores.cantidad.preferencial | number""></p>',                                
                            '</md-list-item>',
                        '</md-list>',                                                                                                                                                                              
                    '</div>'     
                ].join(''), 
                scope:{
                    data :'=',
                    verTotalNoAsignados: '=', verButtonTotalNoAsignados: '=', btnTotalNoAsignados: '&', 
                    verCantidadPreferencial: '=',
                    verPorcentageGeneroCpp: '='                   
                },
                controller: onpeReporteControllerElectoresLow,
                controllerAs: 'vm',
                bindToController: true
            };
            return directive;                     
        }          
        function onpeReporteMesa(){
            var directive = {
                restrict: 'E',
                template:[
                    '<div class="onpeReporteMapContenido"  ng-cloak>',                                                                
                        '<div ng-if="vm.verTotalMesas">',
                            '<h2 class="tituloSecundario"><b>TOTAL MESAS</b></h2>',
                            '<p ng-bind="vm.mesas.total.ms | number" class="onpeReporteMapBarCantidad"></p>',
                            '<br>',
                        '</div>',
                        
                        '<md-list-item ng-if="vm.verTotalMesasEstimadas" class="onpeReporteMapSubBlockBold" >',                            
                            '<p class="onpeReporteMapSubBlockBoldTag">MESAS ESTIMADAS</p>',
                            '<p class="onpeReporteMapSubBlockData" ng-bind="vm.mesas.total.estimadas | number"></p>',                                                        
                            '<md-divider ></md-divider>',                            
                        '</md-list-item>',
                                                                         
                        '<md-list-item ng-click="vm.btnReglasMesas()" class="md-2-line onpeReporteMapBlockTag" ng-if="vm.verReglasMesas">',                            
                            '<div class="md-list-item-text" style="line-height: 20px;">',
                                '<h1>REGLAS</h1>',
                                '<span class="md-caption">PARA LA CONFORMACIÓN DE MESAS DE SUFRAGIO</span>',
                            '</div>',
                            '<md-button ng-click="vm.btnReglasMesas()" class="onpeReporteMapSubBlockBtn"><i class="fa fa-arrow-right" aria-label="true" aria-hidden="true"></i></md-button>',                           
                            '<md-divider ></md-divider>',
                        '</md-list-item>',                                                                  
                        
                        '<md-list-item ng-if="vm.verTotalCpp" class="onpeReporteMapSubBlockBold" >',                            
                            '<p class="onpeReporteMapSubBlockBoldTag">TOTAL MESAS DE CCPP</p>',
                            '<p class="onpeReporteMapSubBlockData" ng-bind="vm.mesas.total.cpp | number"></p>',                                                        
                            '<md-divider ></md-divider>',
                        '</md-list-item>', 
                        
                    '</div>'   
                ].join(''),
                scope:{
                    data :'=',
                    verTotalMesas:'=',
                    verTotalMesasEstimadas:'=',
                    verTotalCpp:'=',
                    verReglasMesas: '=', btnReglasMesas: '&'                    
                },
                link: link,
                controller: onpeReporteControllerMesas,
                controllerAs: 'vm',
                bindToController: true
            };
            return directive;
            
            function link(scope, element, attrs, ctrl) {          
            }             
        }        
        function onpeReporteLocal(){
            var directive = {
                restrict: 'E',
                template:[
                    '<div class="onpeReporteMapContenido"  ng-cloak>',
                        '<div ng-if="vm.verTotalLocal">',
                            '<h2 class="tituloSecundario"><b>TOTAL LOCALES</b></h2>',
                            '<p ng-bind="vm.locales.total.lv | number" class="onpeReporteMapBarCantidad"></p>',
                            '<br>',
                        '</div>',
                        '<div ng-if="vm.verBarraPorcentajeLocal">',
                            '<h2 class="tituloSecundario"><b>TOTAL LOCALES</b></h2>',
                            '<div class="onpeReporteMapBarLocales">',
                                '<div class="{{vm.clase}}" style="width:{{vm.locales.porcentaje.lvCompleto + \'%\'}}">',
                                    '<span ng-bind="vm.locales.porcentaje.lvCompleto?vm.locales.porcentaje.lvCompleto + \'% Locales\':\'\'"></span>',
                                '</div>',
                            '</div>',                            
                        '</div>',                        
                        
                        '<md-list-item ng-if="vm.verCrearLocal" class="onpeReporteMapBlock" >',                                                                            
                            '<p class="onpeReporteMapBlockTag">Crear un <strong>NUEVO</strong> Local de Votación</p>',
                            '<md-button class="md-fab md-mini md-primary estilosBotonGeneral " ng-click="vm.btnCrearLocal()" ng-disabled="vm.disabledButtonCrearLocal" aria-label="crear">', 
                                '<i class="material-icons">&#xE145;</i>',
                            '</md-button>',                            
                            '<md-divider ></md-divider>',
                        '</md-list-item>',                                                    
                        '<md-list-item class="onpeReporteMapBlock" ng-if="vm.verLocalesDeshabilitados || vm.verLocalesIncompletos">',                            
                            '<p class="onpeReporteMapBlockTag">Locales de Votación:</p>', 
                            '<md-divider></md-divider>',
                        '</md-list-item>',                          
                        '<md-list-item ng-if="vm.verLocalesIncompletos" ng-click="vm.btnLocalesIncompletos()" class="onpeReporteMapSubBlock" >',                            
                            '<p class="onpeReporteMapSubBlockTag" >Datos Incompletos</p>',
                            '<md-button ng-click="vm.btnLocalesIncompletos()" class="onpeReporteMapSubBlockBtn" >{{vm.locales.cantidad.lvIncompleto}}<i class="fa fa-arrow-right" aria-hidden="true"></i></md-button>',                                                        
                            '<md-divider ></md-divider>',
                        '</md-list-item>',
                        '<md-list-item ng-if="vm.verLocalesDeshabilitados" ng-click="vm.btnLocalesDeshabilitados()" class="onpeReporteMapSubBlock" >',                            
                            '<p class="onpeReporteMapSubBlockTag">Deshabilitado</p>',
                            '<md-button ng-click="vm.btnLocalesDeshabilitados()" class="onpeReporteMapSubBlockBtn" >{{vm.locales.cantidad.lvDeshabilitado}}<i class="fa fa-arrow-right" aria-hidden="true"></i></md-button>',                                                        
                            '<md-divider ></md-divider>',
                        '</md-list-item>',
                        '<md-list-item ng-if="vm.verNuevosDistritos" class="onpeReporteMapSubBlockBold" >',                            
                            '<p class="onpeReporteMapSubBlockBoldTag">NUEVOS DISTRITOS</p>',                                
                            '<p class="onpeReporteMapSubBlockData" ng-bind="vm.locales.total.nuevoDistrito"></p>',                            
                            '<md-divider ></md-divider>',
                        '</md-list-item>',                        
                        '<md-list-item ng-if="vm.verTotalCpp" class="onpeReporteMapSubBlockBold" >',                            
                            '<p class="onpeReporteMapSubBlockBoldTag">TOTAL LOCALES DE CCPP</p>',
                            '<p class="onpeReporteMapSubBlockData" ng-bind="vm.locales.total.cpp | number"></p>',                                                        
                        '</md-list-item>',
                    '</div>'
                ].join(''),
                scope:{
                    data :'=',
                    verTotalLocal:'=',
                    verBarraPorcentajeLocal:'=',
                    verCrearLocal: '=', disabledButtonCrearLocal:'=', btnCrearLocal: '&',
                    verLocalesIncompletos: '=', btnLocalesIncompletos: '&',
                    verLocalesDeshabilitados: '=', btnLocalesDeshabilitados: '&',
                    verNuevosDistritos:'=',
                    verTotalCpp:'='
                },
                link: link,
                controller: onpeReporteControllerLocales,
                controllerAs: 'vm',
                bindToController: true
            };
            return directive;
            
            function link(scope, element, attrs, ctrl) {          
            }            
        }
        function onpeReporteElectoresByLocalOrMesa(){
            var directive = {
                restrict: 'E',
                template:[
                    '<div class="onpeReporteMapContenido"  ng-cloak>',
                        '<div ng-if="vm.verTotalElectores">',
                            '<h2 class="tituloSecundario"><b>TOTAL ELECTORES</b></h2>',
                            '<p ng-bind="vm.electoresByLocalOrMesa.total.electores | number" class="onpeReporteMapBarCantidad"></p>', 
                            '<br>',
                        '</div>',
                        
                        '<div ng-if="vm.verTotalMesas">',
                            '<h2 class="tituloSecundario">MESAS <strong>CAPACIDAD / ACTUALIZADAS</strong></h2>',                            
                            '<p ng-bind="vm.electoresByLocalOrMesa.total.mesas" class="onpeReporteMapBarCantidad"></p>',
                        '</div>',                                                
                        
                        '<div ng-if="vm.verDetalleElectores">',
                            '<h2 class="tituloSecundario">CANTIDAD DE <strong>ELECTORES</strong></h2>',
                            '<div  class="contenidoTexto">',
                                '<p class="onpeReporteMapSubBlockBoldTag">Capacidad</p>',
                                '<p class="onpeReporteMapSubBlockData" ng-bind="vm.electoresByLocalOrMesa.cantidad.capacidad | number""></p>',                           
                            '</div>',
                            '<div class="contenidoTexto">',
                                '<p class="onpeReporteMapSubBlockBoldTag">Asignados</p>',
                                '<p class="onpeReporteMapSubBlockData" ng-bind="vm.electoresByLocalOrMesa.cantidad.asignados | number""></p>',                           
                            '</div>',                            
                        '</div>',
                                                                                                                                              
                        '<div ng-if="vm.verPorcentageGenero">',
                            '<h2 class="tituloSecundario">PORCENTAJE <strong>ELECTORES</strong></h2>',
                            '<div class="onpeReporteMapBarGenero">',
                                '<div class="{{vm.clase}}" style="width:{{vm.electoresByLocalOrMesa.porcentaje.mujer+\'%\'}}" >',
                                    '<span ng-bind="vm.electoresByLocalOrMesa.porcentaje.mujer?vm.electoresByLocalOrMesa.porcentaje.mujer + \'% Mujeres\':\'\'"></span>',
                                '</div>',
                                '<div class="{{vm.clase2}}" style="width:{{vm.electoresByLocalOrMesa.porcentaje.hombre+\'%\'}}" >',
                                    '<span ng-bind="vm.electoresByLocalOrMesa.porcentaje.hombre?vm.electoresByLocalOrMesa.porcentaje.hombre + \'% Hombres\':\'\'"></span>',
                                '</div>',
                            '</div>',                            
                        '</div>', 
                        
                        '<md-list-item ng-if="vm.verCantidadPreferencial" class="onpeReporteMapSubBlockBold" >',                            
                            '<p class="onpeReporteMapSubBlockBoldTag">PREFERENCIALES</p>',
                            '<p class="onpeReporteMapSubBlockData" ng-bind="vm.electoresByLocalOrMesa.cantidad.preferencial | number""></p>',
                            '<md-divider ></md-divider>',
                        '</md-list-item>',
                        
                        '<div ng-if="vm.verTotalElectoresGrafico" id="chartElectoresByLocalOrMesa"  class="chartElectores" style="width:100%;height:220px;font-size: 11px;"></div>',                        
                        '</md-list-item>',                            
                    '</div>'     
                ].join(''), 
                scope:{
                    data :'=',
                    activeGraphic: '=',
                    verTotalElectores: '=',
                    verTotalMesas: '=',
                    verDetalleElectores: '=',
                    verPorcentageGenero: '=',
                    verTotalElectoresGrafico: '=', 
                    verCantidadPreferencial: '=',                                                            
                },
                controller: onpeReporteControllerElectoresByLocalOrMesa,
                controllerAs: 'vm',
                bindToController: true
            };
            return directive;
        }
        function onpeReporteMapa(){
            var directive = {
                restrict: 'E',
                template:[
                    '<div class="divi"></div>',
                    '<article>',
                        '<div style="width: 100%;height: 500px;" id="chartdiv"></div>',
                    '</article>',
                    '<div class="divi"></div>'
                ].join(''),
                scope:{
                    mapa : '='
                },
                link: link,
                controller: onpeReporteControllerMapa,
                controllerAs: 'vm',
                bindToController: true
            };
            return directive;
            
            function link(scope, element, attrs, ctrl) {          
            }             
        }      
       
        onpeReporteControllerElectores.$inject = ['$scope','ConstOnpeReporte','$timeout', '$interval'];        
        function onpeReporteControllerElectores($scope, ConstOnpeReporte, $timeout, $interval){

            var vm = this;
            var initializing = true; 
            var compileGraph = false;
            initReporteElector();
            
            $scope.$watch('vm.data', function(newValue, oldValue) {                                
                if(initializing){                    
                    initializing = false;
                    setDataElector(vm.data);
                }else{                    
                    if(vm.activeGraphic){
                        graphElectoresTotal();
                    }                    
                    setDataElector(vm.data);
                    refreshBar(true);
                    if(compileGraph){
                        refreshGraphic();                          
                    }
                }

//                if(vm.data !== undefined && vm.data !== null && vm.data !== ''){                    
//                    if(vm.activeGraphic){
//                        graphElectoresTotal();
//                    }                    
//                    setDataElector(vm.data);
//                    refreshBar(true);
//                    if(compileGraph){
//                        refreshGraphic();                          
//                    }                    
//                }                                    
            }, true);
            
            function initReporteElector(){
                vm.electores = {
                    total:{
                        electores:0,
                        electoresPorAsignar:0,
                        cpp:0
                    },
                    cantidad:{           
                        hombre:0,
                        mujer:0,
                        preferencial:0,
                        adultoMayor:0,
                        gestante:0,
                        discapacitado:0,
                        temporal:0,
                        segmento:{
                            edad:[
                                {"rango": "17-30","visits": 0}, 
                                {"rango": "31-40","visits": 0}, 
                                {"rango": "41-50","visits": 0}, 
                                {"rango": "51-60","visits": 0}, 
                                {"rango": "61-70","visits": 0},
                                {"rango": "71 a+","visits": 0}                        
                            ]
                        }
                    },
                    porcentaje:{
                        hombre:null,
                        mujer:null,
                        preferencial:null,
                        adultoMayor:null,
                        gestante:null,
                        discapacitado:null,
                        temporal:null,
                        segmento:{
                            edad:[
                                {"rango": "17-30","visits": 0}, 
                                {"rango": "31-40","visits": 0}, 
                                {"rango": "41-50","visits": 0}, 
                                {"rango": "51-60","visits": 0}, 
                                {"rango": "61-70","visits": 0},
                                {"rango": "71 a+","visits": 0}                            
                            ]
                        }            
                    }
                }        
            }  
            function setDataElector(data){
                startCount('total','electores',data.N_TOTAL_EH);
                //vm.electores.total.electores = data.N_TOTAL_EH?data.N_TOTAL_EH:0;                 
                vm.electores.total.electoresPorAsignar = data.N_ELECTORES_X_ASIGNAR?data.N_ELECTORES_X_ASIGNAR:0;                
                vm.electores.total.cpp = data.N_TOTAL_EH_CCPP?data.N_TOTAL_EH_CCPP:(data.N_TOTAL_CCPP?data.N_TOTAL_CCPP:0);                
                vm.electores.cantidad.hombre = data.N_CANT_EH_HOMBRE?data.N_CANT_EH_HOMBRE:0;
                vm.electores.cantidad.mujer = data.N_CANT_EH_MUJER?data.N_CANT_EH_MUJER:0;
                startCount('cantidad','preferencial',data.N_CANT_EH_PREFERENCIAL);
                //vm.electores.cantidad.preferencial = data.N_CANT_EH_PREFERENCIAL?data.N_CANT_EH_PREFERENCIAL:0;
                vm.electores.cantidad.adultoMayor = data.N_CANT_EH_ADULTO_MAYOR?data.N_CANT_EH_ADULTO_MAYOR:0;
                vm.electores.cantidad.gestante = data.N_CANT_EH_GESTANTE?data.N_CANT_EH_GESTANTE:0;
                vm.electores.cantidad.discapacitado = data.N_CANT_EH_DISCAPACITADO?data.N_CANT_EH_DISCAPACITADO:0;
                startCount('cantidad','temporal',data.N_CANT_EH_TEMPORAL);
                //vm.electores.cantidad.temporal = data.N_CANT_EH_TEMPORAL?data.N_CANT_EH_TEMPORAL:0;
                vm.electores.cantidad.segmento.edad =[
                    {"rango": "17-30","visits": data.N_CANT_RANGO_EDAD_A?data.N_CANT_RANGO_EDAD_A:0}, 
                    {"rango": "31-40","visits": data.N_CANT_RANGO_EDAD_B?data.N_CANT_RANGO_EDAD_B:0}, 
                    {"rango": "41-50","visits": data.N_CANT_RANGO_EDAD_C?data.N_CANT_RANGO_EDAD_C:0}, 
                    {"rango": "51-60","visits": data.N_CANT_RANGO_EDAD_D?data.N_CANT_RANGO_EDAD_D:0}, 
                    {"rango": "61-70","visits": data.N_CANT_RANGO_EDAD_E?data.N_CANT_RANGO_EDAD_E:0},
                    {"rango": "71 a+","visits": data.N_CANT_RANGO_EDAD_F?data.N_CANT_RANGO_EDAD_F:0}
                ]        
                vm.electores.porcentaje.hombre = data.N_PORC_EH_HOMBRE?data.N_PORC_EH_HOMBRE:0;
                vm.electores.porcentaje.mujer = data.N_PORC_EH_MUJER?data.N_PORC_EH_MUJER:0;
                vm.electores.porcentaje.preferencial = data.N_PORC_EH_PREFERENCIAL?data.N_PORC_EH_PREFERENCIAL:0;
                vm.electores.porcentaje.adultoMayor = data.N_PORC_EH_ADULTO_MAYOR?data.N_PORC_EH_ADULTO_MAYOR:0;
                vm.electores.porcentaje.gestante = data.N_PORC_EH_GESTANTE?data.N_PORC_EH_GESTANTE:0;
                vm.electores.porcentaje.discapacitado = data.N_PORC_EH_DISCAPACITADO?data.N_PORC_EH_DISCAPACITADO:0;
                vm.electores.porcentaje.temporal = data.N_PORC_EH_TEMPORAL?data.N_PORC_EH_TEMPORAL:0;
                vm.electores.porcentaje.segmento.edad =[
                    {"rango": "17-30","visits": data.N_PORC_RANGO_EDAD_A?data.N_PORC_RANGO_EDAD_A:0}, 
                    {"rango": "31-40","visits": data.N_PORC_RANGO_EDAD_B?data.N_PORC_RANGO_EDAD_B:0}, 
                    {"rango": "41-50","visits": data.N_PORC_RANGO_EDAD_C?data.N_PORC_RANGO_EDAD_C:0}, 
                    {"rango": "51-60","visits": data.N_PORC_RANGO_EDAD_D?data.N_PORC_RANGO_EDAD_D:0}, 
                    {"rango": "61-70","visits": data.N_PORC_RANGO_EDAD_E?data.N_PORC_RANGO_EDAD_E:0},
                    {"rango": "71 a+","visits": data.N_PORC_RANGO_EDAD_F?data.N_PORC_RANGO_EDAD_F:0}
                ]
            }  
            function refreshGraphic(){
                vm.chartElectores.dataProvider = vm.electores.cantidad.segmento.edad;
                vm.chartElectores.validateData();
                vm.chartElectores.animateAgain();     
            }                  
            function graphElectoresTotal(){ 
                vm.chartElectores = AmCharts.makeChart( "chartElectores", {
                    "type": "serial",
                    "theme": "light",
                    "dataProvider": vm.electores.cantidad.segmento.edad,
                    "valueAxes": [ {
                        "gridColor": "#000",
                        "gridAlpha": 0.5,
                        "dashLength": 0
                    } ],
                    "gridAboveGraphs": true,
                    "startDuration": 1,
                    "graphs": [ {
                        "balloonText": "[[category]]: <b>[[value]]</b>",
                        "fillAlphas": 0.8,
                        "lineAlpha": 0.2,
                        "type": "column",
                        "valueField": "visits",
                        "labelText": " ",
                        "labelPosition": "inside",
                        "labelFunction": function(item) {
                            //Modificado por Scaner - Agregando dos decimales
                            if(vm.chartElectores != undefined){
                                var total = 0;
                                for(var i = 0; i < vm.chartElectores.dataProvider.length; i++) {
                                  total += vm.chartElectores.dataProvider[i][item.graph.valueField];
                                }
                                var percent = ( item.values.value * 100 ) / total ;
                                percent = percent.toFixed(2);
                                return percent + "%";                                
                            }
                            
                        }              
                    } ],
                    "valueAxes": [ {
                        "title": "Edades",
                        "axisAlpha": 0,
                        "gridAlpha": 0.1,
                        "labelsEnabled": false            
                    } ],     
                    "chartCursor": {
                        "categoryBalloonEnabled": false,
                        "cursorAlpha": 0,
                        "zoomable": false
                    },
                    "categoryField": "rango",
                    "categoryAxis": {
                        "gridPosition": "start",
                        "gridAlpha": 0,
                        "tickPosition": "start",
                        "tickLength": 20
                    }     
                });
                compileGraph = true;
            }
            function refreshBar(status){
                vm.clase ='';
                vm.clase2 ='';
                $timeout(function() {
                    if(status){
                        vm.clase ='onpeReporteMapBarLeft';
                        vm.clase2 ='onpeReporteMapBarRight';            
                    }else{
                        vm.clase ='option-off';
                        vm.clase2 ='option-off';            
                    }
                });
            }            
            function startCount(obj,attr,data){
                if(data != 0 && data != null){
                    var listener = $scope.$watch('fin', function(val){
                        var inicio = 0;
                        var currentTime = 0;
                        var stop = $interval(()=>{ 
                          var counter = easeInQuad(currentTime, inicio, data, 2000);
                          if (counter >= parseFloat(data)) {
                            vm.electores[obj][attr] = filter(data, $scope.accuracy || 0);
                            $interval.cancel(stop);
                          } else {
                            vm.electores[obj][attr] = filter(counter, $scope.accuracy || 0);
                            currentTime += 200;
                          }
                        }, 50);             
                    });                    
                }else if(data == 0){
                    vm.electores[obj][attr] = 0;
                }else{
                    vm.electores[obj][attr] = 0;
                }
                function easeInQuad(t, b, c, d) {
                  return c*(t/=d)*t + b;
                };

                function filter(num, accuracy){
                  return parseFloat(parseFloat(num).toFixed(accuracy || 0));   
                }                
            }                             
        }
        
        onpeReporteControllerElectoresLow.$inject = ['$scope','ConstOnpeReporte','$timeout', '$interval'];        
        function onpeReporteControllerElectoresLow($scope, ConstOnpeReporte, $timeout, $interval){

            var vm = this;
            var initializing = true; 
            initReporteElector();
            
            $scope.$watch('vm.data', function(newValue, oldValue) {
//                if(initializing){
//                    initializing = false;                    
//                    setDataElector(null);
//                }else{
//                    setDataElector(vm.data);
//                    refreshBar(true);
//                }
                if(vm.data !== undefined && vm.data !== null && vm.data !== ''){
                    setDataElector(vm.data);
                    refreshBar(true);                   
                } else {
                    setDataElector(null);
                }                                    
            }, true);
            
            function initReporteElector(){
                vm.electores = {
                    total:{
                        noAsignados:0
                    },
                    cantidad:{
                        preferencial:0                        
                    },
                    porcentaje:{
                        hombreCPP:0,
                        mujerCPP:0        
                    }
                };        
            }  
            function setDataElector(data){
                var type= typeof(data);
                if(type=="string"){
                    data = JSON.parse(data)
                    startCount('total','noAsignados',data.N_CANT_EH_NO_ASIGNADOS);
                    startCount('cantidad','preferencial',data.N_CANT_EH_PREFERENCIAL);                    
                    vm.electores.porcentaje.hombreCPP = data.N_PORC_HOMBRES_CPP;
                    vm.electores.porcentaje.mujerCPP = data.N_PORC_MUJERES_CPP;
                }else{
                    startCount('total','noAsignados',0);
                    startCount('cantidad','preferencial',0);
                    vm.electores.porcentaje.hombreCPP = 0;
                    vm.electores.porcentaje.mujerCPP = 0;
                }
            }               
            function refreshBar(status){
                vm.clase ='';
                vm.clase2 ='';
                $timeout(function() {
                    if(status){
                        vm.clase ='onpeReporteMapBarLeft';
                        vm.clase2 ='onpeReporteMapBarRight';            
                    }else{
                        vm.clase ='option-off';
                        vm.clase2 ='option-off';            
                    }
                });
            }            
            function startCount(obj,attr,data){
                if(data != 0 && data != null){
                    var listener = $scope.$watch('fin', function(val){
                        var inicio = 0;
                        var currentTime = 0;
                        var stop = $interval(()=>{ 
                          var counter = easeInQuad(currentTime, inicio, data, 2000);
                          if (counter >= parseFloat(data)) {
                            vm.electores[obj][attr] = filter(data, $scope.accuracy || 0);
                            $interval.cancel(stop);
                          } else {
                            vm.electores[obj][attr] = filter(counter, $scope.accuracy || 0);
                            currentTime += 200;
                          }
                        }, 50);             
                    });                    
                }else if(data == 0){
                    vm.electores[obj][attr] = 0;
                }else{
                    vm.electores[obj][attr] = 0;
                }
                function easeInQuad(t, b, c, d) {
                  return c*(t/=d)*t + b;
                };

                function filter(num, accuracy){
                  return parseFloat(parseFloat(num).toFixed(accuracy || 0));   
                }                
            }                             
        }        
        
        onpeReporteControllerLocales.$inject = ['$scope','ConstOnpeReporte','$timeout', '$interval'];        
        function onpeReporteControllerLocales($scope, ConstOnpeReporte, $timeout, $interval){
            var vm = this;
            var initializing = true;
            initReporteLocal();
                       
            $scope.$watch('vm.data', function(newValue, oldValue) { 
//                if(initializing){
//                    initializing = false;
//                }else{
//                    setDataLocal(vm.data);
//                }
                if(vm.data !== undefined && vm.data !== null){                    
                    setDataLocal(vm.data);
                    refreshBar(true);
                }                    
            }, true);            
   
            function initReporteLocal(){
                vm.locales = {
                    total:{
                        nuevoDistrito:0,
                        cpp:0,
                        lv:0
                    },
                    cantidad:{
                        lvCompleto:0,
                        lvTemporal:0,
                        lvExtra:0,
                        lvIncompleto:0,
                        lvDeshabilitado:0 
                    },
                    porcentaje:{
                        lvCompleto:0,
                        lvTemporal:0,
                        lvExtra:0,
                        lvIncompleto:0,
                        lvDeshabilitado:0,
                        lvSea:0,
                        lvVe:0,
                        lvConvencional:0
                    }
                }
            }  
            function setDataLocal(data){
                if(data.N_TOTAL_LV){
                    startCount('total','lv',data.N_TOTAL_LV);   
                }else{
                    vm.locales.total.lv = 0;
                }
                vm.locales.total.nuevoDistrito = data.N_TOTAL_NUEVO_DISTRITO?data.N_TOTAL_NUEVO_DISTRITO:'no data';
                //vm.locales.total.cpp = data.N_TOTAL_CCPP?data.N_TOTAL_CCPP:'no data';
                //vm.locales.total.cpp = data.N_TOTAL_EH_CCPP?data.N_TOTAL_EH_CCPP:'no data';                
                vm.locales.total.cpp = data.N_TOTAL_LV_CCPP?data.N_TOTAL_LV_CCPP:(data.N_TOTAL_CCPP?data.N_TOTAL_CCPP:0);
                vm.locales.cantidad.lvCompleto = data.N_CANT_LV_COMPLETO?data.N_CANT_LV_COMPLETO:'no data';
                vm.locales.cantidad.lvTemporal = data.N_CANT_LV_TEMPORAL?data.N_CANT_LV_TEMPORAL:'no data';
                vm.locales.cantidad.lvExtra = data.N_CANT_LV_EXTRA?data.N_CANT_LV_EXTRA:'no data';
                vm.locales.cantidad.lvIncompleto = data.N_CANT_LV_INCOMPLETO?data.N_CANT_LV_INCOMPLETO:'no data';
                vm.locales.cantidad.lvDeshabilitado = data.N_CANT_LV_DESHABILITADO?data.N_CANT_LV_DESHABILITADO:'no data';
                vm.locales.porcentaje.lvCompleto = data.N_PORC_LV_COMPLETO?data.N_PORC_LV_COMPLETO:0;
                vm.locales.porcentaje.lvTemporal = data.N_PORC_LV_TEMPORAL?data.N_PORC_LV_TEMPORAL:'no data';
                vm.locales.porcentaje.lvExtra = data.N_PORC_LV_EXTRA?data.N_PORC_LV_EXTRA:'no data';
                vm.locales.porcentaje.lvIncompleto = data.N_PORC_LV_INCOMPLETO?data.N_PORC_LV_INCOMPLETO:'no data';
                vm.locales.porcentaje.lvDeshabilitado = data.N_PORC_LV_DESHABILITADO?data.N_PORC_LV_DESHABILITADO:'no data';
                vm.locales.porcentaje.lvSea = data.N_PORC_LV_SEA?data.N_PORC_LV_SEA:'no data';
                vm.locales.porcentaje.lvVe = data.N_PORC_LV_VE?data.N_PORC_LV_VE:'no data';
                vm.locales.porcentaje.lvConvencional = data.N_PORC_LV_CONVENCIONAL?data.N_PORC_LV_CONVENCIONAL:'no data';
            }
            function refreshBar(status){
                vm.clase ='';
                $timeout(function() {
                    if(status){
                        vm.clase ='onpeReporteMapBarLeft';          
                    }else{
                        vm.clase ='option-off';         
                    }
                });
            }             
            function startCount(obj,attr,data){
                if(data != 0 && data != null){
                    var listener = $scope.$watch('fin', function(val){
                        var inicio = 0;
                        var currentTime = 0;
                        var stop = $interval(()=>{ 
                          var counter = easeInQuad(currentTime, inicio, data, 2000);
                          if (counter >= parseFloat(data)) {
                            vm.locales[obj][attr] = filter(data, $scope.accuracy || 0);
                            $interval.cancel(stop);
                          } else {
                            vm.locales[obj][attr] = filter(counter, $scope.accuracy || 0);
                            currentTime += 200;
                          }
                        }, 50);             
                    });                    
                }else if(data == 0){
                    vm.electores[obj][attr] = 0;
                }else{
                    vm.electores[obj][attr] = 0;
                }
                function easeInQuad(t, b, c, d) {
                  return c*(t/=d)*t + b;
                };

                function filter(num, accuracy){
                  return parseFloat(parseFloat(num).toFixed(accuracy || 0));   
                }                
            }             
        }           
        
        onpeReporteControllerMesas.$inject = ['$scope','ConstOnpeReporte','$timeout', '$interval'];        
        function onpeReporteControllerMesas($scope, ConstOnpeReporte, $timeout, $interval){
            var vm = this;
            var initializing = true; 
            initReporteMesa();           
            $scope.$watch('vm.data', function(newValue, oldValue) {                
//                if(vm.data != null && vm.data != "" && vm.data != undefined){
//                    setDataMesa(vm.data);
//                }
                if(initializing){
                    initializing = false;
                    setDataMesa(vm.data);
                }else{                    
                    setDataMesa(vm.data);
                }
            }, true);
            
            function initReporteMesa(){
                vm.mesas = {
                    total:{
                        regla:0,
                        cpp:0,
                        ms:0,
                        estimadas:0
                    },
                    cantidad:{
                        msCompleto:0,
                        msTemporal:0,
                        msExtra:0                
                    },
                    porcentaje:{
                        msCompleto:0,
                        msTemporal:0,
                        msExtra:0,
                        msSea:0,
                        msVe:0,
                        msConvencional:0
                    }
                }
            } 
            function setDataMesa(data){                
                //startCount('total','ms',data.N_TOTAL_MS);
                if (data.N_TOTAL_MS === undefined) {
                    startCount('total','ms',data.N_TOTAL_MESAS!=null?data.N_TOTAL_MESAS:0);
                } else {
                    startCount('total','ms',data.N_TOTAL_MS!=null?data.N_TOTAL_MS:0);
                }                
                //vm.mesas.total.ms = data.N_TOTAL_MS!=null?data.N_TOTAL_MS:'no data';                  
                vm.mesas.total.estimadas = data.N_TOTAL_MS_ESTIMADAS!=null?data.N_TOTAL_MS_ESTIMADAS:'0';                
                vm.mesas.total.regla = data.N_TOTAL_REGLA!=null?data.N_TOTAL_REGLA:'no data';                                
                vm.mesas.total.cpp = data.N_TOTAL_MESAS_CCPP?data.N_TOTAL_MESAS_CCPP:(data.N_TOTAL_CCPP?data.N_TOTAL_CCPP:0);                
                vm.mesas.cantidad.msCompleto = data.N_CANT_MS_COMPLETA!=null?data.N_CANT_MS_COMPLETA:'no data';
                vm.mesas.cantidad.msTemporal = data.N_CANT_MS_TEMPORAL!=null?data.N_CANT_MS_TEMPORAL:'no data';
                vm.mesas.cantidad.msExtra = data.N_CANT_MS_EXTRA!=null?data.N_CANT_MS_EXTRA:'no data';        
                vm.mesas.porcentaje.msCompleto = data.N_PORC_MS_COMPLETA!=null?data.N_PORC_MS_COMPLETA:'no data';
                vm.mesas.porcentaje.msTemporal = data.N_PORC_MS_TEMPORAL!=null?data.N_PORC_MS_TEMPORAL:'no data';
                vm.mesas.porcentaje.msExtra = data.N_PORC_MS_EXTRA!=null?data.N_PORC_MS_EXTRA:'no data';        
                vm.mesas.porcentaje.msSea = data.N_PORC_MS_SEA!=null?data.N_PORC_MS_SEA:'no data';
                vm.mesas.porcentaje.msVe = data.N_PORC_MS_VE!=null?data.N_PORC_MS_VE:'no data';
                vm.mesas.porcentaje.msConvencional = data.N_PORC_MS_CONVENCIONAL!=null?data.N_PORC_MS_CONVENCIONAL:'no data';  
            }     
            function startCount(obj,attr,data){
                if(data != 0 && data != null){
                    var listener = $scope.$watch('fin', function(val){
                        var inicio = 0;
                        var currentTime = 0;
                        var stop = $interval(()=>{ 
                          var counter = easeInQuad(currentTime, inicio, data, 2000);
                          if (counter >= parseFloat(data)) {                              
                            vm.mesas[obj][attr] = filter(data, $scope.accuracy || 0);
                            $interval.cancel(stop);
                          } else {
                            vm.mesas[obj][attr] = filter(counter, $scope.accuracy || 0);
                            currentTime += 200;
                          }
                        }, 50);             
                    });                    
                }else if(data == 0){
                    vm.mesas[obj][attr] = 0;
                }else{
                    vm.mesas[obj][attr] = 0;
                }
                function easeInQuad(t, b, c, d) {
                  return c*(t/=d)*t + b;
                };

                function filter(num, accuracy){
                  return parseFloat(parseFloat(num).toFixed(accuracy || 0));   
                }                
            }                
            
        }        
              
        onpeReporteControllerElectoresByLocalOrMesa.$inject = ['$scope','ConstOnpeReporte','$timeout', '$interval'];
        function onpeReporteControllerElectoresByLocalOrMesa($scope, ConstOnpeReporte, $timeout, $interval){
            var vm = this;
            var initializing = true; 
            var compileGraph = false;
            initReporteElectorByLocalOrMesa();
            
            $scope.$watch('vm.data', function(newValue, oldValue) {                 
                if(initializing){                    
                    initializing = false;
                    setDataElectorByLocalOrMesa(vm.data);
                }else{                    
                    if(vm.activeGraphic){
                        graphElectoresTotalByLocalOrMesa();
                    }                    
                    setDataElectorByLocalOrMesa(vm.data);
                    refreshBar(true);
                    if(compileGraph){
                        refreshGraphic();                          
                    }
                }                                 
            }, true);
            
            function initReporteElectorByLocalOrMesa(){
                vm.electoresByLocalOrMesa = {
                    total:{
                        electores:0,
                        mesas:0
                    },
                    cantidad:{           
                        hombre:0,
                        mujer:0,
                        preferencial:0,
                        adultoMayor:0,
                        gestante:0,
                        discapacitado:0,
                        temporal:0,
                        capacidad:0,
                        asignados:0,
                        segmento:{
                            edad:[
                                {"rango": "17-30","visits": 0}, 
                                {"rango": "31-40","visits": 0}, 
                                {"rango": "41-50","visits": 0}, 
                                {"rango": "51-60","visits": 0}, 
                                {"rango": "61-70","visits": 0},
                                {"rango": "71 a+","visits": 0}                        
                            ]
                        }
                    },
                    porcentaje:{
                        hombre:null,
                        mujer:null,                        
                        adultoMayor:null,
                        gestante:null,
                        discapacitado:null,
                        temporal:null,
                        segmento:{
                            edad:[
                                {"rango": "17-30","visits": 0}, 
                                {"rango": "31-40","visits": 0}, 
                                {"rango": "41-50","visits": 0}, 
                                {"rango": "51-60","visits": 0}, 
                                {"rango": "61-70","visits": 0},
                                {"rango": "71 a+","visits": 0}                            
                            ]
                        }            
                    }
                }
            }
            function setDataElectorByLocalOrMesa(data){                 
                vm.electoresByLocalOrMesa.total.electores = data.n_TOTAL_EH?data.n_TOTAL_EH:0;
                //vm.electoresByLocalOrMesa.total.mesas = data.n_MESAS?data.n_MESAS:0;
                var mesas_uno = data.n_MESAS?data.n_MESAS:0;
                var mesas_dos = data.n_MESAS_ACTUALIZADAS?data.n_MESAS_ACTUALIZADAS:0;
                vm.electoresByLocalOrMesa.total.mesas = mesas_uno + " / " + mesas_dos;                
                vm.electoresByLocalOrMesa.cantidad.hombre = data.n_CANT_EH_HOMBRE?data.n_CANT_EH_HOMBRE:0;
                vm.electoresByLocalOrMesa.cantidad.mujer = data.n_CANT_EH_MUJER?data.n_CANT_EH_MUJER:0;
                vm.electoresByLocalOrMesa.cantidad.preferencial = data.n_PREFERENCIALES?data.n_PREFERENCIALES:0;                
                vm.electoresByLocalOrMesa.cantidad.adultoMayor = 0;
                vm.electoresByLocalOrMesa.cantidad.gestante = 0;
                vm.electoresByLocalOrMesa.cantidad.discapacitado = 0;
                vm.electoresByLocalOrMesa.cantidad.temporal = 0;                
                vm.electoresByLocalOrMesa.cantidad.capacidad = data.n_CAPACIDAD?data.n_CAPACIDAD:0;
                vm.electoresByLocalOrMesa.cantidad.asignados = data.n_TOTAL_EH?data.n_TOTAL_EH:0;                
                vm.electoresByLocalOrMesa.cantidad.segmento.edad =[
                    {"rango": "17-30","visits": data.n_CANT_RANGO_EDAD_A?data.n_CANT_RANGO_EDAD_A:0}, 
                    {"rango": "31-40","visits": data.n_CANT_RANGO_EDAD_B?data.n_CANT_RANGO_EDAD_B:0}, 
                    {"rango": "41-50","visits": data.n_CANT_RANGO_EDAD_C?data.n_CANT_RANGO_EDAD_C:0}, 
                    {"rango": "51-60","visits": data.n_CANT_RANGO_EDAD_D?data.n_CANT_RANGO_EDAD_D:0}, 
                    {"rango": "61-70","visits": data.n_CANT_RANGO_EDAD_E?data.n_CANT_RANGO_EDAD_E:0},
                    {"rango": "71 a+","visits": data.n_CANT_RANGO_EDAD_F?data.n_CANT_RANGO_EDAD_F:0}
                ]        
                vm.electoresByLocalOrMesa.porcentaje.hombre = data.n_PORC_EH_HOMBRE?data.n_PORC_EH_HOMBRE:0;
                vm.electoresByLocalOrMesa.porcentaje.mujer = data.n_PORC_EH_MUJER?data.n_PORC_EH_MUJER:0;                
                vm.electoresByLocalOrMesa.porcentaje.adultoMayor = 0;
                vm.electoresByLocalOrMesa.porcentaje.gestante = 0;
                vm.electoresByLocalOrMesa.porcentaje.discapacitado = 0;
                vm.electoresByLocalOrMesa.porcentaje.temporal = 0;
                vm.electoresByLocalOrMesa.porcentaje.segmento.edad =[
                    {"rango": "17-30","visits": data.n_PORC_RANGO_EDAD_A?data.n_PORC_RANGO_EDAD_A:0}, 
                    {"rango": "31-40","visits": data.n_PORC_RANGO_EDAD_B?data.n_PORC_RANGO_EDAD_B:0}, 
                    {"rango": "41-50","visits": data.n_PORC_RANGO_EDAD_C?data.n_PORC_RANGO_EDAD_C:0}, 
                    {"rango": "51-60","visits": data.n_PORC_RANGO_EDAD_D?data.n_PORC_RANGO_EDAD_D:0}, 
                    {"rango": "61-70","visits": data.n_PORC_RANGO_EDAD_E?data.n_PORC_RANGO_EDAD_E:0},
                    {"rango": "71 a+","visits": data.n_PORC_RANGO_EDAD_F?data.n_PORC_RANGO_EDAD_F:0}
                ]
            }
            function refreshGraphic(){
                vm.chartElectoresByLocalOrMesa.dataProvider = vm.electoresByLocalOrMesa.cantidad.segmento.edad;
                vm.chartElectoresByLocalOrMesa.validateData();
                vm.chartElectoresByLocalOrMesa.animateAgain();
            }
            function graphElectoresTotalByLocalOrMesa(){
                vm.chartElectoresByLocalOrMesa = AmCharts.makeChart( "chartElectoresByLocalOrMesa", {
                    "type": "serial",
                    "theme": "light",
                    "dataProvider": vm.electoresByLocalOrMesa.cantidad.segmento.edad,
                    "valueAxes": [ {
                        "gridColor": "#000",
                        "gridAlpha": 0.5,
                        "dashLength": 0
                    } ],
                    "gridAboveGraphs": true,
                    "startDuration": 1,
                    "graphs": [ {
                        "balloonText": "[[category]]: <b>[[value]]</b>",
                        "fillAlphas": 0.8,
                        "lineAlpha": 0.2,
                        "type": "column",
                        "valueField": "visits",
                        "labelText": " ",
                        "labelPosition": "inside",
                        "labelFunction": function(item) {
                            if(vm.chartElectoresByLocalOrMesa != undefined){
                                var total = 0;
                                for(var i = 0; i < vm.chartElectoresByLocalOrMesa.dataProvider.length; i++) {
                                  total += vm.chartElectoresByLocalOrMesa.dataProvider[i][item.graph.valueField];
                                }
                                var percent = Math.round( ( item.values.value / total ) * 1000 ) / 10;
                                return percent + "%";                                
                            }
                            
                        }              
                    } ],
                    "valueAxes": [ {
                        "title": "Edades",
                        "axisAlpha": 0,
                        "gridAlpha": 0.1,
                        "labelsEnabled": false            
                    } ],     
                    "chartCursor": {
                        "categoryBalloonEnabled": false,
                        "cursorAlpha": 0,
                        "zoomable": false
                    },
                    "categoryField": "rango",
                    "categoryAxis": {
                        "gridPosition": "start",
                        "gridAlpha": 0,
                        "tickPosition": "start",
                        "tickLength": 20
                    }     
                });
                compileGraph = true;
            }
            function refreshBar(status){
                vm.clase ='';
                vm.clase2 ='';
                $timeout(function() {
                    if(status){
                        vm.clase ='onpeReporteMapBarLeft';
                        vm.clase2 ='onpeReporteMapBarRight';            
                    }else{
                        vm.clase ='option-off';
                        vm.clase2 ='option-off';            
                    }
                });
            }            
        }
    
        onpeReporteControllerMapa.$inject = ['$scope','ConstOnpeReporte','$timeout'];        
        function onpeReporteControllerMapa($scope, ConstOnpeReporte, $timeout){
            var vm = this;
            
            initGraphMapa();
            
            
            $timeout(function () {graphMapa(ConstOnpeReporte.INIT_MAPA);}, 100);
                                
            function initGraphMapa(){
                vm.mapa = {id:null,name:'',tipo:ConstOnpeReporte.INIT_MAPA};        
            }            
            function graphMapa(tipo){
                var mapa;
                if(tipo == PERU){  
                    mapa = MAPA_PERU;
                }else if(tipo == EXTRANJERO){
                    return false;
                }else{
                    return false;
                }      
                vm.map = AmCharts.makeChart( "chartdiv", {
                    "type": "map",
                    "theme": "light",
                    "colorSteps": 10,
                    "dataProvider": {
                        "map": mapa,
                        "getAreasFromMap": true
                    },
                    "areasSettings": {
                        "autoZoom": true,
                    }
                });
                vm.map.addListener("clickMapObject", function(event){
                    $scope.$apply(function() {
                        vm.mapa.id = event.mapObject.id;
                        vm.mapa.name = event.mapObject.title;
                        vm.mapa.tipo = ConstOnpeReporte.COD_DEPARTAMENTO;
                    });                       
                    refreshMap(); 
                });
            }  
            function refreshMap(){
                var data = camelize(acent(vm.mapa.name));        
                vm.map = new AmCharts.AmMap();
                vm.map.dataProvider = {mapVar: AmCharts.maps[data],getAreasFromMap:true};
                vm.map.mouseWheelZoomEnabled = true;
                vm.map.panEventsEnabled = true;
                vm.map.areasSettings = {
                    autoZoom: false,
                    color: "#67b7dc",
                    colorSolid: "#f15135",
                    selectedColor: "#f15135",
                    outlineColor: "#FFFFFF",
                    rollOverColor: "#3c5bdc",
                    rollOverOutlineColor: "#FFFFFF",
                    selectable: true            
                };
                vm.map.write("chartdiv");
                vm.map.addListener("clickMapObject", function(event){
                    $scope.$apply(function() {
                        vm.mapa.id = event.mapObject.id;
                        vm.mapa.name = event.mapObject.title;
                        vm.mapa.tipo = ConstOnpeReporte.COD_PROVINCIA;
                    });                            
                });
                vm.map.addListener("homeButtonClicked", function(event){
                    $scope.$apply(function() {
                        vm.mapa.tipo = ConstOnpeReporte.INIT_MAPA;
                    });                        
                    graphMapa(ConstOnpeReporte.INIT_MAPA);
                });        
            }        
            function camelize(str) {  
                return str[0].toLowerCase() + str.replace(/\s([A-Za-z])/g, function(a, b) {        
                    return b.toUpperCase();
                }).slice(1);
            }
            function acent(input){
                var tittles = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç";
                var original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc";
                for (var i = 0; i < tittles.length; i++) {
                    input = input.replace(tittles.charAt(i), original.charAt(i)).toLowerCase();
                };
                return input;        
            }                                  
            
        } 
            
})();