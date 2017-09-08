<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<t:master title="step">
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/test/funcionesSubTab.js"></script> 

<div flex-xs="100" ng-controller="AppCtrl" flex-sm="100"  class="listaDePasosMenuOpcional">
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
            
            
</t:master>