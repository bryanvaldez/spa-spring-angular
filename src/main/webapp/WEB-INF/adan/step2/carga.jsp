      
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/step1/cargaDatos.css" type="text/css" />
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/controller/step2/cargaController.js"></script>  
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/service/cargaService.js"></script>   

<div ng-controller="cargaController as ctrl">        
    <div class="contdmoree" >
        <section class="ColumnaFull" >

            <article class="parteCompleta">
                <h1 class="tituloPincipal"><b>Recepción y Verificación de Archivos y Servicios</b></h1>

                <div class="conteCard" layout-align="space-between center">
                    <!-- tarjeta 1 -->
                    <md-card md-theme="default" md-theme-watch class="cargaDBaseDatosCard obliPrimero" >                

                        <md-card-title>
                            <md-card-title-text flex="100" layout="row">
                                <span>PADRÓN ELECTORAL</span>
                            </md-card-title-text>                  
                        </md-card-title>
                        <div class="contenedorshisht"> 
                            <!--<label>SW</label>
                            <md-switch ng-model="ctrl.cargaPadron.B_TIPO_CONEXION" ng-change="ctrl.onChangeSwitch(0, ctrl.typeCarga_Padron, ctrl.cargaPadron.B_TIPO_CONEXION)" ng-disabled="true">
                                <label>BD</label>
                            </md-switch>-->
                        </div>
                        <md-card-content>        
                            <form   class="alineadoCentro" ng-if="ctrl.cargaPadron.B_TIPO_CONEXION && ctrl.cargandoFormatoCargaPadron === false" > 
                                <md-button class="estilosBotonGeneral"ng-click="ctrl.updateProcess(ctrl.typeCarga_Padron)" 
                                           ng-disabled="ctrl.cargandoFormatoCargaOdpe || ctrl.cargandoFormatoCargaLocal || ctrl.cargandoFormatoCargaPref 
                                                       || ctrl.cargandoFormatoCargaPagina || ctrl.cargandoFormatoCargaConadis || ctrl.cargandoFormatoCargaEtlv || ctrl.cargandoFormatoCargaRae || ctrl.cargandoFormatoCargaSige" >ACTUALIZAR</md-button>
                            </form>                   
                            <!--<form name="padronForm" ng-submit="padronForm.$valid && ctrl.updateProcess(ctrl.typeCarga_Padron)" novalidate 
                                  ng-if="!ctrl.cargaPadron.B_TIPO_CONEXION && ctrl.cargandoFormatoCargaPadron === false">
                                <md-input-container class="EstiloInput InputSinError">
                                    <label>Servicio Web</label>
                                    <input required name="serviceNamePadron" ng-model="ctrl.serviceNamePadron">
                                    <div ng-messages="padronForm.serviceNamePadron.$error">
                                        <div ng-message="required">Campo Obligatorio.</div>
                                    </div>
                                </md-input-container>
                                <md-button type="submit"class="estilosBotonGeneral" ng-disabled="ctrl.cargandoFormatoCargaOdpe || ctrl.cargandoFormatoCargaLocal || ctrl.cargandoFormatoCargaPref">ACTUALIZAR</md-button>                                                        
                            </form>-->
                            <div ng-show="ctrl.cargandoFormatoCargaPadron === false" class="textoFechaInferiorDescriptiva">                                
                                <p> Fecha Padrón: <time>[[ctrl.cargaPadron.D_FECHA_PADRON | dateFormat2 ]]</time> </p>
                                <p ng-show="ctrl.cargaPadron.N_CONEXION_PK !== 0 && ctrl.cargaPadron.D_AUD_FECHA_ACTUALIZACION != undefined">                                    
                                    <span> Última actualización: <time>[[ctrl.cargaPadron.D_AUD_FECHA_ACTUALIZACION | dateFormat1 ]]</time> </span>
                                </p>                                        
                            </div> 

                            <div ng-if="ctrl.cargandoFormatoCargaPadron === true">        
                                <div layout="row"> 
                                    <div flex="100">
                                        <h2>Procesando...</h2>
                                    </div>
                                </div>
                                <md-card-title-text flex="100">                
                                    <md-progress-linear md-mode="indeterminate"></md-progress-linear>                 
                                </md-card-title-text>  
                                <div class="clearboth"></div>
                            </div>
                        </md-card-content>
                    </md-card>

                    <!-- tarjeta 2 -->

                    <md-card md-theme="default" md-theme-watch class="[[ctrl.colorCargaOdpe]] cargaDocumentacionCard obliSegundo">
                        <md-card-title>
                            <md-card-title-text >
                                <span>ODPE + UBIGEOS</span>
                            </md-card-title-text>

                            <div > 
                                <md-button ng-click="ctrl.descargarPlantilla(ctrl.typeCarga_Odpe)">Descargar Formato</md-button>
                            </div>
                        </md-card-title>

                        <md-card-content>                                                        
                            <div ng-show="ctrl.observacionGeneralOdpe.cantidadRegistrosCargados === 0 && ctrl.errorFormatoCargaOdpe === false && ctrl.cargandoFormatoCargaOdpe === false">
                                <div layout="row"> 
                                    <div flex="100">
                                        <h2><i class="fa fa-clock-o" aria-hidden="true"></i>En espera</h2>
                                    </div>
                                </div>
                                <!-- en espera estado -->
                                <md-card-title-text flex="100" class="butonSubirArchivoEspera">          
                                    <md-list-item class="md-3-line"> <!-- en espera estado -->
                                        <div id="fileCargaOdpe">
                                            <lf-ng-md-file-input lf-api="apiCargaOdpe" lf-files="cargaOdpe" progress                                                                  
                                                                 accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                                                 lf-mimetype=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                                                 lf-placeholder="" lf-remove-label=""
                                                                 lf-browse-label="Subir Archivo" flex 
                                                                 ng-disabled="ctrl.cargandoFormatoCargaPadron || ctrl.cargandoFormatoCargaLocal || ctrl.cargandoFormatoCargaPref 
                                                                             || ctrl.cargandoFormatoCargaPagina || ctrl.cargandoFormatoCargaConadis || ctrl.cargandoFormatoCargaEtlv || ctrl.cargandoFormatoCargaRae || ctrl.cargandoFormatoCargaSige
                                                                             || !ctrl.finallyProcessPadron"> </lf-ng-md-file-input>                                            
                                        </div>                    
                                    </md-list-item>
                                </md-card-title-text>  
                                <div class="clearboth"></div>
                            </div>

                            <div ng-if="ctrl.cargandoFormatoCargaOdpe === true">        
                                <div layout="row"> 
                                    <div flex="100">
                                        <h2>Procesando...</h2>
                                    </div>
                                </div>
                                <md-card-title-text flex="100">                
                                    <md-progress-linear md-mode="indeterminate"></md-progress-linear>                 
                                </md-card-title-text>  
                                <div class="clearboth"></div>
                            </div>                           
                            
                            <div ng-show="ctrl.errorFormatoCargaOdpe === true || ctrl.observacionGeneralOdpe.cantidadRegistrosError > 0">

                                <div> 
                                    <h2 ng-show="ctrl.observacionGeneralOdpe.cantidadRegistrosError > 0"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>Observaciones</h2>                    

                                    <lf-ng-md-file-input lf-files="cargaOdpe" progress 
                                                         lf-placeholder="" lf-remove-label=""
                                                         accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
                                                         lf-browse-label="Reemplazar Archivo" flex ng-disabled="ctrl.cargandoFormatoCargaPadron || ctrl.cargandoFormatoCargaLocal || ctrl.cargandoFormatoCargaPref 
                                                                     || ctrl.cargandoFormatoCargaPagina || ctrl.cargandoFormatoCargaConadis || ctrl.cargandoFormatoCargaEtlv || ctrl.cargandoFormatoCargaRae || ctrl.cargandoFormatoCargaSige
                                                                     || !ctrl.finallyProcessPadron"> </lf-ng-md-file-input>

                                </div>

                                <md-card-title-text flex="100" ng-if="ctrl.errorFormatoCargaOdpe === true && ctrl.errorNombreFormatoCargaOdpe === false">
                                    <p class="textoDescriptivoCard">[[ctrl.mensajeFormatoCargaOdpe]]</p>
                                    <div ng-if="ctrl.errorExtensionCargaOdpe === false">
                                        <md-button ng-click="ctrl.descargarDetalleFormato(ctrl.typeCarga_Odpe)" class="BotoenError">ERRORES DE FORMATO</md-button>
                                    </div>
                                </md-card-title-text>                                                                 
                                                                
                                <div class="clearboth"></div>
                            </div> 
                            
                            <div ng-if="ctrl.errorSystemCargaOdpe === true">
                                <md-card-title-text flex="100">
                                    <p class="textoDescriptivoCard">[[ctrl.mensajeFormatoCargaOdpe]]</p>                                    
                                </md-card-title-text>
                            </div>

                            <div ng-if="ctrl.cargandoFormatoCargaOdpe === false && ctrl.observacionGeneralOdpe.cantidadRegistrosCargados !== 0 && ctrl.errorFormatoCargaOdpe === false">                        
                                <md-card-title-text flex="100">
                                    <div layout="row" ng-show="ctrl.observacionGeneralOdpe.cantidadRegistrosError === 0"> 
                                        <div flex="100">
                                            <h2><i class="fa fa-check" aria-hidden="true"></i>Listo</h2>
                                        </div>          
                                    </div>  
                                    <md-list-item class="md-3-line">
                                        <div class="iconoEstadoBoton">

                                        </div>
                                        <div class="btnRegistro" layout="column">
                                            <h4>Registros Leídos</h4>
                                            <span>[[ctrl.observacionGeneralOdpe.cantidadRegistrosCargados]]</span>
                                        </div>
                                    </md-list-item>

                                    <md-list-item class="md-3-line">
                                        <div class="iconoEstadoBoton">
                                            <div ng-click="ctrl.descargarDetalle(ctrl.typeCarga_Odpe, 1)" ng-show="ctrl.observacionGeneralOdpe.cantidadRegistrosCorrectos > 0">
                                                <i class="fa fa-cloud-download" aria-hidden="true"></i>
                                            </div>                                            
                                        </div>
                                        <div class="btnRegistro" layout="column">
                                            <h4>Registros Correctos</h4>
                                            <span>[[ctrl.observacionGeneralOdpe.cantidadRegistrosCorrectos]]</span>
                                        </div>
                                    </md-list-item>

                                    <md-list-item class="md-3-line">
                                        <div class="iconoEstadoBoton">                                                                                    
                                            <div ng-click="ctrl.descargarDetalle(ctrl.typeCarga_Odpe, 2)" ng-show="ctrl.observacionGeneralOdpe.cantidadRegistrosError > 0">
                                                <i class="fa fa-cloud-download" aria-hidden="true"></i>
                                            </div>
                                        </div>    
                                        <div class="btnRegistro" layout="column">
                                            <h4>Registros Observados</h4>
                                            <span>[[ctrl.observacionGeneralOdpe.cantidadRegistrosError]]</span>
                                        </div>
                                    </md-list-item>
                                </md-card-title-text>              
                            </div>

                            <div ng-show="ctrl.observacionGeneralOdpe.cantidadRegistrosCargados !== 0 && ctrl.cargandoFormatoCargaOdpe === false && ctrl.observacionGeneralOdpe.cantidadRegistrosError === 0">                                
                                <md-card-title-text flex="100" >           

                                    <div ng-if="ctrl.errorExtensionCargaOdpe === false">
                                        <lf-ng-md-file-input lf-files="cargaOdpe" progress 
                                                             lf-placeholder="" lf-remove-label=""
                                                             accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" lf-browse-label="SUBIR UN NUEVO ARCHIVO" flex 
                                                             ng-disabled="ctrl.cargandoFormatoCargaPadron || ctrl.cargandoFormatoCargaLocal || ctrl.cargandoFormatoCargaPref 
                                                                         || ctrl.cargandoFormatoCargaPagina || ctrl.cargandoFormatoCargaConadis || ctrl.cargandoFormatoCargaEtlv || ctrl.cargandoFormatoCargaRae || ctrl.cargandoFormatoCargaSige
                                                                         || !ctrl.finallyProcessPadron"> </lf-ng-md-file-input>
                                    </div>                        

                                </md-card-title-text>  
                                <div class="clearboth"></div>
                            </div>
                        </md-card-content>
                    </md-card>   

                    <!-- tarjeta 3 -->

                    <md-card md-theme="default" md-theme-watch class="[[ctrl.colorCargaLocal]] cargaDocumentacionCard  obliTercero">
                        <md-card-title>
                            <md-card-title-text >
                                <span>LOCALES</span>
                            </md-card-title-text>

                            <div > 
                                <md-button ng-click="ctrl.descargarPlantilla(ctrl.typeCarga_Local)">Descargar Formato</md-button>
                            </div>
                        </md-card-title>
                        <md-card-content>
                            <div ng-show="ctrl.observacionGeneralLocal.cantidadRegistrosCargados === 0 && ctrl.errorFormatoCargaLocal === false && ctrl.cargandoFormatoCargaLocal === false">        
                                <div layout="row" > 
                                    <div flex="100">
                                        <h2><i class="fa fa-clock-o" aria-hidden="true"></i>En espera</h2> 
                                    </div>
                                </div>              
                                <!-- en espera estado -->
                                <md-card-title-text flex="100" class="butonSubirArchivoEspera">          
                                    <md-list-item class="md-3-line"> 
                                        <lf-ng-md-file-input lf-api="apiCargaLocal" lf-files="cargaLocal" progress                      
                                                             accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                                             lf-mimetype=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                                             lf-placeholder="" lf-remove-label=""
                                                             lf-browse-label="Subir Archivo" flex ng-disabled="ctrl.cargandoFormatoCargaPadron || ctrl.cargandoFormatoCargaOdpe || ctrl.cargandoFormatoCargaPref 
                                                                         || ctrl.cargandoFormatoCargaPagina || ctrl.cargandoFormatoCargaConadis || ctrl.cargandoFormatoCargaEtlv || ctrl.cargandoFormatoCargaRae || ctrl.cargandoFormatoCargaSige
                                                                         || !ctrl.finallyProcessOdpe"> </lf-ng-md-file-input>

                                    </md-list-item>
                                </md-card-title-text>  
                                <div class="clearboth"></div>
                            </div>

                            <div ng-if="ctrl.cargandoFormatoCargaLocal === true">        
                                <div layout="row"> 
                                    <div flex="100">
                                        <h2>Procesando...</h2>
                                    </div>
                                </div>
                                <md-card-title-text flex="100">                
                                    <md-progress-linear md-mode="indeterminate"></md-progress-linear>                 
                                </md-card-title-text>  
                                <div class="clearboth"></div>
                            </div>

                            <div ng-show="ctrl.errorFormatoCargaLocal === true || ctrl.observacionGeneralLocal.cantidadRegistrosError > 0">
                                <div> 
                                    <h2 ng-show="ctrl.observacionGeneralLocal.cantidadRegistrosError > 0"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>Observaciones</h2>                    

                                    <lf-ng-md-file-input lf-files="cargaLocal" progress 
                                                         lf-placeholder="" lf-remove-label=""
                                                         accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
                                                         lf-browse-label="Reemplazar Archivo" flex ng-disabled="ctrl.cargandoFormatoCargaPadron || ctrl.cargandoFormatoCargaOdpe || ctrl.cargandoFormatoCargaPref 
                                                                     || ctrl.cargandoFormatoCargaPagina || ctrl.cargandoFormatoCargaConadis || ctrl.cargandoFormatoCargaEtlv || ctrl.cargandoFormatoCargaRae || ctrl.cargandoFormatoCargaSige
                                                                     || !ctrl.finallyProcessOdpe"> </lf-ng-md-file-input>                    

                                </div>

                                <md-card-title-text flex="100" ng-if="ctrl.errorFormatoCargaLocal === true && ctrl.errorNombreFormatoCargaLocal === false">
                                    <p class="textoDescriptivoCard">[[ctrl.mensajeFormatoCargaLocal]]</p>
                                    <div ng-if="ctrl.errorExtensionCargaLocal === false">
                                        <md-button ng-click="ctrl.descargarDetalleFormato(ctrl.typeCarga_Local)" class="BotoenError">ERRORES DE FORMATO</md-button>
                                    </div>
                                </md-card-title-text>             
                                <div class="clearboth"></div>
                            </div>
                            
                            <div ng-if="ctrl.errorSystemCargaLocal === true">
                                <md-card-title-text flex="100">
                                    <p class="textoDescriptivoCard">[[ctrl.mensajeFormatoCargaOdpe]]</p>                                    
                                </md-card-title-text>
                            </div>


                            <div ng-if="ctrl.cargandoFormatoCargaLocal === false && ctrl.observacionGeneralLocal.cantidadRegistrosCargados !== 0 && ctrl.errorFormatoCargaLocal === false">                        
                                <md-card-title-text flex="100">
                                    <div layout="row" ng-show="ctrl.observacionGeneralLocal.cantidadRegistrosError === 0"> 
                                        <div flex="100">
                                            <h2><i class="fa fa-check" aria-hidden="true"></i>Listo</h2>
                                        </div>          
                                    </div>  
                                    <md-list-item class="md-3-line">
                                        <div class="iconoEstadoBoton">

                                        </div>
                                        <div class="btnRegistro" layout="column">
                                            <h4>Registros Leídos</h4>
                                            <span>[[ctrl.observacionGeneralLocal.cantidadRegistrosCargados]]</span>
                                        </div>
                                    </md-list-item>

                                    <md-list-item class="md-3-line">
                                        <div class="iconoEstadoBoton">
                                            <div ng-click="ctrl.descargarDetalle(ctrl.typeCarga_Local, 1)" ng-show="ctrl.observacionGeneralLocal.cantidadRegistrosCorrectos > 0">
                                                <i class="fa fa-cloud-download" aria-hidden="true"></i>
                                            </div>
                                        </div>    
                                        <div class="btnRegistro" layout="column">
                                            <h4>Registros Correctos</h4>
                                            <span>[[ctrl.observacionGeneralLocal.cantidadRegistrosCorrectos]]</span>
                                        </div>
                                    </md-list-item>

                                    <md-list-item class="md-3-line">
                                        <div class="iconoEstadoBoton">
                                            <div ng-click="ctrl.descargarDetalle(ctrl.typeCarga_Local, 2)" ng-show="ctrl.observacionGeneralLocal.cantidadRegistrosError > 0">
                                                <i class="fa fa-cloud-download" aria-hidden="true"></i>
                                            </div>
                                        </div>    
                                        <div class="btnRegistro" layout="column">
                                            <h4>Registros Observados</h4>
                                            <span>[[ctrl.observacionGeneralLocal.cantidadRegistrosError]]</span>
                                        </div>
                                    </md-list-item>
                                </md-card-title-text>              
                            </div>

                            <div ng-show="ctrl.observacionGeneralLocal.cantidadRegistrosCargados !== 0 && ctrl.cargandoFormatoCargaLocal === false && ctrl.observacionGeneralLocal.cantidadRegistrosError === 0">                                
                                <md-card-title-text flex="100">                                               
                                    <div ng-if="ctrl.errorExtensionCargaLocal === false">
                                        <lf-ng-md-file-input lf-files="cargaLocal" progress 
                                                             lf-placeholder="" lf-remove-label=""
                                                             accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" lf-browse-label="SUBIR UN NUEVO ARCHIVO" flex 
                                                             ng-disabled="ctrl.cargandoFormatoCargaPadron || ctrl.cargandoFormatoCargaOdpe || ctrl.cargandoFormatoCargaPref 
                                                                         || ctrl.cargandoFormatoCargaPagina || ctrl.cargandoFormatoCargaConadis || ctrl.cargandoFormatoCargaEtlv || ctrl.cargandoFormatoCargaRae || ctrl.cargandoFormatoCargaSige
                                                                         || !ctrl.finallyProcessOdpe"> </lf-ng-md-file-input>
                                    </div>                        
                                </md-card-title-text>  
                                <div class="clearboth"></div>
                            </div>
                        </md-card-content>
                    </md-card>  
                </div>    

                <div class="divinormal"> </div>
                <div class="conteCard">


                    <!-- tarjeta 4 -->

                    <md-card md-theme="default" md-theme-watch class="cargaDBaseDatosCard cargaDBaseDatosInactivo">
                    <!--<md-card md-theme="default" md-theme-watch class="cargaDBaseDatosCard [[ctrl.colorStateEtlv]]">-->

                        <md-card-title>
                            <md-card-title-text flex="100" layout="row">
                                <span>ETLV</span>
                            </md-card-title-text>                  
                        </md-card-title>
                        <div class="contenedorshisht"> 
                        <label>SW</label>
                        <md-switch ng-model="ctrl.cargaEtlv.B_TIPO_CONEXION" ng-change="ctrl.onChangeSwitch(0, ctrl.typeCarga_Etlv, ctrl.cargaEtlv.B_TIPO_CONEXION)" ng-disabled="true" aria-label="ctrl.cargaEtlv.B_TIPO_CONEXION">
                        </md-switch>
                         <label>BD</label>
                         </div>
                        <md-card-content >        
                            <form   class="alineadoCentro"  ng-if="ctrl.cargaEtlv.B_TIPO_CONEXION && ctrl.cargandoFormatoCargaEtlv === false"> 

                                <md-button class="estilosBotonGeneral" ng-click="ctrl.updateProcess(ctrl.typeCarga_Etlv)"
                                           ng-disabled="true">ACTUALIZAR</md-button>
                                           <!--ng-disabled="!ctrl.cargaEtlv.B_ESTADO || ctrl.cargandoFormatoCargaPadron || ctrl.cargandoFormatoCargaOdpe || ctrl.cargandoFormatoCargaLocal 
                                                            || ctrl.cargandoFormatoCargaPref || ctrl.cargandoFormatoCargaPagina || ctrl.cargandoFormatoCargaConadis 
                                                            || ctrl.cargandoFormatoCargaRae || ctrl.cargandoFormatoCargaSige || !ctrl.finallyProcessPadron">ACTUALIZAR</md-button>-->

                            </form>                   

                            <form name="etlvForm" ng-submit="etlvForm.$valid && ctrl.updateProcess(ctrl.typeCarga_Etlv)" novalidate ng-if="!ctrl.cargaEtlv.B_TIPO_CONEXION && ctrl.cargandoFormatoCargaEtlv === false">

                                <md-input-container class="EstiloInput InputSinError">
                                    <label>Servicio Web</label>
                                    <input spellcheck="false" required name="serviceNameEtlv" ng-model="ctrl.serviceNameEtlv" ng-disabled="true">
                                    <div ng-messages="etlvForm.serviceNameEtlv.$error">
                                        <div ng-message="required">Campo Obligatorio.</div>
                                    </div>
                                </md-input-container>
                                <md-button type="submit" class="estilosBotonGeneral" 
                                           ng-disabled="true">ACTUALIZAR</md-button>
                                           <!--ng-disabled="!ctrl.cargaEtlv.B_ESTADO || ctrl.cargandoFormatoCargaPadron || ctrl.cargandoFormatoCargaOdpe || ctrl.cargandoFormatoCargaLocal 
                                                            || ctrl.cargandoFormatoCargaPref || ctrl.cargandoFormatoCargaPagina || ctrl.cargandoFormatoCargaConadis 
                                                            || ctrl.cargandoFormatoCargaRae || ctrl.cargandoFormatoCargaSige || !ctrl.finallyProcessPadron">ACTUALIZAR</md-button>-->

                            </form>    

                            <div ng-show="ctrl.cargandoFormatoCargaEtlv === false">
                                <div  ng-show="ctrl.cargaEtlv.N_CONEXION_PK !== 0 && ctrl.cargaEtlv.D_AUD_FECHA_ACTUALIZACION != undefined">                    
                                    <p>Última actualización<time>  [[ctrl.cargaEtlv.D_AUD_FECHA_ACTUALIZACION | dateFormat1 ]] </time></p>
                                </div>                                        
                            </div>

                            <div ng-if="ctrl.cargandoFormatoCargaEtlv === true">        
                                <div layout="row"> 
                                    <div flex="100">
                                        <h2>Procesando...</h2>
                                    </div>
                                </div>
                                <md-card-title-text flex="100">                
                                    <md-progress-linear md-mode="indeterminate"></md-progress-linear>                 
                                </md-card-title-text>  
                                <div class="clearboth"></div>
                            </div>
                        </md-card-content>
                        <div class="footertipeCar">
                            <span>DESHABILITADO</span>    
                        <md-switch ng-model="ctrl.cargaEtlv.B_ESTADO" ng-change="ctrl.onChangeSwitch(1, ctrl.typeCarga_Etlv, ctrl.cargaEtlv.B_ESTADO)" aria-label="ctrl.cargaEtlv.B_ESTADO" ng-disabled="true">            
                        </md-switch>
                            <span>HABILITADO</span>    
                        </div>
                    </md-card>

                    <!-- tarjeta 5 -->

                    <md-card md-theme="default" md-theme-watch class="cargaDBaseDatosCard cargaDBaseDatosInactivo"> 
                    <!--<md-card md-theme="default" md-theme-watch class="cargaDBaseDatosCard [[ctrl.colorStateSige]]">-->    

                        <md-card-title>
                            <md-card-title-text flex="100" layout="row">
                                <span>SIGE</span>
                            </md-card-title-text>                  
                        </md-card-title>
                        <div class="contenedorshisht"> 
                            <label>SW</label>
                            <md-switch ng-model="ctrl.cargaSige.B_TIPO_CONEXION" ng-change="ctrl.onChangeSwitch(0, ctrl.typeCarga_Sige, ctrl.cargaSige.B_TIPO_CONEXION)" ng-disabled="true" aria-label="ctrl.cargaSige.B_TIPO_CONEXION">
                            </md-switch>
                            <label>BD</label>
                        </div>
                        <md-card-content >        
                            <form   class="alineadoCentro"  ng-if="ctrl.cargandoFormatoCargaSige === false"> 

                                <md-button class="estilosBotonGeneral" ng-click="ctrl.updateProcess(ctrl.typeCarga_Sige)"
                                           ng-disabled="true">VERIFICAR CONEXIÓN</md-button>
                                           <!--ng-disabled="!ctrl.cargaSige.B_ESTADO || ctrl.cargandoFormatoCargaPadron || ctrl.cargandoFormatoCargaOdpe || ctrl.cargandoFormatoCargaLocal 
                                                            || ctrl.cargandoFormatoCargaPref || ctrl.cargandoFormatoCargaPagina || ctrl.cargandoFormatoCargaConadis 
                                                            || ctrl.cargandoFormatoCargaRae || ctrl.cargandoFormatoCargaSige || !ctrl.finallyProcessPadron">VERIFICAR CONEXIÓN</md-button>-->

                            </form>                   

                            <div ng-show="ctrl.cargandoFormatoCargaSige === false">
                                <div  ng-show="ctrl.cargaSige.N_CONEXION_PK !== 0 && ctrl.cargaSige.D_AUD_FECHA_ACTUALIZACION != undefined">
                                    <p>Última conexión <time>[[ctrl.cargaSige.D_AUD_FECHA_ACTUALIZACION | dateFormat1 ]]</time></p>   
                                </div>                                          
                            </div>
                            <div  ng-if="ctrl.cargandoFormatoCargaSige === true">        
                                <div layout="row"> 
                                    <div flex="100">
                                        <h2>Procesando...</h2>
                                    </div>
                                </div>
                                <md-card-title-text flex="100">                
                                    <md-progress-linear md-mode="indeterminate"></md-progress-linear>                 
                                </md-card-title-text>  
                                <div class="clearboth"></div>
                            </div>
                        </md-card-content>
                         <div class="footertipeCar">
                             <span>DESHABILITADO</span>
                             <md-switch ng-model="ctrl.cargaSige.B_ESTADO" ng-change="ctrl.onChangeSwitch(1, ctrl.typeCarga_Sige, ctrl.cargaSige.B_ESTADO)" aria-label="ctrl.cargaSige.B_ESTADO" ng-disabled="true">
                             </md-switch>
                             <span>HABILITADO</span>
                         </div>
                    </md-card>

                    <!-- tarjeta 6 -->

                    <md-card md-theme="default" md-theme-watch class="cargaDBaseDatosCard [[ctrl.colorStateRae]]">

                        <md-card-title>
                            <md-card-title-text flex="100" layout="row">
                                <span>RAE</span>
                            </md-card-title-text>   

                        </md-card-title>
                        <div class="contenedorshisht"> 
                            <label>SW</label>
                            <md-switch ng-model="ctrl.cargaRae.B_TIPO_CONEXION" ng-change="ctrl.onChangeSwitch(0, ctrl.typeCarga_Rae, ctrl.cargaRae.B_TIPO_CONEXION)" ng-disabled="!ctrl.cargaRae.B_ESTADO" aria-label="ctrl.cargaRae.B_TIPO_CONEXION">
                            </md-switch>
                            <label>BD</label>
                        </div>
                        <md-card-content >
                            <form class="alineadoCentro" ng-if="ctrl.cargaRae.B_TIPO_CONEXION && ctrl.cargandoFormatoCargaRae === false"> 

                                <md-button ng-click="ctrl.updateProcess(ctrl.typeCarga_Rae)" class="estilosBotonGeneral"                                            
                                           ng-disabled="!ctrl.cargaRae.B_ESTADO || ctrl.cargandoFormatoCargaPadron || ctrl.cargandoFormatoCargaOdpe || ctrl.cargandoFormatoCargaLocal 
                                                            || ctrl.cargandoFormatoCargaPref || ctrl.cargandoFormatoCargaPagina || ctrl.cargandoFormatoCargaConadis 
                                                            || ctrl.cargandoFormatoCargaRae || ctrl.cargandoFormatoCargaSige || !ctrl.finallyProcessPadron">ACTUALIZAR</md-button>

                            </form>                   

                            <form name="raeForm" ng-submit="raeForm.$valid && ctrl.updateProcess(ctrl.typeCarga_Rae)" novalidate ng-if="!ctrl.cargaRae.B_TIPO_CONEXION && ctrl.cargandoFormatoCargaRae === false">

                                <md-input-container class="EstiloInput InputSinError">
                                    <label>Servicio Web</label>
                                    <input spellcheck="false" required name="serviceNameRae" ng-model="ctrl.serviceNameRae">
                                    <div ng-messages="raeForm.serviceNameRae.$error">
                                        <div ng-message="required">Campo Obligatorio.</div>
                                    </div>
                                </md-input-container>

                                <md-button type="submit" class="estilosBotonGeneral"                                            
                                           ng-disabled="!ctrl.cargaRae.B_ESTADO || ctrl.cargandoFormatoCargaPadron || ctrl.cargandoFormatoCargaOdpe || ctrl.cargandoFormatoCargaLocal 
                                                            || ctrl.cargandoFormatoCargaPref || ctrl.cargandoFormatoCargaPagina || ctrl.cargandoFormatoCargaConadis 
                                                            || ctrl.cargandoFormatoCargaRae || ctrl.cargandoFormatoCargaSige || !ctrl.finallyProcessPadron">ACTUALIZAR</md-button>                                                        

                            </form>

                            <div ng-show="ctrl.cargandoFormatoCargaRae === false">
                                <div  ng-show="ctrl.cargaRae.N_CONEXION_PK !== 0 && ctrl.cargaRae.D_AUD_FECHA_ACTUALIZACION != undefined">                    
                                    <p> Última actualización: <time>[[ctrl.cargaRae.D_AUD_FECHA_ACTUALIZACION | dateFormat1 ]]</time> </p>
                                </div>                                        
                            </div>
                            <div ng-if="ctrl.cargandoFormatoCargaRae === true">        
                                <div layout="row"> 
                                    <div flex="100">
                                        <h2>Procesando...</h2>
                                    </div>
                                </div>
                                <md-card-title-text flex="100">                
                                    <md-progress-linear md-mode="indeterminate"></md-progress-linear>                 
                                </md-card-title-text>  
                                <div class="clearboth"></div>
                            </div>
                        </md-card-content>
                        <div class="footertipeCar">
                            <span>DESHABILITADO</span>
                            <md-switch ng-model="ctrl.cargaRae.B_ESTADO" ng-change="ctrl.onChangeSwitch(1, ctrl.typeCarga_Rae, ctrl.cargaRae.B_ESTADO)" aria-label="ctrl.cargaRae.B_ESTADO">
                            </md-switch>
                            <span> HABILITADO</span>
                        </div>
                    </md-card>

                    <!-- tarjeta 7 -->

                    <md-card md-theme="default" md-theme-watch class="[[ctrl.colorCargaPagina]] cargaDocumentacionCard" ng-show="ctrl.viewPagina">
                        <md-card-title>
                            <md-card-title-text>
                                <span>PÁGINA INSTITUCIONAL ONPE</span>
                            </md-card-title-text>

                            <div> 
                                <md-button ng-click="ctrl.descargarPlantilla(ctrl.typeCarga_Pagina)">Descargar Formato</md-button>
                            </div>
                        </md-card-title>
                        <md-card-content>
                            <div ng-show="ctrl.observacionGeneralPagina.cantidadRegistrosCargados === 0 && ctrl.errorFormatoCargaPagina === false && ctrl.cargandoFormatoCargaPagina === false">        
                                <div layout="row"> 
                                    <div flex="100">
                                        <h2><i class="fa fa-clock-o" aria-hidden="true"></i>En espera</h2>
                                    </div>
                                </div>
                                <!-- en espera estado -->
                                <md-card-title-text flex="100" class="butonSubirArchivoEspera">          
                                    <md-list-item class="md-3-line">                           
                                        <div id="fileCargaPagina" layout="column">
                                            <lf-ng-md-file-input lf-api="apiCargaPagina" lf-files="cargaPagina" progress                      
                                                             accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                                             lf-mimetype=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                                             lf-placeholder="" lf-remove-label=""
                                                             lf-browse-label="Subir Archivo"
                                                             ng-disabled="ctrl.cargandoFormatoCargaPadron || ctrl.cargandoFormatoCargaOdpe || ctrl.cargandoFormatoCargaLocal || ctrl.cargandoFormatoCargaPref 
                                                                    || ctrl.cargandoFormatoCargaConadis || ctrl.cargandoFormatoCargaEtlv || ctrl.cargandoFormatoCargaRae || ctrl.cargandoFormatoCargaSige"> </lf-ng-md-file-input>                                            
                                        </div>                    
                                    </md-list-item>
                                </md-card-title-text>  
                                <div class="clearboth"></div>
                            </div>

                            <div ng-if="ctrl.cargandoFormatoCargaPagina === true">        
                                <div layout="row"> 
                                    <div flex="100">
                                        <h2>Procesando...</h2>
                                    </div>
                                </div>
                                <md-card-title-text flex="100">                
                                    <md-progress-linear md-mode="indeterminate"></md-progress-linear>                 
                                </md-card-title-text>  
                                <div class="clearboth"></div>
                            </div>

                            <div ng-show="ctrl.errorFormatoCargaPagina === true || ctrl.observacionGeneralPagina.cantidadRegistrosError > 0">
                                <div> 

                                    <h2 ng-show="ctrl.observacionGeneralPagina.cantidadRegistrosError > 0"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>Observaciones</h2>                    
                                    
                                    <lf-ng-md-file-input lf-files="cargaPagina" progress 
                                                         lf-placeholder="" lf-remove-label=""
                                                         accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
                                                         lf-browse-label="Reemplazar Archivo" flex
                                                         ng-disabled="ctrl.cargandoFormatoCargaPadron || ctrl.cargandoFormatoCargaOdpe || ctrl.cargandoFormatoCargaLocal || ctrl.cargandoFormatoCargaPref 
                                                                    || ctrl.cargandoFormatoCargaConadis || ctrl.cargandoFormatoCargaEtlv || ctrl.cargandoFormatoCargaRae || ctrl.cargandoFormatoCargaSige"> </lf-ng-md-file-input>

                                </div>

                                <md-card-title-text flex="100" ng-if="ctrl.errorFormatoCargaPagina === true && ctrl.errorNombreFormatoCargaPagina === false">
                                    <p class="textoDescriptivoCard">[[ctrl.mensajeFormatoCargaPagina]]</p>
                                    <div ng-if="ctrl.errorExtensionCargaPagina === false">
                                        <md-button ng-click="ctrl.descargarDetalleFormato(ctrl.typeCarga_Pagina)">ERRORES DE FORMATO</md-button>
                                    </div>
                                </md-card-title-text>             
                                <div class="clearboth"></div>
                            </div>
                            
                            <div ng-if="ctrl.errorSystemCargaPagina === true">
                                <md-card-title-text flex="100">
                                    <p class="textoDescriptivoCard">[[ctrl.mensajeFormatoCargaOdpe]]</p>                                    
                                </md-card-title-text>
                            </div>

                            <div ng-if="ctrl.cargandoFormatoCargaPagina === false && ctrl.observacionGeneralPagina.cantidadRegistrosCargados !== 0 && ctrl.errorFormatoCargaPagina === false">                        
                                <md-card-title-text flex="100">
                                    <div layout="row" ng-show="ctrl.observacionGeneralPagina.cantidadRegistrosError === 0"> 
                                        <div flex="100">
                                            <h2><i class="fa fa-check" aria-hidden="true"></i>Listo</h2>
                                        </div>          
                                    </div>  
                                    <md-list-item class="md-3-line">
                                        <div class="iconoEstadoBoton">

                                        </div>
                                        <div class="btnRegistro" layout="column">
                                            <h4>Registros Leídos</h4>
                                            <span>[[ctrl.observacionGeneralPagina.cantidadRegistrosCargados]]</span>
                                        </div>
                                    </md-list-item>

                                    <md-list-item class="md-3-line">
                                        <div class="iconoEstadoBoton">
                                            <div ng-click="ctrl.descargarDetalle(ctrl.typeCarga_Pagina, 1)" ng-show="ctrl.observacionGeneralPagina.cantidadRegistrosCorrectos > 0">
                                                <i class="fa fa-cloud-download" aria-hidden="true"></i>
                                            </div>
                                        </div>    
                                        <div class="btnRegistro" layout="column">
                                            <h4>Registro Correctos</h4>
                                            <span>[[ctrl.observacionGeneralPagina.cantidadRegistrosCorrectos]]</span>
                                        </div>
                                    </md-list-item>

                                    <md-list-item class="md-3-line">
                                        <div class="iconoEstadoBoton">
                                            <div ng-click="ctrl.descargarDetalle(ctrl.typeCarga_Pagina, 2)" ng-show="ctrl.observacionGeneralPagina.cantidadRegistrosError > 0">
                                                <i class="fa fa-cloud-download" aria-hidden="true"></i>
                                            </div>
                                        </div>                                        
                                        <div class="btnRegistro" layout="column">
                                            <h4>Registro con Error</h4>
                                            <span>[[ctrl.observacionGeneralPagina.cantidadRegistrosError]]</span>
                                        </div>
                                    </md-list-item>
                                </md-card-title-text>              
                            </div>

                            <div ng-show="ctrl.observacionGeneralPagina.cantidadRegistrosCargados !== 0 && ctrl.cargandoFormatoCargaPagina === false && ctrl.observacionGeneralPagina.cantidadRegistrosError === 0">                                
                                <md-card-title-text flex="100">           

                                    <div ng-if="ctrl.errorExtensionCargaPagina === false">
                                        <lf-ng-md-file-input lf-files="cargaPagina" progress 
                                                             lf-placeholder="" lf-remove-label=""
                                                             accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" lf-browse-label="SUBIR UN NUEVO ARCHIVO" flex
                                                             ng-disabled="ctrl.cargandoFormatoCargaPadron || ctrl.cargandoFormatoCargaOdpe || ctrl.cargandoFormatoCargaLocal || ctrl.cargandoFormatoCargaPref 
                                                                    || ctrl.cargandoFormatoCargaConadis || ctrl.cargandoFormatoCargaEtlv || ctrl.cargandoFormatoCargaRae || ctrl.cargandoFormatoCargaSige"> </lf-ng-md-file-input>
                                    </div>                       

                                </md-card-title-text>  
                                <div class="clearboth"></div>
                            </div>
                        </md-card-content>
                    </md-card>    


                    <!-- tarjeta 8 -->

                    <md-card md-theme="default" md-theme-watch class="[[ctrl.colorCargaConadis]] cargaDocumentacionCard" ng-show="ctrl.viewConadis">
                        <md-card-title>
                            <md-card-title-text >
                                <span>CONADIS</span>
                            </md-card-title-text>

                            <div > 
                                <md-button ng-click="ctrl.descargarPlantilla(ctrl.typeCarga_Conadis)">Descargar Formato</md-button>
                            </div>
                        </md-card-title>

                        <md-card-content>

                            <div ng-show="ctrl.observacionGeneralConadis.cantidadRegistrosCargados === 0 && ctrl.errorFormatoCargaConadis === false && ctrl.cargandoFormatoCargaConadis === false">        
                                <div layout="row"> 
                                    <div flex="100">
                                        <h2><i class="fa fa-clock-o" aria-hidden="true"></i>En espera</h2>
                                    </div>
                                </div>
                                <!-- en espera estado -->
                                <md-card-title-text flex="100" class="butonSubirArchivoEspera">          
                                    <md-list-item class="md-3-line">                        
                                        <div id="fileCargaConadis" layout="column">
                                            <lf-ng-md-file-input lf-api="apiCargaConadis" lf-files="cargaConadis" progress                      
                                                                 accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                                                 lf-mimetype=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                                                 lf-placeholder="" lf-remove-label=""
                                                                 lf-browse-label="Subir Archivo" flex
                                                                 ng-disabled="ctrl.cargandoFormatoCargaPadron || ctrl.cargandoFormatoCargaOdpe || ctrl.cargandoFormatoCargaLocal || ctrl.cargandoFormatoCargaPref 
                                                                    || ctrl.cargandoFormatoCargaPagina || ctrl.cargandoFormatoCargaEtlv || ctrl.cargandoFormatoCargaRae || ctrl.cargandoFormatoCargaSige"> </lf-ng-md-file-input>
                                        </div>                    
                                    </md-list-item>
                                </md-card-title-text>  
                                <div class="clearboth"></div>
                            </div>

                            <div ng-if="ctrl.cargandoFormatoCargaConadis === true">        
                                <div layout="row"> 
                                    <div flex="100">
                                        <h2>Procesando...</h2>
                                    </div>
                                </div>
                                <md-card-title-text flex="100">                
                                    <md-progress-linear md-mode="indeterminate"></md-progress-linear>                 
                                </md-card-title-text>  
                                <div class="clearboth"></div>
                            </div>

                            <div ng-show="ctrl.errorFormatoCargaConadis === true || ctrl.observacionGeneralConadis.cantidadRegistrosError > 0">
                                <div> 

                                    <h2 ng-show="ctrl.observacionGeneralConadis.cantidadRegistrosError > 0"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>Observaciones</h2>                    

                                    <lf-ng-md-file-input lf-files="cargaConadis" progress 
                                                         lf-placeholder="" lf-remove-label=""
                                                         accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
                                                         lf-browse-label="Reemplazar Archivo" flex> </lf-ng-md-file-input>

                                </div>

                                <md-card-title-text flex="100" ng-if="ctrl.errorFormatoCargaConadis === true && ctrl.errorNombreFormatoCargaConadis === false">
                                    <p class="textoDescriptivoCard">[[ctrl.mensajeFormatoCargaConadis]]</p>
                                    <div ng-if="ctrl.errorExtensionCargaConadis === false">
                                        <md-button ng-click="ctrl.descargarDetalleFormato(ctrl.typeCarga_Conadis)">ERRORES DE FORMATO</md-button>
                                    </div>
                                </md-card-title-text>             
                                <div class="clearboth"></div>
                            </div>
                            
                            <div ng-if="ctrl.errorSystemCargaConadis === true">
                                <md-card-title-text flex="100">
                                    <p class="textoDescriptivoCard">[[ctrl.mensajeFormatoCargaOdpe]]</p>                                    
                                </md-card-title-text>
                            </div>


                            <div ng-if="ctrl.cargandoFormatoCargaConadis === false && ctrl.observacionGeneralConadis.cantidadRegistrosCargados !== 0 && ctrl.errorFormatoCargaConadis === false">                        
                                <md-card-title-text flex="100">
                                    <div layout="row" ng-show="ctrl.observacionGeneralConadis.cantidadRegistrosError === 0"> 
                                        <div flex="100">
                                            <h2><i class="fa fa-check" aria-hidden="true"></i>Listo</h2>
                                        </div>          
                                    </div>  
                                    <md-list-item class="md-3-line">
                                        <div class="iconoEstadoBoton">

                                        </div>
                                        <div class="btnRegistro" layout="column">
                                            <h4>Registros Leídos</h4>
                                            <span>[[ctrl.observacionGeneralConadis.cantidadRegistrosCargados]]</span>
                                        </div>
                                    </md-list-item>

                                    <md-list-item class="md-3-line">
                                        <div class="iconoEstadoBoton">
                                            <div ng-click="ctrl.descargarDetalle(ctrl.typeCarga_Conadis, 1)" ng-show="ctrl.observacionGeneralConadis.cantidadRegistrosCorrectos > 0">
                                                <i class="fa fa-cloud-download" aria-hidden="true"></i>
                                            </div>
                                        </div>    
                                        <div class="btnRegistro" layout="column">
                                            <h4>Registro Correctos</h4>
                                            <span>[[ctrl.observacionGeneralConadis.cantidadRegistrosCorrectos]]</span>
                                        </div>
                                    </md-list-item>

                                    <md-list-item class="md-3-line">
                                        <div class="iconoEstadoBoton">
                                            <div ng-click="ctrl.descargarDetalle(ctrl.typeCarga_Conadis, 2)" ng-show="ctrl.observacionGeneralConadis.cantidadRegistrosError > 0">
                                                <i class="fa fa-cloud-download" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div class="btnRegistro" layout="column">
                                            <h4>Registro con Error</h4>
                                            <span>[[ctrl.observacionGeneralConadis.cantidadRegistrosError]]</span>
                                        </div>
                                    </md-list-item>
                                </md-card-title-text>              
                            </div>

                            <div ng-show="ctrl.observacionGeneralConadis.cantidadRegistrosCargados !== 0 && ctrl.cargandoFormatoCargaConadis === false && ctrl.observacionGeneralConadis.cantidadRegistrosError === 0">                                
                                <md-card-title-text flex="100">           

                                    <div ng-if="ctrl.errorExtensionCargaConadis === false">
                                        <lf-ng-md-file-input lf-files="cargaConadis" progress 
                                                             lf-placeholder="" lf-remove-label=""
                                                             accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" lf-browse-label="SUBIR UN NUEVO ARCHIVO" flex
                                                             ng-disabled="ctrl.cargandoFormatoCargaPadron || ctrl.cargandoFormatoCargaOdpe || ctrl.cargandoFormatoCargaLocal || ctrl.cargandoFormatoCargaPref 
                                                                    || ctrl.cargandoFormatoCargaPagina || ctrl.cargandoFormatoCargaEtlv || ctrl.cargandoFormatoCargaRae || ctrl.cargandoFormatoCargaSige"> </lf-ng-md-file-input>
                                    </div>                        

                                </md-card-title-text>  
                                <div class="clearboth"></div>
                            </div>
                        </md-card-content>
                    </md-card>  

                    <!-- --------- -->
                    <!-- tarjeta 9 -->
                    <!--<md-card md-theme="default" md-theme-watch class="cargaDBaseDatosCard obliCuarta" >                    

                        <md-card-title>
                            <md-card-title-text flex="100" layout="row">
                                <span>PREFERENCIALES</span>
                            </md-card-title-text>                  
                        </md-card-title>
                        <div class="contenedorshisht"> 
                            
                        </div>
                        <md-card-content >                             
                            <form class="alineadoCentro" ng-if="ctrl.cargandoFormatoCargaPref === false">                                 
                                <md-button class="estilosBotonGeneral" ng-click="ctrl.procesar()" 
                                            ng-disabled="ctrl.cargandoFormatoCargaPref || ctrl.cargandoFormatoCargaPadron || ctrl.cargandoFormatoCargaOdpe
                                                        || ctrl.cargandoFormatoCargaEtlv || ctrl.cargandoFormatoCargaSige || ctrl.cargandoFormatoCargaRae 
                                                        || !ctrl.finallyProcessPadron || !ctrl.finallyProcessOdpe || !ctrl.finallyProcessLocal">
                                    Procesar
                                </md-button>                                                                
                            </form>                   
                            <div ng-show="ctrl.cargandoFormatoCargaPref === false" class="textoFechaInferiorDescriptiva">                                
                                <p ng-show="ctrl.cargaPref.N_CONEXION_PK !== 0 && ctrl.cargaPref.D_AUD_FECHA_ACTUALIZACION != undefined">                                    
                                    <span> Última actualización: <time>[[ctrl.cargaPref.D_AUD_FECHA_ACTUALIZACION | dateFormat1 ]]</time> </span>
                                </p>                                        
                            </div>
                            
                            <div  ng-if="ctrl.cargandoFormatoCargaPref === true">        
                                <div layout="row"> 
                                    <div flex="100">
                                        <h2>Procesando...</h2>
                                    </div>
                                </div>
                                <md-card-title-text flex="100">                
                                    <md-progress-linear md-mode="indeterminate"></md-progress-linear>                 
                                </md-card-title-text>  
                                <div class="clearboth"></div>
                            </div>
                        </md-card-content>
                         <div class="footertipeCar">
                             
                         </div>
                    </md-card>-->
                    <!-- --------- -->

                </div>

            </article>
        </section> 

        <footer class="OpcionesFooterGenerales">
            <div class="colum2 text-izq  alineadoIzquieda"> 
                <md-button ng-show="false" class="md-fab md-primary botonFoter estilosBotonGeneral" md-theme="" aria-label="Use Android">
                   <i class="material-icons">&#xE434;</i>
                </md-button>
            </div>
            <div class="colum2 text-der alineadoDerecha" >                  
                <md-button class="md-primary estilosBotonGeneral" ng-click="ctrl.procesar()" 
                           ng-hide="ctrl.finallyProcessPadron && ctrl.finallyProcessOdpe && ctrl.finallyProcessLocal && ctrl.finallyProcessPref"                           
                           ng-disabled="ctrl.cargandoFormatoCargaPref || ctrl.cargandoFormatoCargaPadron || ctrl.cargandoFormatoCargaOdpe || ctrl.cargandoFormatoCargaLocal
                                       || ctrl.cargandoFormatoCargaEtlv || ctrl.cargandoFormatoCargaSige || ctrl.cargandoFormatoCargaRae
                                       || !ctrl.finallyProcessPadron || !ctrl.finallyProcessOdpe || !ctrl.finallyProcessLocal">                                                             
                    Guardar                    
                    <i class="material-icons">&#xE315;</i>
                </md-button>
                <md-button class="md-primary estilosBotonGeneral" ng-click="ctrl.next()" 
                           ng-if="ctrl.finallyProcessPadron && ctrl.finallyProcessOdpe && ctrl.finallyProcessLocal && ctrl.finallyProcessPref"
                           ng-disabled="ctrl.cargandoFormatoCargaPref || ctrl.cargandoFormatoCargaPadron || ctrl.cargandoFormatoCargaOdpe || ctrl.cargandoFormatoCargaLocal
                                       || ctrl.cargandoFormatoCargaEtlv || ctrl.cargandoFormatoCargaSige || ctrl.cargandoFormatoCargaRae"> 
                    Continuar
                    <i class="material-icons">&#xE315;</i>
                </md-button>
                                
            </div>
                        
        </footer>
    </div>


</div>


