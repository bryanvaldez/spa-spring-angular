'use strict';
angular.module('app').controller('galeriaSolucionController', ['$scope', '$http', '$mdDialog', 'ReglasService', '$timeout', function ($scope, $http, $mdDialog, ReglasService, $timeout) {
        var self = this;
        self.procesoStatus = PROCESO_STATUS;
        $scope.tiposSolucion = [];
        $scope.mensajeImgTS = "";
        $scope.habilitado = true;
        var imgNewTS = "/static/img/solucionesMas.png";

        function getAllTipoSolucion() {
            ReglasService.getAllTipoSolucion()
                    .then(
                            function (data) {
                                $scope.tiposSolucion = data;
                                getSolucionIndex();
                            },
                            function (errResponse) {
                                console.error('Error while creating User:' + errResponse);
                            }
                    );
        }

        $scope.editarSolucion = function (soluc, index) {

            if (index  !== $scope.indexSolucion) {
                $scope.solucion = angular.copy(soluc);
                $scope.indexSolucion = index;
                $scope.mensajeImgTS = "";
                $scope.msjNombreSolucion = "";
                $scope.msjAlias = ""
                if ($scope.solucion.estado === 1) {
                    $scope.habilitado = true;
                } else {
                    $scope.habilitado = false;
                }
            }
        };

        $scope.addSolucion = function () {
            $scope.solucion = {
                id: 0,
                descripcion: '',
                electores: 0,
                alias: '',
                estado: 1,
                rutaImagen: imgNewTS
            };
            $scope.habilitado = true;
            $scope.indexSolucion = -1;
            $scope.foto = [];
            $scope.mensajeImgTS = "";
        };

        $scope.antTipoS = function () {
            if ($scope.indexSolucion === 0) {
                return;
            }
            $scope.indexSolucion--;
            if ($scope.indexSolucion < 0) {
                $scope.indexSolucion = 0;
            }
            getSolucionIndex();
        };

        $scope.sgtTipoS = function () {
            if ($scope.indexSolucion === $scope.tiposSolucion.length - 1) {
                return;
            }
            $scope.indexSolucion++;
            getSolucionIndex();
        };

        $scope.submitTipoS = function () {
            document.getElementById("divSave").classList.remove("guardadoConExito");
            $scope.isSavingPopup = true;
            if ($scope.habilitado) {
                $scope.solucion.estado = 1;
            } else {
                $scope.solucion.estado = 0;
            }
            saveTipoSolucion();
        };

        $scope.changeImagen = function () {
            var inpuFileInsignia = document.getElementById("fileLogo");// angular.element("fileLogo");    
            var input1 = inpuFileInsignia.getElementsByClassName("lf-ng-md-file-input-button-brower");
            $timeout(function () {
                input1[0].children[2].click();
            }, 0);
        };
        var showMsgImg = false;
        $scope.$watch('foto[0].lfFile.size', function (newVal, oldVal) {
            if (!showMsgImg) {
                $scope.mensajeImgTS = "";
            }
            showMsgImg = false;
            if (angular.toJson($scope.foto) === "[]") {
                $scope.imgShow = true;
            }

            if ($scope.foto !== undefined && $scope.foto.length > 0) {
                if ($scope.foto[0].lfFile.size > 2097152) {//2097152
                    $scope.mensajeImgTS = "Tamaño máximo: 2MB.";
                    showMsgImg = true;
                    $scope.foto = [];
                    $scope.imgShow = false;
                    return;
                }
                if ($scope.foto[0].lfFile.type !== "image/jpeg" && $scope.foto[0].lfFile.type !== "image/png") {
                    $scope.mensajeImgTS = "Tipo de extensión no válido.";
                    $scope.foto = [];
                    return;
                }
                $scope.imgShow = false;
                //$scope.foto = [];
            }
        });

        function saveTipoSolucion() {
            var count = 0;
            for (var i = 0; i < $scope.tiposSolucion.length; i++) {

                if ($scope.solucion.descripcion === $scope.tiposSolucion[i].descripcion && $scope.solucion.id !== $scope.tiposSolucion[i].id) {
                    $scope.msjNombreSolucion = "El nombre ya existe.";
                    count++;
                }
                if ($scope.solucion.alias === $scope.tiposSolucion[i].alias && $scope.solucion.id !== $scope.tiposSolucion[i].id) {
                    $scope.msjAlias = "El alias ya existe.";
                    count++;
                }

            }
            if (count > 0) {
                $scope.isSavingPopup = false;
                return;
            }
            if ($scope.foto[0] !== undefined || $scope.solucion.rutaImagen !== imgNewTS) {
                var fd = new FormData();
                if ($scope.solucion.id === 0) {
                    $scope.indexSolucion = $scope.tiposSolucion.length;
                }
                fd.append('tipoSolucion', angular.toJson($scope.solucion));
                fd.append('file', ($scope.foto[0] !== undefined ? $scope.foto[0].lfFile : null));
                ReglasService.saveTipoSolucion(fd)
                        .then(
                                function (data) {
                                    if (data.success === true) {
                                        $scope.isSavingPopup = false;
                                        document.getElementById("divSave").classList.add("guardadoConExito");
                                        $scope.foto = [];
                                        $scope.tiposSolucion = [];
                                        $scope.solucion.rutaImagen = angular.copy(imgNewTS);
                                        getAllTipoSolucion();
                                    }
                                },
                                function (errResponse) {
                                    console.log("Ocurrió un error.");
                                    $scope.isSavingPopup = false;
                                }
                        );

            } else {
                $scope.mensajeImgTS = "Imagen requerida.";
                $scope.isSavingPopup = false;
            }

        }
        function getSolucionIndex() {
            $scope.mensajeImgTS = "";
            $scope.msjNombreSolucion = "";
            $scope.msjAlias = "";
            $scope.solucion = angular.copy($scope.tiposSolucion[$scope.indexSolucion]);
            $scope.imgShow = true;
            if ($scope.solucion.estado === 1) {
                $scope.habilitado = true;
            } else {
                $scope.habilitado = false;
            }
        }

        $scope.changeNombreSolucion = function () {
            $scope.msjNombreSolucion = "";
        };

        $scope.changeAlias = function () {
            $scope.msjAlias = "";
        }
        $scope.indexSolucion = 0;
        getAllTipoSolucion();
        $scope.imgShow = true;

    }]);
