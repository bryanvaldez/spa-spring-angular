<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/controller/step1/configuracionController.js"></script>  
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/service/step1/configuracionService.js"></script> 
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/step1/configuracion.css" type="text/css" />

<div ng-controller="configuracionController as ctrl" >

    <form name="configForm" ng-submit="configForm.$valid && submitConfig()" novalidate > 
        <section class="ColumnaFull">
            <article class="parteCompleta">
                <div class="estiloTarjeta">
                    <h1 class="tituloPincipal"><b>CONFIGURACIÓN</b></h1>
                    <h2 class="tituloSecundario"><b>Configuración Preferencial</b></h2>

                    <div class="ParteDividiaPreferencial divisionVerticalDerecha" > 
                        <p class="alineadoIzquieda SistemaComentatext" >[[config[0].descripcion]]</p>
                        <md-slider class="slidernumereoVisibleSiempre" flex="90" md-discrete  step="1" min="[[rangoEdad[1].nCodigo]]" max="[[rangoEdad[0].nCodigo]]" aria-label="rating" ng-model="config[0].dato" ></md-slider>
                    </div>

                    <div class="diviverticalPeque"> </div>

                    <div class="ParteDividiaPreferencial postSeparador"> 
                        <p class="alineadoIzquieda SistemaComentatext">[[config[1].descripcion]]</p>
                        <div layout="row" layout-wrap flex class="contenedorSelectcionOrigenDatos">
                            <div flex="50" ng-repeat="item in config[1].dato">
                                <md-checkbox ng-checked="item.estado" ng-click="checkC2(item)" class="md-hue-7" ng-disabled="item.isDisabled">
                                    [[item.nombre]] <span ng-if="exists(item, selected)"></span>
                                </md-checkbox>
                            </div>
                        </div>
                    </div>

                    <div class="divinormal"> </div>

                    <div class="ParteDividiaPreferencial">
                        <h2 class="tituloSecundario"><b>[[config[2].descripcion]]</b></h2>
                        <div layout="row" ng-repeat="item in config[2].dato">
                            <md-input-container class="md-block"  flex="90">

                                <label class="descriptioLabel"ng-show="false" >[[item.nombre]]</label>
                                <input name="cantidad_[[$index]]" ng-model="item.valor" ng-change="changeCantidadElectores($index,item.valor)" autocomplete="off" valid-number maxlength="4" ng-maxlength="4" required>
                                <div ng-messages="configForm['cantidad_'+$index].$error">
                                    <div ng-message="required">Campo requerido.</div>
                                </div>
                            </md-input-container>
                        </div> 
                    </div>
                    <div class="diviverticalPeque"> </div>
                    <div class="ParteDividiaPreferencial">
                    </div>
                </div>
            </article>
        </section>
        <footer class="OpcionesFooterGenerales">
            <div class="colum2 text-izq  alineadoIzquieda">
                <!--<md-button class="md-fab md-primary botonFoter estilosBotonGeneral" md-theme="" >
                    <i class="material-icons">&#xE434;</i>
                </md-button>-->
            </div>
            <div class="colum2 text-der alineadoDerecha">     
                <md-button class="md-primary estilosBotonGeneral" type="submit" ng-disabled="isSaving || !configForm.$valid || ctrl.procesoStatus != '1'"> 
                    Continuar
                    <i class="material-icons">&#xE315;</i>
                </md-button>      
            </div>
        </footer>       
    </form>
</div>   

