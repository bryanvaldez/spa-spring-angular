'use strict';

angular.module('app').constant('OnpeAdanConst', {
    COMPOSER_FILTER: 'FILTER',
    COMPOSER_SECTION: 'SECTION',
    FILTER_GENERAL: 'GENERAL',
    FILTER_ELECTOR: 'ELECTOR',
    FILTER_LOCAL: 'LOCAL',
    FILTER_MESA: 'MESA',
    REST_SERVICE: C_SERVER + "/reporte"
});
angular.module('app').controller('reporteController', ['$scope', 'OnpeAdanConst', 'ReporteService', 'MantenimientoService', 'Helper', '$http', '$mdDialog', '$timeout', '$interval', function ($scope, OnpeAdanConst, ReporteService, MantenimientoService, Helper, $http, $mdDialog, $timeout, $interval) {

        var self = this;
        self.stepGeneral = STEP_GENERAL;        
        //--------- Constantes ------------   
        self.const = OnpeAdanConst;
        //--------  Contructores 
        initFilters();
        initSection(OnpeAdanConst.FILTER_GENERAL);        
        initVarByFilterSearch();        
        //-------- Variables Reporte.
        self.reporteMesa = "";
        self.repoteLocal = "";
        self.reporteElector = "";
        self.reporteElectorLow = "";
        self.reporteElectorByLocalOrMesa = "";
        //-------- Variables $scope Mapa.
        $scope.mapa = "";
        //-------- Variables Filtro.
        self.items = [];
        self.itemsUbigeo = [];
        self.chipObjs = [];
        self.viewResult = false;
        self.viewUbigeoResult = false;
        //-------- Asignar Reasignar.
        self.asignarReasignar = [];
        //------- Funciones-----------
        self.composer = composer;
        self.getItems = getItems;
        self.querySearchItem = querySearchItem;
        self.querySearchItemUbigeo = querySearchItemUbigeo;
        self.getItemsEnter = getItemsEnter;
        self.getItemsUbigeoEnter = getItemsUbigeoEnter;
        self.selectedItemChange = selectedItemChange;
        self.selectedItemUbigeoChange = selectedItemUbigeoChange;
        self.crearLocal = crearLocal;
        self.openReglas = openReglas;
        self.updateElector = updateElector;
        self.activeAsignarReasignar = activeAsignarReasignar;
        self.activeProcedure = activeProcedure;
        //--------- Iniciadores ------------
        function initFilters() {
            console.log(self.stepGeneral);
            var viewFilterMesa = false;
            if (self.stepGeneral >= 13) {
                viewFilterMesa = true;
            }
            
            self.filters = [
                {code: 1, name: "General", value: "GENERAL", on: true, status: true, type: 'FILTER'},
                {code: 2, name: "Elector", value: "ELECTOR", on: false, status: true, type: 'FILTER'},
                {code: 3, name: "Local", value: "LOCAL", on: false, status: true, type: 'FILTER'},
                {code: 4, name: "Mesa", value: "MESA", on: false, status: viewFilterMesa, type: 'FILTER'}
            ];
            
            self.dataFilter = {
                value: 'GENERAL'
            };
        }
        function initSection(type) {
            self.status = null;
            self.view = type;
            self.section = {
                reporteBase: false,
                reporteByElector: false,
                reporteByLocal: false,
                reporteByMesa: false,
                filter: true,
                filterLow: false,
                filterLocal: false,
                filterElector: false,
                filterMesa: false,
                viewLocal: false,
                viewLocalFooter: false,
                viewElector: false,
                viewMesa: false,
                asignar: false
            };
            if (type == OnpeAdanConst.FILTER_GENERAL)
                self.section.reporteBase = true;
            if (type == OnpeAdanConst.FILTER_ELECTOR)
                self.section.reporteByElector = true;
            if (type == OnpeAdanConst.FILTER_LOCAL)
                self.section.reporteByLocal = true;
            if (type == OnpeAdanConst.FILTER_MESA)
                self.section.reporteByMesa = true;
        }
        function initVarByFilterSearch(type, value) {            
            self.elector = null;
            self.local = null;
            self.mesas = null;
            if (type != undefined && value != undefined) {
                if (type == OnpeAdanConst.FILTER_ELECTOR) {
                    self.messageSuccess = "Listo!";
                    self.messageLoading = "Guardando Cambios...";
                    self.messageError = "No se pudo realizar la operacion.";
                    getElectorByDni(value);
                    
                    self.section.asignar = true;
                    self.section.viewElector = true;                    
                    self.section.viewLocal = false;
                    self.section.viewMesa = false;
                    
                    self.section.reporteByElector = false;
                }
                if (type == OnpeAdanConst.FILTER_LOCAL) {
                    self.messageSuccess = "Listo!";
                    self.messageLoading = "Guardando Cambios...";                    
                    getLocalById(value);                    
                    self.isEditSolucion = false;
                    self.tittle = 'MESAS POR SOLUCIÓN TECNOLÓGICA';
                    self.asignarReasignar = [];
                    self.selectedIndexTab = 0;
                    
                    self.section.asignar = true;                    
                    self.section.viewElector = false;
                    self.section.viewLocal = true;
                    self.section.viewMesa = false;
                                        
                    self.section.reporteByElector = true;
                    self.section.reporteByLocal = false; 
                    self.section.reporteByMesa = false; 
                }
                if (type == OnpeAdanConst.FILTER_MESA) {                     
                    getLocalByMesa(value);                    
                    self.isEditSolucion = false;
                    self.tittle = 'MESAS POR SOLUCIÓN TECNOLÓGICA';
                    self.messageSuccess = "Listo!";
                    self.messageLoading = "Guardando Cambios...";
                    self.asignarReasignar = [];
                    self.selectedIndexTab = 1;                                                                              
                    
                    self.section.asignar = true;
                    self.section.viewElector = false;
                    self.section.viewLocal = true;
                    self.section.viewMesa = false;
                                        
                    self.section.reporteByElector = true;
                    self.section.reporteByLocal = false;
                    self.section.reporteByMesa = false; 
                }
            }
        }         

        //--------- Observadores / $scope-----------------
        var initializing = true;
        $scope.$watch('mapa', function (newValue, oldValue) {
            if (initializing) {
                initializing = false;
            } else {
                setDataByMap($scope.mapa.tipo, $scope.mapa.id, $scope.mapa.name);
            }
        }, true);
        //--------- Composer / Controladore de Vistas ------------
        function composer(data, type) {            
            if (type == OnpeAdanConst.COMPOSER_FILTER) {
                getItems(data);
            }
            if (type == OnpeAdanConst.COMPOSER_SECTION) {
                initSection(data.TYPE);
                initVarByFilterSearch(data.TYPE, data.VALUE);
            }
        }
//------------------------------------****SERVICIOS*****--------------------------------------// 
        function getMesas(tipo, codigo, codigo2) {
            ReporteService.getMesas(tipo, codigo, codigo2)
                    .then(
                            function (data) {
                                self.reporteMesa = data;
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }
        function getElectores(tipo, codigo, codigo2) {
            ReporteService.getElectores(tipo, codigo, codigo2)
                    .then(
                            function (data) {                                
                                self.reporteElector = data;
                            },
                            function (errResponse) {
                                console.error('Error while Reporte Elector Adan:' + errResponse);
                            }
                    );
            ReporteService.getElectoresLow(tipo, codigo, codigo2)
                    .then(
                            function (data) {
                                self.reporteElectorLow = data;      
                            },
                            function (errResponse) {
                                console.error('Error while Reporte Elector Adan:' + errResponse);
                            }
                    );
        }
        function getElectoresByMesaOrLocal(tipo, codigo, codigo2) {
            ReporteService.getElectoresByMesaOrLocal(tipo, codigo, codigo2)
                    .then(
                            function (data) {
                                self.reporteElectorByLocalOrMesa = data;
                            },
                            function (errResponse) {
                                console.error('Error while Reporte Elector Adan:' + errResponse);
                            }
                    );
        }
        function getLocales(tipo, codigo, codigo2) {
            ReporteService.getLocales(tipo, codigo, codigo2)
                    .then(
                            function (data) {
                                self.repoteLocal = data;
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }
        function getLocalesSolucion(tipo, codigo, codigo2) {
            ReporteService.getLocalesSolucion(tipo, codigo, codigo2)
                    .then(
                            function (data) {
                                self.tittleLocalSolucion = 'LOCALES POR SOLUCIÓN TECNOLÓGICA';
                                self.reporteLocalSolucion = data;
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }
        function getMesasSolucion(tipo, codigo, codigo2) {
            ReporteService.getMesasSolucion(tipo, codigo, codigo2)
                    .then(
                            function (data) {                                
                                self.reporteMesaSolucion = data;
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }
        function getChips(tipo, codigo, name) {
            if (tipo == PERU) {
                self.chipObjs = [];
            } else if (tipo == DPTO_CONT) {
                self.chipObjs = [];
                self.chipObjs.push({tipo: tipo, codigo: codigo, name: name.toUpperCase()});
            } else if (tipo == PROV_PAIS) {
                var temp = self.chipObjs;
                for (var i in temp) {
                    if (temp[i].tipo == PROV_PAIS) {
                        var index = temp.indexOf(temp[i]);
                        if (index > -1) {
                            temp.splice(index, 1);
                        }
                    }
                }
                for (var j in temp) {
                    if (temp[j].tipo == DIST_CIUD) {
                        var index = temp.indexOf(temp[j]);
                        if (index > -1) {
                            temp.splice(index, 1);
                        }
                    }
                }
                self.chipObjs = temp;
                self.chipObjs.push({tipo: tipo, codigo: codigo, name: name.toUpperCase()});
            } else if (tipo == DIST_CIUD) {
                var temp = self.chipObjs;
                for (var i in temp) {
                    if (temp[i].tipo == DIST_CIUD) {
                        var index = temp.indexOf(temp[i]);
                        if (index > -1) {
                            temp.splice(index, 1);
                        }
                    }
                }
                self.chipObjs = temp;
                self.chipObjs.push({tipo: tipo, codigo: codigo, name: name.toUpperCase()});
            }
        }
        function setDistrito(tipo, ubigeo) {
            self.itemsUbigeo = [];
            self.searchUbigeoItem = '';
            if (tipo == PERU || tipo == DPTO_CONT) {
                self.viewUbigeo = false;
            } else if (tipo == PROV_PAIS) {
                self.viewUbigeo = true;
                self.ubigeoPadre = ubigeo;
                self.section.filterLow = true;
            }
        }   
        function setFichaTecnica(tipo, ubigeo) {                        
            self.fichaTecnicaEstimada = {
                tipo: '',
                ubigeo: ''
            };
            
            self.fichaTecnicaEstimada.tipo = tipo;
            self.fichaTecnicaEstimada.ubigeo = ubigeo;                        
        }
//------------------------------------****REPORTE FILTROS*****--------------------------------------//        
        function querySearchItem(query) {
            if (query.length === 1) {
                self.items = [];
                self.viewResult = false;
            }
            var results = query ? self.items.filter(createFilterFor(query)) : self.items,
                    deferred;
            if (self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve(results);
                }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }
        function getItems(filter) {
            self.filterType = filter.value;
//            if (filter.value == OnpeAdanConst.FILTER_GENERAL) {                
//                //window.location = C_SERVER + "/dashboard";
//            }
            setTimeout(function () {
                document.querySelector('#autoCompleteItem').focus();
            }, 0);
            
            self.section.filter = true;
            self.section.filterLow = false;
            self.section.viewLocal = false;
            self.section.viewElector = false;
            self.section.viewMesa = false;
            self.section.viewLocalFooter = false;            
            self.ubigeoOdpe = null;
            self.section.asignar = false;   

            self.chipObjs = [];
            self.viewUbigeo = false;
            self.searchItem = '';
            
            switch (filter.value) {                                
                case OnpeAdanConst.FILTER_LOCAL:
                    self.placeholder = 'Ingrese el nombre o ID de un Local...';

                    self.section.reporteBase = false;
                    self.section.filterLocal = true;
                    self.section.filterMesa = false;
                    self.section.filterElector = false;
                    self.section.reporteByLocal = true;
                    self.section.reporteByElector = true;
                    self.section.reporteByMesa = false;                                                          
                    break;
                case OnpeAdanConst.FILTER_MESA:
                    self.placeholder = 'Ingrese el código de una Mesa...';

                    self.section.reporteBase = false;
                    self.section.filterElector = false;
                    self.section.filterLocal = false;
                    self.section.filterMesa = true;
                    self.section.reporteByLocal = true;
                    self.section.reporteByElector = true;
                    self.section.reporteByMesa = false;                                                      
                    break;
                case OnpeAdanConst.FILTER_ELECTOR:
                    self.section.filterLow = false;
                    self.placeholder = 'Ingrese el nombre, apellido o DNI...';

                    self.section.reporteBase = false;
                    self.section.filterElector = true;
                    self.section.filterLocal = false;
                    self.section.filterMesa = false;
                    self.section.reporteByLocal = true;
                    self.section.reporteByElector = true;
                    self.section.reporteByMesa = false;                                                           
                    break;

                default:
                    $scope.$emit('currentOption'); 
                    initFilters();
                    initSection(OnpeAdanConst.FILTER_GENERAL);  
                    setDataByMap(PERU);
                    self.placeholder = 'Seleccione la vista que desee...';                    
            }
        }
        function getItemsEnter(text) {
            if (text != '') {
                ReporteService.getItems(self.filterType, text).then(
                        function (data) {
                            if (data != '') {
                                self.items = data;
                                self.viewResult = false;
                            } else {
                                self.items = [];
                                self.viewResult = true;
                            }
                            document.querySelector('#autoCompleteItem').blur();
                            document.querySelector('#autoCompleteItem').focus();
                        },
                        function (errResponse) {
                            console.error('Error while getting Item:' + errResponse);
                        }
                );
            }
        }
        function selectedItemChange(item) {
            if (item != undefined) {
                composer(item, OnpeAdanConst.COMPOSER_SECTION);
                self.chipObjs = [];               

                ReporteService.getUbigeo(item.AUX).then(
                        function (data) {                            
                            if (data !== "") {
                                self.chipObjs.push({tipo: 0, codigo: 0, name: data[0].DISPLAY});
                                self.chipObjs.push({tipo: 1, codigo: 1, name: data[0].VALUE});
                                self.chipObjs.push({tipo: 2, codigo: 2, name: data[0].TYPE});
                                self.chipObjs.push({tipo: 3, codigo: 3, name: data[0].AUX});
                                
                                self.searchItem = '';
                                
                                self.electorUbigeo = {
                                continente:'',
                                pais:'',
                                ciudad:'',
                                odpe:''
                                };
                                
                                self.electorUbigeo.continente = data[0].DISPLAY;
                                self.electorUbigeo.pais = data[0].VALUE;
                                self.electorUbigeo.ciudad = data[0].TYPE;
                                self.electorUbigeo.odpe = data[0].AUX;
                            }
                        },
                        function (errResponse) {
                            console.error('Error while getting Ubigeo:' + errResponse);
                        }
                );
            }
        }
        function createFilterFor(query) {
            var caseQuery = angular.uppercase(query);
            return function filterFn(item) {
                return (item.DISPLAY.indexOf(caseQuery) > -1);
            };
        }
        function getItemsUbigeoEnter(text) {
            if (text != '') {
                ReporteService.getDistritos(self.ubigeoPadre, text).then(
                        function (data) {                            
                            if (data != '') {
                                self.itemsUbigeo = data;
                                self.viewUbigeoResult = false;
                            } else {
                                self.itemsUbigeo = [];
                                self.viewUbigeoResult = true;
                            }
                            document.querySelector('#autoCompleteUbigeo').blur();
                            document.querySelector('#autoCompleteUbigeo').focus();
                        },
                        function (errResponse) {
                            console.error('Error while getting Item Ubigeo:' + errResponse);
                        }
                );
            }
        }
        function querySearchItemUbigeo(query) {
            if (query.length === 1) {
                self.itemsUbigeo = [];
            }
            var results = query ? self.itemsUbigeo.filter(createFilterFor(query)) : self.itemsUbigeo,
                    deferred;
            if (self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve(results);
                }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }
        function selectedItemUbigeoChange(item) {
            if (item != undefined) {                
                getElectores(DIST_CIUD, item.VALUE);
                getLocales(DIST_CIUD, item.VALUE);
                getMesas(DIST_CIUD, item.VALUE);
                getLocalesSolucion(DIST_CIUD, item.VALUE);
                if (self.stepGeneral === STEP_CIERRE) {
                    getMesasSolucion(DIST_CIUD, item.VALUE);
                }
                setFichaTecnica(DIST_CIUD, item.VALUE);
                getChips(DIST_CIUD, item.VALUE, item.DISPLAY);

                self.ubigeoOdpe = {
                    ubigeo: '',
                    odpe: '',
                    nacion: 'PERÚ',
                    departamento: '',
                    provincia: '',
                    distrito: '',
                    odpe_desc: ''
                };              

                self.ubigeoOdpe.ubigeo = item.VALUE;
                self.ubigeoOdpe.odpe = item.TYPE;
                self.ubigeoOdpe.distrito = item.DISPLAY;
                self.ubigeoOdpe.odpe_desc = item.AUX;

                var temp = self.chipObjs;
                for (var i in temp) {
                    if (temp[i].tipo == DPTO_CONT) {
                        self.ubigeoOdpe.departamento = temp[i].name;
                    } else if (temp[i].tipo == PROV_PAIS) {
                        self.ubigeoOdpe.provincia = temp[i].name;
                    }
                }

                self.searchUbigeoItem = '';
            }
        }
        function setDataByMap(tipo, codigo, name) {
            if (tipo == DPTO_CONT) {
                getElectores(DPTO_CONT, codigo);
                getLocales(DPTO_CONT, codigo);
                getLocalesSolucion(DPTO_CONT, codigo);
                if (self.stepGeneral === STEP_CIERRE) {
                    getMesasSolucion(DPTO_CONT, codigo);
                }
                getMesas(DPTO_CONT, codigo);
                getChips(DPTO_CONT, codigo, name);
                setDistrito(DPTO_CONT, codigo);
                setFichaTecnica(DPTO_CONT, codigo);
            } else if (tipo == PROV_PAIS) {
                getElectores(PROV_PAIS, codigo);
                getLocales(PROV_PAIS, codigo);
                getLocalesSolucion(PROV_PAIS, codigo);
                if (self.stepGeneral === STEP_CIERRE) {
                    getMesasSolucion(PROV_PAIS, codigo);
                }
                getMesas(PROV_PAIS, codigo);
                getChips(PROV_PAIS, codigo, name);
                setDistrito(PROV_PAIS, codigo);
                setFichaTecnica(PROV_PAIS, codigo);
            }
            else if (tipo == PERU) {                 
                getElectores(PERU);
                getLocales(PERU);
                getLocalesSolucion(PERU);
                if (self.stepGeneral === STEP_CIERRE) {
                    getMesasSolucion(PERU);
                }                
                getMesas(PERU);
                getChips(PERU);
                setDistrito(PERU);
                setFichaTecnica(PERU);
                self.section.filterLow = false;
            } else {
                return false;
            }
        }
        function crearLocal() {

            if (self.ubigeoOdpe != null) {

                self.local = {
                    N_LOCAL_PK: null,
                    C_CODIGO: '',
                    C_UBIGEO: '',
                    C_NOMBRE: '',
                    N_ESTADO: 0,
                    B_ESTADO: true,
                    N_MESAS_ACTUALIZADAS: '',
                    C_DIRECCION: '',
                    C_REFERENCIA: '',
                    N_LATITUD: '',
                    N_LONGITUD: '',
                    B_CCPP: false,
                    C_CCPP: '',
                    N_MESAS: 0,
                    N_ELECTORES: 0,
                    N_TIPO_SOLUCION: 0,
                    C_TIPO_SOLUCIONES: ''
                };

                self.section.reporteBase = false;
                self.section.reporteByLocal = false;
                self.section.reporteByElector = true;
                self.section.reporteByMesa = false;

                self.tittle = 'TIPO(S) DE SOLUCIÓN';
                self.isEditSolucion = true;
                self.section.filter = false;
                self.section.viewLocal = true;
                self.section.viewLocalFooter = true;
                self.section.asignar = false;
                self.mesas = [];
                
                getSoluciones();
                getElectoresByMesaOrLocal(LOCAL_MESA, self.local.N_LOCAL_PK);

            } else {
                var alert = $mdDialog.alert({
                    title: 'Local de Votación.',
                    textContent: 'Seleccione un distrito para poder crear un Local de Votación',
                    ok: 'ACEPTAR'
                });
                $mdDialog.show(alert).finally(function () {
                    alert = undefined;
                });
            }
        }

        function openReglas(ev) {
            $mdDialog.show({
                templateUrl: C_SERVER + '/reglas/openModalReglas',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: false,
                bindToController: true,
                escapeToClose: true,
                scope: $scope,
                preserveScope: true
            }).then(function (answer) {
            }, function () {
            });
        }
//------------------------------------****SECCION GENERAL*****--------------------------------------// 
        function activeProcedure(data) {
            $scope.$emit('executeProcedure', data.value); 
        }
//------------------------------------****SECCION ELECTOR*****--------------------------------------//
        function getElectorByDni(dni) {
            ReporteService.getElectorByDni(dni)
                    .then(function (d) {
                        if (d.success) {
                            self.elector = d.data;
                            self.elector.dataUbigeo = self.electorUbigeo;                                                                                    
                        }
                    }, function (errResponse) {
                        console.error('Error while fetching Elector');
                    });
        }
        function updateElector(status) {
            statusProcess(false);
            ReporteService.updateElectorVip(self.elector.NUMELE, status)
                    .then(
                            function (data) {
                                if (data.success) {
                                    statusProcess(true);
                                    self.elector = "";
                                    self.elector = data.data;
                                    self.asignarReasignar = [];
                                    self.asignarReasignar = data.data;
                                }
                            },
                            function (errResponse) {
                                console.error('Error while Elector Vip Adan:' + errResponse);
                            }
                    );
        }
        function activeAsignarReasignar(data) {
            var fdata = new FormData();
            if (self.view == OnpeAdanConst.FILTER_LOCAL) {
                fdata.append('type', OnpeAdanConst.FILTER_LOCAL)
                fdata.append('code', self.asignarReasignar);
                fdata.append('currentLocal', self.local.C_CODIGO);
                fdata.append('newLocal', data.C_CODIGO);
            }
            if (self.view == OnpeAdanConst.FILTER_ELECTOR) {
                fdata.append('type', OnpeAdanConst.FILTER_ELECTOR)
                fdata.append('code', self.elector.NUMELE);
                fdata.append('currentLocal', 'no data');
                fdata.append('newLocal', data.C_CODIGO);
                getElectorByDni(self.elector.NUMELE);                
            }
            excuteAsignar(fdata);                        
        }
        function excuteAsignar(data) {
            statusProcess(false);
            ReporteService.excuteAsignar(data)
                    .then(
                            function (data) {
                                if (data.success) {
                                    var d = JSON.parse(data.data);
                                    if (d.status == 1) {
                                        statusProcess(true, d.message);
                                        if (self.view == OnpeAdanConst.FILTER_LOCAL) {                                            
                                            getLocalById(self.local.C_CODIGO);
                                            getElectoresByMesaOrLocal(LOCAL_MESA, self.local.C_CODIGO);
                                            self.asignarReasignar = [];
                                        }                                                                                
                                    } else {
                                        statusProcess('error', d.message);
                                    }
                                } else {
                                    statusProcess('error', data.message);
                                }
                            },
                            function (errResponse) {
                                console.error('Error while Elector Vip Adan:' + errResponse);
                            }
                    );
        }
        function statusProcess(status, message) {
            if (status || status == 'error') {
                if (message != undefined) {
                    self.messageError = message;
                }
                $timeout(function () {
                    self.status = status;
                }, 1000);
            }
            if (!status) {
                self.status = status;
                if (message != undefined) {
                    self.messageError = message;
                }
            }
        }

//------------------------------------****SECCION LOCAL*****--------------------------------------//
        this.isOpen = false;
        self.selectedMode = 'md-fling';

        self.initMesas = [];
        function getLocalById(value) {
            ReporteService.getLocalById(value)
                    .then(function (d) {
                        if (d.success) {
                            self.local = d.data;
                            if (d.data.N_ESTADO === 0) {
                                self.local.B_ESTADO = false;
                            } else {
                                self.local.B_ESTADO = true;
                            }
                            self.initStateLocal = self.local.B_ESTADO;
                            self.local.B_CCPP = self.local.C_CCPP != undefined ? true : false;
                            self.isVisibleCCPP = self.local.B_CCPP;

                            var type = self.local.N_TIPO_SOLUCION;
                            if (self.local.N_TIPO_SOLUCION === -1) {
                                type = self.local.C_TIPO_SOLUCIONES;
                            }

                            getElectoresByMesaOrLocal(LOCAL_MESA, value);
                            getSolucionesIn(type);
                            getMesasByIdLocal(value);
                        }
                    }, function (errResponse) {
                        console.error('Error while fetching Local');
                    }
                    );

        }

        function getMesasByIdLocal(value) {

            ReporteService.getMesasByIdLocal(value)
                    .then(function (data) {
                        self.mesas = data;                        

                        self.initMesas = [];
                        var temp = self.mesas;
                        for (var i in temp) {
                            self.initMesas.push(temp[i].MESA)
                        }

                    }, function (errResponse) {
                        console.error('Error while fetching Mesas by Local');
                    }
                    );

        }

        function getSolucionesIn(type) {
            ReporteService.getSolucionesIn(type)
                    .then(
                            function (data) {
                                self.soluciones = data;
                                self.itemDial = '';
                            },
                            function (errResponse) {
                                console.error('Error while getSoluciones:' + errResponse);
                            }
                    );
        }

        self.toggle = toggle;
        self.exists = exists;        
        self.toggleCCPP = toggleCCPP;
        self.continuar = continuar;
        self.cancelar = cancelar;
        self.selectedItemDial = selectedItemDial;
        self.submitLocal = submitLocal;
        self.enabledDisabledLocal = enabledDisabledLocal;

        function toggle(item, list) {            
            var idx = list.indexOf(item);
            if (idx > -1) {
                list.splice(idx, 1);
            }
            else {
                if (list.length === 0) {
                    list.push(item);
                }    
            }                        
        }

        function exists(item, list) {
            return list.indexOf(item) > -1;
        }             

        function toggleCCPP(state) {
            self.isVisibleCCPP = !state;
            self.local.C_CCPP = '';
        }

        function continuar() {
            console.log(self.asignarReasignar);
        }

        function cancelar() {
            window.location = C_SERVER + "/dashboard";
        }

        function getSoluciones() {
            MantenimientoService.getSoluciones()
                    .then(
                            function (data) {
                                self.soluciones = data;
                            },
                            function (errResponse) {
                                console.error('Error while getSoluciones:' + errResponse);
                            }
                    );
        }

        function selectedItemDial(item) {
            this.itemDial = item;
            self.local.N_TIPO_SOLUCION = item.id;
        }
                
        self.isDisabledEnabled = 0;
        function enabledDisabledLocal() {            
            if (self.local.B_ESTADO) {
                self.isDisabledEnabled = 1; //DISABLED
            } else {
                self.isDisabledEnabled = 2; //ENABLED
            }
            
            if (self.initStateLocal !== self.local.B_ESTADO) {
                self.isDisabledEnabled = 0;
            }                                     
        }       

        function submitLocal() {                          

            if (self.itemDial === undefined) {
                mostrarMensaje('Seleccione la Solución Tecnológica.');
                return;
            }
            if (self.local.N_MESAS_ACTUALIZADAS === '0') {
                mostrarMensaje('La Cantidad de Mesas no puede ser cero (0).');
                return;
            }
            
            self.statusLocal = null;
            statusProcess(false);

            if (self.local.N_LOCAL_PK == null) {
                self.local.C_UBIGEO = self.ubigeoOdpe.ubigeo;
            }
                                   
            setEnableDisableLocal();
            $scope.Timer = null;
            $scope.Timer = $interval(function () {                
                    if (self.statusLocal !== null) {
                        $interval.cancel($scope.Timer);
                        if (self.statusLocal) {
                            updateLocal();                            
                        } else {
                            self.local.B_ESTADO = self.initStateLocal;
                        }
                        
                        self.isSubmitLocal = false;
                    }
                }, 1000);                            
        }
                
        function setEnableDisableLocal(){            
            console.log(self.isDisabledEnabled);
            if (self.isDisabledEnabled === 1) {                
                var code = new FormData();
                code.append('code', self.local.C_CODIGO);                
                MantenimientoService.disabledLocal(code).then(
                    function (data) {
                        var d = JSON.parse(data.data);                        
                        if (d.status === 1) {                            
                            self.statusLocal = true;
                        } else {
                            statusProcess('error', d.message);
                            self.statusLocal = false;
                        }                            
                    },
                    function (errResponse) {
                        statusProcess('error', 'Upss!');
                        self.statusLocal = false;
                    }
                );                
            } else if (self.isDisabledEnabled === 2) {                
                var code = new FormData();
                code.append('code', self.local.C_CODIGO);                
                MantenimientoService.enabledLocal(code).then(
                    function (data) {
                        var d = JSON.parse(data.data);
                        if (d.status = 1) {                            
                            self.statusLocal = true;
                        } else {
                            statusProcess('error', d.message);
                            self.statusLocal = false;
                        }                            
                    },
                    function (errResponse) {
                        statusProcess('error', 'Upss!');
                        self.statusLocal = false;
                    }
                ); 
            } else {
                self.statusLocal = true;
            }                        
        }
        
        function updateLocal() {
            var fd = new FormData();
            if (self.local.B_ESTADO) {
                self.local.N_ESTADO = 1;
            } else {
                self.local.N_ESTADO = 0;
            }
            fd.append('local', JSON.stringify(self.local)); 
            
            MantenimientoService.submitLocal(fd).then(
                function (data) {
                    if (data.success === true) {
                        if (self.local.N_LOCAL_PK == null) {
                            window.location = C_SERVER + "/dashboard";
                        } else {
                            statusProcess(true);                            
                            self.local = data.data;                            
                            getElectoresByMesaOrLocal(LOCAL_MESA, self.local.C_CODIGO);                                                         

                            if (data.data.N_ESTADO === 0) {
                                self.local.B_ESTADO = false;
                            } else {
                                self.local.B_ESTADO = true;
                            }

                            if (self.isVisibleCCPP) {
                                self.local.B_CCPP = true;
                            } else {
                                self.local.B_CCPP = false;
                            }
                        }
                    } else {
                        statusProcess('error', 'El ID de Local ya existe.');
                    }
                },
                function (errResponse) {
                    statusProcess('error', 'Upss!');
                }
            );
            self.statusLocal = null;
        }

        function mostrarMensaje(mensaje) {
            var alert = $mdDialog.alert({
                title: "Nuevo Local",
                textContent: mensaje,
                ok: 'ACEPTAR'
            });
            $mdDialog.show(alert).finally(function () {
                alert = undefined;
            });
        }
        
        self.menos = menos;
        self.mas = mas;
        
        function menos() {            
            self.local.N_MESAS_ACTUALIZADAS = parseInt(self.local.N_MESAS_ACTUALIZADAS);
            if (self.local.N_MESAS_ACTUALIZADAS > 1) {
                self.local.N_MESAS_ACTUALIZADAS = self.local.N_MESAS_ACTUALIZADAS - 1;
            }else{
                self.local.N_MESAS_ACTUALIZADAS = 0;
            }
        };
        
        function mas () {
            self.local.N_MESAS_ACTUALIZADAS = parseInt(self.local.N_MESAS_ACTUALIZADAS);
            if (self.local.N_MESAS_ACTUALIZADAS < 999) {
                self.local.N_MESAS_ACTUALIZADAS = self.local.N_MESAS_ACTUALIZADAS + 1;
            }else{
                self.local.N_MESAS_ACTUALIZADAS = 999;
            }
        };

//------------------------------------****SECCION MESA*****--------------------------------------//

        function getLocalByMesa(value) {

            ReporteService.getLocalByMesa(value)
                    .then(function (d) {
                        if (d.success) {
                            self.local = d.data;
                            self.local.B_ESTADO = self.local.N_ESTADO = 1 ? true : false;
                            self.initStateLocal = self.local.B_ESTADO;
                            self.local.B_CCPP = self.local.C_CCPP != undefined ? true : false;

                            var type = self.local.N_TIPO_SOLUCION;
                            if (self.local.N_TIPO_SOLUCION === -1) {
                                type = self.local.C_TIPO_SOLUCIONES;
                            }
                            
                            getElectoresByMesaOrLocal(LOCAL_MESA, self.local.C_CODIGO);
                            
                            getSolucionesIn(type);
                            getMesasByIdLocal(self.local.C_CODIGO);
                        }
                    }, function (errResponse) {
                        console.error('Error while fetching Local');
                    }
                    );

        }
        ;

//------------------------------------****BOTONES ACTION*****--------------------------------------//


        $scope.abrirResumen = function (ev) {
            $mdDialog.show({
                targetEvent: ev,
                templateUrl: OnpeAdanConst.REST_SERVICE + '/popup/resumen',
                locals: {modalId: 1},
                controller: 'modalController',
                controllerAs: 'self'
            });
        };

        $scope.abrirFTFinal = function (ev) {
            $mdDialog.show({
                templateUrl: C_SERVER + '/fichaTecnica/openFichaTecnicaFinal',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: false,
                bindToController: true,
                escapeToClose: true,
                scope: $scope,
                preserveScope: true
            });
        };

        $scope.abrirListaDistritos = function (data) {
            if (data.value == 'ASIGNAR1') {
                $mdDialog.show({
                    templateUrl: OnpeAdanConst.REST_SERVICE + '/popup/listaDistritos',
                    locals: {modalId: 2},
                    controller: 'modalController',
                    controllerAs: 'self'
                });
            }
        };
        
        $scope.abrirFichaTecnicaEstimada = function(){
            if (self.fichaTecnicaEstimada != null) {
                if (self.fichaTecnicaEstimada.ubigeo === undefined) {
                    self.fichaTecnicaEstimada.ubigeo = 0;
                }
                window.open(C_SERVER + "/reporte/electoresPorAsignarPDF/" + self.fichaTecnicaEstimada.tipo + "/" + self.fichaTecnicaEstimada.ubigeo);
            } else {
                var alert = $mdDialog.alert({
                    title: "Ficha Técnica",
                    textContent: 'No se ha podido generar la Ficha Técnica.',
                    ok: 'ACEPTAR'
                });
                $mdDialog.show(alert).finally(function () {
                    alert = undefined;
                });
            }
        };
        
        $scope.abrirMesasPorLocal = function () {
            window.open(C_SERVER + "/reportes/mesasPorLocal");
        };
        
//        $scope.genScreenshot = function() {
//            html2canvas(document.body, {
//                onrendered: function (canvas) {
//                    $('#box1').html("");
//
//                    if (navigator.userAgent.indexOf("MSIE ") > 0 ||
//                            navigator.userAgent.match(/Trident.*rv\:11\./))
//                    {
//                        var blob = canvas.msToBlob();
//                        window.navigator.msSaveBlob(blob, 'Test file.png');
//                    }
//                    else {
//                        $('#test').attr('href', canvas.toDataURL("image/png"));
//                        $('#test').attr('download', 'screenshot.png');
//                        $('#test')[0].click();
//                    }
//
//                }
//            });
//        };
        
    }]);