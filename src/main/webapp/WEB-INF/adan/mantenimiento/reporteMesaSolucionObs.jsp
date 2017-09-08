    
    <article>
        <div ng-if="ctrl.reporteMesaSolucion.length>0">
            <h2 class="tituloSecundario doblerau"><b>MESAS POR SOLUCIONES TECNOLÓGICAS</b></h2>
            <div class="alineadoCentro">                                                

                <md-fab-speed-dial class=" butonOpcionDesplegablePrincipal " ng-class="md-fling">
                    <md-fab-trigger ng-repeat="mesaSolucion in ctrl.reporteMesaSolucion" class=" contenedorSolucionesLoccalOpciones">
                        <md-button ng-disabled="true" aria-label="menu" class="md-fab md-warn agregarSolucionLocal">                        
                            <img ng-src="${pageContext.request.contextPath}[[mesaSolucion.rutaImagen]]">
                        </md-button>
                        <div class="contDatosSolucionLocalReasigPrincipal" name="mesaSolucion.alias">
                            <span>[[mesaSolucion.alias]] [[mesaSolucion.electores]]</span>          
                        </div>                                
                    </md-fab-trigger>                
                </md-fab-speed-dial>

            </div>
        </div>            
    </article>