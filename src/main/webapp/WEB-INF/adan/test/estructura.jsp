<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<t:master title="estructura">
    <!--
      <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/adan.css" type="text/css" media="screen,projection"/>  
      <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/reset_styles.css" type="text/css" media="screen,projection"/>
      <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/adan_responsive.css" type="text/css" media="screen,projection"/>
    -->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/edg.css" type="text/css" media="screen,projection"/> 

    <md-content ng-controller="AppCtrl" md-scroll-y  layout="row" flex layout-md="row"  layout-xs="column"  layout-sm="column"  >

        <div flex="noshrink" layout="row" layout-xs="column"  layout-sm="column"   layout-md="row"  class="contenedorPincipal" >


            <div flex="15"  flex-md="15"  flex-xs="100"  flex-sm="100"  class="listaDePasosMenuOpcional">
<md-list class="md-dense contenedorLineaTiempoAzul" flex>
    <md-list-item class="md-3-line  listaDeLineDeTiempo" ng-repeat="item in LineaTime">
        
        <div class="md-list-item-text " layout="column"  layout-align="space-between center">
            <h3>[[item.icono]]</h3>
            <h4>[[item.NombrePaso]]</h4>
            <h3>[[item.FCfecha]]</h3>
        </div>
        
        <img ng-src="${pageContext.request.contextPath}/[[item.face]]?[[$index]]" class="md-avatar ImagenEstado  " alt="[[item.who]]" />
    </md-list-item>
    <div class="barraLineaTiempo" > 
        <div></div>
        <div class="cargadorBarraTiempo"  style=" height: 80%; " ></div>
    </div>
</md-list>  


            </div>

            <div layout="column" tabindex="-1" role="main" flex aria-hidden="false"   flex-md="85"  flex-xs="100" flex-sm="100" flex="85" >

                <div layout="row" layout-align="center none" flex layout-sm="column" layout-xs="column"  layout-md="column" class="contenedordeTo">




                </div>



                <footer class="pieFooterParteAbajo" layout-xs="row" layout="column" layout-align="center center">
                    <md-button class="md-fab md-primary" md-theme="" aria-label="Use Android">
                        <i  class=" fa fa-download iconoBotonDescargar" aria-hidden="true" ></i>
                    </md-button>
                </footer>

            </div>
        </div>

    </md-content>

    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/test/funcionesSubTab.js"></script> 

</t:master>