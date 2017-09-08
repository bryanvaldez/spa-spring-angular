<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/controller/main/lineaController.js"></script>  
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/main/LineaTiempo.css" type="text/css" />  
<section class="pasos_a_seguir" ng-if="ctrl.flag">
    <div class="paso-a-cargar">

       <div class="limiteDeCarga-pasos">
        <div class="barra-pasos" style="height:[[ctrl.linea]]%"></div>
        </div>
    
    </div>
    <ul class="ListadePasos">
     
        <li ng-class="{'pasoFaltante': item.N_ESTADO == 0,'pasoCompleto':item.N_ESTADO == 1,'pasoActual':item.N_ESTADO == 2}" ng-repeat="item in ctrl.modules| orderBy:'N_ORDEN'">
            [[item.C_NOMBRE_MODULO]]
        </li>
    </ul>                   
</section>
