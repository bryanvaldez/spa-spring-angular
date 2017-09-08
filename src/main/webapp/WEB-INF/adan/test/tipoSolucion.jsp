<md-dialog aria-label="TIPOSOLUCION" class="modal-form popUpEstilos" ng-controller="galeriaSolucionController as ctrl">
    <md-toolbar >
        <div class="md-toolbar-tools">
            <h1>${PROCESO}</h1>            
            <h2>GALERÍA DE SOLUCIONES</h2>
            <md-button class="md-icon-button btn-close" ng-click="close()">
                <md-icon aria-label="Close dialog" class="material-icons"><i class="fa fa-times" aria-hidden="true"></i></md-icon>
            </md-button>
        </div>
    </md-toolbar>
    <form name="tipoSolucionForm" ng-submit="mensajeImgTS === '' && tipoSolucionForm.$valid && submitTipoS()" novalidate> 
        <md-dialog-content>
            <div class="contenedorEspecialPopUP"> 
                
                <div id="divSave" style="display: none;" ng-class="showImgSave">
                     <img  src="${pageContext.request.contextPath}/static/img/Guardar-Exito.svg"></img>              
                </div>
                <md-button ng-click="antTipoS()" class="cambiarSiguiente" ng-disabled="indexSolucion == 0 || isSavingPopup"><i class="material-icons">arrow_back</i></md-button>
                <md-button ng-click="sgtTipoS()" class="cambiarAnterior" ng-disabled="indexSolucion == tiposSolucion.length-1 || isSavingPopup"><i class="material-icons">arrow_forward</i></md-button>
                <div >
                    <div id="imgSolucion" class="SeccionElegida">
                        <img ng-show="imgShow"  ng-src="${pageContext.request.contextPath}[[solucion.rutaImagen]]" >
                        <md-button ng-disabled="solucion.estado == 0"  class="SeleccionasImagenSolucion" id="seleccionar" ng-click="changeImagen()">
                            <md-tooltip>Actualizar Imagen</md-tooltip>
                            <i class="material-icons">&#xE8BA;</i>
                        </md-button>
                        <lf-ng-md-file-input ng-show="!imgShow" id="fileLogo" lf-files="foto"  
                                             lf-mimetype="image/jpeg,image/png" 
                                             lf-api="apiFoto"
                                             accept="image/jpeg,image/png" preview
                                             class="ImagenNuevaSolucion"
                                             ></lf-ng-md-file-input>
                        <div class="mejnsajeErrorSolucion">[[mensajeImgTS]]</div>                      
                    </div>                    
                    <md-input-container   class="EstiloInput InputSinError solucionText">
                        <label ng-show="false"></label>
                        <input ng-disabled="solucion.estado == 0" name="alias" ng-model="solucion.alias" autocomplete="off" maxlength="5"ng-maxlength="5" ng-change="changeAlias()" only-letters2 uppercased required>
                        <span class="TerminoDescritivo" ng-if="solucion.alias.length !== undefined">Siglas [[solucion.alias.length]]/5</span>
                        <span class="TerminoDescritivo" ng-if="solucion.alias.length === undefined">Siglas 0/5</span>
                        <div ng-messages="tipoSolucionForm.alias.$error">
                            <div ng-message="required">Campo requerido.</div>
                            <div>[[msjAlias]]</div>
                        </div>
                    </md-input-container>                    

                </div>

                <md-input-container  flex="80"  class="EstiloInput InputSinError" style="width:100%; ">
                    <label ng-show="false"></label>
                    <textarea class="inputAnchoCompletoTitular" ng-disabled="solucion.estado == 0" name="nombreSolucion" ng-model="solucion.descripcion" autocomplete="off" maxlength="50"ng-maxlength="50" ng-change="changeNombreSolucion()" only-letters required ></textarea>

                    <span class="TerminoDescritivo">Nombre de la Solución</span>
                    <div ng-messages="tipoSolucionForm.nombreSolucion.$error">
                        <div ng-message="required">Campo requerido.</div>
                        <div>[[msjNombreSolucion]]</div>
                    </div>                    
                </md-input-container>
                <br>

                <div class="footerContenedorEspecial contenidoFlex">
                    <div class="contenedorshishtStandar">
                        <label >Deshabilitado</label>
                        <md-switch aria-label="Switch 7" ng-model="habilitado">
                            <b>Habilitado</b>
                        </md-switch>
                    </div>
                    <div>
                        <md-button type="submit" class="btn-confirm estilosBotonGeneral" ng-disabled="isSavingPopup || ctrl.procesoStatus != '1'">GUARDAR</md-button> 
                    </div> 
                </div> 
            </div>

            <div class="contenedorSectionSolucion">                
                <md-button class="SectionSolucion" ng-click="editarSolucion(solucion, $index)" ng-disabled="isSavingPopup" ng-repeat="solucion in tiposSolucion">
                    <img  ng-src="${pageContext.request.contextPath}[[solucion.rutaImagen]]">                    
                    <span>[[solucion.alias]]</span>
                </md-button>
                <md-button class="md-fab md-primary botonFoter estilosBotonGeneral addSolution"  ng-click="addSolucion()" ng-disabled="indexSolucion === - 1 || isSavingPopup">
                    <i class="material-icons">&#xE145;</i>
                    <md-tooltip>Añadir</md-tooltip>
                </md-button>
            </div>  

        </md-dialog-content>
  
    </form>
</md-dialog>
<style>

</style>