<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/controller/main/headerController.js"></script>
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/controller/main/documentosController.js"></script>  
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/controller/main/fichaTFinalController.js"></script>
<script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/controller/step1/configuracionController.js"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/main/cabeceraProyecto.css" type="text/css" />  
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/main/opcionAcciones.css" type="text/css" />  
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/step1/configuracion.css" type="text/css" />

<div ng-controller="HeaderController as ctrl">
    <header class="cabeceraGeneral" >
        <h2 class="IdLogotipo">            
            <c:if test="${(PROCESO!='' && PROCESO!=null)}">
                <md-button ng-if="divRepor == null" class="md-icon-button botoCabecara" aria-label="Settings" ng-click="toggleLeft()">
                    <i class="material-icons">&#xE8FE;</i>
                    <md-tooltip>Opciones</md-tooltip>
                </md-button>
            </c:if>
            <a href="<c:url value='/main'/>" style="text-decoration: none;color: #fff;" class="botoCabecara">
                <img  src="${pageContext.request.contextPath}/static/img/logoAdan.svg" class="logoSistemOnpe"></img>    
                 <md-tooltip>Procesos Electorales</md-tooltip>
            </a>
        </h2>
        <h1 ng-class="(ctrl.proceso.nombre.length > 80) ? ' tituloExtrlargo ' : ' '" >[[ctrl.proceso.nombre]]</h1>
        <div class="opcionescabecera">
            <span>${USUARIO_AUTENTICADO}</span>
            
            <md-button href="<c:url value='/logout'/>" class="md-icon-button botoCabecara " aria-label="Settings">
                <i class="material-icons">&#xE879;</i>
                <md-tooltip>Cerrar Sesión</md-tooltip>
            </md-button>
                <img  src="${pageContext.request.contextPath}/static/img/logo-onpe.svg" class="LogoOnpeCabecera"></img>
        </div>
    </header>
    <md-sidenav class="md-sidenav-left" md-component-id="left"
                md-disable-backdrop md-whiteframe="4">
        <md-toolbar class="md-theme-indigo cabeceraAcciones">
            <md-button class="md-icon-button  botoCabecara " aria-label="Settings" ng-click="toggleLeft()" >
                <i class="material-icons">&#xE14C;</i>
            </md-button>
        </md-toolbar>
        <md-content layout-margin class="ListaMenuAcciones">
            <ul>
                <li ><a href=""><md-button aria-label="Use Android" ng-click="openModalConfiguracion()"><i class="material-icons">&#xE869;</i>Configuración</md-button></a></li>
                <li> <div class="divinormal"></div></li>
                <!--<li ><a href=""><md-button aria-label="Use Android" ng-click="openFichaTecnicaEstimada()"><i class="material-icons">&#xE884;</i> Descarga Ficha Técnica Estimada </md-button></a></li>-->
                <li><a href=""><md-button aria-label="Use Android" ng-click="openModalDocumentos()"> <i class="material-icons">&#xE880;</i>Documentos</md-button></a></li>                
                <li> <div class="divinormal"></div></li>
                    <c:if test="${(PERFIL=='1')}">                
                    <li ng-if="ctrl.proceso.estado == 1"><a href=""><md-button ng-click="openHeaderModal('retroceder')"> <i class="material-icons">&#xE15E;</i>Retroceder</md-button></a></li>
                    <li> <div class="divinormal"></div></li>    
                    </c:if>
                <li ng-show="view11"><a href="<c:url value='/reportes'/>"><md-button><i class="material-icons">&#xE14F;</i> Reportes</md-button></a></li>               
                <li ng-show="view11"> <div class="divinormal"></div></li>
                <!--<li><a href =""><md-button aria-label="Use Android" ng-click="openModalGaleriaSoluciones()"> <i class="material-icons">&#xE42E;</i>Galeria de Soluciones</md-button></a></li>   -->                
            </ul>
        </md-content>
    </md-sidenav>   
</div>