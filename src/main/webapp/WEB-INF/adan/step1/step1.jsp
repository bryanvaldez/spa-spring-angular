<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<t:master title="step1"> 

    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/controller/step1/step1.js"></script>              
    
    <div class="contenidoEstandar" ng-controller="step1Ctrl">
        <div id="divConfiguracion" ng-if="!showReglas.isShowReglas() && !showFicha.isShowFicha()" >   
            <jsp:include page="/WEB-INF/adan/step1/configuracion.jsp"/>
        </div>   

        <div id="divReglas" ng-if="showReglas.isShowReglas()" >   
            <jsp:include page="/WEB-INF/adan/step1/reglas.jsp"/>
        </div>                        

        <div id="divFichas" ng-if="showFicha.isShowFicha()" >   
            <jsp:include page="/WEB-INF/adan/step1/ficha.jsp"/>
        </div>
    </div>

</t:master>