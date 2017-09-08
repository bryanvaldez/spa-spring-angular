'use strict';
angular.module('app').controller('fichaController', ['$scope', '$http', '$timeout', '$mdDialog', 'FichaService', function ($scope, $http, $timeout, $mdDialog, FichaService) {
        var self = this;
        self.procesoStatus = PROCESO_STATUS;
        self.dateServer = '';
        self.dateMinEleccion = '';
        $scope.showMunicipalidades = false;
        $scope.fichas = [];
        $scope.tiposEleccion = [];
        $scope.tiposAutoridad = [];
        $scope.OptionsPeriodicidad = [];
        $scope.detFichaTecnica = [];
        $scope.fichaTecnica = {
            id: 0,
            version: '',
            fechaVersion: '',
            resolucion: '',
            nombreArchivo: '',
            archivo: [],
            tipoEleccion: 0,
            anioEleccion: '',
            nombreCorto: '',
            periodicidad: '',
            fechaEleccion: '',
            estado: '',
            nombreLargo: '',
            municipalidades: 0,
            ambito: '',
            fechaArchivo: ''
        };
        $scope.municipalidadesLbl = '';
        $scope.resolucion = {
            a: '',
            b: ''
        };
        $scope.mensajeLfInput = "";
        var cArchivo = 0;
        $scope.isSaving = false;
        $scope.$watch('archivo[0]', function (newVal, oldVal) {
            $scope.isSaving = true;
            if (newVal === undefined) {
                if ($scope.mensajeLfInput === "") {
                    $scope.mensajeLfInput = "Archivo requerido";
                }
                $scope.fichaTecnica.nombreArchivo = '';
            }

            if ($scope.fichaTecnica.nombreArchivo !== "") {
                $scope.isSaving = false;
            }

            if (cArchivo === 0) {
                $scope.mensajeLfInput = "";
                cArchivo++;
            }
            if ($scope.archivo !== undefined && $scope.archivo.length > 0) {
                $scope.fichaTecnica.nombreArchivo = $scope.archivo[0].lfFileName;
                if ($scope.archivo[0].lfFile !== undefined) {
                    uploadFile($scope.archivo[0]);
                }
            }
        });

        function uploadFile(file) {
            $scope.file = file.lfFile;

            if ($scope.archivo[0].lfFile.type !== "application/pdf") {
                $scope.mensajeLfInput = "Tipo de extensión no válido.";
                $scope.archivo = [];
                $scope.isSaving = false;
                return;
            }
            if ($scope.file.name.length > 45) {
                $scope.archivo = [];
                $scope.mensajeLfInput = "Nombre demasiado largo (" + $scope.file.name.length + "/45).";
                $scope.isSaving = false;
                return;
            }
            if ($scope.archivo[0].lfFile.size > 2097152) {//2097152
                $scope.mensajeLfInput = "Tamaño máximo: 2MB.";
                $scope.archivo = [];
                $scope.isSaving = false;
                return;

            }
            $scope.imgShow = false;
            //$scope.foto = [];


            uploadFileToUrl($scope.file);
        }

        function uploadFileToUrl(file) {
            var nameFile = file.name;
            setTimeout(function () {
                var fd = new FormData();
                fd.append('file', file);
                FichaService.uploadFile(fd)
                        .then(
                                function (data) {
                                    $scope.fichaTecnica.nombreArchivo = nameFile;
                                    $scope.mensajeLfInput = "";
                                    $scope.isSaving = false;
                                },
                                function (errResponse) {
                                    console.log("Ocurrió un error.");
                                    $scope.isSaving = false;
                                }
                        );
            }, 800);
        }

        function cleanFichaTecnica() {
            $scope.fichaTecnica = {
                id: 0,
                version: '',
                fechaVersion: '',
                resolucion: '',
                nombreArchivo: '',
                archivo: [],
                tipoEleccion: 0,
                anioEleccion: '',
                nombreCorto: '',
                periodicidad: '',
                fechaEleccion: '',
                estado: '',
                nombreLargo: '',
                municipalidades: 0,
                ambito: '',
                fechaArchivo: ''
            };
            $scope.resolucion = {
                a: '',
                b: ''
            };
            $scope.archivo = [];
            $scope.detFichaTecnica = [];
        }

        function showResolucion() {
            if ($scope.fichaTecnica.resolucion.length > 11) {
                $scope.resolucion.a = $scope.fichaTecnica.resolucion.substring(2, 6);
                $scope.resolucion.b = $scope.fichaTecnica.resolucion.substring(7, 11);
            }
        }

        $scope.newVersion = function () {
            cArchivo = 0;
            $scope.mensajeLfInput === "";
            cleanFichaTecnica();
            $scope.fichaTecnica.periodicidad = $scope.OptionsPeriodicidad[0].nCodigo;
            showDivMunicipalidades();
        };

        $scope.changeFichaT = function (fichaT) {
            $scope.fichaTecnica = angular.copy(fichaT);
            showFichaTecnica();
        };

        function showFichaTecnica() {
            showResolucion();
            getDetFichaTecnica($scope.fichaTecnica.id);
            $scope.fichaTecnica.fechaVersion = new Date($scope.fichaTecnica.fechaVersion);
            $scope.fichaTecnica.fechaEleccion = new Date($scope.fichaTecnica.fechaEleccion);

            $scope.file = {
                lfFileName: $scope.fichaTecnica.nombreArchivo
            };
            $scope.archivo = [];
            $scope.archivo.push($scope.file);
            $scope.mensajeLfInput = "";
            showDivMunicipalidades();
            self.dateMinEleccion = (self.dateServer > $scope.fichaTecnica.fechaVersion) ? self.dateServer : $scope.fichaTecnica.fechaVersion;
        }

        $scope.changeTipoEleccion = function () {
//            for (var i = 0; i < $scope.tiposEleccion.length; i++){
//                if ($scope.tiposEleccion[i].) {
//                    
//                }
//            }
//                $scope.fichaTecnica.municipalidades = 0;
            showDivMunicipalidades();
        };

        $scope.changeFechaVersion = function () {
            self.dateMinEleccion = (self.dateServer > $scope.fichaTecnica.fechaVersion) ? self.dateServer : $scope.fichaTecnica.fechaVersion;
            $scope.fichaTecnica.fechaEleccion = '';
            $scope.fichaTecnica.anioEleccion = '';
        };

        $scope.changeCantMunicipalidades = function (cantidad) {
            if (cantidad === "0") {
                $scope.fichaTecnica.municipalidades = '';
            }
        };

        $scope.regresarFT1 = function () {
            $scope.isSaving = true;
            $scope.$emit('StepBack', true);
        };

        $scope.saveFichaTecnica2 = function () {
            if ($scope.fichaTecnica.nombreArchivo !== "") {
                $scope.mensajeLfInput === "";
                $scope.isSaving = true;
                saveFichaTecnica1();
            } else {
                $scope.mensajeLfInput = "Archivo Requerido";
            }
            ;
        };
        $scope.cantDetalle = 0;
        $scope.addAutoridad = function () {
            var detFT = {
                id: 0,
                fichaTecnica: $scope.fichaTecnica.id,
                autoridad: 0,
                cantAutoridad: 1,
                estado: 1
            };
            if ($scope.detFichaTecnica.length > 0) {
                var ultFT = $scope.detFichaTecnica[$scope.detFichaTecnica.length - 1];
                if (ultFT.cantAutoridad !== '' && ultFT.autoridad !== 0) {
                    $scope.detFichaTecnica.push(detFT);
                    $scope.cantDetalle++;
                }
            } else {
                $scope.detFichaTecnica.push(detFT);
                $scope.cantDetalle++;
            }
            setAutoridadStatus();
        };

        $scope.eliminar = function (index) {
            if ($scope.detFichaTecnica[index].id === 0) {
                $scope.detFichaTecnica.splice(index, 1);
                $scope.cantDetalle--;
            }
            else {
                $scope.detFichaTecnica[index].estado = 0;
                $scope.cantDetalle--;
            }
            setAutoridadStatus();
        };

        $scope.menos = function (index) {
            $scope.detFichaTecnica[index].cantAutoridad = parseInt($scope.detFichaTecnica[index].cantAutoridad);
            if ($scope.detFichaTecnica[index].cantAutoridad > 1) {
                $scope.detFichaTecnica[index].cantAutoridad = $scope.detFichaTecnica[index].cantAutoridad - 1;
            }
            else {
                $scope.detFichaTecnica[index].cantAutoridad = 1;
            }
        };

        $scope.mas = function (index) {
            $scope.detFichaTecnica[index].cantAutoridad = parseInt($scope.detFichaTecnica[index].cantAutoridad);
            if ($scope.detFichaTecnica[index].cantAutoridad < 999) {
                $scope.detFichaTecnica[index].cantAutoridad = $scope.detFichaTecnica[index].cantAutoridad + 1;
            } else if (isNaN($scope.detFichaTecnica[index].cantAutoridad)) {
                $scope.detFichaTecnica[index].cantAutoridad = 1;
            } else {
                $scope.detFichaTecnica[index].cantAutoridad = 999;
            }
        };

        $scope.menosMun = function () {
            $scope.fichaTecnica.municipalidades = parseInt($scope.fichaTecnica.municipalidades);
            if ($scope.fichaTecnica.municipalidades > 1) {
                $scope.fichaTecnica.municipalidades = $scope.fichaTecnica.municipalidades - 1;
            } else {
                $scope.fichaTecnica.municipalidades = 1;
            }
        };

        $scope.masMun = function () {
            $scope.fichaTecnica.municipalidades = parseInt($scope.fichaTecnica.municipalidades);            
            if ($scope.fichaTecnica.municipalidades < 99) {
                $scope.fichaTecnica.municipalidades = $scope.fichaTecnica.municipalidades + 1;
            } else if (isNaN($scope.fichaTecnica.municipalidades)) {
                $scope.fichaTecnica.municipalidades = 1;
            } else {
                $scope.fichaTecnica.municipalidades = 99;
            }
        };

        $scope.changeCantAutoridad = function (index, cantidad) {
            if (cantidad === "0") {
                $scope.detFichaTecnica[index].cantAutoridad = '';
            }
        };

        $scope.changeFechaEleccion = function () {
            $scope.fichaTecnica.anioEleccion = $scope.fichaTecnica.fechaEleccion.getFullYear().toString();
        };

        function showDivMunicipalidades() {
            $scope.showMunicipalidades = false;
            for (var i = 0; i < $scope.tiposEleccion.length; i++) {
                if ($scope.fichaTecnica.tipoEleccion === $scope.tiposEleccion[i].id) {
                    $scope.municipalidadesLbl = $scope.tiposEleccion[i].distrital;
                    if ($scope.tiposEleccion[i].distrital !== '' && $scope.tiposEleccion[i].distrital !== null) {
                        $scope.showMunicipalidades = true;
                        if ($scope.fichaTecnica.municipalidades === 0) {
                            $scope.fichaTecnica.municipalidades = 1;
                        }
                    } else {
                        $scope.fichaTecnica.municipalidades = 0;
                    }
                }
            }
        }

        function saveFichaTecnica1() {
            var fd = new FormData();
            $scope.fichaTecnica.resolucion = "N°" + $scope.resolucion.a + "-" + $scope.resolucion.b + "JNE";
            fd.append('dataFichaTecnica', angular.toJson($scope.fichaTecnica));
            fd.append('dataDetFichaTecnica', angular.toJson($scope.detFichaTecnica));
            FichaService.save1(fd)
                    .then(
                            function (data) {
                                if (data.success === true) {
                                    $scope.$emit('StepNext', true)
                                }
                            },
                            function (errResponse) {
                                console.log("Ocurrió un error.");
                            }
                    );
        }

        function getAll() {
            FichaService.getAll()
                    .then(
                            function (data) {
                                if (data.length !== 0) {
                                    $scope.fichas = data;
                                    for (var i = 0; i < document.getElementsByClassName("md-datepicker-input").length; i++) {
                                        document.getElementsByClassName("md-datepicker-input")[i].disabled = true;
                                    }
                                    $scope.fichaTecnica = angular.copy($scope.fichas[0]);
                                    showFichaTecnica();
                                } else {
                                    $scope.fichas = [];
                                }
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }



        function getTiposEleccion() {
            FichaService.getTiposEleccion()
                    .then(
                            function (data) {
                                $scope.tiposEleccion = data;
                                getAll();
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function getTiposAutoridad() {
            FichaService.getTiposAutoridad()
                    .then(
                            function (data) {
                                $scope.tiposAutoridad = data;
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function getOptionsPeriodicidad() {
            FichaService.getOptionsPeriodicidad()
                    .then(
                            function (data) {
                                $scope.OptionsPeriodicidad = data;
                                $scope.fichaTecnica.periodicidad = $scope.OptionsPeriodicidad[0].nCodigo;
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function getDetFichaTecnica(idFichaTecnica) {
            FichaService.getDetFichaTecnica(idFichaTecnica)
                    .then(
                            function (data) {
                                $scope.detFichaTecnica = data;
                                $scope.cantDetalle = data.length;
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function getFichaTecnica(idFichaTecnica) {
            FichaService.getFichaTecnica(idFichaTecnica)
                    .then(
                            function (data) {
                                $scope.fichaTecnica = data;
                                showResolucion();
                                getDetFichaTecnica($scope.fichaTecnica.id);
                                showDivMunicipalidades();
                                $scope.fichaTecnica.fechaVersion = new Date($scope.fichaTecnica.fechaVersion);
                                $scope.fichaTecnica.fechaEleccion = new Date($scope.fichaTecnica.fechaEleccion);
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        function setAutoridadStatus() {
            for (var i = 0; i < $scope.tiposAutoridad.length; i++) {
                $scope.tiposAutoridad[i].estado = 1;
                for (var j = 0; j < $scope.detFichaTecnica.length; j++) {
                    if ($scope.tiposAutoridad[i].id === $scope.detFichaTecnica[j].autoridad) {
                        if ($scope.detFichaTecnica[j].estado === 1) {
                            $scope.tiposAutoridad[i].estado = 0;
                        }
                    }
                }
            }
        }

        function getDateToServer() {
            FichaService.getDateToServer()
                    .then(
                            function (data) {
                                if (data.length > 0) {
                                    self.dateServer = new Date(data[0].FECHA);
                                    self.dateMinEleccion = new Date(data[0].FECHA);
                                }
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }
        getTiposEleccion();
        getTiposAutoridad();
        getOptionsPeriodicidad();
        getDateToServer();
    }]);
