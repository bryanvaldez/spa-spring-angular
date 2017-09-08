<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<t:master  title="conexion">             
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/directive/conexion.js"></script>  
    <div ng-controller="onpeConexion as ctrl" ng-cloak  class="tarjetaDasboardPrincipal">     


        <!-- Title,  Filter and Add-->
        <md-content layout-padding  class="estiloTarjetaCabecera">
            <div class="colum2 alineado-Colu">
                <h2 class="tituloSecundario"> <b>Procesos Electorales</b></h2>        
            </div>

            <div class="colum2 alineadoDerecha alineado-Colu">

                <md-checkbox  class="checkboxEstiloSistem" ng-click="cambiarChecks()" ng-checked="checkTodos" ng-disabled="ctrl.action != 1">Todos</md-checkbox>
                <md-checkbox  class="checkboxEstiloSistem" ng-repeat="f in ctrl.filter" ng-model="f.on" ng-click="changeActionTodos(f)"  ng-disabled="ctrl.action != 1">[[f.name]]</md-checkbox>
                <md-button class="md-fab md-primary botonFoter estilosBotonGeneral"  ng-click="ctrl.add()" aria-label="agregarProceso"  ng-disabled="ctrl.action != 1">
                    <md-tooltip md-direction="bottom">Crear Proceso</md-tooltip>
                    <i class="material-icons">&#xE145;</i>
                </md-button>
            </div>
        </md-content>
        
        <!-- 
            <md-button class="md-fab md-primary botonFoter estilosBotonGeneral ButonNextPosition"    >
                  <i class="material-icons">chevron_left</i>
            </md-button>
            <md-button class="md-fab md-primary botonFoter estilosBotonGeneral ButonAfterPosition"    >
                    <i class="material-icons">&#xE5CC;</i>
            </md-button>
        -->
        <md-content class="contentProcess md-padding" layout-xs="column" layout="row" layout-align="right" style="background-color: transparent;">
         
            
            <div ng-repeat="a in ctrl.procesos| filter:ctrl.filterType | orderBy:'$index':true" layout="column" class="TarjetaContenedorCarscaled">


                <form name="connectionForm" ng-submit="connectionForm.$valid && ctrl.submit(connectionForm)" novalidate>

                    <md-card md-theme-watch class="estiloTarjeta cardProcesoElectoral"
                             ng-class="{'animated pulse':a.N_PROCESO_PK == ctrl.proceso.N_PROCESO_PK && ctrl.action == 3
                                , 'EstadoActivo' : a.N_ESTADO == 1 || a.N_PROCESO_PK == null, 'EstadoSuspendido' : a.N_ESTADO == 2
                                , 'EstadoCancelado' : a.N_ESTADO == 3, 'EstadoFinalizado' : a.N_ESTADO == 4}">                             
                        <!-- Header Origin-->
                        <md-card-header ng-if="a.N_PROCESO_PK != ctrl.proceso.N_PROCESO_PK" layout="column" class="cabeceraTarjetaPrincipal" >
                            <div layout="row" layout-wrap class="tituloSecundario">
                                <div layout="column" flex="80"  flex-xs="100"   layout-xs="row">  
                                    <h1 ng-class="(a.C_NOMBRE.length > 60) ? ' tituloPincipalExtendidoExtra ' : ' tituloPincipalExtendido'" ><b>[[a.C_NOMBRE]]</b></h1><!-- class="tituloPincipal" -->
                                </div>
                                <!-- Log - No existe en el wireframe 31/07/2017 -->
                                <%--   
                               <md-input-container flex="100" class="md-icon-float md-block">
                                   <label>Codigo del Proceso</label>
                                   <input  name="aliasProceso" ng-model="a.C_ALIAS" type="text" disabled required>                                     
                               </md-input-container>
                                --%>
                                <div layout="column"  layout-align=" center end"  flex="20" flex-xs="100"   layout-xs="row">
                                    <md-button ng-disabled="ctrl.action != 1 || a.N_ESTADO === 3" class="md-raised md-primary butuonDashPrincipal  estilosBotonGeneral botonIrPrincipal" ng-click="ctrl.enableProcess(a.N_PROCESO_PK)"><md-tooltip md-direction="top">Ingresar al Proceso</md-tooltip><i class="fa fa-arrow-right " aria-label="data"></i></md-button>
                                </div>

                                <div layout="column"  layout-align="center start" flex="80" flex-xs="100"   layout-xs="row">
                                    <span flex="100" class=" SistemaComentatext ">Creado el: <strong>[[a.D_AUD_FECHA_CREACION | date:'dd/MM/yyyy']]</strong></span>
                                    <span flex="100" class=" SistemaComentatext ">Base de Datos Configurada</span>
                                </div>                                                                   
                                <div layout="column"  layout-align=" center end"  flex="20" flex-xs="100"   layout-xs="row">
                                    <md-button ng-disabled="ctrl.action != 1 || a.N_ESTADO === 4 || a.N_ESTADO === 3" class="md-raised md-primary butuonDashPrincipal  botonIrPrincipalDos  estilosBotonGeneral " ng-click="ctrl.edit(a)">EDITAR</md-button>                                  
                                </div>                             

                            </div>
                        </md-card-header> 
                        <!-- Header Temp-->
                        <md-card-header ng-if="a.N_PROCESO_PK == ctrl.proceso.N_PROCESO_PK">

                            <div layout="row" style="min-width: 100%" layout-wrap>
                                <md-input-container flex="100"  class="md-icon-float md-block tituloProceso">
                                    <label style="left:0px">Nombre y Fecha del Proceso</label>
                                    
                                    <textarea maxlength="250" class="textAreaTitulo" ng-change="ctrl.clearMessage()" name="nombreProceso" ng-model="ctrl.proceso.C_NOMBRE" maxlength="250" ng-maxlength="250" 
                                           ng-disabled="ctrl.proceso.N_ESTADO != 1 && ctrl.proceso.N_ESTADO != null" type="text" letters-and-number uppercased required ></textarea>
                                    <md-icon ng-show="false" class="fa fa-pencil-square-o"  style="font-size: 22px;"></md-icon>
                                    <div ng-messages="connectionForm.nombreProceso.$error" role="alert">
                                        <div ng-message="required">Dato Requerido*</div>
                                    </div>     
                                        <!-- Log - No existe en el wireframe 31/07/2017 -->
                                        <%-- 
                                           <label>Codigo del Proceso</label>
                                           <md-iczon class="fa fa-pencil-square-o"  style="font-size: 22px;"></md-icon>
                                           <input ng-change="ctrl.clearMessage()" name="aliasProceso" ng-model="ctrl.proceso.C_ALIAS" type="text" required>
                                           <div ng-messages="connectionForm.aliasProceso.$error" role="alert" >
                                               <div ng-message="required">Dato Requerido*</div>
                                               <div ng-message="validationError">Alias Duplicado*</div>
                                           </div>
                                        --%>
                                        <div ng-messages="ctrl.connection.message" style="font-size: 12px;"> 
                                            <div ng-if="ctrl.connection.status == 5 && ctrl.connection.tipoM == 1"  ng-bind="ctrl.connection.message" style="color: rgb(221,44,0);"></div>
                                        </div>  
                                        
                                    </md-input-container> 
                                    <div layout="column"  layout-align="center start" layout-xs="column" >
                                        <span flex="100" class=" SistemaComentatext ">Fecha de Creación: <strong>[[ctrl.date | date:'dd/MM/yyyy']]</strong></span>
                                        <span flex="100" class=" SistemaComentatext ">Base de Datos en Configuración</span>
                                    </div>  
                                      
                                      
                            </div>                          
                        </md-card-header>         
                        <div class="divinormal"></div>
                        <!-- Contenido Origin-->
                        <div ng-if="a.N_PROCESO_PK != ctrl.proceso.N_PROCESO_PK" layout="row" layout-wrap  class="justificarContenidoFelx"  >
                            <div flex="30" flex-xs="100">
                                    <onpe-reporte-electores
                                        data="a"
                                        active-graphic="false"
                                        ver-total-electores="true"
                                        ver-porcentage-genero="false"
                                        ver-cantidad-preferencial="false"                    
                                        ver-total-electores-grafico="false"                    
                                        ver-cantidad-temporal="false"
                                        ver-total-cpp="true"
                                        ver-Electores-Por-Asignar="false"
                                        ></onpe-reporte-electores>
                            </div>                                                                                   
                            <div flex="30" flex-xs="100">
                                    <onpe-reporte-mesa
                                        data="a"
                                        ver-total-mesas="true"
                                        ver-total-mesas-estimadas="false" 
                                        ver-total-cpp="true"                                        
                                        ver-reglas-mesas="false" btn-reglas-mesas=""              
                                        ></onpe-reporte-mesa>                                    
                            </div>    
                            <div flex="30" flex-xs="100"   >
                                    <onpe-reporte-local 
                                        data="a"
                                        ver-total-local="true" 
                                        ver-barra-porcentaje-local="false"
                                        ver-crear-local="false" btn-crear-local=""
                                        ver-locales-incompletos="false" btn-locales-incompletos="" 
                                        ver-locales-deshabilitados="false" btn-locales-deshabilitados=""
                                        ver-nuevos-distritos="false"
                                        ver-total-cpp="true"
                                        ></onpe-reporte-local>    
                            </div>
                            <div flex="100" flex-xs="100"   class="postFooter"  >                            
                                    <onpe-reporte-electores
                                        data="a"
                                        active-graphic="false"
                                        ver-total-electores="false"
                                        ver-porcentage-genero="false"
                                        ver-cantidad-preferencial="false"                    
                                        ver-total-electores-grafico="false"                    
                                        ver-cantidad-temporal="false"
                                        ver-total-cpp="false"
                                        ver-Electores-Por-Asignar="true"
                                        ></onpe-reporte-electores>
                            </div>
                        </div>
                        <!-- Contenido Temp-->
                        <div ng-if="a.N_PROCESO_PK == ctrl.proceso.N_PROCESO_PK" >
                            <md-card-content class="conenedorSubidArchivosDos sinpadding">
                                <span class="md-body-2">Archivo de conexión para la recepción de datos.</span>                           
                                <lf-ng-md-file-input id="fileConexion" ng-disabled="ctrl.proceso.N_ESTADO != 1 && ctrl.proceso.N_ESTADO != null"
                                    lf-api="conexion"
                                    lf-files="file"
                                    ng-change="ctrl.change(file)"
                                    lf-browse-label="Buscar" 
                                    lf-placeholder="Seleccione el archivo encriptado"
                                    lf-remove-label="Limpiar"   
                                    class="cargarDatosInputCont WidthFullVersion"s
                                    >    
                                </lf-ng-md-file-input>
                                <div style="height: 20px;" ng-messages="ctrl.connection.message" style="font-size: 12px;"> 
                                    <div ng-if="ctrl.connection.status == 3" ng-bind="ctrl.connection.message" class="TextitoBad"></div>
                                    <div ng-if="ctrl.connection.status == 4" ng-bind="ctrl.connection.message" class="TextitoOk"></div> 
                                    <div ng-if="ctrl.connection.status == 5 && ctrl.connection.tipoM == 2" ng-bind="ctrl.connection.message" class="TextitoBad"></div>    
                                </div>     

                                <div layout="row" layout-align="end center">
                                    <md-progress-linear ng-show="ctrl.connection.status == 2" md-mode="indeterminate"></md-progress-linear>
                                    <md-button class="md-raised md-primary ButonPrincipal estilosBotonGeneral " ng-disabled="ctrl.connection.status != 1" ng-click="ctrl.test()" aria-label="b2_event">CONECTAR</md-button>     
                                </div>  
                            </md-card-content>                      
                        </div>                            
                        <div class="divinormal"></div>
                        <!-- Footer Origin-->                        
                        <div layout="row" layout-padding ng-if="a.N_PROCESO_PK != ctrl.proceso.N_PROCESO_PK" ng-show="a.N_ESTADO != 4" class="seccionEstado" >
                            <p flex="40" layout="column" class="md-body-2">Estado del Proceso Electoral:</p>                                                          
                            <md-radio-group flex="60" layout="row" layout-align="end center" ng-model="a.N_ESTADO" disabled>
                                <md-radio-button value="1" class="md-primary">Activo</md-radio-button>
                                <md-radio-button value="2" class="md-primary"> Suspendido </md-radio-button>
                                <md-radio-button value="3">Cancelado</md-radio-button>
                            </md-radio-group>                                                     
                        </div> 
                        <div layout="row" layout-padding ng-if="a.N_PROCESO_PK != ctrl.proceso.N_PROCESO_PK" ng-show="a.N_ESTADO === 4" class="seccionEstado" >
                            <p flex="40" layout="column" class="md-body-2">Estado del Proceso Electoral:</p>                                                          
                            <md-radio-group flex="60" layout="row" layout-align="end center" ng-model="a.N_ESTADO" disabled>
                                <md-radio-button value="4" class="md-primary">Finalizado</md-radio-button>                                
                            </md-radio-group>                                                     
                        </div>
                        <!-- Footer Temp-->
                        <div ng-if="a.N_PROCESO_PK == ctrl.proceso.N_PROCESO_PK" >
                            <div layout="row" layout-padding ng-if="ctrl.action == 3">
                                <p flex="40" layout="column" class="md-body-2">Estado del Proceso Electoral:</p>  
                                <md-radio-group flex="60" layout="row" layout-align="end center" ng-model="ctrl.proceso.N_ESTADO">
                                    <md-radio-button value="1" class="md-primary">Activo</md-radio-button>
                                    <md-radio-button value="2" class="md-primary">Suspendido</md-radio-button>
                                    <md-radio-button value="3" class="md-primary">Cancelado</md-radio-button>
                                </md-radio-group>                                                 
                            </div>                                
                            <md-card-content>
                                <md-card-actions layout="row" layout-align="end center">                                    
                                    <md-button class="md-raised md-primary estilosBotonGeneral" ng-disabled="ctrl.isSaving" ng-click="ctrl.close(a)" aria-label="cancel">CANCELAR</md-button>
                                    <md-button class="md-raised md-primary estilosBotonGeneral" ng-disabled="ctrl.isSaving || (ctrl.connection.status != 4 && ctrl.action != 3) || (ctrl.connection.status!=0 && ctrl.connection.status!=4)" type="submit" aria-label="b3_event" ng-bind="ctrl.action==2?'CREAR':'ACTUALIZAR'"></md-button>
                                </md-card-actions>
                            </md-card-content>
                        </div>                            

                    </md-card>

                </form>
            </div>
        </md-content>         
    </div>
</t:master>