<md-dialog aria-label="CONFIGURACIÓN" class="modal-form popUpEstilos" ng-controller="configuracionController as ctrl">
    <md-toolbar>
        <div class="md-toolbar-tools">
            <h1>${PROCESO}</h1>            
            <h2>CONFIGURACIÓN</h2>
            <md-button class="md-icon-button btn-close" ng-click="close()">
                <md-icon aria-label="Close dialog" class="material-icons"><i class="fa fa-times" aria-hidden="true"></i></md-icon>
            </md-button>
        </div>
    </md-toolbar>    
    <md-dialog-content>        
        
        <div class="md-padding">

   

                <h2 class="tituloSecundario"><b>Configuración Preferencial</b></h2>
                <p class="alineadoIzquieda SistemaComentatext " >[[config[0].descripcion]]</p>
                <p class="onpeReporteMapBarCantidad">[[config[0].dato]]</p>

                <p class="alineadoIzquieda SistemaComentatext  ">[[config[1].descripcion]]</p>

                    <div layout="row" layout-wrap flex class="contenedorSelectcionOrigenDatos">
                        <div flex="50" ng-repeat="item in config[1].dato">
                            <md-checkbox ng-checked="item.estado" ng-click="checkC2(item)" class="md-hue-7" ng-disabled="true">
                                [[item.nombre]] <span ng-if="exists(item, selected)"></span>
                            </md-checkbox>
                        </div>
                </div>

          

                <h2 class="tituloSecundario"><b>[[config[2].descripcion]]</b></h2>
                <div ng-repeat="item in config[2].dato">

                    <p class="onpeReporteMapBarCantidad">[[item.valor]]</p>

                </div> 

    

        </div> 
    </md-dialog-content>



    <md-dialog-actions layout="row" layout-align="end center">     
        <md-button ng-click="close()" class="btn-confirm estilosBotonGeneral ">ACEPTAR</md-button> 
    </md-dialog-actions>


</md-dialog>