'use strict';
angular.module('app').controller('reglasController', ['$scope', '$http', '$mdDialog', 'ReglasService', '$timeout', function ($scope, $http, $mdDialog, ReglasService, $timeout) {
        var self = this;        
        self.procesoStatus = PROCESO_STATUS;
        $scope.documento = {
            id: 0,
            nombre: '',
            archivo: [],
            modulo: 0,
            fechaCarga: '',
            resolucion: '',
            informacionAdicional: ''
        };
//        $scope.resolucion = {
//            a: '',
//            b: ''
//        };
        $scope.tiposSolucion = [];
        $scope.reglas = [];
        function cleanDocumento() {
            $scope.documento = {
                id: 0,
                nombre: '',
                archivo: [],
                modulo: 0,
                fechaCarga: '',
                resolucion: '',
                informacionAdicional: ''
            };
//            $scope.resolucion = {
//                a: '',
//                b: ''
//            };
        }
        ;
        $scope.isSaving = false;
        $scope.isSavingPopup = false;
        $scope.mensajeLfInput = "";
        var closePopup = false;
        var cArchivo = 0;
        $scope.$watch('archivo[0]', function (newVal, oldVal) {           
            $scope.isSaving = true;                        
            if (newVal === undefined) {
                if ($scope.mensajeLfInput === "") {                    
                    $scope.mensajeLfInput = "Archivo requerido.";
                    $scope.documento.nombre = '';
                }
            }
            if ($scope.documento.nombre !== "") {                
                $scope.isSaving = false;
            }
            if (cArchivo === 0) {
                $scope.mensajeLfInput = "";
                cArchivo++;
            }

            if ($scope.archivo !== undefined && $scope.archivo.length > 0) {

                if ($scope.archivo[0].lfFile !== undefined) {
                    if ($scope.archivo[0].lfFile.type !== "application/pdf") {
                        $scope.mensajeLfInput = "Tipo de extensión no válido.";
                        $scope.archivo = [];    
                        $scope.isSaving = false;
                        return;
                    }

                    if ($scope.archivo[0].lfFile.name.length > 45) {
                        $scope.mensajeLfInput = "Nombre demasiado largo (" + $scope.archivo[0].lfFile.name.length + "/45).";
                        $scope.archivo = [];    
                        $scope.isSaving = false;
                        return;
                    }

                    if ($scope.archivo[0].lfFile.size > 2097152) {//2097152
                        $scope.mensajeLfInput = "Tamaño máximo: 2MB.";
                        $scope.archivo = [];
                        $scope.isSaving = false;
                        return;

                    }
                    uploadFile($scope.archivo[0]);
                }
            }
            
        });

        $scope.submitReglas = function () {
            if ($scope.documento.nombre !== '') {
                $scope.isSaving = true;
                //$scope.documento.resolucion = "N°" + $scope.resolucion.a + "-" + $scope.resolucion.b + "JNE";
                save();
            }
            else {
                $scope.mensajeLfInput = "Archivo requerido.";
            }
        };

//        function showResolucion() {
//            if ($scope.documento.resolucion.length > 11) {
//                $scope.resolucion.a = $scope.documento.resolucion.substring(2, 6);
//                $scope.resolucion.b = $scope.documento.resolucion.substring(7, 11);
//            }
//        }
        
        function getAllTipoSolucion() {
            $scope.cantSoluciones = 0;
            ReglasService.getAllTipoSolucion()
                    .then(
                            function (data) {
                                if (closePopup) {
                                    $scope.tiposSolucionTemp = angular.copy($scope.tiposSolucion);
                                }
                                $scope.tiposSolucion = data;
                                for (var i = 0; i < $scope.tiposSolucion.length; i++) {
                                    if (closePopup) {
                                        for (var j = 0; j < $scope.tiposSolucionTemp.length; j++) {
                                            if ($scope.tiposSolucion[i].id === $scope.tiposSolucionTemp[j].id) {
                                                $scope.tiposSolucion[i].electores = $scope.tiposSolucionTemp[j].electores;
                                            }
                                        }
                                    }
                                    if ($scope.tiposSolucion[i].electores === 0) {
                                        $scope.tiposSolucion[i].electores = '';
                                    }
                                    if ($scope.tiposSolucion[i].estado == 1) {
                                        $scope.cantSoluciones++;
                                    }                                    
                                }
                                closePopup = false;
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function getDocumento() {
            ReglasService.getDocumento()
                    .then(
                            function (data) {
                                if (data.length > 0) {
                                    $scope.documento = data[0];
                                    $scope.file = {
                                        lfFileName: $scope.documento.nombre
                                    };
                                    $scope.archivo.push($scope.file);
                                    $scope.mensajeLfInput = "";
                                    //showResolucion();
                                }
                                else {
                                    cleanDocumento();
                                }
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function getAllRegla() {
            ReglasService.getAllRegla()
                    .then(
                            function (data) {
                                $scope.reglas = data;
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function uploadFile(file) {
            $scope.file = file.lfFile;
            if ($scope.file.name.length > 45) {
                //$scope.archivo = [];
                $scope.mensajeLfInput = "Nombre demasiado largo (" + $scope.file.name.length + "/45)";
                $scope.isSaving = false;
                return;
            }
            uploadFileToUrl($scope.file);
        }

        function save() {
            var fd = new FormData();
            fd.append('dataDocumento', angular.toJson($scope.documento));
            fd.append('dataTiposSolucion', angular.toJson($scope.tiposSolucion));

            ReglasService.save(fd)
                    .then(
                            function (data) {
                                if (data.success === true) {
                                    $scope.$emit('StepNext', true);
                                }
                            },
                            function (errResponse) {
                                console.log("Ocurrió un error.");
                                $scope.isSaving = false;
                            }
                    );
        }

        function uploadFileToUrl(file) {
            var nameFile = file.name;
            setTimeout(function () {
                var fd = new FormData();
                fd.append('file', file);

                ReglasService.uploadFile(fd)
                        .then(
                                function (data) {
                                    $scope.documento.nombre = nameFile;
                                    $scope.mensajeLfInput = '';
                                    $scope.isSaving = false;
                                },
                                function (errResponse) {
                                    console.log("Ocurrió un error.");
                                    $scope.isSaving = false;
                                }
                        );

            }, 800);
        }
        ;
        getDocumento();
        getAllTipoSolucion();
        getAllRegla();

        $scope.back = function () {
            $scope.isSaving = true;
            $scope.$emit('StepBack', true);
        };

        $scope.openTiposSolucion = function (ev) {
            $mdDialog.show({
                templateUrl: C_SERVER + '/reglas/openTipoSolucion',
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
                closePopup = true;
                getAllTipoSolucion();
            });
        };

        $scope.close = function () {
            $mdDialog.cancel();
        };

        $scope.changeCantidadElectores = function (index, cantidad) {
            if (cantidad === "0") {
                $scope.tiposSolucion[index].electores = '';
            }
        };

    }]);