<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no">
        <title>Sesión Finalizada</title>
        <meta name="author" content="Edgardo Miguel Paredes Mendoza">
        
        <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/404/easeljs-0.6.0.min.js"></script>
        <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/404/tweenjs-0.4.0.min.js"></script>   
        <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/404/movieclip-0.6.0.min.js"></script>   
        <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/404/404.js"></script>   
        <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/404/funciones.js"></script>  
        <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/404/estilos-error.css" type="text/css" />        
    </head>   
    <body onload="FunCuatrocientosCuatro();">
        <img class="logo-onpe" src="${pageContext.request.contextPath}/static/img/logo-onpe.svg">
        <div class="logo-osl-cont">
            <img src="${pageContext.request.contextPath}/static/img/logoAdan.svg">
            <div class="conte">
                <h2>SESIÓN FINALIZADA</h2>                
                <span>La sesión ha expirado, inicie sesión nuevamente.
                <a href="<c:url value='/login'/>">Ir a Login</a>
            </div>
        </div>
        <div class="canvas-element">
            <canvas class="animacion" id="CuatrocientosCuatro"width="1300" height="904" ></canvas>
        </div>
    </body>
</html>
