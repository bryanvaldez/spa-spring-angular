<%@tag description="General Layout" pageEncoding="UTF-8"%>
<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %> 
<%@attribute name="title" required="true"%>
<%@attribute name="js" fragment="true"%> 

<!DOCTYPE html>
<html ng-app="app">
    <head>
        <!-- Config html-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no">        
        <!-- CSS-->
        <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/lib/angular-material.min.css" type="text/css" /> 
        <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/lib/font-awesome.min.css" type="text/css" />
        <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/lib/onpeMapReportes.css" type="text/css"/>
        <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/lib/lf-ng-md-file-input.min.css" type="text/css" />
        <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/component/onpe-adan.css" type="text/css" />
         
        
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/css/main/reset_styles.css">
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/css/main/roboto.css" type="text/css">
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/css/main/material-icon.css">        
        <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/main/EstilosGenerales.css" type="text/css" />  
        <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/main/estilosPopUp.css" type="text/css" />  
        
        <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/main/pieOpciones.css" type="text/css" />
        <!-- JS--> 
        <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/angular.min.js"></script>
        <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/angular-aria.min.js"></script>
        <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/angular-animate.min.js"></script>  
        <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/angular-material.min.js"></script>  
        <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/angular-messages.min.js"></script>          
        <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/app.js"></script>
        <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/onpe-reporte.js"   ></script>
        <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/directive/onpe-adan.js"></script>
        <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/directive/tree-grid-directive.js"></script>         
        <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/lf-ng-md-file-input.min.js"></script>                
        <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/moment.min.js"></script>     
        <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/angular-idle.min.js"></script>     
    </head>
    <body class="CuerpoTotalProyecto" ng-cloak>         
        <sec:authorize access="isAuthenticated()">
            <jsp:include page="/WEB-INF/tags/header.jsp"/>         
            <div class="cuerpoProyecto " ng-controller="LineaController as ctrl" ng-cloak>
                <jsp:include page="/WEB-INF/tags/sider.jsp"/>                      
                <div class="contenidoEstandar">
                    <jsp:doBody/>   
                </div>            
            </div>
        </sec:authorize>    
        <sec:authorize access="isAnonymous()">
            
            <jsp:doBody/>
        </sec:authorize>                
    </body>
</html>
