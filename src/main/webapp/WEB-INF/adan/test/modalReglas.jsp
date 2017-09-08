<md-dialog aria-label="REGLAS" class="modal-form popUpEstilos" ng-controller="modalReglasController as ctrl">
    <md-toolbar>
        <div class="md-toolbar-tools">
            <h1>${PROCESO}</h1>            
            <h2>REGLAS PARA LA CONFORMACIÓN DE MESAS</h2>
            <md-button class="md-icon-button btn-close" ng-click="close()">
                <md-icon aria-label="Close dialog" class="material-icons"><i class="fa fa-times" aria-hidden="true"></i></md-icon>
            </md-button>
        </div>
    </md-toolbar>    

        <md-dialog-content >      

            <div class="md-padding" >
                <div class="ParteDividiaPreferencial"> 
                    <h2 class="tituloSecundario"><b>Reglas Pre Establecidas</b></h2>

                    <ul class="listaReglasPrestablecidas SistemaComentatext" flex="90" ng-repeat="regla in reglas">
                        <li > <span>[[$index + 1]] -</span> [[regla.regla]]</li>                    
                    </ul>
                </div>

                <div class="divivertical"> </div>

                <div class="ParteDividiaPreferencial">
                    <h2 class="tituloSecundario"><b>Máximo de Electores por Mesa en no Centros Poblados</b>
                    </h2>   
                    <article class="ParteDividiaPreferencialPer">  
                        <h4 class="tituloCuarto alineadoCentro">Soluciones Tecnológicas</h4>                    
                    </article>
                    <article class="ParteDividiaPreferencialPer "> 
                        <h4 class="tituloCuarto alineadoCentro">Cantidad</h4>                                                    
                    </article>
                    <div class="ContenedorSolucionesScroll">
                        <article ng-if="solucion.estado === 1"  ng-repeat="solucion in tiposSolucion" class="tipoSolucionAgregada ">
                            <div class="ParteDividiaPreferencialPer alineadoCentro">
                                <!--<img data-ng-src="data:image/PNG;base64,[[solucion.imagen]]" class="tipoSolucionIcon">-->
                                <img  ng-src="${pageContext.request.contextPath}[[solucion.rutaImagen]]" class="tipoSolucionIcon">
                                <span ng-bind="solucion.alias"></span>      
                            </div>                                    
                            <span class="onpeReporteMapBarCantidad" ng-bind="solucion.electores"></span>                                        
                        </article>
                    </div>

                </div>
            </div>         
        <md-dialog-actions layout="row" layout-align="end center">   
            <md-button ng-click="close()" class="btn-confirm estilosBotonGeneral ">ACEPTAR</md-button>
        </md-dialog-actions>

</md-dialog>