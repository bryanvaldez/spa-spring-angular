<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<t:master  title="local">

    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/map/ammap.js"></script> 
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/map/light.js"></script>

    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/chart/amcharts.js"></script>    
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/chart/light.js"></script>    
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/chart/serial.js"></script>  

    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/onpe-reporte-peru.js"></script> 
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/onpe-reporte-peru-dep.js"></script>    

    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/controller/main/reporteController2.js"></script>  
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/service/reporteService.js"></script>   
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/helper/commonUtil.js"></script>   

    <div ng-controller="reporteController2 as ctrl">
        <div class="contdmoree" >
            <section class="columnaDiviTres">

                <div class="contenedorBotonPrincipalAccion">
                    <md-button  ng-click="showAdvanced($event)" class="md-primary estilosBotonGeneral ButonPrincipal  verPrincialBtn ">
                       <i class="material-icons">&#xE8B6;</i>
                    </md-button>

                    <md-button  ng-click="showAdvanced($event)" class="md-primary estilosBotonGeneral ButonPrincipal  ">
                        <span class="spanBotonGrande">  enviar  <b>lesa a sige</b>   </span>
                        <i class="material-icons">&#xE163;</i>
                    </md-button>
                </div>
                
                
                <div class="contenedorBotonPrincipalAccion">
                    <md-button  ng-click="showAdvanced($event)" class="md-primary estilosBotonGeneral ButonPrincipal  verPrincialBtn ">
                       <i class="material-icons">&#xE8B6;</i>
                    </md-button>

                    <md-button  ng-click="showAdvanced($event)" class="md-primary estilosBotonGeneral ButonPrincipal  ">
                        <span class="spanBotonGrande">  enviar  <b>lesa a sige</b>   </span>
                        <i class="material-icons">&#xE163;</i>
                    </md-button>
                </div>
                
                
                <div class="contenedorBotonPrincipalAccion">
                    <md-button  ng-click="showAdvanced($event)" class="md-primary estilosBotonGeneral ButonPrincipal  verPrincialBtn ">
                       <i class="material-icons">&#xE8B6;</i>
                    </md-button>

                    <md-button  ng-click="showAdvanced($event)" class="md-primary estilosBotonGeneral ButonPrincipal  ">
                        <span class="spanBotonGrande">  enviar  <b>lesa a sige</b>   </span>
                        <i class="material-icons">&#xE163;</i>
                    </md-button>
                </div>
                


                

            </section>
            <section  class="columnaDiviTres">
                <article>
                    <div class="contenidoTituloMantenimiento EstadoOkMantenimiento">
                        <md-input-container class="EstiloInput InputSinError ">
                            <label for="label">Nombre</label>
                            <input type="text" id="nombre" ng-model="tTitle">
                        </md-input-container>                                                   
                    </div> 
                    <div class="ContenedorMantenimientoCard EstadoOkMantenimiento">
                        <md-tabs md-dynamic-height md-border-bottom>
                            <md-tab label="ID">
                                <md-content class="md-padding">
                                    <div class="contenedorshishtStandar"> 
                                        <label>SW</label>
                                        <md-switch ng-model="ctrl.status.enable" aria-label="status" layout-align="center"></md-switch>
                                        <label>BD</label>
                                    </div>  
                                    <h2 class="tituloSecundario"><b>DATOS</b></h2>

                                    <md-input-container class="EstiloInput InputSinError inputmedio">
                                        <label>ID:</label>
                                        <input  type="text">
                                    </md-input-container>   
                                    <md-input-container class="EstiloInput InputSinError inputmedio">
                                        <label>Cantidades de Mesas:</label>
                                        <input  type="text">
                                    </md-input-container>   
                                    <md-input-container class="EstiloInput InputSinError inputfull">
                                        <label>Dirección</label>
                                        <input  type="text">
                                    </md-input-container>   
                                    <md-input-container class="EstiloInput InputSinError inputfull">
                                        <label>Referencias:</label>
                                        <input  type="text">
                                    </md-input-container>   
                                    <h4 class="tituloCuarto">Coordenadas:</h4>
                                    <md-input-container class="EstiloInput InputSinError inputmedio">
                                        <label> Latitud:</label>
                                        <input  type="text">
                                    </md-input-container>   
                                    <md-input-container class="EstiloInput InputSinError inputmedio">
                                        <label>Longitud:</label>
                                        <input  type="text">
                                    </md-input-container>   

                                    <md-checkbox ng-model="data.cb1" aria-label="Checkbox 1" class="CheckCentroPo">
                                        Centro Poblado - 
                                    </md-checkbox>
                                    <md-input-container class="EstiloInput InputSinError ReferenciaCentroPoblado">
                                        <label>Referencia de Centro Poblado</label>
                                        <input  type="text">
                                    </md-input-container>   

                                </md-content>
                            </md-tab>

                            <md-tab label="Mesa">
                                <md-content class="md-padding">
                                    <div class="TarjetiaNMesa">
                                        <h2>0 000 000</h2>
                                        <span>Electores: <b>00 / 00</b></span>
                                        <div class="imgSolu">
                                            <img src="../static/img/ico-sea.png">
                                        </div>
                                    </div>
                                    <div class="TarjetiaNMesa">
                                        <h2>0 000 000</h2>
                                        <span>Electores: <b>00 / 00</b></span>
                                        <div class="imgSolu">
                                            <img src="../static/img/ico-vep.png">
                                        </div>
                                    </div>
                                    <div class="TarjetiaNMesa">
                                        <h2>0 000 000</h2>
                                        <span>Electores: <b>00 / 00</b></span>
                                        <div class="imgSolu">
                                            <img src="../static/img/ico-vep.png">
                                        </div>
                                    </div>
                                    <div class="TarjetiaNMesa">
                                        <h2>0 000 000</h2>
                                        <span>Electores: <b>00 / 00</b></span>
                                        <div class="imgSolu">
                                            <img src="../static/img/ico-vep.png">
                                        </div>
                                    </div>
                                    <div class="TarjetiaNMesa">
                                        <h2>0 000 000</h2>
                                        <span>Electores: <b>00 / 00</b></span>
                                        <div class="imgSolu">
                                            <img src="../static/img/ico-vep.png">
                                        </div>
                                    </div>
                                    <div class="TarjetiaNMesa">
                                        <h2>0 000 000</h2>
                                        <span>Electores: <b>00 / 00</b></span>
                                        <div class="imgSolu">
                                            <img src="../static/img/ico-vep.png">
                                        </div>
                                    </div>

                                    <div class="TarjetiaNMesa">
                                        <h2>0 000 000</h2>
                                        <span>Electores: <b>00 / 00</b></span>
                                        <div class="imgSolu">
                                            <img src="../static/img/ico-vep.png">
                                        </div>
                                    </div>
                                    <div class="TarjetiaNMesa">
                                        <h2>0 000 000</h2>
                                        <span>Electores: <b>00 / 00</b></span>
                                        <div class="imgSolu">
                                            <img src="../static/img/ico-vep.png">
                                        </div>
                                    </div>
                                    <div class="TarjetiaNMesa">
                                        <h2>0 000 000</h2>
                                        <span>Electores: <b>00 / 00</b></span>
                                        <div class="imgSolu">
                                            <img src="../static/img/ico-vep.png">
                                        </div>
                                    </div>

                                </md-content>
                            </md-tab>
                        </md-tabs>
                    </div>
                </article>


                <md-fab-speed-dial md-open="ctrl.isOpen" md-direction="[[ctrl.selectedDirection]]"
                                   ng-class="ctrl.selectedMode">
                    <md-fab-trigger>
                        <md-button aria-label="menu" class="md-fab md-warn">
                            <md-icon md-svg-src="img/icons/menu.svg"></md-icon>
                        </md-button>
                    </md-fab-trigger>

                    <md-fab-actions>
                        <md-button aria-label="Twitter" class="md-fab md-raised md-mini">
                            <img src="../static/img/ico-vep.png">
                        </md-button>
                        <md-button aria-label="Facebook" class="md-fab md-raised md-mini">
                            <img src="../static/img/ico-vep.png">
                        </md-button>
                        <md-button aria-label="Google Hangout" class="md-fab md-raised md-mini">
                            <img src="../static/img/ico-vep.png">
                        </md-button>
                    </md-fab-actions>
                </md-fab-speed-dial>



                <div class="divinormal"></div>


                <article>
                    <div class="contenidoTituloMantenimiento EstadoErrorMantenimiento">
                        <md-input-container class="EstiloInput InputSinError">
                            <label for="label">Nombre</label>
                            <input type="text" id="nombre" ng-model="tTitle">
                        </md-input-container>                                                   
                    </div> 
                    <div class="ContenedorMantenimientoCard EstadoErrorMantenimiento">
                        <md-tabs md-dynamic-height md-border-bottom>
                            <md-tab label="ID">
                                <md-content class="md-padding">
                                    <div class="contenedorshishtStandar"> 
                                        <label>SW</label>
                                        <md-switch ng-model="ctrl.status.enable" aria-label="status" layout-align="center"></md-switch>
                                        <label>BD</label>
                                    </div>  
                                    <h2 class="tituloSecundario"><b>DATOS</b></h2>

                                    <md-input-container class="EstiloInput InputSinError inputmedio">
                                        <label>ID:</label>
                                        <input  type="text">
                                    </md-input-container>   
                                    <md-input-container class="EstiloInput InputSinError inputmedio">
                                        <label>Cantidades de Mesas:</label>
                                        <input  type="text">
                                    </md-input-container>   
                                    <md-input-container class="EstiloInput InputSinError inputfull">
                                        <label>Dirección</label>
                                        <input  type="text">
                                    </md-input-container>   
                                    <md-input-container class="EstiloInput InputSinError inputfull">
                                        <label>Referencias:</label>
                                        <input  type="text">
                                    </md-input-container>   
                                    <h4 class="tituloCuarto">Coordenadas:</h4>
                                    <md-input-container class="EstiloInput InputSinError inputmedio">
                                        <label> Latitud:</label>
                                        <input  type="text">
                                    </md-input-container>   
                                    <md-input-container class="EstiloInput InputSinError inputmedio">
                                        <label>Longitud:</label>
                                        <input  type="text">
                                    </md-input-container>   

                                    <md-checkbox ng-model="data.cb1" aria-label="Checkbox 1" class="CheckCentroPo">
                                        Centro Poblado - 
                                    </md-checkbox>
                                    <md-input-container class="EstiloInput InputSinError ReferenciaCentroPoblado">
                                        <label>Referencia de Centro Poblado</label>
                                        <input  type="text">
                                    </md-input-container>   

                                </md-content>
                            </md-tab>

                            <md-tab label="Mesa">
                                <md-content class="md-padding">
                                    <div class="TarjetiaNMesa">
                                        <h2>0 000 000</h2>
                                        <span>Electores: <b>00 / 00</b></span>
                                        <div class="imgSolu">
                                            <img src="../static/img/ico-sea.png">
                                        </div>
                                    </div>
                                    <div class="TarjetiaNMesa">
                                        <h2>0 000 000</h2>
                                        <span>Electores: <b>00 / 00</b></span>
                                        <div class="imgSolu">
                                            <img src="../static/img/ico-vep.png">
                                        </div>
                                    </div>
                                    <div class="TarjetiaNMesa">
                                        <h2>0 000 000</h2>
                                        <span>Electores: <b>00 / 00</b></span>
                                        <div class="imgSolu">
                                            <img src="../static/img/ico-vep.png">
                                        </div>
                                    </div>
                                    <div class="TarjetiaNMesa">
                                        <h2>0 000 000</h2>
                                        <span>Electores: <b>00 / 00</b></span>
                                        <div class="imgSolu">
                                            <img src="../static/img/ico-vep.png">
                                        </div>
                                    </div>
                                    <div class="TarjetiaNMesa">
                                        <h2>0 000 000</h2>
                                        <span>Electores: <b>00 / 00</b></span>
                                        <div class="imgSolu">
                                            <img src="../static/img/ico-vep.png">
                                        </div>
                                    </div>
                                    <div class="TarjetiaNMesa">
                                        <h2>0 000 000</h2>
                                        <span>Electores: <b>00 / 00</b></span>
                                        <div class="imgSolu">
                                            <img src="../static/img/ico-vep.png">
                                        </div>
                                    </div>

                                    <div class="TarjetiaNMesa">
                                        <h2>0 000 000</h2>
                                        <span>Electores: <b>00 / 00</b></span>
                                        <div class="imgSolu">
                                            <img src="../static/img/ico-vep.png">
                                        </div>
                                    </div>
                                    <div class="TarjetiaNMesa">
                                        <h2>0 000 000</h2>
                                        <span>Electores: <b>00 / 00</b></span>
                                        <div class="imgSolu">
                                            <img src="../static/img/ico-vep.png">
                                        </div>
                                    </div>
                                    <div class="TarjetiaNMesa">
                                        <h2>0 000 000</h2>
                                        <span>Electores: <b>00 / 00</b></span>
                                        <div class="imgSolu">
                                            <img src="../static/img/ico-vep.png">
                                        </div>
                                    </div>

                                </md-content>
                            </md-tab>
                        </md-tabs>
                    </div>
                </article>

            </section>

            <section class="columnaDiviTres">


                <div class="ContenedorSolucionesScroll">
                    <article ng-repeat="solucion in tiposSolucion" class="tipoSolucionAgregada" style="background:red;">
                        <div class="ParteDividiaPreferencialPer alineadoCentro">
                            <!--<img data-ng-src="data:image/PNG;base64,[[solucion.imagen]]" class="tipoSolucionIcon">-->
                            <img  ng-src="${pageContext.request.contextPath}[[solucion.rutaImagen]]" class="tipoSolucionIcon">
                            <span ng-bind="solucion.alias"></span>      
                        </div>
                        <md-input-container class="ParteDividiaPreferencialPer EstiloInput InputSinError alineadoCentro" >
                            <label ng-show="false"></label>
                            <input name='electores_[[$index]]' ng-model="solucion.electores" maxlength="4" ng-maxlength="4" valid-number required>
                            <div ng-messages="reglasForm['electores_'+$index].$error">
                                <div ng-message="required">Campo requerido!</div>
                            </div>
                        </md-input-container>  

                    </article>
                </div>



            </section>

        </div>

        <script type="text/ng-template" id="dialog1.tmpl.html">                        
            <md-dialog aria-label="TIPOSOLUCION" class="modal-form popUpEstilos">
            <md-toolbar >
            <div class="md-toolbar-tools">
            <h1>Nombre de la Elección 2017</h1>            
            <h2>RETROCEDERS</h2>
            <md-button class="md-icon-button btn-close" ng-click="close()">
            <md-icon aria-label="Close dialog" class="material-icons"><i class="fa fa-times" aria-hidden="true"></i></md-icon>
            </md-button>
            </div>
            </md-toolbar>
            <form name="tipoSolucionForm" ng-submit="tipoSolucionForm.$valid && submitTipoS()" novalidate> 
            <md-dialog-content>
            <ul class=listaRetro>
            <li>
            <md-button   class="md-primary estilosBotonGeneral ButonPrincipal  ">
            <span class="spanBotonGrande">  <b>Configuracion</b>   </span>
            <i class="material-icons">&#xE8B8;</i>
            </md-button>
            </li>
            <li>
            <md-button   class="md-primary estilosBotonGeneral ButonPrincipal  ">
            <span class="spanBotonGrande">  <b>Carga de Datos + <br>Asignación de Soluciones Tecnológicas</b>   </span>
            <i class="material-icons">&#xE2C6;</i>
            </md-button>
            </li>
            <li>
            <md-button   class="md-primary estilosBotonGeneral ButonPrincipal  ">
            <span class="spanBotonGrande">  <b>Asignación de Electores a Locales de Votación</b>   </span>
            <i class="material-icons">&#xE0AF;</i>
            </md-button>
            </li>
            <li>
            <md-button class="md-primary estilosBotonGeneral ButonPrincipal  ">
            <span class="spanBotonGrande">    <b>Conformación de Mesas de Sufragio + BDONPE</b>   </span>
            <i class="material-icons">&#xE8A4;</i>
            </md-button>
            </li>
            </ul>

            </md-dialog-content>
            <md-dialog-actions layout="row" layout-align="end center">                         
            <md-button type="submit" class="btn-confirm estilosBotonGeneral ">GUARDAR</md-button> 
            </md-dialog-actions>
            </form>
            </md-dialog>
        </script>    


        <script type="text/ng-template" id="soluciones.tmpl.html">                        
            <md-dialog aria-label="TIPOSOLUCION" class="modal-form popUpEstilos">
            <md-toolbar >
            <div class="md-toolbar-tools">
            <h1>Nombre de la Elección 2017</h1>            
            <h2>Ficha Técnica Final </h2>
            <md-button class="md-icon-button btn-close" ng-click="close()">
            <md-icon aria-label="Close dialog" class="material-icons"><i class="fa fa-times" aria-hidden="true"></i></md-icon>
            </md-button>
            </div>
            </md-toolbar>
            <form name="tipoSolucionForm" ng-submit="tipoSolucionForm.$valid && submitTipoS()" novalidate> 
            <md-dialog-content>
            <div class="SistemaComentatext ng-binding textoResaltanteCuadro">
            <p class="textoSobresaliente">Fecha de la Versión: <b>00/00/0000</b> </p>
            <p class="textoSobresaliente">En base a la resolucion: <b>0000 - 0000 JNE N° </b> 
            <md-button  class="btn-confirm estilosBotonGeneral butonpekeAsignado  md-fab "><i class="material-icons">&#xE2C4;</i> </md-button>documento_cagado.pdf </p>

            </div>
            <div class="divinormal"></div>
            <ul class="UlFichaTecnicaFinal">
            <li><b class="listado">1</b><span>tipo de Elcción:</span> <strong>Elecciones Municipales</strong></li>
            <li class="sublistado"><span>Variable</span> <strong>Variable</strong></li>
            <li class="sublistado"><span>Municipales</span> <strong>Variable</strong></li>
            <li class="sublistado"><span>Autoridades a Elegir</span> <strong>Variable</strong></li>
            <li><b class="listado">2</b><span>Periodicidad:</span> <strong>Variable</strong></li>
            <li><b class="listado">3</b><span>Fecha de la Elección:</span> <strong>00 / 00 / 0000</strong></li>
            <li><b class="listado">4</b><span>Distritos:</span> <strong>0000</strong></li>
            <li><b class="listado">5</b><span>CCPP:</span> <strong>0000</strong></li>
            <li><b class="listado">6</b><span>ODPEs:</span> <strong>0000</strong></li>
            <li><b class="listado">7</b><span>Electores Hábiles:</span> <strong>0000</strong></li>
            <li><b class="listado">8</b><span>Mesas de Sufragio:</span> <strong>0000</strong></li>
            <li><b class="listado">9</b><span>Locales de Votación::</span> <strong>0000</strong></li>
            </ul>

            </md-dialog-content>
            <md-dialog-actions layout="row" layout-align="end center">                         
            <md-button type="submit" class="btn-confirm estilosBotonGeneral ">ABRIR EN WORD</md-button> 
            <md-button type="submit" class="btn-confirm estilosBotonGeneral ">IMPRIMIR</md-button> 
            <md-button type="submit" class="btn-confirm estilosBotonGeneral "> <i class="material-icons">&#xE2C4;</i>DESCARGAR EXCEL DE DETALLE</md-button> 
            <md-button type="submit" class="btn-confirm estilosBotonGeneral "> <i class="material-icons">&#xE434;</i>CAPTURA</md-button> 
            </md-dialog-actions>
            </form>
            </md-dialog>
        </script>    


    </div>


</t:master>