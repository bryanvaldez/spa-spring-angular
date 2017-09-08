
'use strict';
angular.module('app').controller('solucionCtrl', ['$scope', '$timeout', 'solucionService', 'ReporteService', '$interval', '$mdDialog', function ($scope, $timeout, solucionService, ReporteService, $interval, $mdDialog) {

        $scope.items = [];
        $scope.treetable = [];
        $scope.datosTreetable = [];
        $scope.datosChildren = [];
        $scope.tree_tipo_solucion = {};
        $scope.tipoSolucion = [];
        $scope.porAsignar = 0;
        $scope.total = 0;
        $scope.totalAsignados = 0;
        $scope.dataSolucion = [];
        $scope.dataSolucionMasiva = [];
        $scope.totalPeru = 0;
        $scope.totalExtranjeros = 0;
        $scope.dispCheck = false;
        $scope.dispCard = false;
        $scope.opcion = "";
        $scope.validacion = false;
        $scope.solucionSuccess = 0;
        $scope.solucionMasivaSuccess = 0;
        $scope.estado = "";
        $scope.filtroSol = "";
        $scope.ocultarFiltroSolucion = false;
        $scope.mostrarTotal = true;
        $scope.cantidadLocalesSolucion = 0;
        $scope.cantidadLocalesSolucionEx = 0;
        $scope.errorLocal = false;
        $scope.mensajeError = "";
        $scope.mostrarFiltros = false;
        $scope.listSeleccion = [];
        $scope.viewResult = false;

        $scope.querySearchItem = function (query) {
            if (query.length === 1) {
                $scope.items = [];
                $scope.viewResult = false;
            }
            var results = query ? $scope.items.filter($scope.createFilterFor(query)) : $scope.items,
                    deferred;
            if ($scope.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve(results);
                }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        };

        $scope.restaurarAutocomplete = function (text) {
            if (text === '')
            {
                $scope.cambiarFiltro();
                $scope.mostrarFiltros = false;
                $scope.ocultarFiltroSolucion = false;
            }
        };

        $scope.getItemsEnter = function (text) {
            if (text !== '') {
                $scope.opcion = $scope.opcion.toString();
                solucionService.getLocalesAutocomplete(text, $scope.opcion).then(
                        function (data) {
                            if (data !== '') {
                                $scope.items = data;
                                $scope.viewResult = false;
                            } else {
                                $scope.items = [];
                                $scope.viewResult = true;
                            }
                            document.querySelector('#autoCompleteItem').blur();
                            document.querySelector('#autoCompleteItem').focus();
                        },
                        function (errResponse) {
                            console.error('Error while getting Item:' + errResponse);
                        }
                );
            }                        
        };

        $scope.selectedItemChange = function (item) {
            if (item !== undefined) {

                getFiltroMasivo(item.VALUE);
                $scope.mostrarFiltros = true;
                $scope.ocultarFiltroSolucion = true;
                $scope.searchItem = '';
            }
        };

        $scope.createFilterFor = function (query) {
            var caseQuery = angular.uppercase(query);
            return function filterFn(item) {
                return (item.DISPLAY.indexOf(caseQuery) > -1);
            };
        };

        $scope.siguiente = function () {
            $scope.$emit('StepNext', true);
        };

        $scope.validarAsignaciones = function () {
            if ($scope.validacion)
                return true;
            else
                return false;
        };

        $timeout(function () {
            $scope.$apply();
            getValidacion(0);
            getAllTipoSolucion();
            $scope.filtroSol = "0";
            $scope.opcion = "1";
            $scope.estado = "1";
            $scope.tree_tipo_solucion.expand_all(); 
        }, 50);

//        $scope.filtroAsignados = "1";
//        $scope.filtroVisualizacion = "1";

        $scope.cambiarFiltro = function () {
            $scope.cantidadLocalesSolucion = 0;
            $scope.cantidadLocalesSolucionEx = 0;
            $scope.mostrarTotal = false;
            $scope.tipoExpand = 2;
             $scope.filtroSol = $scope.filtroSol.toString();
             $scope.estado = $scope.estado.toString();
            if ($scope.filtroSol == "0" && $scope.estado == "1")
            {
                $scope.mostrarTotal = true;
            }
            $scope.opcion = $scope.opcion.toString();
      
            excuteVista($scope.estado, $scope.filtroSol);
        };

        $scope.calcularCantidadLocales = function () {
            $scope.cantidadLocalesSolucionTotal = $scope.cantidadLocalesSolucionEx + $scope.cantidadLocalesSolucion;
        };

        $scope.cambiarFiltroAsignados = function () {
            $scope.cantidadLocalesSolucion = 0;
            $scope.cantidadLocalesSolucionEx = 0;
            $scope.mostrarTotal = false;
            $scope.filtroSol = $scope.filtroSol.toString();
             $scope.estado = $scope.estado.toString();
            if ($scope.filtroSol == "0" && $scope.estado == "1")
            {
                $scope.mostrarTotal = true;
            }
            $scope.estado = $scope.estado.toString();
            if ($scope.estado === "3")
            {
                $scope.filtroSol = "0";
                $scope.ocultarFiltroSolucion = true;
            }
            else
            {
                $scope.ocultarFiltroSolucion = false;
            }


            $scope.opcion = $scope.opcion.toString();
            
            excuteVista($scope.estado, $scope.filtroSol);
        };

        $scope.cambiarFiltroSolucion = function () {
            $scope.cantidadLocalesSolucion = 0;
            $scope.cantidadLocalesSolucionEx = 0;
            $scope.mostrarTotal = false;
             $scope.estado = $scope.estado.toString();
            $scope.filtroSol = $scope.filtroSol.toString();

            if ($scope.filtroSol == "0" && $scope.estado == "1")
            {
                $scope.mostrarTotal = true;
            }

            $scope.opcion = $scope.opcion.toString();
           
            excuteVista($scope.estado, $scope.filtroSol);
        };

        $scope.habilitar = function () {
            $scope.dispCard = true;
        };



        $scope.filtroCCPP = function (DATA, tipo) {
            for (var i = 0; i < DATA.length; i++) {
                if (DATA[i].Estado.toString() === tipo.toString()) {
                    DATA.splice(i, 1);
                    $scope.filtroCCPP(DATA, tipo);
                } else if (DATA[i].children.length > 0) {
                    $scope.filtroCCPP(DATA[i].children, tipo);
                }
            }
        };

        $scope.getContenido = function (DATA) {

            $scope.datosTreetable = [];
            getChildren(DATA, $scope.opcion, DATA.id);
        };
        $scope.cambiarOpcion = function (id) {

            for (var h = 0; h < $scope.tipoSolucion.length; h++)
            {
                $scope.tipoSolucion[h].Select = 0;
            }
            for (var h = 0; h < $scope.tipoSolucion.length; h++)
            {
                if($scope.tipoSolucion[h].id === id)
                {
                    $scope.tipoSolucion[h].Select = 1;
                }
            }
            
        };
        $scope.setHeadTreetableEx = function (DATA) {
            $scope.cantidadLocalesSolucionEx = DATA.N_LOCAL;
            $scope.treetable.push({
                Nombre: DATA.C_NOMBRE,
                Datos: DATA.N_DPTO_CONT + " Cont + " + DATA.N_PROV_PAIS + " Paises + " + DATA.N_DIST_CIUD + " Ciudades + " + DATA.N_LOCAL + " LV + " + DATA.N_MESA + " Mesas Estimadas",
                Check: false,
                MostrarCheck: false,
                Estado: 0,
                id: '900000',
                idPadre: null,
                level: 1,
                asignacion: null,
                children: []
            });
            for (var i = 0; i < $scope.tipoSolucion.length; i++) {
                $scope.treetable[1][$scope.tipoSolucion[i].Nombre.toString()] = DATA[$scope.tipoSolucion[i].Nombre];
            }
        };
        $scope.setHeadTreetable = function (DATA) {
            $scope.cantidadLocalesSolucion = DATA.N_LOCAL;
            $scope.treetable.push({
                Nombre: DATA.C_NOMBRE,
                Datos: DATA.N_DPTO_CONT + " Dep + " + DATA.N_PROV_PAIS + " Prov + " + DATA.N_DIST_CIUD + " Dis + " + DATA.N_LOCAL + " LV + " + DATA.N_MESA + " Mesas Estimadas",
                Check: false,
                MostrarCheck: false,
                Estado: 0,
                id: '000000',
                idPadre: null,
                level: 1,
                asignacion: null,
                children: []
            });
            for (var i = 0; i < $scope.tipoSolucion.length; i++) {

                $scope.treetable[0][$scope.tipoSolucion[i].Nombre] = DATA[$scope.tipoSolucion[i].Nombre];
            }
        };

        $scope.setHeadTreetableFiltroEx = function (DATA) {
            $scope.treetable.push({
                Nombre: DATA.C_NOMBRE,
                Datos: " 1 Continente + 1 Pais + 1 Ciudad + 1 LV",
                Check: false,
                MostrarCheck: false,
                Estado: 0,
                id: '900000',
                idPadre: null,
                level: 1,
                asignacion: null,
                children: []
            });
            for (var i = 0; i < $scope.tipoSolucion.length; i++) {

                $scope.treetable[0][$scope.tipoSolucion[i].Nombre] = DATA[$scope.tipoSolucion[i].Nombre];
            }
        };

        $scope.setHeadTreetableFiltro = function (DATA) {
            $scope.treetable.push({
                Nombre: DATA.C_NOMBRE,
                Datos: " 1 Dep + 1 Prov + 1 Dis + 1 LV",
                Check: false,
                MostrarCheck: false,
                Estado: 0,
                id: '000000',
                idPadre: null,
                level: 1,
                asignacion: null,
                children: []
            });
            for (var i = 0; i < $scope.tipoSolucion.length; i++) {

                $scope.treetable[0][$scope.tipoSolucion[i].Nombre] = DATA[$scope.tipoSolucion[i].Nombre];
            }
        };

        $scope.setChildren = function (DATA, idPadre, children) {
            for (var i = 0; i < DATA.length; i++) {
                if (DATA[i].id === idPadre) {
                    DATA[i].children = children;
                } else if (DATA[i].children.length > 0) {
                    $scope.setChildren(DATA[i].children, idPadre, children);
                }
            }
        };

        $scope.setTreetableFiltro = function (DATA, DATAPADRE, mostrarCheck) {
            $scope.datos = "";
            var l1 = 0;
            var l2 = 0;
            var l3 = 0;
            var l4 = 0;
            var l5 = 0;
            $scope.level = 6;
            for (var i = 0; i < DATA.length; i++)
            {
                if (DATA[i].N_DPTO_CONT > 0)
                {
                    $scope.datos += " 1 Dep + ";
                    l1 = 1;
                }
                if (DATA[i].N_PROV_PAIS > 0)
                {
                    $scope.datos += " 1 Prov + ";
                    l2 = 1;
                }
                if (DATA[i].N_DIST_CIUD > 0)
                {
                    $scope.datos += " 1 Dis + ";
                    l3 = 1;
                }
                if (DATA[i].N_LOCAL > 0)
                {
                    $scope.datos += " 1 LV";
                    l4 = 1;
                }
                if (DATA[i].N_MESA > 0)
                {
                    if (mostrarCheck === true) {
                        $scope.datos += DATA[i].N_MESA + " Mesas Estimadas";
                    }
                    else
                    {
                        $scope.datos += "";
                    }
                    l5 = 1;
                }
                $scope.datosChildren.push({
                    Nombre: DATA[i].C_NOMBRE,
                    Datos: $scope.datos,
                    Check: DATAPADRE.Check,
                    Estado: 0,
                    MostrarCheck: mostrarCheck,
                    id: DATA[i].C_CODIGO,
                    idPadre: null,
                    level: $scope.level - (l1 + l2 + l3 + l4 + l5),
                    asignacion: DATA[i].N_ASIGNACION,
                    children: []
                });
                $scope.datos = "";
                for (var h = 0; h < $scope.tipoSolucion.length; h++) {
                    $scope.datosChildren[i][$scope.tipoSolucion[h].Nombre] = DATA[i][$scope.tipoSolucion[h].Nombre];
                }
            }
            $scope.setChildren($scope.treetable, DATA[0].C_CODIGO_PADRE, $scope.datosChildren);
            $scope.datosChildren = [];
        };

        $scope.setTreetableFiltroEx = function (DATA, DATAPADRE, mostrarCheck) {
            $scope.datos = "";
            var l1 = 0;
            var l2 = 0;
            var l3 = 0;
            var l4 = 0;
            var l5 = 0;
            $scope.level = 6;
            for (var i = 0; i < DATA.length; i++)
            {
                if (DATA[i].N_DPTO_CONT > 0)
                {
                    $scope.datos += " 1 Continente + ";
                    l1 = 1;
                }
                if (DATA[i].N_PROV_PAIS > 0)
                {
                    $scope.datos += " 1 Pais + ";
                    l2 = 1;
                }
                if (DATA[i].N_DIST_CIUD > 0)
                {
                    $scope.datos += " 1 Ciudad + ";
                    l3 = 1;
                }
                if (DATA[i].N_LOCAL > 0)
                {
                    $scope.datos += " 1 LV";
                    l4 = 1;
                }
                if (DATA[i].N_MESA > 0)
                {
                    if (mostrarCheck === true) {
                        $scope.datos += DATA[i].N_MESA + " Mesas Estimadas";
                    }
                    else
                    {
                        $scope.datos += "";
                    }
                    l5 = 1;
                }
                $scope.datosChildren.push({
                    Nombre: DATA[i].C_NOMBRE,
                    Datos: $scope.datos,
                    Check: DATAPADRE.Check,
                    Estado: 0,
                    MostrarCheck: mostrarCheck,
                    id: DATA[i].C_CODIGO,
                    idPadre: null,
                    level: $scope.level - (l1 + l2 + l3 + l4 + l5),
                    asignacion: DATA[i].N_ASIGNACION,
                    children: []
                });
                $scope.datos = "";
                for (var h = 0; h < $scope.tipoSolucion.length; h++) {
                    $scope.datosChildren[i][$scope.tipoSolucion[h].Nombre] = DATA[i][$scope.tipoSolucion[h].Nombre];
                }
            }
            $scope.setChildren($scope.treetable, DATA[0].C_CODIGO_PADRE, $scope.datosChildren);
            $scope.datosChildren = [];
        };

        $scope.setTreetable = function (DATA, DATAPADRE) {
            $scope.datos = "";
            var l1 = 0;
            var l2 = 0;
            var l3 = 0;
            var l4 = 0;
            var l5 = 0;
            $scope.level = 6;
            $scope.locales = 0;
            for (var i = 0; i < DATA.length; i++)
            {
                if (DATA[i].N_DPTO_CONT > 0)
                {
                    $scope.datos += DATA.N_DPTO_CONT + " Dep + ";
                    l1 = 1;
                }
                if (DATA[i].N_PROV_PAIS > 0)
                {
                    $scope.datos += DATA[i].N_PROV_PAIS + " Prov + ";
                    l2 = 1;
                }
                if (DATA[i].N_DIST_CIUD > 0)
                {
                    $scope.datos += DATA[i].N_DIST_CIUD + " Dis + ";
                    l3 = 1;
                }
                if (DATA[i].N_LOCAL > 0)
                {
                    $scope.datos += DATA[i].N_LOCAL + " LV +";
                    $scope.locales = DATA[i].N_LOCAL;
                    l4 = 1;
                }
                if (DATA[i].N_MESA > 0)
                {
                    $scope.datos += DATA[i].N_MESA + " Mesas Estimadas";
                    l5 = 1;
                }

                $scope.datosChildren.push({
                    Nombre: DATA[i].C_NOMBRE,
                    Datos: $scope.datos,
                    Check: DATAPADRE.Check,
                    MostrarCheck: true,
                    Estado: 0,
                    id: DATA[i].C_CODIGO,
                    idPadre: null,
                    level: $scope.level - (l1 + l2 + l3 + l4 + l5),
                    asignacion: DATA[i].N_ASIGNACION,
                    locales: $scope.locales,
                    children: []
                });
                $scope.datos = "";
                for (var h = 0; h < $scope.tipoSolucion.length; h++) {
                    $scope.datosChildren[i][$scope.tipoSolucion[h].Nombre] = DATA[i][$scope.tipoSolucion[h].Nombre];
                }
            }
            $scope.setChildren($scope.treetable, DATA[0].C_CODIGO_PADRE, $scope.datosChildren);
            $scope.datosChildren = [];
        };
        $scope.setTreetableEx = function (DATA, DATAPADRE) {
            $scope.datos = "";
            var l1 = 0;
            var l2 = 0;
            var l3 = 0;
            var l4 = 0;
            var l5 = 0;
            $scope.level = 6;
            $scope.locales = 0;
            for (var i = 0; i < DATA.length; i++)
            {
                if (DATA[i].N_DPTO_CONT > 0)
                {
                    $scope.datos += DATA.N_DPTO_CONT + " Continente + ";
                    l1 = 1;
                }
                if (DATA[i].N_PROV_PAIS > 0)
                {
                    $scope.datos += DATA[i].N_PROV_PAIS + " Pais(es) + ";
                    l1 = 2;
                }
                if (DATA[i].N_DIST_CIUD > 0)
                {
                    $scope.datos += DATA[i].N_DIST_CIUD + " Ciudad(es) + ";
                    l1 = 3;
                }
                if (DATA[i].N_LOCAL > 0)
                {
                    $scope.datos += DATA[i].N_LOCAL + " LV + ";
                    $scope.locales = DATA[i].N_LOCAL;
                    l1 = 4;
                }
                if (DATA[i].N_MESA > 0)
                {
                    $scope.datos += DATA[i].N_MESA + " Mesas Estimadas";
                    l1 = 5;
                }
                $scope.datosChildren.push({
                    Nombre: DATA[i].C_NOMBRE,
                    Datos: $scope.datos,
                    Check: DATAPADRE.Check,
                    MostrarCheck: true,
                    Estado: 0,
                    id: DATA[i].C_CODIGO,
                    idPadre: null,
                    level: $scope.level - (l1 + l2 + l3 + l4 + l5),
                    asignacion: DATA[i].N_ASIGNACION,
                    locales: $scope.locales,
                    children: []
                });
                $scope.datos = "";
                for (var h = 0; h < $scope.tipoSolucion.length; h++) {
                    $scope.datosChildren[i][$scope.tipoSolucion[h].Nombre] = DATA[i][$scope.tipoSolucion[h].Nombre];
                }
            }
            $scope.setChildren($scope.treetable, DATA[0].C_CODIGO_PADRE, $scope.datosChildren);
            $scope.datosChildren = [];
        };
        $scope.col_defs_locales = [{field: "Datos", displayName: " "}];
        $scope.col_defs_locales.push({
            field: "Check",
            displayName: " ",
            cellTemplateScope: {test: function (data) {

                    if (!data.Check) {
                        $scope.nodeCheckTrue($scope.treetable, data);
                        data.Check = true;
                        $scope.mensajeError = "";
                    }
                    else if (data.Check) {
                        $scope.nodeCheckFalse($scope.treetable, data);
                        $scope.nodeCheckParentFalse($scope.treetable, data.parent_uid);
                        data.Check = false;
                    }
                }},
            cellTemplate: "<md-checkbox ng-show='row.branch.level !== 1' ng-disabled='!row.branch.MostrarCheck' ng-checked='row.branch.Check === true' aria-label='checkbox' class='md-warn' ng-click='cellTemplateScope.test(row.branch)'></md-checkbox>"});
        $scope.expanding_property = {field: "Nombre", displayName: " ", sortable: false, filterable: true, cellTemplate: "<i> <md-tooltip md-direction='left'>[[row.branch.Nombre]]</md-tooltip>[[ row.branch[expandingProperty.field] ]]</i>"};
        $scope.col_defs = angular.copy($scope.col_defs_locales);
        $scope.setSolucion = function () {
            for (var i = 0; i < $scope.tipoSolucion.length; i++) {
                $scope.col_defs.push({field: $scope.tipoSolucion[i].Nombre, displayName: " ", cellTemplate: "<img width='20px' ng-if='row.branch." + $scope.tipoSolucion[i].Nombre + ">0'  ng-src='"+C_SERVER + $scope.tipoSolucion[i].Imagen + "'></img>"});
            }
        };

        $scope.cambiarSolucion = function (DATA, solucion) {
            for (var i = 0; i < DATA.length; i++) {

                if (DATA[i].Check === true)
                {
                    for (var h = 0; h < $scope.tipoSolucion.length; h++)
                    {
                        DATA[i][$scope.tipoSolucion[h].Nombre] = 0;
                    }
                    DATA[i][$scope.tipoSolucion[solucion].Nombre] = 1;
                    $scope.cambiarSolucion(DATA[i].children, solucion);
                }
                else
                {
                    $scope.cambiarSolucion(DATA[i].children, solucion);
                }
            }
        };

        $scope.nodeCheckTrue = function (DATA, ROW) {
            for (var i = 0; i < DATA.length; i++) {
                if (DATA[i].parent_uid === ROW.uid) {
                    DATA[i].Check = true;
                    $scope.nodeCheckTrue(DATA, DATA[i]);
                } else if (DATA[i].children.length > 0) {
                    $scope.nodeCheckTrue(DATA[i].children, ROW);
                }
            }
        };
        $scope.nodeCheckFalse = function (DATA, ROW) {
            for (var i = 0; i < DATA.length; i++) {
                if (DATA[i].parent_uid === ROW.uid) {
                    DATA[i].Check = false;
                    $scope.nodeCheckFalse(DATA, DATA[i]);
                } else if (DATA[i].children.length > 0) {
                    $scope.nodeCheckFalse(DATA[i].children, ROW);
                }
            }
        };
        $scope.nodeCheckParentFalse = function (DATA, idPadre) {
            for (var i = 0; i < DATA.length; i++) {
                if (DATA[i].uid === idPadre) {
                    DATA[i].Check = false;
                    $scope.nodeCheckParentFalse($scope.treetable, DATA[i].parent_uid);
                }
                else {
                    $scope.nodeCheckParentFalse(DATA[i].children, idPadre);
                }
            }
        };


        $scope.configurarSeleccion = function (DATA) {
            for (var i = 0; i < DATA.length; i++) {

                if (DATA[i].level === 5 && DATA[i].Check === true)
                { 
                    $scope.dataSolucion.push({id: DATA[i].id, level: DATA[i].level, parent_uid: DATA[i].parent_uid, update: true});
                }
                else
                {
                    $scope.configurarSeleccion(DATA[i].children);
                }
            }
        };
        $scope.configurarSeleccionMasiva = function (DATA) {
            for (var i = 0; i < DATA.length; i++) {
                if (DATA[i].Check === true && DATA[i].level !== 5)
                {
                    $scope.dataSolucionMasiva.push({idPadre: DATA[i].id, level: DATA[i].level, parent_uid: DATA[i].parent_uid, uid: DATA[i].uid, locales: DATA[i].locales, update: true});
                    $scope.configurarSeleccionMasiva(DATA[i].children);
                }
                else {
                    $scope.configurarSeleccionMasiva(DATA[i].children);
                }
            }
        };

        $scope.quitarChildrenLocal = function () {
            for (var i = 0; i < $scope.dataSolucion.length; i++)
            {
                for (var h = 0; h < $scope.dataSolucionMasiva.length; h++) {
                    if ($scope.dataSolucion[i].parent_uid === $scope.dataSolucionMasiva[h].uid)
                    {
                        $scope.dataSolucion[i].update = false;
                    }
                }
            }
        };

        $scope.quitarParentChildren = function () {
           
            for (var i = 0; i < $scope.dataSolucionMasiva.length; i++)
            {
                for (var h = 0; h < $scope.dataSolucionMasiva.length; h++)
                {
                    if ($scope.dataSolucionMasiva[i].parent_uid === $scope.dataSolucionMasiva[h].uid)
                    {
                        $scope.dataSolucionMasiva[i].update = false;
                    }
                }
            }
        };

        $scope.asignarListParent = function ()
        {
            for (var i = 0; i < $scope.dataSolucionMasiva.length; i++)
            {
                if ($scope.dataSolucionMasiva[i].update) {
                    $scope.listSeleccion.push({tipo: "ubigeo", idPadre: $scope.dataSolucionMasiva[i].idPadre, level: $scope.dataSolucionMasiva[i].level, parent_uid: $scope.dataSolucionMasiva[i].parent_uid, uid: $scope.dataSolucionMasiva[i].uid, locales: $scope.dataSolucionMasiva[i].locales, update: true});
                }
            }
           
        };

        $scope.asignarListLocal = function ()
        {
            for (var i = 0; i < $scope.dataSolucion.length; i++)
            {
                if ($scope.dataSolucion[i].update) {
                    $scope.listSeleccion.push({tipo: "local", id: $scope.dataSolucion[i].id, level: $scope.dataSolucion[i].level, parent_uid: $scope.dataSolucion[i].parent_uid, update: true});
                }
            }
        };

        $scope.asignarSolucionArray = function () {
            $scope.quitarChildrenLocal();
            $scope.quitarParentChildren();
            $scope.asignarListParent();
            $scope.asignarListLocal();
            var solucion;
            for (var g = 0; g < $scope.tipoSolucion.length; g++)
            {
                if ($scope.tipoSolucion[g].Select === 1)
                {
                    solucion = $scope.tipoSolucion[g].id;
                }
            }


            if ($scope.listSeleccion.length > 0) {

                $scope.opcion = $scope.opcion.toString();
                $scope.estado = $scope.estado.toString();
                $scope.filtroSol = $scope.filtroSol.toString();
                var data = new FormData();
                data.append('dataSeleccion', angular.toJson($scope.listSeleccion));
                updateSolucionTree(data, solucion, $scope.opcion, $scope.estado, $scope.filtroSol);
            }


        };

        $scope.asignarSolucionValidada = function () {


            $scope.quitarChildrenLocal();
            $scope.quitarParentChildren();

            var solucion;
            for (var g = 0; g < $scope.tipoSolucion.length; g++)
            {
                if ($scope.tipoSolucion[g].Select === 1)
                {
                    solucion = $scope.tipoSolucion[g].id;
                }
            }
            if ($scope.dataSolucionMasiva.length > 0) {
                $scope.solucionMasivaSuccess = 0;
                for (var i = 0; i < $scope.dataSolucionMasiva.length; i++)
                {
                    if ($scope.dataSolucionMasiva[i].update) {
                        updateSolucionMasivaTree($scope.dataSolucionMasiva[i].idPadre, solucion, $scope.dataSolucionMasiva[i].level, $scope.dataSolucionMasiva[i].idPadre.substring(0, 1), $scope.opcion.toString(), $scope.estado.toString(), $scope.filtroSol.toString());
                    }
                    else {
                        $scope.solucionMasivaSuccess++;
                    }

                }
            }
            if ($scope.dataSolucion.length > 0) {
                $scope.solucionSuccess = 0;
                for (var i = 0; i < $scope.dataSolucion.length; i++)
                {
                    if ($scope.dataSolucion[i].update) {
                        updateSolucion($scope.dataSolucion[i].id, solucion, $scope.opcion);
                    }
                    else {
                        $scope.solucionSuccess++;
                    }
                }
            }

        };

        $scope.asignarSolucion = function () {
            $scope.dispCard = false;
            $scope.configurarSeleccion($scope.treetable);
            $scope.configurarSeleccionMasiva($scope.treetable);
            if (($scope.dataSolucion.length + $scope.dataSolucionMasiva.length) > 0)
            {
                $scope.mensajeError = "";
                //  $scope.asignarSolucionValidada();
                $scope.asignarSolucionArray();
            }
            else {
                $scope.mensajeError = "Debe seleccionar por lo menos un Ubigeo o Local de Votación.";
                $scope.quitarSeleccionSolucion();
            }

        };
        //--------------TEST ASIGNAR IMAGEN A PADRE
        $scope.configurarAsignacionChildren = function (DATA, Select, solucion) {
            for (var i = 0; i < DATA.length; i++) {
                if (DATA[i].uid === Select.parent_uid) {
                    DATA[i][solucion] = 1;
                } else {
                    $scope.configurarAsignacionChildren(DATA[i].children, Select, solucion);
                }
            }
        };

        $scope.simularAsignacionChildren = function () {
            $scope.solucionTemp = "";
            for (var i = 0; i < $scope.tipoSolucion.length; i++)
            {
                if ($scope.tipoSolucion[i].Select === 1) {
                    $scope.solucionTemp = $scope.tipoSolucion[i].Nombre;
                }
            }
            for (var h = 0; h < $scope.dataSolucion.length; h++) {
                // $scope.insertarDatosMasivos($scope.dataSolucion[h]);
                $scope.configurarAsignacionChildren($scope.treetable, $scope.dataSolucion[h], $scope.solucionTemp);
            }
        };

//        $scope.insertarDatosMasivos = function (children){
//            
//            $scope.dataSolucionMasiva.push({idPadre:children.id,level:children.level,uid:children.parent_uid});
//           
//        };


        $scope.simularAsignacionPadre = function () {
            $scope.solucionTemp = "";
            for (var i = 0; i < $scope.tipoSolucion.length; i++)
            {
                if ($scope.tipoSolucion[i].Select === 1) {
                    $scope.solucionTemp = $scope.tipoSolucion[i].Nombre;
                }
            }
            for (var h = 0; h < $scope.dataSolucionMasiva.length; h++) {
                $scope.configurarAsignacionPadre($scope.treetable, $scope.dataSolucionMasiva[h], $scope.solucionTemp);
            }
        };

        $scope.configurarAsignacionPadre = function (DATA, Select, solucion) {
            for (var i = 0; i < DATA.length; i++) {
                if (DATA[i].uid === Select.parent_uid) {
                    DATA[i][solucion] = 1;
                } else {
                    $scope.configurarAsignacionPadre(DATA[i].children, Select, solucion);
                }
            }
        };

//-------------------
        $scope.simularAsignacion = function () {
            if ($scope.solucionSuccess === $scope.dataSolucion.length && $scope.solucionMasivaSuccess === $scope.dataSolucionMasiva.length) {
                //TEST - SIMULACION IMAGEN PADRE
//                $scope.simularAsignacionPadre();
//                $scope.simularAsignacionChildren();                
//                $scope.quitarSeleccionCheck($scope.treetable);
//                $scope.quitarSeleccionSolucion();
//                $scope.treetable = [];
//                $scope.generarTreetable();
//                $scope.obtenerDetalles($scope.opcion);
//----------------------                
                var sumRegistrosMasivos = 0;
                for (var j = 0; j < $scope.dataSolucionMasiva.length; j++)
                {
                    if ($scope.dataSolucionMasiva[j].update)
                    {
                        sumRegistrosMasivos += $scope.dataSolucionMasiva[j].locales;
                    }
                }
                var temp = $scope.dataSolucion.length + sumRegistrosMasivos;

                $scope.listSeleccion = [];
                $scope.dataSolucion = [];
                $scope.dataSolucionMasiva = [];
                $scope.errorLocal = false;
                $scope.cambiarFiltro();
                $scope.quitarSeleccionCheck($scope.treetable);
                $scope.quitarSeleccionSolucion();
                getValidacion(0);
            }
        };

        $scope.simularAsignacionArray = function (data) {

            if (data) {
                var sumRegistrosMasivos = 0;
                for (var j = 0; j < $scope.dataSolucionMasiva.length; j++)
                {
                    if ($scope.dataSolucionMasiva[j].update)
                    {
                        sumRegistrosMasivos += $scope.dataSolucionMasiva[j].locales;
                    }
                }
                var temp = $scope.dataSolucion.length + sumRegistrosMasivos;

            }
            $scope.listSeleccion = [];
            $scope.dataSolucion = [];
            $scope.dataSolucionMasiva = [];
            $scope.errorLocal = false;
            $scope.cambiarFiltro();
            $scope.quitarSeleccionCheck($scope.treetable);
            $scope.quitarSeleccionSolucion();
            getValidacion(0);

        };

//        $scope.estado = function (DATA, tipoFiltro) {
//            for (var i = 0; i < DATA.length; i++) {
//                if (DATA[i].asignacion !== tipoFiltro && DATA[i].level === 5) {
//                    DATA.splice(i, 1);
//                    $scope.estado(DATA, tipoFiltro);
//                } else if (DATA[i].children.length > 0) {
//                    $scope.estado(DATA[i].children, tipoFiltro);
//                }
//            }
//        };

        $scope.quitarSeleccionSolucion = function () {
            for (var i = 0; i < $scope.tipoSolucion.length; i++) {
                $scope.tipoSolucion[i].Select = 0;
            }
            $scope.dispCard = false;
        };

        $scope.quitarSeleccionCheck = function (DATA) {

            for (var i = 0; i < DATA.length; i++)
            {
                DATA[i].Check = false;
                if (DATA[i].children.length > 0)
                {
                    $scope.quitarSeleccionCheck(DATA[i].children);
                }
            }
        };



        $scope.obtenerDetalles = function (tipo)
        {
            $scope.totalPeru = 0;
            $scope.totalExtranjeros = 0;
            $scope.totalAsignados = 0;
            $scope.total = 0;
            for (var h = 0; h < $scope.tipoSolucion.length; h++)
            {
                $scope.tipoSolucion[h].ccpp = 0;
                $scope.tipoSolucion[h].noccpp = 0;

            }

            if (tipo === "1")
            {
                getCantidadSoluciones("000000", "2", "ccpp");
                getCantidadSoluciones("900000", "3", "noccpp");
                getCantidadSoluciones("000000", "3", "noccpp");
            }
            else if (tipo === "2") {
                getCantidadSoluciones("000000", "2", "ccpp");
            }
            else if (tipo === "3") {
                getCantidadSoluciones("900000", "3", "noccpp");
                getCantidadSoluciones("000000", "3", "noccpp");
            }

        };

        $scope.obtenerCantidadesAsignadas = function (tipo) {

            switch (tipo) {
                case "1":

                    for (var h = 0; h < $scope.tipoSolucion.length; h++)
                    {
                        var totalTemp = $scope.tipoSolucion[h].ccpp + $scope.tipoSolucion[h].noccpp;
                        $scope.totalAsignados += totalTemp;
                    }
                    break;
                case "2":
                    for (var h = 0; h < $scope.tipoSolucion.length; h++)
                    {
                        $scope.totalAsignados += $scope.tipoSolucion[h].ccpp;
                    }
                    break;
                case "3":
                    for (var h = 0; h < $scope.tipoSolucion.length; h++)
                    {
                        $scope.totalAsignados += $scope.tipoSolucion[h].noccpp;
                    }
                    break;
            }

        };

        $scope.obtenerPorcentajes = function (tipo) {
            switch (tipo) {
                case "1":
                    for (var h = 0; h < $scope.tipoSolucion.length; h++)
                    {
                        var totalSolucion = $scope.tipoSolucion[h].ccpp + $scope.tipoSolucion[h].noccpp;
                        var porcentajeCalculado = (100 * totalSolucion) / $scope.total;
                        porcentajeCalculado = porcentajeCalculado.toFixed(2);
                        $scope.tipoSolucion[h]["Porcentaje"] = porcentajeCalculado;
                    }
                    break;
                case "2":
                    for (var h = 0; h < $scope.tipoSolucion.length; h++)
                    {
                        var totalSolucion = $scope.tipoSolucion[h].ccpp;
                        var porcentajeCalculado = (100 * totalSolucion) / $scope.total;
                        porcentajeCalculado = porcentajeCalculado.toFixed(2);
                        $scope.tipoSolucion[h]["Porcentaje"] = porcentajeCalculado;
                    }
                    break;
                case "3":
                    for (var h = 0; h < $scope.tipoSolucion.length; h++)
                    {
                        var totalSolucion = $scope.tipoSolucion[h].noccpp;
                        var porcentajeCalculado = (100 * totalSolucion) / $scope.total;
                        porcentajeCalculado = porcentajeCalculado.toFixed(2);
                        $scope.tipoSolucion[h]["Porcentaje"] = porcentajeCalculado;
                    }
                    break;
            }
        };

        $scope.obtenerTotalLocales = function (data) {

            if (data[0].C_CODIGO.charAt(0) === '9' && data.length > 0) {

                $scope.totalExtranjeros += data[0].N_LOCAL;
            }
            else if (data[0].C_CODIGO.charAt(0) === '0' && data.length > 0)
            {
                $scope.totalPeru += data[0].N_LOCAL;
            }
            $scope.total = $scope.totalExtranjeros + $scope.totalPeru;

            $scope.obtenerPorcentajes($scope.opcion);

        };

        $scope.generarTreetable = function () {
            switch ($scope.opcion) {
                case "1":

                    $scope.treetable = [];
                    $scope.porAsignar = 0;
                    getParent("000000", $scope.opcion);
                    $scope.obtenerDetalles($scope.opcion);
                    break;
                case "2":

                    $scope.treetable = [];
                    $scope.porAsignar = 0;
                    getParent("000000", $scope.opcion);
                    $scope.obtenerDetalles($scope.opcion);
                    break;
                case "3":
                    $scope.treetable = [];
                    $scope.porAsignar = 0;
                    getParent("000000", $scope.opcion);
                    $scope.obtenerDetalles($scope.opcion);
                    break;
            }
        };

        function excuteVista(tipo, solucion) {
            solucionService.excuteVista(tipo, solucion)
                    .then(
                            function (data) {
                                if (data.success === 1)
                                {
                                    $scope.generarTreetable();
                                }
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function getAllTipoSolucion() {
            solucionService.getAllTipoSolucion()
                    .then(
                            function (data) {
                                for (var i = 0; i < data.length; i++)
                                {
                                    $scope.tipoSolucion.push({Nombre: data[i].alias, Select: 0, id: data[i].id, Imagen: data[i].rutaImagen, ccpp: 0, noccpp: 0});
                                }
                                excuteVista($scope.estado, $scope.filtroSol);
                                $scope.setSolucion();
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }




        function getChildren(DATA, tipo, id) {
            solucionService.getChildren(DATA, tipo, id)
                    .then(
                            function (data) {
                                if (data.length > 0) {
                                    $scope.datosTreetable = data;
                                    if ($scope.datosTreetable[0].C_CODIGO.charAt(0) === '9')
                                        $scope.setTreetableEx($scope.datosTreetable, DATA);
                                    else
                                        $scope.setTreetable($scope.datosTreetable, DATA);
                                }
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function getFiltroMasivo(id) {
            solucionService.getFiltroMasivo(id)
                    .then(
                            function (data) {
                                $scope.treetable = [];
                                getParentFiltro(data[0].NIVEL_1, $scope.opcion, data[0].DEP, data[0].PRO, data[0].DIS, data[0].C_CODIGO);
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function getParentFiltro(idNacion, tipo, idDepartamento, idProvincia, idDistrito, idLocal) {
            solucionService.getParentFiltro(idNacion, tipo)
                    .then(
                            function (data) {
                                if (data.length > 0) {
                                    $scope.datosTreetable = data;
                                    if (data[0].C_CODIGO.charAt(0) !== '9' && data.length > 0) {
                                        $scope.setHeadTreetableFiltro($scope.datosTreetable[0]);
                                    }
                                    else {
                                        $scope.setHeadTreetableFiltroEx($scope.datosTreetable[0]);
                                    }

                                    $scope.datosTreetable = [];
                                    getChildrenFiltro($scope.treetable, idDepartamento, idProvincia, idDistrito, idLocal, 2, idNacion, idDepartamento);
                                }
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function getChildrenFiltro(DATA, idDepartamento, idProvincia, idDistrito, idLocal, nivel, idPadre, idChildren) {
            solucionService.getChildrenFiltro(idChildren, idPadre)
                    .then(
                            function (data) {
                                if (data.length > 0) {

                                    switch (nivel) {
                                        case 2:
                                            $scope.datosTreetable = [];
                                            $scope.datosTreetable = data;
                                            if (idPadre.charAt(0) !== '9') {
                                                $scope.setTreetableFiltro($scope.datosTreetable, DATA, false);
                                                getChildrenFiltro(DATA, idDepartamento, idProvincia, idDistrito, idLocal, 3, idDepartamento, idProvincia);
                                            }
                                            else {
                                                $scope.setTreetableFiltroEx($scope.datosTreetable, DATA, false);
                                                getChildrenFiltro(DATA, idDepartamento, idProvincia, idDistrito, idLocal, 3, idDepartamento, idProvincia);

                                            }
                                            break;
                                        case 3:
                                            $scope.datosTreetable = [];
                                            $scope.datosTreetable = data;
                                            if (idPadre.charAt(0) !== '9') {
                                                $scope.setTreetableFiltro($scope.datosTreetable, DATA, false);
                                                getChildrenFiltro(DATA, idDepartamento, idProvincia, idDistrito, idLocal, 4, idProvincia, idDistrito);
                                            }
                                            else {
                                                $scope.setTreetableFiltroEx($scope.datosTreetable, DATA, false);
                                                getChildrenFiltro(DATA, idDepartamento, idProvincia, idDistrito, idLocal, 4, idProvincia, idDistrito);
                                            }
                                            break;
                                        case 4:
                                            $scope.datosTreetable = [];
                                            $scope.datosTreetable = data;
                                            if (idPadre.charAt(0) !== '9') {
                                                $scope.setTreetableFiltro($scope.datosTreetable, DATA, false);
                                                getChildrenFiltro(DATA, idDepartamento, idProvincia, idDistrito, idLocal, 5, idDistrito, idLocal);
                                            }
                                            else {
                                                $scope.setTreetableFiltroEx($scope.datosTreetable, DATA, false);
                                                getChildrenFiltro(DATA, idDepartamento, idProvincia, idDistrito, idLocal, 5, idDistrito, idLocal);
                                            }
                                            break;
                                        case 5:
                                            $scope.datosTreetable = [];
                                            $scope.datosTreetable = data;
                                            $scope.setTreetableFiltro($scope.datosTreetable, DATA, true);
                                            break;
                                    }
                                }
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function getParentEx(id, tipo)
        {
            solucionService.getParent(id, tipo)
                    .then(
                            function (data) {

                                if (data.length > 0) {
                                    $scope.datosTreetable = data;
                                    $scope.setHeadTreetableEx($scope.datosTreetable[0]);
                                    $scope.datosTreetable = [];
                                    getChildren($scope.treetable, $scope.opcion, "900000");
                                }
                                $scope.calcularCantidadLocales();
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function getParent(id, tipo) {
            solucionService.getParent(id, tipo)
                    .then(
                            function (data) {

                                if (data.length > 0) {
                                    $scope.datosTreetable = data;
                                    if (id === "000000" && data.length > 0)
                                    {
                                        $scope.setHeadTreetable($scope.datosTreetable[0]);
                                        $scope.datosTreetable = [];
                                        getChildren($scope.treetable, $scope.opcion, "000000");
                                        getParent("900000", $scope.opcion);
                                    }
                                    else if (id === "900000" && data.length > 0)
                                    {
                                        $scope.setHeadTreetableEx($scope.datosTreetable[0]);
                                        $scope.datosTreetable = [];
                                        getChildren($scope.treetable, $scope.opcion, "900000");
                                    }
                                }
                                else {
                                    getParentEx("900000", $scope.opcion);
                                }
                                $scope.calcularCantidadLocales();
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function getValidacion(solucion) {
            solucionService.getValidacion(solucion)
                    .then(
                            function (data) {
                                if (data.length === 0) {
                                    $scope.validacion = true;
                                }
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function getCantidadSoluciones(id, tipo, filtro) {
            solucionService.getCantidadSoluciones(id, tipo)
                    .then(
                            function (data) {
                                if (data.length > 0)
                                {
                                    if (filtro === "ccpp" && data.length > 0)
                                    {
                                        for (var h = 0; h < $scope.tipoSolucion.length; h++)
                                        {
                                            $scope.tipoSolucion[h].ccpp += data[0][$scope.tipoSolucion[h].Nombre];
                                        }
                                    }
                                    else if (filtro === "noccpp" && data.length > 0)
                                    {
                                        for (var h = 0; h < $scope.tipoSolucion.length; h++)
                                        {
                                            $scope.tipoSolucion[h].noccpp += data[0][$scope.tipoSolucion[h].Nombre];
                                        }
                                    }

                                    $scope.obtenerTotalLocales(data);


                                    $scope.totalAsignados = 0;
                                    $scope.obtenerCantidadesAsignadas($scope.opcion);
                                }
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function updateSolucion(id, solucion, tipo) {
            solucionService.updateSolucion(id, solucion, tipo)
                    .then(
                            function (data) {
                                $scope.solucionSuccess += data.success;
//                                for (var h = 0; h < $scope.tipoSolucion.length; h++)
//                                {
//                                    if ($scope.tipoSolucion[h].Select === 1)
//                                    {
//                                        $scope.cambiarSolucion($scope.treetable, h);
//                                    }
//                                }
                                $scope.simularAsignacion();

                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function updateSolucionMasivaTree(idPadre, solucion, nivel, nacion, filtroTipo, filtroAsignados, filtroSolucion) {
            solucionService.updateSolucionMasivaTree(idPadre, solucion, nivel, nacion, filtroTipo, filtroAsignados, filtroSolucion)
                    .then(
                            function (data) {

                                $scope.solucionMasivaSuccess += data.success;
//                                for (var h = 0; h < $scope.tipoSolucion.length; h++)
//                                {
//                                    if ($scope.tipoSolucion[h].Select === 1)
//                                    {
//                                        $scope.cambiarSolucion($scope.treetable, h);
//                                    }
//                                }
                                $scope.simularAsignacion();
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function updateSolucionTree(list, solucion, opcion, filtroA, filtroS) {
            solucionService.updateSolucionTree(list, solucion, opcion, filtroA, filtroS)
                    .then(
                            function (data) {
                                if (!data.success)
                                {
                                    $scope.mensajeError = "Error al guardar datos, intentelo nuevamente";

                                    $scope.simularAsignacionArray(data.success);


                                }
                                else {

                                    $scope.simularAsignacionArray(data.success);
//                                    $scope.quitarSeleccionCheck($scope.treetable);
//                                    $scope.quitarSeleccionSolucion(); 

                                }
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }

                    );
        }

    }]);
angular.module('app').factory('solucionService', ['$http', '$q', function ($http, $q) {

        var REST_SERVICE = C_SERVER + "/solucion";
        var factory = {
            getChildren: getChildren,
            getParent: getParent,
            updateSolucion: updateSolucion,
            getAllTipoSolucion: getAllTipoSolucion,
            getCantidadSoluciones: getCantidadSoluciones,
            getValidacion: getValidacion,
            excuteVista: excuteVista,
            getParentFiltro: getParentFiltro,
            getChildrenFiltro: getChildrenFiltro,
            getFiltroMasivo: getFiltroMasivo,
            getLocalesAutocomplete: getLocalesAutocomplete,
            updateSolucionMasivaTree: updateSolucionMasivaTree,
            updateSolucionTree: updateSolucionTree
        };
        return factory;

        function getLocalesAutocomplete(value, tipo) {
            var deferred = $q.defer();
            $http.get(REST_SERVICE + "/getLocalesAutocomplete/" + value + "/" + tipo)
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

        function excuteVista(tipo, solucion) {
            var deferred = $q.defer();
            $http.post(REST_SERVICE + '/excuteVista/' + tipo + '/' + solucion, {
                headers: {'Content-Type': undefined}
            }).then(
                    function (response) {

                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.error('[SERVICE].Error.');
                        deferred.reject(errResponse);
                    }
            );
            return deferred.promise;
        }

        function getChildren(DATA, tipo, id) {
            var deferred = $q.defer();
            $http.get(REST_SERVICE + "/getChildren/" + id + "/" + tipo)
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

        function getFiltroMasivo(id) {
            var deferred = $q.defer();
            $http.get(REST_SERVICE + "/getFiltroMasivo/" + id)
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

        function getParentFiltro(id, tipo) {
            var deferred = $q.defer();
            $http.get(REST_SERVICE + "/getParent/" + id + "/" + tipo)
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

        function getChildrenFiltro(id, idPadre) {
            var deferred = $q.defer();
            $http.get(REST_SERVICE + "/getChildrenFiltro/" + id + "/" + idPadre)
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


        function getParent(id, tipo) {
            var deferred = $q.defer();
            $http.get(REST_SERVICE + "/getParent/" + id + "/" + tipo)
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

        function getValidacion(solucion) {
            var deferred = $q.defer();
            $http.get(REST_SERVICE + "/getValidacion/" + solucion)
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

        function getCantidadSoluciones(id, tipo, filtro) {
            var deferred = $q.defer();
            $http.get(REST_SERVICE + "/getParent/" + id + "/" + tipo)
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

        function updateSolucion(id, solucion, tipo) {
            var deferred = $q.defer();
            $http.post(REST_SERVICE + '/updateSolucion/' + id + "/" + solucion + "/" + tipo, {
                headers: {'Content-Type': undefined}
            }).then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.error('[SERVICE].Error.');
                        deferred.reject(errResponse);
                    }
            );
            return deferred.promise;
        }

        function updateSolucionMasivaTree(idPadre, solucion, nivel, nacion, filtroTipo, filtroAsignados, filtroSolucion) {
            var deferred = $q.defer();
            $http.post(REST_SERVICE + '/updateSolucionMasivaTree/' + idPadre + '/' + solucion + '/' + nivel + '/' + nacion + '/' + filtroTipo + '/' + filtroAsignados + '/' + filtroSolucion, {
                headers: {'Content-Type': undefined}
            }).then(
                    function (response) {

                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.error('[SERVICE].Error.');
                        deferred.reject(errResponse);
                    }
            );
            return deferred.promise;
        }

        function getAllTipoSolucion() {
            var deferred = $q.defer();
            $http.get(REST_SERVICE + "/getAllTipoSolucion")
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

        function updateSolucionTree(list, solucion, opcion, filtroA, filtroS) {
            var deferred = $q.defer();
            $http.post(REST_SERVICE + '/updateSolucionTree/' + solucion + '/' + opcion + '/' + filtroA + '/' + filtroS, list, {
                headers: {'Content-Type': undefined}
            }).then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (errResponse) {
                        console.error('[SERVICE].Error.');
                        deferred.reject(errResponse);
                    }
            );
            return deferred.promise;
        }
    }]);