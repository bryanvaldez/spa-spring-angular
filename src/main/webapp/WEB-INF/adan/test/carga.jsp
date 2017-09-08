<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<t:master title="carga">         
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/step1/cargaDatos.css" type="text/css" />
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/controller/cargaController.js"></script>  
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/service/cargaService.js"></script>   

    <div ng-controller="cargaController as ctrl">        

        <section class="contenedorFull">
            
            <h1 class="tituloPincipal">Configurador de Recepción y Verificador para la Carga de Arc hivos</h1>
            <div class="conteCard">
            
            <md-card md-theme="default" md-theme-watch >                
                <md-switch ng-model="ctrl.cargaPadron.B_TIPO_CONEXION" ng-change="ctrl.onChangeSwitch(0, ctrl.typeCarga_Padron, ctrl.cargaPadron.B_TIPO_CONEXION)" ng-disabled="true">
                    SW / BD
                </md-switch>                                                
                <md-card-title>
                    <md-card-title-text flex="100" layout="row">
                        <span>PADRON ELECTORAL</span>
                    </md-card-title-text>                  
                </md-card-title>
                <md-card-content ng-if="ctrl.cargaPadron.B_TIPO_CONEXION && ctrl.cargandoFormatoCargaPadron === false">        
                    <div layout="row"> 
                        <div flex="100">
                            <md-button ng-click="ctrl.updateProcess(ctrl.typeCarga_Padron)">ACTUALIZAR</md-button>
                        </div>
                    </div>                   
                </md-card-content>  
                <md-card-content ng-if="!ctrl.cargaPadron.B_TIPO_CONEXION && ctrl.cargandoFormatoCargaPadron === false">  
                    <form name="padronForm" ng-submit="padronForm.$valid && ctrl.updateProcess(ctrl.typeCarga_Padron)" novalidate>
                        <div layout="row"> 
                            <md-input-container flex="70">
                                <label>Servicio Web</label>
                                <input required name="serviceNamePadron" ng-model="ctrl.serviceNamePadron">
                                <div ng-messages="padronForm.serviceNamePadron.$error">
                                    <div ng-message="required">Campo Obligatorio.</div>
                                </div>
                            </md-input-container>
                            <div flex="30">
                                <md-button type="submit">ACTUALIZAR</md-button>                                                        
                            </div>
                        </div>                   
                    </form>    
                </md-card-content>
                <md-card-content ng-show="ctrl.cargandoFormatoCargaPadron === false">
                    <div layout="row" flex="100" ng-show="ctrl.cargaPadron.N_CONEXION_PK !== 0 && ctrl.cargaPadron.D_AUD_FECHA_ACTUALIZACION != undefined">
                        <div flex="70">
                            Última actualización
                        </div>
                        <div flex="30" style="text-align:right;">
                            [[ctrl.cargaPadron.D_AUD_FECHA_ACTUALIZACION | dateFormat1 ]]
                        </div>
                    </div>                                        
                </md-card-content> 
                
                <md-card-content ng-if="ctrl.cargandoFormatoCargaPadron === true">        
                    <div layout="row"> 
                        <div flex="100">
                            <h2>Procesando...</h2>
                        </div>
                    </div>
                    <md-card-title-text flex="100">                
                        <md-progress-linear md-mode="indeterminate"></md-progress-linear>                 
                    </md-card-title-text>  
                    <div class="clearboth"></div>
                </md-card-content>
            </md-card>
            
            <md-card md-theme="default" md-theme-watch class="{{ctrl.colorCargaOdpe}}">
                <md-card-title>
                    <md-card-title-text flex="80" layout="row">
                        <span>ODPE + UBIGEOS</span>
                    </md-card-title-text>

                    <div flex="20"> 
                        <md-button ng-click="ctrl.descargarPlantilla(ctrl.typeCarga_Opde)">Descargar Formato</md-button>
                    </div>
                </md-card-title>

                <md-card-content ng-show="ctrl.observacionGeneralOdpe.cantidadRegistrosCargados === 0 && ctrl.errorFormatoCargaOdpe === false && ctrl.cargandoFormatoCargaOdpe === false">        
                    <div layout="row"> 
                        <div flex="100">
                            <h2><i class="fa fa-clock-o" aria-hidden="true"></i>En espera</h2>
                        </div>
                    </div>

                    <md-card-title-text flex="100">          
                        <md-list-item class="md-3-line">
                            <div id="fileCargaOdpe" layout="column">
                                <lf-ng-md-file-input lf-api="apiCargaOdpe" lf-files="cargaOdpe" progress                      
                                                     accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                                     lf-mimetype=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                                     lf-placeholder="" lf-remove-label=""
                                                     lf-browse-label="Subir Archivo" flex> </lf-ng-md-file-input>
                            </div>                    
                        </md-list-item>
                    </md-card-title-text>  
                    <div class="clearboth"></div>
                </md-card-content>

                <md-card-content ng-if="ctrl.cargandoFormatoCargaOdpe === true">        
                    <div layout="row"> 
                        <div flex="100">
                            <h2>Procesando...</h2>
                        </div>
                    </div>
                    <md-card-title-text flex="100">                
                        <md-progress-linear md-mode="indeterminate"></md-progress-linear>                 
                    </md-card-title-text>  
                    <div class="clearboth"></div>
                </md-card-content>

                <md-card-content ng-show="ctrl.errorFormatoCargaOdpe === true || ctrl.observacionGeneralOdpe.cantidadRegistrosError > 0">
                    <div layout="row"> 
                        <div flex="80">
                            <h2 ng-show="ctrl.observacionGeneralOdpe.cantidadRegistrosError > 0"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>Observaciones</h2>                    
                        </div>

                        <div flex="20">
                            <lf-ng-md-file-input lf-files="cargaOdpe" progress 
                                                 lf-placeholder="" lf-remove-label=""
                                                 accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
                                                 lf-browse-label="Reemplazar Archivo" flex> </lf-ng-md-file-input>
                        </div>
                    </div>

                    <md-card-title-text flex="100" ng-if="ctrl.errorFormatoCargaOdpe === true && ctrl.errorNombreFormatoCargaOdpe === false">
                        <p class="textoDescriptivoCard">[[ctrl.mensajeFormatoCargaOdpe]]</p>
                        <div>
                            <md-button ng-click="ctrl.descargarDetalleFormato(ctrl.typeCarga_Opde)">ERRORES DE FORMATO</md-button>
                        </div>
                    </md-card-title-text>             
                    <div class="clearboth"></div>
                </md-card-content>


                <md-card-content ng-if="ctrl.cargandoFormatoCargaOdpe === false && ctrl.observacionGeneralOdpe.cantidadRegistrosCargados !== 0 && ctrl.errorFormatoCargaOdpe === false">                        
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
                            <div class="iconoEstadoBoton" ng-click="ctrl.descargarDetalle(ctrl.typeCarga_Opde, 1)" ng-show="ctrl.observacionGeneralOdpe.cantidadRegistrosCorrectos > 0">
                                <i class="fa fa-cloud-download" aria-hidden="true"></i>
                            </div>
                            <div class="btnRegistro" layout="column">
                                <h4>Registro Correctos</h4>
                                <span>[[ctrl.observacionGeneralOdpe.cantidadRegistrosCorrectos]]</span>
                            </div>
                        </md-list-item>

                        <md-list-item class="md-3-line">
                            <div class="iconoEstadoBoton" ng-click="ctrl.descargarDetalle(ctrl.typeCarga_Opde, 2)" ng-show="ctrl.observacionGeneralOdpe.cantidadRegistrosError > 0">
                                <i class="fa fa-cloud-download" aria-hidden="true"></i>
                            </div>
                            <div class="btnRegistro" layout="column">
                                <h4>Registro con Error</h4>
                                <span>[[ctrl.observacionGeneralOdpe.cantidadRegistrosError]]</span>
                            </div>
                        </md-list-item>
                    </md-card-title-text>              
                </md-card-content>

                <md-card-content ng-show="ctrl.observacionGeneralOdpe.cantidadRegistrosCargados !== 0 && ctrl.cargandoFormatoCargaOdpe === false && ctrl.observacionGeneralOdpe.cantidadRegistrosError === 0">                                
                    <md-card-title-text flex="100">           

                        <div>
                            <lf-ng-md-file-input lf-files="cargaOdpe" progress 
                                                 lf-placeholder="" lf-remove-label=""
                                                 accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" lf-browse-label="SUBIR UN NUEVO ARCHIVO" flex> </lf-ng-md-file-input>
                        </div>                        

                    </md-card-title-text>  
                    <div class="clearboth"></div>
                </md-card-content>
            </md-card>   
            
            <md-card md-theme="default" md-theme-watch class="{{ctrl.colorCargaLocal}}">
                <md-card-title>
                    <md-card-title-text flex="80" layout="row">
                        <span>LOCALES</span>
                    </md-card-title-text>

                    <div flex="20"> 
                        <md-button ng-click="ctrl.descargarPlantilla(ctrl.typeCarga_Local)">Descargar Formato</md-button>
                    </div>
                </md-card-title>

                <md-card-content ng-show="ctrl.observacionGeneralLocal.cantidadRegistrosCargados === 0 && ctrl.errorFormatoCargaLocal === false && ctrl.cargandoFormatoCargaLocal === false">        
                    <div layout="row"> 
                        <div flex="100">
                            <h2><i class="fa fa-clock-o" aria-hidden="true"></i>En espera</h2>
                        </div>
                    </div>

                    <md-card-title-text flex="100">          
                        <md-list-item class="md-3-line">                            
                            <div id="fileCargaLocal" layout="column">
                                <lf-ng-md-file-input lf-api="apiCargaLocal" lf-files="cargaLocal" progress                      
                                                     accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                                     lf-mimetype=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                                     lf-placeholder="" lf-remove-label=""
                                                     lf-browse-label="Subir Archivo" flex> </lf-ng-md-file-input>
                            </div>                    
                        </md-list-item>
                    </md-card-title-text>  
                    <div class="clearboth"></div>
                </md-card-content>

                <md-card-content ng-if="ctrl.cargandoFormatoCargaLocal === true">        
                    <div layout="row"> 
                        <div flex="100">
                            <h2>Procesando...</h2>
                        </div>
                    </div>
                    <md-card-title-text flex="100">                
                        <md-progress-linear md-mode="indeterminate"></md-progress-linear>                 
                    </md-card-title-text>  
                    <div class="clearboth"></div>
                </md-card-content>

                <md-card-content ng-show="ctrl.errorFormatoCargaLocal === true || ctrl.observacionGeneralLocal.cantidadRegistrosError > 0">
                    <div layout="row"> 
                        <div flex="80">
                            <h2 ng-show="ctrl.observacionGeneralLocal.cantidadRegistrosError > 0"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>Observaciones</h2>                    
                        </div>

                        <div flex="20">
                            <lf-ng-md-file-input lf-files="cargaLocal" progress 
                                                 lf-placeholder="" lf-remove-label=""
                                                 accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
                                                 lf-browse-label="Reemplazar Archivo" flex> </lf-ng-md-file-input>                    
                        </div>
                    </div>

                    <md-card-title-text flex="100" ng-if="ctrl.errorFormatoCargaLocal === true && ctrl.errorNombreFormatoCargaLocal === false">
                        <p class="textoDescriptivoCard">[[ctrl.mensajeFormatoCargaLocal]]</p>
                        <div>
                            <md-button ng-click="ctrl.descargarDetalleFormato(ctrl.typeCarga_Local)">ERRORES DE FORMATO</md-button>
                        </div>
                    </md-card-title-text>             
                    <div class="clearboth"></div>
                </md-card-content>


                <md-card-content ng-if="ctrl.cargandoFormatoCargaLocal === false && ctrl.observacionGeneralLocal.cantidadRegistrosCargados !== 0 && ctrl.errorFormatoCargaLocal === false">                        
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
                            <div class="iconoEstadoBoton" ng-click="ctrl.descargarDetalle(ctrl.typeCarga_Local, 1)" ng-show="ctrl.observacionGeneralLocal.cantidadRegistrosCorrectos > 0">
                                <i class="fa fa-cloud-download" aria-hidden="true"></i>
                            </div>
                            <div class="btnRegistro" layout="column">
                                <h4>Registro Correctos</h4>
                                <span>[[ctrl.observacionGeneralLocal.cantidadRegistrosCorrectos]]</span>
                            </div>
                        </md-list-item>

                        <md-list-item class="md-3-line">
                            <div class="iconoEstadoBoton" ng-click="ctrl.descargarDetalle(ctrl.typeCarga_Local, 2)" ng-show="ctrl.observacionGeneralLocal.cantidadRegistrosError > 0">
                                <i class="fa fa-cloud-download" aria-hidden="true"></i>
                            </div>
                            <div class="btnRegistro" layout="column">
                                <h4>Registro con Error</h4>
                                <span>[[ctrl.observacionGeneralLocal.cantidadRegistrosError]]</span>
                            </div>
                        </md-list-item>
                    </md-card-title-text>              
                </md-card-content>

                <md-card-content ng-show="ctrl.observacionGeneralLocal.cantidadRegistrosCargados !== 0 && ctrl.cargandoFormatoCargaLocal === false && ctrl.observacionGeneralLocal.cantidadRegistrosError === 0">                                
                    <md-card-title-text flex="100">           

                        <div>
                            <lf-ng-md-file-input lf-files="cargaLocal" progress 
                                                 lf-placeholder="" lf-remove-label=""
                                                 accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" lf-browse-label="SUBIR UN NUEVO ARCHIVO" flex> </lf-ng-md-file-input>
                        </div>                        

                    </md-card-title-text>  
                    <div class="clearboth"></div>
                </md-card-content>
            </md-card>                               

            <md-card md-theme="default" md-theme-watch>                
                <md-switch ng-model="ctrl.cargaEtlv.B_TIPO_CONEXION" ng-change="ctrl.onChangeSwitch(0, ctrl.typeCarga_Etlv, ctrl.cargaEtlv.B_TIPO_CONEXION)">
                    SW / BD
                </md-switch>
                <md-card-title>
                    <md-card-title-text flex="100" layout="row">
                        <span>ETLV</span>
                    </md-card-title-text>                  
                </md-card-title>
                <md-card-content ng-if="ctrl.cargaEtlv.B_TIPO_CONEXION && ctrl.cargandoFormatoCargaEtlv === false">        
                    <div layout="row"> 
                        <div flex="100">
                            <md-button ng-click="ctrl.updateProcess(ctrl.typeCarga_Etlv)">ACTUALIZAR</md-button>
                        </div>
                    </div>                   
                </md-card-content>  
                <md-card-content ng-if="!ctrl.cargaEtlv.B_TIPO_CONEXION && ctrl.cargandoFormatoCargaEtlv === false">                
                    <form name="etlvForm" ng-submit="etlvForm.$valid && ctrl.updateProcess(ctrl.typeCarga_Etlv)" novalidate>
                        <div layout="row"> 
                            <md-input-container flex="70">
                                <label>Servicio Web</label>
                                <input required name="serviceNameEtlv" ng-model="ctrl.serviceNameEtlv">
                                <div ng-messages="etlvForm.serviceNameEtlv.$error">
                                    <div ng-message="required">Campo Obligatorio.</div>
                                </div>
                            </md-input-container>
                            <div flex="30">
                                <md-button type="submit">ACTUALIZAR</md-button>                                                        
                            </div>
                        </div>                   
                    </form>    
                </md-card-content>  
                <md-card-content ng-show="ctrl.cargandoFormatoCargaEtlv === false">
                    <div layout="row" flex="100" ng-show="ctrl.cargaEtlv.N_CONEXION_PK !== 0 && ctrl.cargaEtlv.D_AUD_FECHA_ACTUALIZACION != undefined">                    
                        <div flex="70">
                            Última actualización
                        </div>
                        <div flex="30" style="text-align:right;">                            
                            [[ctrl.cargaEtlv.D_AUD_FECHA_ACTUALIZACION | dateFormat1 ]]
                        </div>
                    </div>                                        
                </md-card-content>
                <md-card-content ng-if="ctrl.cargandoFormatoCargaEtlv === true">        
                    <div layout="row"> 
                        <div flex="100">
                            <h2>Procesando...</h2>
                        </div>
                    </div>
                    <md-card-title-text flex="100">                
                        <md-progress-linear md-mode="indeterminate"></md-progress-linear>                 
                    </md-card-title-text>  
                    <div class="clearboth"></div>
                </md-card-content>
                <md-switch ng-model="ctrl.cargaEtlv.B_ESTADO" ng-change="ctrl.onChangeSwitch(1, ctrl.typeCarga_Etlv, ctrl.cargaEtlv.B_ESTADO)">
                    DESHABILITADO / HABILITADO                    
                </md-switch>
            </md-card>
            
            <md-card md-theme="default" md-theme-watch> 
                <md-switch ng-model="ctrl.cargaSige.B_TIPO_CONEXION" ng-change="ctrl.onChangeSwitch(0, ctrl.typeCarga_Sige, ctrl.cargaSige.B_TIPO_CONEXION)" ng-disabled="true">
                    SW / BD
                </md-switch>
                <md-card-title>
                    <md-card-title-text flex="100" layout="row">
                        <span>SIGE</span>
                    </md-card-title-text>                  
                </md-card-title>
                <md-card-content ng-if="ctrl.cargandoFormatoCargaSige === false">        
                    <div layout="row"> 
                        <div flex="100">
                            <md-button ng-click="ctrl.updateProcess(ctrl.typeCarga_Sige)">VERIFICAR CONEXIÓN</md-button>
                        </div>
                    </div>                   
                </md-card-content>                 
                <md-card-content ng-show="ctrl.cargandoFormatoCargaSige === false">
                    <div layout="row" flex="100" ng-show="ctrl.cargaSige.N_CONEXION_PK !== 0 && ctrl.cargaSige.D_AUD_FECHA_ACTUALIZACION != undefined">
                        <div flex="70">
                            Última conexión
                        </div>
                        <div flex="30" style="text-align:right;">
                            [[ctrl.cargaSige.D_AUD_FECHA_ACTUALIZACION | dateFormat1 ]]
                        </div>
                    </div>                                        
                </md-card-content>
                <md-card-content ng-if="ctrl.cargandoFormatoCargaSige === true">        
                    <div layout="row"> 
                        <div flex="100">
                            <h2>Procesando...</h2>
                        </div>
                    </div>
                    <md-card-title-text flex="100">                
                        <md-progress-linear md-mode="indeterminate"></md-progress-linear>                 
                    </md-card-title-text>  
                    <div class="clearboth"></div>
                </md-card-content>
                <md-switch ng-model="ctrl.cargaSige.B_ESTADO" ng-change="ctrl.onChangeSwitch(1, ctrl.typeCarga_Sige, ctrl.cargaSige.B_ESTADO)">
                    DESHABILITADO / HABILITADO
                </md-switch>
            </md-card>

            <md-card md-theme="default" md-theme-watch>
                <md-switch ng-model="ctrl.cargaRae.B_TIPO_CONEXION" ng-change="ctrl.onChangeSwitch(0, ctrl.typeCarga_Rae, ctrl.cargaRae.B_TIPO_CONEXION)">
                    SW / BD
                </md-switch>
                <md-card-title>
                    <md-card-title-text flex="100" layout="row">
                        <span>RAE</span>
                    </md-card-title-text>                  
                </md-card-title>
                <md-card-content ng-if="ctrl.cargaRae.B_TIPO_CONEXION && ctrl.cargandoFormatoCargaRae === false">
                    <div layout="row"> 
                        <div flex="100">
                            <md-button ng-click="ctrl.updateProcess(ctrl.typeCarga_Rae)">ACTUALIZAR</md-button>
                        </div>
                    </div>                   
                </md-card-content>  
                <md-card-content ng-if="!ctrl.cargaRae.B_TIPO_CONEXION && ctrl.cargandoFormatoCargaRae === false">
                    <form name="raeForm" ng-submit="raeForm.$valid && ctrl.updateProcess(ctrl.typeCarga_Rae)" novalidate>
                        <div layout="row"> 
                            <md-input-container flex="70">
                                <label>Servicio Web</label>
                                <input required name="serviceNameRae" ng-model="ctrl.serviceNameRae">
                                <div ng-messages="raeForm.serviceNameRae.$error">
                                    <div ng-message="required">Campo Obligatorio.</div>
                                </div>
                            </md-input-container>
                            <div flex="30">
                                <md-button type="submit">ACTUALIZAR</md-button>                                                        
                            </div>
                        </div>                   
                    </form>
                </md-card-content>  
                <md-card-content ng-show="ctrl.cargandoFormatoCargaRae === false">
                    <div layout="row" flex="100" ng-show="ctrl.cargaRae.N_CONEXION_PK !== 0 && ctrl.cargaRae.D_AUD_FECHA_ACTUALIZACION != undefined">                    
                        <div flex="70">
                            Última actualización
                        </div>
                        <div flex="30" style="text-align:right;">
                            [[ctrl.cargaRae.D_AUD_FECHA_ACTUALIZACION | dateFormat1 ]]
                        </div>
                    </div>                                        
                </md-card-content>
                <md-card-content ng-if="ctrl.cargandoFormatoCargaRae === true">        
                    <div layout="row"> 
                        <div flex="100">
                            <h2>Procesando...</h2>
                        </div>
                    </div>
                    <md-card-title-text flex="100">                
                        <md-progress-linear md-mode="indeterminate"></md-progress-linear>                 
                    </md-card-title-text>  
                    <div class="clearboth"></div>
                </md-card-content>
                <md-switch ng-model="ctrl.cargaRae.B_ESTADO" ng-change="ctrl.onChangeSwitch(1, ctrl.typeCarga_Rae, ctrl.cargaRae.B_ESTADO)">
                    DESHABILITADO / HABILITADO
                </md-switch>
            </md-card>
            
            <md-card md-theme="default" md-theme-watch class="{{ctrl.colorCargaPagina}}">
                <md-card-title>
                    <md-card-title-text flex="80" layout="row">
                        <span>Página Institucional ONPE</span>
                    </md-card-title-text>

                    <div flex="20"> 
                        <md-button ng-click="ctrl.descargarPlantilla(ctrl.typeCarga_Pagina)">Descargar Formato</md-button>
                    </div>
                </md-card-title>

                <md-card-content ng-show="ctrl.observacionGeneralPagina.cantidadRegistrosCargados === 0 && ctrl.errorFormatoCargaPagina === false && ctrl.cargandoFormatoCargaPagina === false">        
                    <div layout="row"> 
                        <div flex="100">
                            <h2><i class="fa fa-clock-o" aria-hidden="true"></i>En espera</h2>
                        </div>
                    </div>

                    <md-card-title-text flex="100">          
                        <md-list-item class="md-3-line">                            
                            <div id="fileCargaPagina" layout="column">
                                <lf-ng-md-file-input lf-api="apiCargaPagina" lf-files="cargaPagina" progress                      
                                                     accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                                     lf-mimetype=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                                     lf-placeholder="" lf-remove-label=""
                                                     lf-browse-label="Subir Archivo" flex> </lf-ng-md-file-input>
                            </div>                    
                        </md-list-item>
                    </md-card-title-text>  
                    <div class="clearboth"></div>
                </md-card-content>

                <md-card-content ng-if="ctrl.cargandoFormatoCargaPagina === true">        
                    <div layout="row"> 
                        <div flex="100">
                            <h2>Procesando...</h2>
                        </div>
                    </div>
                    <md-card-title-text flex="100">                
                        <md-progress-linear md-mode="indeterminate"></md-progress-linear>                 
                    </md-card-title-text>  
                    <div class="clearboth"></div>
                </md-card-content>

                <md-card-content ng-show="ctrl.errorFormatoCargaPagina === true || ctrl.observacionGeneralPagina.cantidadRegistrosError > 0">
                    <div layout="row"> 
                        <div flex="80">
                            <h2 ng-show="ctrl.observacionGeneralPagina.cantidadRegistrosError > 0"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>Observaciones</h2>                    
                        </div>

                        <div flex="20">
                            <lf-ng-md-file-input lf-files="cargaPagina" progress 
                                                 lf-placeholder="" lf-remove-label=""
                                                 accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
                                                 lf-browse-label="Reemplazar Archivo" flex> </lf-ng-md-file-input>
                        </div>
                    </div>

                    <md-card-title-text flex="100" ng-if="ctrl.errorFormatoCargaPagina === true && ctrl.errorNombreFormatoCargaPagina === false">
                        <p class="textoDescriptivoCard">[[ctrl.mensajeFormatoCargaPagina]]</p>
                        <div>
                            <md-button ng-click="ctrl.descargarDetalleFormato(ctrl.typeCarga_Pagina)">ERRORES DE FORMATO</md-button>
                        </div>
                    </md-card-title-text>             
                    <div class="clearboth"></div>
                </md-card-content>


                <md-card-content ng-if="ctrl.cargandoFormatoCargaPagina === false && ctrl.observacionGeneralPagina.cantidadRegistrosCargados !== 0 && ctrl.errorFormatoCargaPagina === false">                        
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
                            <div class="iconoEstadoBoton" ng-click="ctrl.descargarDetalle(ctrl.typeCarga_Pagina, 1)" ng-show="ctrl.observacionGeneralPagina.cantidadRegistrosCorrectos > 0">
                                <i class="fa fa-cloud-download" aria-hidden="true"></i>
                            </div>
                            <div class="btnRegistro" layout="column">
                                <h4>Registro Correctos</h4>
                                <span>[[ctrl.observacionGeneralPagina.cantidadRegistrosCorrectos]]</span>
                            </div>
                        </md-list-item>

                        <md-list-item class="md-3-line">
                            <div class="iconoEstadoBoton" ng-click="ctrl.descargarDetalle(ctrl.typeCarga_Pagina, 2)" ng-show="ctrl.observacionGeneralPagina.cantidadRegistrosError > 0">
                                <i class="fa fa-cloud-download" aria-hidden="true"></i>
                            </div>
                            <div class="btnRegistro" layout="column">
                                <h4>Registro con Error</h4>
                                <span>[[ctrl.observacionGeneralPagina.cantidadRegistrosError]]</span>
                            </div>
                        </md-list-item>
                    </md-card-title-text>              
                </md-card-content>

                <md-card-content ng-show="ctrl.observacionGeneralPagina.cantidadRegistrosCargados !== 0 && ctrl.cargandoFormatoCargaPagina === false && ctrl.observacionGeneralPagina.cantidadRegistrosError === 0">                                
                    <md-card-title-text flex="100">           

                        <div>
                            <lf-ng-md-file-input lf-files="cargaPagina" progress 
                                                 lf-placeholder="" lf-remove-label=""
                                                 accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" lf-browse-label="SUBIR UN NUEVO ARCHIVO" flex> </lf-ng-md-file-input>
                        </div>                       

                    </md-card-title-text>  
                    <div class="clearboth"></div>
                </md-card-content>
            </md-card>                   

            <md-card md-theme="default" md-theme-watch class="{{ctrl.colorCargaConadis}}">
                <md-card-title>
                    <md-card-title-text flex="80" layout="row">
                        <span>CONADIS</span>
                    </md-card-title-text>

                    <div flex="20"> 
                        <md-button ng-click="ctrl.descargarPlantilla(ctrl.typeCarga_Conadis)">Descargar Formato</md-button>
                    </div>
                </md-card-title>

                <md-card-content ng-show="ctrl.observacionGeneralConadis.cantidadRegistrosCargados === 0 && ctrl.errorFormatoCargaConadis === false && ctrl.cargandoFormatoCargaConadis === false">        
                    <div layout="row"> 
                        <div flex="100">
                            <h2><i class="fa fa-clock-o" aria-hidden="true"></i>En espera</h2>
                        </div>
                    </div>

                    <md-card-title-text flex="100">          
                        <md-list-item class="md-3-line">                            
                            <div id="fileCargaConadis" layout="column">
                                <lf-ng-md-file-input lf-api="apiCargaConadis" lf-files="cargaConadis" progress                      
                                                     accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                                     lf-mimetype=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                                     lf-placeholder="" lf-remove-label=""
                                                     lf-browse-label="Subir Archivo" flex> </lf-ng-md-file-input>
                            </div>                    
                        </md-list-item>
                    </md-card-title-text>  
                    <div class="clearboth"></div>
                </md-card-content>

                <md-card-content ng-if="ctrl.cargandoFormatoCargaConadis === true">        
                    <div layout="row"> 
                        <div flex="100">
                            <h2>Procesando...</h2>
                        </div>
                    </div>
                    <md-card-title-text flex="100">                
                        <md-progress-linear md-mode="indeterminate"></md-progress-linear>                 
                    </md-card-title-text>  
                    <div class="clearboth"></div>
                </md-card-content>

                <md-card-content ng-show="ctrl.errorFormatoCargaConadis === true || ctrl.observacionGeneralConadis.cantidadRegistrosError > 0">
                    <div layout="row"> 
                        <div flex="80">
                            <h2 ng-show="ctrl.observacionGeneralConadis.cantidadRegistrosError > 0"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>Observaciones</h2>                    
                        </div>

                        <div flex="20">
                            <lf-ng-md-file-input lf-files="cargaConadis" progress 
                                                 lf-placeholder="" lf-remove-label=""
                                                 accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
                                                 lf-browse-label="Reemplazar Archivo" flex> </lf-ng-md-file-input>
                        </div>
                    </div>

                    <md-card-title-text flex="100" ng-if="ctrl.errorFormatoCargaConadis === true && ctrl.errorNombreFormatoCargaConadis === false">
                        <p class="textoDescriptivoCard">[[ctrl.mensajeFormatoCargaConadis]]</p>
                        <div>
                            <md-button ng-click="ctrl.descargarDetalleFormato(ctrl.typeCarga_Conadis)">ERRORES DE FORMATO</md-button>
                        </div>
                    </md-card-title-text>             
                    <div class="clearboth"></div>
                </md-card-content>


                <md-card-content ng-if="ctrl.cargandoFormatoCargaConadis === false && ctrl.observacionGeneralConadis.cantidadRegistrosCargados !== 0 && ctrl.errorFormatoCargaConadis === false">                        
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
                            <div class="iconoEstadoBoton" ng-click="ctrl.descargarDetalle(ctrl.typeCarga_Conadis, 1)" ng-show="ctrl.observacionGeneralConadis.cantidadRegistrosCorrectos > 0">
                                <i class="fa fa-cloud-download" aria-hidden="true"></i>
                            </div>
                            <div class="btnRegistro" layout="column">
                                <h4>Registro Correctos</h4>
                                <span>[[ctrl.observacionGeneralConadis.cantidadRegistrosCorrectos]]</span>
                            </div>
                        </md-list-item>

                        <md-list-item class="md-3-line">
                            <div class="iconoEstadoBoton" ng-click="ctrl.descargarDetalle(ctrl.typeCarga_Conadis, 2)" ng-show="ctrl.observacionGeneralConadis.cantidadRegistrosError > 0">
                                <i class="fa fa-cloud-download" aria-hidden="true"></i>
                            </div>
                            <div class="btnRegistro" layout="column">
                                <h4>Registro con Error</h4>
                                <span>[[ctrl.observacionGeneralConadis.cantidadRegistrosError]]</span>
                            </div>
                        </md-list-item>
                    </md-card-title-text>              
                </md-card-content>

                <md-card-content ng-show="ctrl.observacionGeneralConadis.cantidadRegistrosCargados !== 0 && ctrl.cargandoFormatoCargaConadis === false && ctrl.observacionGeneralConadis.cantidadRegistrosError === 0">                                
                    <md-card-title-text flex="100">           

                        <div>
                            <lf-ng-md-file-input lf-files="cargaConadis" progress 
                                                 lf-placeholder="" lf-remove-label=""
                                                 accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" lf-browse-label="SUBIR UN NUEVO ARCHIVO" flex> </lf-ng-md-file-input>
                        </div>                        

                    </md-card-title-text>  
                    <div class="clearboth"></div>
                </md-card-content>
            </md-card>                                                    
            </div>
        </section>  

    </div>                
</t:master>