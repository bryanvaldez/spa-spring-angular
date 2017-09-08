<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/controller/step2/solucionController.js"></script>
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/service/reporteService.js"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/component/treeGrid.css" type="text/css" media="screen,projection"/>         
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/step1/asigSoluciones.css" type="text/css" media="screen,projection"/>       
<div ng-controller="solucionCtrl as ctrl">
    <div class="contdmoree" >
        <section class="ColumnaFull" >
            <article class="parteCompleta">
                <div class="estiloTarjeta">
                    <div class="titulo-treetable-solucion">
                        <div class="contenedorAsignacionSolucionario">
                            <h1 class="tituloPincipal"><b>Asignación de Soluciones Tecnológicas</b>
                            </h1>
                            <md-button ng-disabled="true" ng-click="asignarSolucion()"  class="md-primary estilosBotonGeneral  botonabsoluto">                                
                                Asignar Solución
                            </md-button>
                            <span class="mensajeError" ng-if="mensajeError !== ''">[[mensajeError]]</span>
                            <div class="filtroBuscardorTabla">
                                <span >Tipo:</span>
                                <md-input-container  class="EstiloInput InputSinError" >                                  
                                    <md-select aria-label="SelectOpcion" ng-disabled="mostrarFiltros" ng-change="cambiarFiltro()" ng-model="opcion">
                                        <md-option ng-value="1">TODOS</md-option>
                                        <md-option ng-value="2">CCPP</md-option>
                                        <md-option ng-value="3">NO CCPP</md-option>
                                    </md-select>                                   
                                </md-input-container>
                                <span >Estado:</span>
                                <md-input-container class="EstiloInput InputSinError" >                                  
                                    <md-select aria-label="SelectEstado" ng-disabled="mostrarFiltros" ng-change="cambiarFiltroAsignados()" ng-model="estado">
                                        <md-option ng-value="1">TODOS</md-option>
                                        <md-option ng-value="2">ASIGNADOS</md-option>
                                        <md-option ng-value="3">NO ASIGNADOS</md-option>
                                    </md-select>                                   
                                </md-input-container>
                                <span >Solución:</span>
                                <md-input-container class="EstiloInput InputSinError" >                                      
                                    <md-select  aria-label="SelectTipo" ng-disabled="ocultarFiltroSolucion"  ng-change="cambiarFiltroSolucion()" ng-model="filtroSol" required>
                                        <md-option ng-value="0">TODOS</md-option>
                                        <md-option ng-repeat="tipoSol in tipoSolucion" ng-value="tipoSol.id" >
                                            <em>[[tipoSol.Nombre]]</em>
                                        </md-option>
                                    </md-select>                                                                     
                                </md-input-container>  
                                <md-autocomplete class="EstiloInput InputSinError inputWull buscarFull" 
                                                 md-input-id="autoCompleteItem"                                                 
                                                 md-no-cache="true"
                                                 md-selected-item="ctrl.selectedItem"            
                                                 md-search-text="ctrl.searchItem"
                                                 md-selected-item-change="selectedItemChange(item)"            
                                                 md-items="item in querySearchItem(ctrl.searchItem)"
                                                 md-item-text="item.DISPLAY"            
                                                 md-min-length="2"             
                                                 ng-enter="getItemsEnter(ctrl.searchItem)"
                                                 md-clear-button="true"
                                                 placeholder="Buscar Local de Votación"
                                                 md-search-text-change="restaurarAutocomplete(ctrl.searchItem)">
                                    <md-item-template>
                                        <span md-highlight-text="ctrl.searchItem" md-highlight-flags="^i">[[item.DISPLAY]]</span>
                                    </md-item-template>
                                    <md-not-found>
                                        <span  >Presione ENTER para obtener resultados para "[[ctrl.searchItem]]".</span>               
                                    </md-not-found>           
                                </md-autocomplete>
                            </div>                                                           
                            <tree-grid ng-if="ctrl.searchItem===''" ng-animate-disabled tree-data="treetable" col-defs="col_defs"
                                       tree-control="tree_tipo_solucion" on-select="getContenido(branch)" expand-on="expanding_property" expand-level="2" >                   
                            </tree-grid>                            
                            <tree-grid ng-if="ctrl.searchItem!==''" ng-animate-disabled tree-data="treetable" col-defs="col_defs"
                                       tree-control="tree_tipo_solucion" on-select="getContenido(branch)" expand-on="expanding_property" expand-level="5" >                   
                            </tree-grid>
                            <div ng-if="treetable.length === 0" layout="row" layout-sm="column" layout-align="space-around">
                                <span>No se encuentra registro de locales.</span>
                            </div>
                        </div>
                        <div class="card-asignar" >
                            <h3 class="tituloTerciario">Soluciones Tecnológicas</h3>
                            <span class="TextsuperiorSolucion">Locales de Votación</span>
                                <b ng-if="mostrarTotal" class="text-total">[[totalAsignados]] / [[total]]</b>
                                <b ng-if="!mostrarTotal" class="text-total">[[cantidadLocalesSolucionTotal]]</b>
                                </span>
                            <div layou="column" class="card-asignacion-solucion"> 
                                <md-card ng-click="cambiarOpcion(solucion.id); habilitar();" ng-class="solucion.Select === 1 ? 'card-solucion-select' : 'card - solucion'" flex ng-repeat="solucion in tipoSolucion">
                                    <div class="barra-titulo-card"></div>
                                    <div class="capsule-card">
                                        <div layout="row" layout-align="space-around center">
                                            <img width="70px" ng-src="${pageContext.request.contextPath}[[solucion.Imagen]]">                                           
                                            <span class="titulo-card">[[solucion.Nombre]]</span>
                                            <span class="porcentaje-completados">[[solucion.Porcentaje]]%</span>
                                        </div>  
                                        <div class="tabla-card">
                                            <div ng-if="opcion === '3' || opcion === '1'" >
                                                <div class="alineadoIzquieda colum2 colSetentapor ">
                                                    <span class="SistemaComentatext"> Locales No CCPP</span> 
                                                </div>  
                                                <div class="alineadoDerecha  colum2 textoSobresaliente coltrenintapor">
                                                    <span class="SistemaComentatext"> [[solucion.noccpp]]</span> 
                                                </div>                                    
                                            </div>                                    
                                            <div ng-if="opcion === '2' || opcion === '1'"  class="collapse">                                
                                                <div class="alineadoIzquieda colum2 colSetentapor">
                                                    <span class="SistemaComentatext">Locales CCPP</span>                                    
                                                </div> 
                                                <div class="alineadoDerecha textoSobresaliente colum2 coltrenintapor">
                                                    <span class="SistemaComentatext">[[solucion.ccpp]]</span>                                    
                                                </div>                                    
                                            </div>  
                                        </div> 
                                </md-card> 
                            </div>
                        </div>
                    </div>
            </article>
        </section>
        <footer class="OpcionesFooterGenerales">
            <div class="colum2 text-izq  alineadoIzquieda"> 
                <md-button ng-hide="true" class="md-fab md-primary botonFoter estilosBotonGeneral">
                    <i class="material-icons">&#xE433;</i>
                </md-button>
            </div>
            <div class="colum2 text-der alineadoDerecha">                
                <md-button ng-disabled="true" class="md-primary estilosBotonGeneral" ng-click="siguiente()"> 
                    Continuar
                    <i class="material-icons">&#xE315;</i>
                </md-button>                 
            </div>
        </footer>
    </div>    
</div>                

