<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/controller/step1/fichaController.js"></script>  
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/service/step1/fichaService.js"></script>      
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/step1/fichaTecnica.css" type="text/css" />
<div  ng-controller="fichaController as ctrl">

    <form name="fichaTForm1" ng-submit="mensajeLfInput === '' && fichaTForm1.$valid && saveFichaTecnica2()" novalidate>
        <section class="ColumnaFull">
            <article class="parteCompleta">
                <div class="estiloTarjeta" >
                    <h1 class="tituloPincipal"><b>Ficha Técnica</b></h1>
                    <div class="SistemaComentatext">
                        <fieldset>
                            <md-input-container class="Estiloselect">                                                                      
                                <label>[[ fichas.length === 0 ? 'No hay versiones anteriores' : 'Versiones anteriores' ]]</label>
                                <md-select ng-change="changeFichaT(fichaTecnica)" ng-model="fichaTecnica" ng-disabled="fichas.length === 0" ng-style="{width: {true:'240px', false:'200px'}[(fichas.length === 0)]}"> <!--ng-model-options="{trackBy: '$value.id'}"-->
                                    <md-option ng-repeat="ficha in fichas" ng-value="ficha" >
                                        [[ficha.version]]
                                    </md-option>
                                </md-select>
                            </md-input-container>                            
                            <md-button class="md-primary estilosBotonGeneral" ng-click="newVersion()" ng-disabled="!(fichaTecnica.id > 0)"> 
                                Nueva Versión
                            </md-button> 
                        </fieldset>
                        <fieldset>
                            <label>Fecha de la versión:</label>
                            <md-input-container class="EstiloInput InputSinError">
                                <md-datepicker name="dateVersion" ng-change="changeFechaVersion()" ng-model="fichaTecnica.fechaVersion" md-placeholder="Fecha " seleccionar-fecha md-open-on-focus  required></md-datepicker>
                                <div ng-messages="fichaTForm1.dateVersion.$error">
                                    <div ng-message="required">Campo requerido.</div>
                                </div>
                            </md-input-container>
                            <label>N° </label>
                            <md-input-container   class="EstiloInput InputSinError">
                                <label ng-show="false"></label>
                                <input name='resolA' ng-model="resolucion.a" autocomplete="off" valid-number maxlength="4" minlength="4" ng-maxlength="4" ng-minlength="4" required>
                                <div ng-messages="fichaTForm1.resolA.$error">
                                    <div ng-message="required">Campo Requerido.</div>
                                    <div ng-message="minlength">Ingrese 4 dígitos.</div>
                                </div>
                            </md-input-container>
                            <label> - </label>
                            <md-input-container class="EstiloInput InputSinError">
                                <label ng-show="false"></label>
                                <input name='resolB' ng-model="resolucion.b" autocomplete="off" valid-number maxlength="4" minlength="4" ng-maxlength="4" ng-minlength="4" required>
                                <div ng-messages="fichaTForm1.resolB.$error">
                                    <div ng-message="required">Campo Requerido.</div>
                                    <div ng-message="minlength">Ingrese 4 dígitos.</div>
                                </div>
                            </md-input-container>
                            <label>JNE</label>
                            <div class="cargarDatosInputCont">                                
                                <lf-ng-md-file-input name="archivo" lf-api="apiFile" lf-files="archivo" progress                                                
                                                     accept="application/pdf"
                                                     lf-placeholder="" lf-remove-label="Limpiar"
                                                     lf-browse-label="Archivo" flex> </lf-ng-md-file-input>                                   
                                <div class="md-input-message-animation">[[mensajeLfInput]]</div>                                
                            </div>
                        </fieldset>

                    </div>
                    <div class="divinormal"> </div>
                    <div class="ParteDividiaPreferencial">
                        <h2 class="tituloSecundario"><b>Tipo de Elección</b></h2>
                        <div class="SistemaComentatext">
                            <fieldset>
                                <!--<label class="SistemaComentatext"> Tipo de Elección:</label>-->
                                <md-input-container class="EstiloInput InputSinError">
                                    <label>Tipo de Elección</label>
                                    <md-select name='tipoEleccion' ng-change="changeTipoEleccion()" ng-model="fichaTecnica.tipoEleccion" required>
                                        <md-option ng-repeat="tipoEleccion in tiposEleccion" ng-value="tipoEleccion.id" >
                                            <em>[[tipoEleccion.descripcion]]</em>
                                        </md-option>
                                    </md-select>
                                    <div ng-messages="fichaTForm1.tipoEleccion.$error">
                                        <div ng-message="required">Campo Requerido.</div>
                                    </div>
                                </md-input-container>
                            </fieldset>
                            <fieldset>
                                <label class="SistemaComentatext"> Fecha de Elección:</label>
                                <md-input-container class="EstiloInput InputSinError">
                                    <md-datepicker name="dateEleccion" ng-model="fichaTecnica.fechaEleccion" md-placeholder="Fecha " md-min-date="ctrl.dateMinEleccion" ng-change="changeFechaEleccion()" md-open-on-focus seleccionar-fecha required></md-datepicker>
                                    <div ng-messages="fichaTForm1.dateEleccion.$error">
                                        <div ng-message="required">Campo requerido.</div>
                                    </div>
                                </md-input-container>   

                                <md-input-container   class="EstiloInput InputSinError">                                   
                                    <label>Año de la Elección</label>
                                    <input name='anio' ng-model="fichaTecnica.anioEleccion" autocomplete="off" maxlength="4" ng-maxlength="4" valid-number required ng-disabled="true">
                                    <div ng-messages="fichaTForm1.anio.$error">
                                        <div ng-message="required">Campo requerido.</div>
                                    </div>
                                </md-input-container>
                            </fieldset>
                            <fieldset>
                                <label class="SistemaComentatext"> Nombre Corto:</label>
                                <md-input-container class="EstiloInput InputSinError">
                                    <label ng-show="false"></label>
                                    <input name='nombreCorto' ng-model="fichaTecnica.nombreCorto" autocomplete="off" maxlength="15" ng-maxlength="15" letters-and-number uppercased required>
                                    <div ng-messages="fichaTForm1.nombreCorto.$error">
                                        <div ng-message="required">Campo requerido.</div>
                                    </div>
                                </md-input-container>

                            </fieldset>
                            <fieldset ng-if="showMunicipalidades">
                                 <label class="SistemaComentatext">N° de Municipalidades:</label>
                                <md-button ng-click="menosMun()" class="md-fab butonpekeAsignado md-primary estilosBotonGeneral"  >
                                        <i class="material-icons">&#xE15B;</i>
                                </md-button>
                                <md-input-container   class="EstiloInput InputSinError inputPeque alineadoCentro">                                    
                                   <label ng-show="false"></label>
                                   <input name="municipalidades" ng-model="fichaTecnica.municipalidades" valid-number maxlength="2" ng-maxlength="2" autocomplete="off" ng-change="changeCantMunicipalidades(fichaTecnica.municipalidades)" required>
                                   <div ng-messages="fichaTForm1.municipalidades.$error">
                                        <div ng-message="required">Campo requerido.</div>
                                    </div>
                                </md-input-container>
                                <md-button ng-click="masMun()" class="md-fab butonpekeAsignado md-primary estilosBotonGeneral" >
                                    <i class="material-icons">&#xE145;</i>
                                </md-button>
                                <label class="SistemaComentatext">[[municipalidadesLbl]]</label>
                            </fieldset>

                            <div class="divinormal"> </div>
                            <h2 class="tituloSecundario"><b>Periodicidad</b></h2>
                            <md-radio-group ng-model="fichaTecnica.periodicidad" class="radioJuntos">
                                <md-radio-button ng-repeat="d in OptionsPeriodicidad"
                                                 ng-value="d.nCodigo"
                                                 ng-class="{'md-align-top-left': $index == 1}">
                                    [[ d.descripcion]]
                                </md-radio-button>
                            </md-radio-group>

                        </div>
                    </div>
                    <div class="divivertical"> </div>   
                    <div class="ParteDividiaPreferencial">
                        <h3 class="tituloSecundario"><b>Autoridades a Elegir</b></h3>
                        <label  class="SistemaComentatext">Agregar Autoridades</label>
                        <md-button ng-click="addAutoridad()" class="md-fab md-primary botonFoter estilosBotonGeneral" md-theme="" aria-label="Use Android" >
                            <i class="material-icons">&#xE145;</i>
                        </md-button>   
                        <fieldset>

                            <div class="contenedorAutoridadesElegir">
                                <div ng-repeat="det in detFichaTecnica" ng-show="det.estado === 1">
                                    <md-button ng-click="menos($index)" class="md-fab butonpekeAsignado md-primary estilosBotonGeneral"  >
                                        <i class="material-icons">&#xE15B;</i>
                                    </md-button>
                                    <md-input-container   class="EstiloInput InputSinError inputPeque alineadoCentro">
                                        <label ng-show="false"></label>
                                        <input name='cantidadDet_[[$index]]' ng-model="det.cantAutoridad" autocomplete="off" maxlength="3" ng-maxlength="3" valid-number ng-change="changeCantAutoridad($index, det.cantAutoridad)" required>
                                        <div ng-messages="fichaTForm1['cantidadDet_'+$index].$error">
                                            <div ng-message="required">Campo requerido.</div>
                                        </div>
                                    </md-input-container>
                                    <md-button ng-click="mas($index)" class="md-fab butonpekeAsignado md-primary estilosBotonGeneral" >
                                        <i class="material-icons">&#xE145;</i>
                                    </md-button>
                                    <md-input-container class="Estiloselect selectWidthConpleto EstiloInput InputSinError">
                                        <md-select name="tipoAutoridad_[[$index]]" placeholder="Seleccione"  ng-model="det.autoridad" required>
                                            <md-option ng-repeat="tipoAut in tiposAutoridad" ng-value="tipoAut.id" ng-disabled="tipoAut.estado == 0">
                                                <em class="SistemaComentatext">[[tipoAut.descripcion]]</em>
                                            </md-option>
                                        </md-select>
                                        <div ng-messages="fichaTForm1['tipoAutoridad_'+$index].$error">
                                            <div ng-message="required">Campo Requerido.</div>
                                        </div>
                                    </md-input-container>
                                    <md-button ng-click="eliminar($index)" class="md-fab butonpekeAsignado md-primary estilosBotonGeneral"  >
                                        <i class="material-icons">&#xE872;</i>
                                    </md-button>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </article>
        </section>

        <footer class="OpcionesFooterGenerales">
            <div class="colum2 text-izq  alineadoIzquieda">
                <!--<md-button class="md-fab md-primary botonFoter estilosBotonGeneral" md-theme="" aria-label="Use Android">
                    <i class="material-icons">&#xE434;</i>
                </md-button>-->
            </div>
            <div class="colum2 text-der alineadoDerecha"> 
                <!--<md-button ng-disabled="isSaving" class="md-primary estilosBotonGeneral" ng-click="regresarFT1()">
                    <i class="material-icons">&#xE314;</i>
                    Regresar
                </md-button>-->
                <md-button ng-disabled="isSaving || !fichaTForm1.$valid || cantDetalle==0 || ctrl.procesoStatus != '1'" class="md-primary estilosBotonGeneral" type="submit"> 
                    Continuar
                    <i class="material-icons">&#xE315;</i>
                </md-button>
            </div>
        </footer>
    </form> 
</div>