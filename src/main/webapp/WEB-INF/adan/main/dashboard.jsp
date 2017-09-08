<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<t:master  title="dashboard">             
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/directive/dashboard.js"></script>

    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/procedure/easeljs-0.6.0.min.js"></script>    
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/procedure/tweenjs-0.4.0.min.js"></script>  
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/procedure/movieclip-0.6.0.min.js"></script>    
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/procedure/lepaAnimacion.js"></script>     
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/procedure/animacionProcedure.css" type="text/css" />        


    <div class="contenidoEstandar" ng-controller="onpeComposer as ctrl" ng-cloak>  
        <div class="cargandoGeneralAnimacion" style="height: 100%;" ng-show="ctrl.option.N_PROCEDIMIENTO != null">
            <section>
                <canvas id="CanvasPreCarga" width="650" height="400"></canvas>
            </section>            
            <span class="porsentajeAvanceAnimacion">[[ctrl.procedure.message]]</span>
        </div>
        <div ng-if="ctrl.option.N_ORDEN == 1" ng-cloak>   
            <jsp:include page="/WEB-INF/adan/step1/configuracion.jsp"/>
        </div>   
        <div ng-if="ctrl.option.N_ORDEN == 2" ng-cloak>   
            <jsp:include page="/WEB-INF/adan/step1/reglas.jsp"/>	 
        </div>                        
        <div ng-if="ctrl.option.N_ORDEN == 3" ng-cloak>   
            <jsp:include page="/WEB-INF/adan/step1/ficha.jsp"/>
        </div>        
        <div ng-if="ctrl.option.N_ORDEN == 4" ng-cloak>   
            <jsp:include page="/WEB-INF/adan/step2/carga.jsp"/>
        </div>
        <div ng-if="ctrl.option.N_ORDEN == 5" ng-cloak>   
            <jsp:include page="/WEB-INF/adan/step2/asignacionSolucion.jsp"/>
        </div>
        <div ng-if="ctrl.option.N_ORDEN == 6" ng-cloak>   
            <jsp:include page="/WEB-INF/adan/step3/main.jsp"/>
        </div>
        <div ng-if="ctrl.option.N_ORDEN == 7" ng-cloak>   
            <jsp:include page="/WEB-INF/adan/step7/main.jsp"/>
        </div>        
        <div ng-if="ctrl.option.N_ORDEN == 8" ng-cloak>   
            <jsp:include page="/WEB-INF/adan/step8/main.jsp"/>
        </div>  
        <div ng-if="ctrl.option.N_ORDEN == 9" ng-cloak>
            <jsp:include page="/WEB-INF/adan/step9/main.jsp"/>
        </div> 
        <div ng-if="ctrl.option.N_ORDEN == 10" ng-cloak>
            <jsp:include page="/WEB-INF/adan/step10/main.jsp"/>
        </div> 
        <div ng-if="ctrl.option.N_ORDEN == 11" ng-cloak>
            <jsp:include page="/WEB-INF/adan/step11/main.jsp"/>
        </div> 
        <div ng-if="ctrl.option.N_ORDEN == 12" ng-cloak>
            <jsp:include page="/WEB-INF/adan/step12/main.jsp"/>
        </div> 
        <div ng-if="ctrl.option.N_ORDEN == 13" ng-cloak>
            <jsp:include page="/WEB-INF/adan/step13/main.jsp"/>
        </div>   
        <div ng-if="ctrl.option.N_ORDEN == 14" ng-cloak>
            <jsp:include page="/WEB-INF/adan/step14/main.jsp"/>
        </div>         
    </div>      
</t:master>  