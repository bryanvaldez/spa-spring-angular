<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/controller/step1/reglasController.js"></script>  
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/controller/main/galeriaSolucionController.js"></script>
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/service/step1/reglasService.js"></script> 
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/step1/reglasdeMesas.css" type="text/css" />
<div  ng-controller="reglasController as ctrl" >
    <form name="reglasForm" ng-submit="mensajeLfInput == '' && reglasForm.$valid && submitReglas()" novalidate > 
        <section class="ColumnaFull">
            <article class="parteCompleta">
                <div class="estiloTarjeta" > 
                    <div class="SistemaComentatext">
                        <h1 class="tituloPincipal"><b>Reglas para las Mesas</b></h1>
                        <span>N°</span>
                        <md-input-container   class="EstiloInput InputSinError">
                            <label ng-show="false"></label>
                            <input name='resolA' ng-model="documento.resolucion" autocomplete="off" maxlength="15" ng-maxlength="15" resolucion uppercased required>
                            <div ng-messages="reglasForm.resolA.$error">
                                <div ng-message="required">Campo Requerido.</div>
                            </div>
                        </md-input-container>
                        <!--<span> - </span>
                        <md-input-container class="EstiloInput InputSinError">
                            <label ng-show="false"></label>
                            <input name='resolB' ng-model="resolucion.b" autocomplete="off" valid-number maxlength="4" minlength="4" ng-maxlength="4" ng-minlength="4" required>
                            <div ng-messages="reglasForm.resolB.$error">
                                <div ng-message="required">Campo Requerido.</div>
                                <div ng-message="minlength">Ingrese 4 dígitos.</div>
                            </div>
                        </md-input-container>
                        <span> JNE</span>-->
                        <div class="cargarDatosInputCont">
                            <div layout="row" flex="100" class="formularioOdenadoPopUp">
                                <lf-ng-md-file-input lf-api="apiFile" lf-files="archivo" progress                                                
                                                     accept="application/pdf"
                                                     lf-placeholder="" lf-remove-label="Limpiar"
                                                     lf-browse-label="Archivo" flex> </lf-ng-md-file-input>
                                <span class="ErrorInputCargaDocumentObliga">[[mensajeLfInput]]</span>
                            </div>                            
                        </div>  
                    </div>

                    <div class="divinormal"> </div>

                    <div class="ParteDividiaPreferencial"> 
                        <h2 class="tituloSecundario"><b>Reglas Pre Establecidas</b></h2>

                        <ul class="listaReglasPrestablecidas SistemaComentatext" flex="90" ng-repeat="regla in reglas">
                            <li > <span>[[$index + 1]] -</span> [[regla.regla]]</li>                    
                        </ul>
                    </div>

                    <div class="divivertical"> </div>

                    <div class="ParteDividiaPreferencial">
                        <h2 class="tituloSecundario"><b>Máximo de Electores por Mesa en no Centros Poblados</b>

                            <md-button class="md-fab md-primary botonFoter estilosBotonGeneral EditButon" md-theme="" aria-label="Use Android" ng-click="openTiposSolucion()">
                                <i class="material-icons">&#xE3C9;</i>
                            </md-button>
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
                                <md-input-container class="ParteDividiaPreferencialPer EstiloInput InputSinError alineadoCentro" >
                                    <label ng-show="false"></label>
                                    <input name='electores_[[$index]]' ng-model="solucion.electores" ng-change="changeCantidadElectores($index, solucion.electores)" autocomplete="off" maxlength="4" ng-maxlength="4" valid-number required>
                                    <div ng-messages="reglasForm['electores_'+$index].$error">
                                        <div ng-message="required">Campo requerido.</div>
                                    </div>
                                </md-input-container>  

                            </article>
                        </div>
                    </div>
                </div>          
            </article>
        </section>
        <footer class="OpcionesFooterGenerales">
            <div class="colum2 text-izq  alineadoIzquieda"> 
                <!--<md-button class="md-fab md-primary botonFoter estilosBotonGeneral" md-theme="" aria-label="Use Android">
                    <i class="material-icons">&#xE434;</i>
                </md-button>
                <md-button class="md-fab md-primary botonFoter estilosBotonGeneral" md-theme="" aria-label="Use Android">
                   <i class="material-icons">&#xE88E;</i>
                </md-button>
                <md-button class="md-fab md-primary botonFoter estilosBotonGeneral" md-theme="" aria-label="Use Android">
                    <i class="material-icons">&#xE431;</i>
                </md-button>-->
            </div>
            <div class="colum2 text-der alineadoDerecha"> 
                <!--<md-button ng-disabled="isSaving" class="md-primary estilosBotonGeneral" ng-click="back()">
                    <i class="material-icons">&#xE314;</i>
                    Regresar
                </md-button>-->                
                <md-button ng-disabled="isSaving || (!reglasForm.$valid) || cantSoluciones == 0 || ctrl.procesoStatus != '1'" type="submit" class="md-primary estilosBotonGeneral"> 
                    Continuar
                    <i class="material-icons">&#xE315;</i>
                </md-button>      
            </div>
        </footer>
    </form> 
</div>