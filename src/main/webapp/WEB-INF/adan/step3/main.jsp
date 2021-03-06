<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/map/ammap.js"></script> 
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/map/light.js"></script>

<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/chart/amcharts.js"></script>    
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/chart/light.js"></script>    
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/chart/serial.js"></script>  

<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/onpe-reporte-peru.js"></script> 
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/onpe-reporte-peru-dep.js"></script>    

<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/controller/main/reporteController.js"></script>  
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/controller/main/modalController.js"></script>  
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/service/reporteService.js"></script> 
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/service/mantenimientoService.js"></script> 
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/helper/commonUtil.js"></script>
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/controller/step1/modalReglasController.js"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/step1/reglasdeMesas.css" type="text/css" />
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/step1/interfasePrincipal.css" type="text/css"/>

<!--<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/animacion/easeljs-0.6.0.min.js"></script> 
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/animacion/tweenjs-0.4.0.min.js"></script> 
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/animacion/movieclip-0.6.0.min.js"></script> 
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/animacion/lepaAnimacion.js"></script> 
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/animacion/animacionFunciones.js"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/js/lib/animacion/animacionEdg.css" type="text/css"/>-->

<div ng-controller="reporteController as ctrl">
    
    <div ng-show="ctrl.viewProcedure" style="background-color: darkcyan;
        color: #fff;
        font-size: 30px;
        text-align: center;
        font-weight: bold;
        height: -webkit-fill-available;
        padding-top: 51px;" ng-cloak>
    [[ctrl.percentageProcedure]]%...
    </div>    
    
    <div ng-hide="ctrl.viewProcedure" class="contdmoree" ng-cloak>
        <form name="localForm" ng-submit="localForm.$valid && ctrl.submitLocal()" novalidate >
            <section class="columnaDiviTres primeraSeccion" >  
       
                <article>
                    <onpe-adan-estado-carga ng-show="ctrl.section.viewElector || ctrl.section.viewLocal"
                        data="ctrl.status"
                        msg-loading="ctrl.messageLoading"
                        msg-success="ctrl.messageSuccess"
                        msg-error="ctrl.messageError"
                        ></onpe-adan-estado-carga>                        
                    <onpe-adan-elector-historial ng-show="ctrl.section.viewElector" 
                        data="ctrl.elector"
                        ></onpe-adan-elector-historial>

                    <onpe-reporte-electores ng-show="(ctrl.section.reporteBase || ctrl.section.reporteByElector) && !ctrl.section.viewLocal"
                        data="ctrl.reporteElector"
                        active-graphic="false"
                        ver-total-electores="true"
                        ver-porcentage-genero="false"               
                        ver-total-electores-grafico="false"                    
                        ></onpe-reporte-electores> 
              
                    <onpe-reporte-electores-low ng-if="(ctrl.section.reporteBase || ctrl.section.reporteByElector) && !ctrl.section.viewLocal"    
                        data="ctrl.reporteElectorLow"
                        ver-total-no-asignados="true" btn-total-no-asignados="abrirFichaTecnicaEstimada()" ver-button-total-no-asignados="false"
                        ver-porcentage-genero-cpp="false"
                        ver-cantidad-preferencial="false"
                        ></onpe-reporte-electores-low>                      

                    <onpe-reporte-electores-by-local-or-mesa ng-if="(ctrl.section.reporteBase || ctrl.section.reporteByElector) && ctrl.section.viewLocal"
                        data="ctrl.reporteElectorByLocalOrMesa"
                        active-graphic="true"
                        ver-total-electores="false"
                        ver-total-mesas="true"
                        ver-detalle-electores="true"                        
                        ver-porcentage-genero="true"               
                        ver-total-electores-grafico="true" 
                        ver-cantidad-preferencial="true"
                        ></onpe-reporte-electores-by-local-or-mesa> 
                    
                 </article>
                     
                <onpe-reporte-electores ng-show="(ctrl.section.reporteBase || ctrl.section.reporteByElector) && !ctrl.section.viewLocal"
                    data="ctrl.reporteElector"
                    active-graphic="true"
                    ver-total-electores="false"
                    ver-porcentage-genero="false"               
                    ver-total-electores-grafico="true"                    
                    ></onpe-reporte-electores>
                
                <onpe-reporte-electores-low ng-if="(ctrl.section.reporteBase || ctrl.section.reporteByElector) && !ctrl.section.viewLocal"    
                    data="ctrl.reporteElectorLow"
                    ver-total-no-asignados="false"
                    ver-porcentage-genero-cpp="false"
                    ver-cantidad-preferencial="true"
                    ></onpe-reporte-electores-low>
                
                <onpe-reporte-electores ng-show="(ctrl.section.reporteBase || ctrl.section.reporteByElector) && !ctrl.section.viewLocal"
                    data="ctrl.reporteElector"
                    active-graphic="false"
                    ver-total-electores="false"
                    ver-porcentage-genero="true"               
                    ver-total-electores-grafico="false"                    
                    ></onpe-reporte-electores>
                
                <onpe-reporte-electores-low ng-if="(ctrl.section.reporteBase || ctrl.section.reporteByElector) && !ctrl.section.viewLocal"    
                    data="ctrl.reporteElectorLow"
                    ver-total-no-asignados="false"
                    ver-porcentage-genero-cpp="true"
                    ver-cantidad-preferencial="false"
                    ></onpe-reporte-electores-low>
                
            </section>
            <section class="columnaDiviTres">                
                <onpe-reporte-mapa ng-show="ctrl.section.reporteBase"
                    mapa="mapa"                    
                    ></onpe-reporte-mapa>
                <onpe-adan-elector ng-show="ctrl.section.viewElector"
                    data="ctrl.elector"                    
                    disabled-elector-vip="true"
                    btn-elector-vip="ctrl.updateElector(status)"
                    ></onpe-adan-elector>
                
                <article ng-show="ctrl.section.viewLocal">                
                    <jsp:include page="/WEB-INF/adan/mantenimiento/local.jsp"/>                               
                </article>                 

                <article ng-show="ctrl.section.filterElector" >
                    <img  src="${pageContext.request.contextPath}/static/img/ima-elector.svg"  class="imagenompletaTotal"></img>
                </article>

                <article ng-show="ctrl.section.filterLocal" >
                    <img  src="${pageContext.request.contextPath}/static/img/ima-local.svg"  class="imagenompletaTotal"></img>
                </article>

                <article ng-show="ctrl.section.filterMesa">
                    <img  src="${pageContext.request.contextPath}/static/img/ima-mesa.svg"  class="imagenompletaTotal"></img>
                </article>
            </section>
            <section class="columnaDiviTres terceraSeccion">
                <article class="articulodeBusqueda">
                <md-radio-group class="radioBuscador" ng-model="ctrl.dataFilter.value" class="md-primary" ng-show="ctrl.section.filter">               
                    <md-radio-button ng-repeat="f in ctrl.filters" ng-model="f.value" ng-value="f.value"                                 
                                     ng-if="f.status" ng-click="ctrl.composer(f, ctrl.const.COMPOSER_FILTER)">[[f.name]]</md-radio-button> 
                </md-radio-group>
                <md-autocomplete class="EstiloInput InputSinError inputWull" ng-show="ctrl.section.filter"
                    md-input-id="autoCompleteItem" 
                    ng-disabled="ctrl.filterType == undefined || ctrl.filterType == 'GENERAL'"
                    md-no-cache="true"
                    md-selected-item="ctrl.selectedItem"            
                    md-search-text="ctrl.searchItem"
                    md-selected-item-change="ctrl.selectedItemChange(item)"            
                    md-items="item in ctrl.querySearchItem(ctrl.searchItem)"
                    md-item-text="item.DISPLAY"            
                    md-min-length="1"             
                    ng-enter="ctrl.getItemsEnter(ctrl.searchItem)"
                    md-clear-button="false"
                    placeholder="[[ctrl.placeholder == null ? 'Seleccione la vista que desee...' : ctrl.placeholder]]">
                    <md-item-template>
                        <span md-highlight-text="ctrl.searchItem" md-highlight-flags="^i">[[item.DISPLAY]]</span>
                    </md-item-template>
                    <md-not-found>
                        <span ng-if="ctrl.viewResult">No se encontraron resultados para "[[ctrl.searchItem]]".</span>
                        <span ng-if="!ctrl.viewResult">Presione ENTER para obtener resultados para "[[ctrl.searchItem]]".</span>
                    </md-not-found>             
                </md-autocomplete>
               
                <jsp:include page="/WEB-INF/adan/step3/filtros.jsp"/>
                
                </article>
                
                <onpe-reporte-local ng-show="ctrl.section.reporteBase || ctrl.section.reporteByLocal" 
                   data="ctrl.repoteLocal"
                   ver-total-local="true" 
                   ver-barra-porcentaje-local="false"
                   ver-crear-local="false" btn-crear-local="ctrl.crearLocal()"
                   ver-locales-incompletos="false" btn-locales-incompletos="" 
                   ver-locales-deshabilitados="false" btn-locales-deshabilitados=""
                   ver-nuevos-distritos="false"
                   ver-total-cpp="true"
                   ></onpe-reporte-local> 
                
                <onpe-reporte-local ng-show="ctrl.section.reporteBase || ctrl.section.reporteByLocal" 
                   data="ctrl.repoteLocal"
                   ver-total-local="false" 
                   ver-barra-porcentaje-local="false"
                   ver-crear-local="true" btn-crear-local="ctrl.crearLocal()" disabled-button-crear-local="true"
                   ver-locales-incompletos="false" btn-locales-incompletos="" 
                   ver-locales-deshabilitados="false" btn-locales-deshabilitados=""
                   ver-nuevos-distritos="false"
                   ver-total-cpp="false"
                   ></onpe-reporte-local> 

               <onpe-reporte-mesa ng-show="ctrl.section.reporteBase || ctrl.section.reporteByMesa" 
                   data="ctrl.reporteMesa"
                   ver-total-mesas="true" 
                   ver-total-mesas-estimadas="true"                   
                   ver-reglas-mesas="true" btn-reglas-mesas="ctrl.openReglas()"              
                   ></onpe-reporte-mesa>                                 

                <md-button ng-show="ctrl.section.viewLocal && ctrl.ubigeoOdpe!=null" class="md-primary md-raised estilosBotonGeneral botonResaltantes" 
                           type="submit" ng-disabled="ctrl.isSubmitLocal">CREAR NUEVO LOCAL
                </md-button>            
                                
                <onpe-adan-step-procedure ng-show="ctrl.section.reporteBase"
                    step="ctrl.stepGeneral"
                    btn-procedure="ctrl.activeProcedure(data)"
                    btn-view="abrirListaDistritos(data)"
                    ></onpe-adan-step-procedure>                          

            </section>
        </form>     
        <footer class="OpcionesFooterGenerales">
            <div class="colum2 text-izq  alineadoIzquieda"> 
                <md-button ng-hide="true" class="md-fab md-primary botonFoter estilosBotonGeneral">
                    <i class="material-icons">&#xE433;</i>
                </md-button>                
            </div>          
            <div class="colum2 text-der alineadoDerecha" ng-show="ctrl.section.viewLocalFooter"> 
                <md-button  class="md-primary estilosBotonGeneral" ng-show="!ctrl.section.viewLocalFooter">
                    <i class="material-icons">&#xE314;</i>
                    Regresar
                </md-button>
                <md-button  class="md-primary estilosBotonGeneral" ng-click="ctrl.continuar()" ng-show="!ctrl.section.viewLocalFooter"> 
                    Continuar
                    <i class="material-icons">&#xE315;</i>
                </md-button> 
                <md-button class="md-primary estilosBotonGeneral" ng-click="ctrl.cancelar()" ng-show="ctrl.section.viewLocalFooter"> 
                    <i class="material-icons">&#xE314;</i>
                    Cancelar
                </md-button>
            </div>
        </footer>  
    </div>
</div>