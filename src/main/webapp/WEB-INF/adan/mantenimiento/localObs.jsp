
    <article>
        <fieldset disabled ="disabled">
        <div class="contenidoTituloMantenimiento EstadoOkMantenimiento"> <!-- Otro Estado = EstadoErrorMantenimiento -->
            <md-input-container ng-class="md-padding" >
                <label for="label">Nombre</label>                            
                <input name='C_NOMBRE' ng-model="ctrl.local.C_NOMBRE" required uppercased letters-and-number2 maxlength="100" ng-maxlength="100">
                <div ng-messages="localForm.C_NOMBRE.$error">
                    <div ng-message="required">Campo Requerido</div>                                            
                </div>
            </md-input-container>                                                   
            <md-input-container  ng-if="!ctrl.isEditSolucion" class="SeccionBotonesTituloRecuadro">
                <md-button type="sumbit " class=" md-fab md-primary botonFoter estilosBotonGeneral " ng-disabled="true">
                <i class="material-icons">&#xE161;</i>
                </md-button>
               
            </md-input-container>
        </div>         
        <div class="ContenedorMantenimientoCard EstadoOkMantenimiento">
            <md-tabs md-dynamic-height md-border-bottom>
                <md-tab label="ID: [[ctrl.local.C_CODIGO]]">
                    <md-content class="md-padding">
                        <div class="contenedorshishtStandar"> 
                            <label>Deshabilitado</label>
                            <md-switch ng-disabled="true" ng-model="ctrl.local.B_ESTADO" aria-label="status" layout-align="center"></md-switch>
                            <label>Habilitado</label>
                        </div>  
                        <h2 class="tituloSecundario"><b>DATOS</b></h2>

                        <md-input-container class="EstiloInput InputSinError inputmedio">
                            <label>Id Local</label>                                        
                            <input name='C_CODIGO' ng-model="ctrl.local.C_CODIGO" valid-number maxlength="4" minlength="4" ng-maxlength="4" ng-minlength="4" required ng-disabled="!ctrl.isEditSolucion">
                            <div ng-messages="localForm.C_CODIGO.$error">
                                <div ng-message="required">Campo Requerido.</div>
                                <div ng-message="minlength">Ingrese 4 dígitos.</div>
                            </div>                            
                        </md-input-container>                        
                                                
                        <div class="colum2Card">
                            <md-button ng-click="ctrl.menos()" class="md-fab butonpekeAsignado md-primary estilosBotonGeneral" ng-disabled="true" >
                                <i class="material-icons">&#xE15B;</i>
                            </md-button>
                            <md-input-container class="EstiloInput InputSinError  alineadoCentro inputPequerespo">
                                <label>Mesas</label>                                        
                                <input name='N_MESAS_ACTUALIZADAS' ng-model="ctrl.local.N_MESAS_ACTUALIZADAS" valid-number required maxlength="3" ng-maxlength="3" ng-disabled="true">
                                <div ng-messages="localForm.N_MESAS_ACTUALIZADAS.$error">
                                    <div ng-message="required">Campo Requerido</div>                                            
                                </div>                            
                            </md-input-container>   
                            <md-button ng-click="ctrl.mas()" class="md-fab butonpekeAsignado md-primary estilosBotonGeneral" ng-disabled="true" >
                                <i class="material-icons">&#xE145;</i>
                            </md-button>
                        </div>
                        
                        <md-input-container class="EstiloInput InputSinError inputfull" >
                            <label>Dirección</label>                                        
                            <input name='C_DIRECCION' ng-model="ctrl.local.C_DIRECCION" uppercased letters-and-number>
                            <div ng-messages="localForm.C_DIRECCION.$error">
                                <div ng-message="required">Campo Requerido</div>                                            
                            </div>
                        </md-input-container>   
                        <md-input-container class="EstiloInput InputSinError inputfull" >
                            <label>Referencia</label>                                        
                            <input name='C_REFERENCIA' ng-model="ctrl.local.C_REFERENCIA" uppercased letters-and-number>
                            <div ng-messages="localForm.C_REFERENCIA.$error">
                                <div ng-message="required">Campo Requerido</div>                                            
                            </div>
                        </md-input-container>   
                        <h4 class="tituloCuarto">Coordenadas</h4>
                        <md-input-container class="EstiloInput InputSinError inputmedio" >
                            <label>Latitud</label>
                            <input name='N_LATITUD' ng-model="ctrl.local.N_LATITUD" valid-coordenadas maxlength="18" ng-maxlength="18">
                            <div ng-messages="localForm.N_LATITUD.$error">
                                <div ng-message="required">Campo Requerido</div>                                            
                            </div>
                        </md-input-container>   
                        <md-input-container class="EstiloInput InputSinError inputmedio" >
                            <label>Longitud</label>
                            <input name='N_LONGITUD' ng-model="ctrl.local.N_LONGITUD" valid-coordenadas maxlength="18" ng-maxlength="18">
                            <div ng-messages="localForm.N_LONGITUD.$error">
                                <div ng-message="required">Campo Requerido</div>                                            
                            </div>
                        </md-input-container>   

                        <md-checkbox ng-disabled="true" ng-model="ctrl.local.B_CCPP" aria-label="Checkbox 1" class="CheckCentroPo" ng-click="ctrl.toggleCCPP(ctrl.local.B_CCPP)">
                            Centro Poblado
                        </md-checkbox>
                        <md-input-container class="EstiloInput InputSinError ReferenciaCentroPoblado" ng-if="ctrl.isVisibleCCPP">
                            <label>Nombre del Centro Poblado</label>
                            <input name='C_CCPP' ng-model="ctrl.local.C_CCPP" required="!ctrl.isVisibleCCPP" uppercased letters-and-number maxlength="100" ng-maxlength="100">
                            <div ng-messages="localForm.C_CCPP.$error">
                                <div ng-message="required">Campo Requerido</div>                                            
                            </div>
                        </md-input-container>   

                    </md-content>
                </md-tab>
                                
                <md-tab label="Mesas: [[ctrl.mesas.length]]" ng-hide="!ctrl.isEditSolucion">
                    <md-content class="md-padding">
                        <md-checkbox aria-label="Select All" ng-if="ctrl.mesas.length != 0"
                                     ng-checked="ctrl.isChecked()"                                     
                                     ng-click="ctrl.toggleAll()" ng-disabled="true">
                            <span ng-if="ctrl.isChecked()">Des-</span>Marcar TODAS las Mesas
                        </md-checkbox>
                        <div ng-if="ctrl.mesas.length === 0">
                            No se encontraron mesas para este Local...
                        </div>                        
                    </md-content>
                    <md-content class="md-padding">                                                                        
                        <div class="TarjetiaNMesa" ng-repeat="mesa in ctrl.mesas">
                            <h2>[[mesa.MESA]]</h2>                            
                            <md-checkbox ng-checked="ctrl.exists(mesa.MESA, ctrl.asignarReasignar)" ng-click="ctrl.toggle(mesa.MESA, ctrl.asignarReasignar)" 
                                         aria-label="Checkbox" ng-disabled="true"></md-checkbox>
                            <span>Electores: <b>[[mesa.ELECTORES]] / [[mesa.TOTAL]]</b></span>
                            <div class="imgSolu">
                                <img ng-src="${pageContext.request.contextPath}[[mesa.RUTAIMAGEN]]">
                            </div>                            
                        </div>                                    

                    </md-content>
                </md-tab>
            </md-tabs>
        </div>
                            </fieldset>
    </article>

    <article>   
        <h2 class="tituloSecundario"<b>[[ctrl.tittle]]</h2>
        <div class="alineadoCentro">
            
            <md-fab-speed-dial md-open="ctrl.isOpen" md-direction="right"
                                   ng-class="ctrl.selectedMode" class="butonOpcionDesplegable"
                                   ng-if="ctrl.isEditSolucion">
                <md-fab-trigger>
                    <md-button aria-label="menu" class="md-fab md-warn agregarSolucionLocal">
                        <i class="material-icons" ng-if="ctrl.itemDial.rutaImagen === undefined">&#xE145;</i>                        
                        <img ng-src="${pageContext.request.contextPath}[[ctrl.itemDial.rutaImagen]]" ng-if="ctrl.itemDial.rutaImagen != undefined">
                    </md-button>
                    <div class="contDatosSolucionLocalReasig" name="itemDial.alias">
                        <span>[[ctrl.itemDial.alias]]</span> 
                    </div>                                
                </md-fab-trigger>

                <md-fab-actions>
                    <div ng-repeat="i in ctrl.soluciones">                                    
                        <md-button aria-label="[[i.alias]]" class="md-fab md-raised md-mini"
                                   ng-click="ctrl.selectedItemDial(i)">
                            <md-tooltip md-direction="[[i.alias]]" md-visible="tooltipVisible" md-autohide="true">
                                [[i.alias]]
                            </md-tooltip>                                        
                            <img ng-src="${pageContext.request.contextPath}[[i.rutaImagen]]">
                        </md-button>
                    </div>
                </md-fab-actions>
            </md-fab-speed-dial>

            <md-fab-speed-dial class="butonOpcionDesplegable " ng-class="ctrl.selectedMode" ng-if="!ctrl.isEditSolucion" >
                <md-fab-trigger ng-repeat="i in ctrl.soluciones" class=" contenedorSolucionesLoccalOpciones">
                    <md-button aria-label="menu" class="md-fab md-warn agregarSolucionLocal">                        
                        <img ng-src="${pageContext.request.contextPath}[[i.rutaImagen]]">
                    </md-button>
                    <div class="contDatosSolucionLocalReasig" name="i.alias">
                        <span>[[i.alias]]</span>                         
                    </div>                                
                </md-fab-trigger>                
            </md-fab-speed-dial> 

        </div>
    </article>   