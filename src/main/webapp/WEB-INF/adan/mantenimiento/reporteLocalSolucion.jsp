    
    <article>
        <div ng-if="ctrl.reporteLocalSolucion.length>0">
            <h2 class="tituloSecundario doblerau"><b>[[ctrl.tittleLocalSolucion]]</b></h2>
            <div class="alineadoCentro">                                                

                <md-fab-speed-dial class=" butonOpcionDesplegablePrincipal " ng-class="md-fling">
                    <md-fab-trigger ng-repeat="localSolucion in ctrl.reporteLocalSolucion" class=" contenedorSolucionesLoccalOpciones">
                        <md-button aria-label="menu" class="md-fab md-warn agregarSolucionLocal">                        
                            <img ng-src="${pageContext.request.contextPath}[[localSolucion.rutaImagen]]">
                        </md-button>
                        <div class="contDatosSolucionLocalReasigPrincipal" name="localSolucion.alias">
                            <span>[[localSolucion.alias]] [[localSolucion.electores]]</span>          
                        </div>                                
                    </md-fab-trigger>                
                </md-fab-speed-dial>

            </div>
        </div>            
    </article>