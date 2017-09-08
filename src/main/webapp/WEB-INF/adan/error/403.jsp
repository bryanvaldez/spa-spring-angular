<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no">
        <title>403</title>
        <meta name="author" content="Edgardo Miguel Paredes Mendoza">
        
        <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/error/easeljs-0.6.0.min.js"></script>
        <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/error/tweenjs-0.4.0.min.js"></script>   
        <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/error/movieclip-0.6.0.min.js"></script>   
        <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/error/404.js"></script>   
        <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/error/funciones.js"></script>  
        <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/estilos-error.css" type="text/css" />        
    </head>   
    <body onload="FunCuatrocientosCuatro();">
        <img class="logo-onpe" src="${pageContext.request.contextPath}/static/img/logo-onpe.svg">
        <div class="logo-osl-cont">
            <img src="${pageContext.request.contextPath}/static/img/logoAdan.svg">
            <div class="conte">
                <h1>403</h1>
                <h2>ACCESO DENEGADO/PROHIBIDO</h2>
                <span>El sitio web rechazó mostrar esta página web</span>
                <a href="<c:url value='/login'/>">Volver</a>
            </div>
        </div>
        <div class="canvas-element">
            <canvas class="animacion" id="CuatrocientosCuatro"width="1300" height="904" ></canvas>
        </div>
    </body>
</html>
