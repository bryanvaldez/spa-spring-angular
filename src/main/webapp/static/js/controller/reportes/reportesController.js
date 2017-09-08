app.controller('reporteCtrl', ['$scope', '$http', '$mdDialog', function ($scope, $http, $mdDialog) {

        $scope.reporte = {
            id: null,
            codigo: '',
            etiqueta: '',
            descripcion: '',
            query: '',
            filtro: '',
            estado: null
        };       
        
        $scope.filtro = {
            idReporte: 0,
            filtro: ''                      
        };
        
        $scope.fecha = {
            inicio: new Date(),
            fin: new Date()
        };
        
        $scope.getReportes = function () {
            $http({
                url: C_SERVER + '/reportes/list/',
                method: 'GET'
            }).success(function (response) {                
                $scope.reportes = response;                
            });
        };

        $scope.modal = function (ev) {
            $scope.ubigeo = ' ';
            $scope.searchCCPP = '';
            $mdDialog.show({
                templateUrl: C_SERVER + '/reportes/modal/' + $scope.reporte.filtro,
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: false,
                bindToController: true,
                escapeToClose: true,
                scope: $scope,
                preserveScope: true,
            }).then(function (answer) {

            }, function () {

            });
        };

        $scope.close = function () {
            $mdDialog.cancel();
        };

        $scope.generarReportes = function (id) {
            for (var i = 0; i < $scope.reportes.length; i++) {
                if ($scope.reportes[i].id === id) {
                    $scope.reporte = angular.copy($scope.reportes[i]);
                    $scope.filtro.idReporte = $scope.reporte.id;
                    //$scope.filtro.filtro = $scope.reporte.filtro;                    
                    $scope.filtro.filtro = ($scope.reporte.filtro === null)?'':$scope.reporte.filtro;                    
                    break;
                }
            }
                        
            if ($scope.reporte.filtro === null) {
                $scope.submit($scope.filtro);
            } else {
                $scope.modal();
            }            
        };

        $scope.submit = function (option) {
//            if (option === 2) {
//                if ($scope.fecha.inicio !== '' && $scope.fecha.fin !== '') {
//                    var strStartDateTime = $scope.fecha.inicio.getDate() + "-" + ($scope.fecha.inicio.getMonth() + 1) + "-" + $scope.fecha.inicio.getFullYear();
//                    var strEndDateTime = $scope.fecha.fin.getDate() + "-" + ($scope.fecha.fin.getMonth() + 1) + "-" + $scope.fecha.fin.getFullYear();
//                    $scope.filtro.fechaIni = strStartDateTime;
//                    $scope.filtro.fechaFin = strEndDateTime;
//                }
//            }
            var filtro = JSON.stringify($scope.filtro);                        
            window.open(C_SERVER + "/reportes/exportar/" + filtro);
            $mdDialog.cancel();
        };

        $scope.getReportes();               

        $scope.back = function() {
            window.location = C_SERVER + "/dashboard";            
            //$scope.$emit('StepBack', true);                   
        }; 

    }]);
