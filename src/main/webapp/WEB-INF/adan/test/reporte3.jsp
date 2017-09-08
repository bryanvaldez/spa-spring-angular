<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<t:master title="report2">       
    
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/map/ammap.js"></script> 
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/map/light.js"></script>
    
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/chart/amcharts.js"></script>    
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/chart/light.js"></script>    
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/chart/serial.js"></script>  
  
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/onpe-reporte-peru.js"></script> 
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/lib/onpe-reporte-peru-dep.js"></script>    
          
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/controller/main/reporteController.js"></script>  
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/service/reporteService.js"></script>   
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/helper/commonUtil.js"></script>   
    
    
            <!-- Main Css-->

    
        <div  ng-controller="reporteController as ctrl" layout="row" layout-wrap>
            <div flex-gt-sm="15" flex="100" style="">

                <onpe-adan-linea-proceso
                    data="1"
                    >
                    
                </onpe-adan-linea-proceso>

            </div>
            <div flex-gt-sm="25" flex="100" style="border: 2px solid black;padding: 10px;">
                <h1 style="color:#8c9eff;font-size:16px;">Componente Electores</h1>
                <onpe-adan-elector  
                    data="dni"
                ></onpe-adan-elector>                               
            </div>            
            <div flex-gt-sm="35" flex="100" style="border: 2px solid black;padding: 10px;">
                <h1 style="color:#8c9eff;font-size:16px;">Componente Electores</h1>
                    <onpe-reporte-mapa 
                        mapa="mapa"                    
                    ></onpe-reporte-mapa> 
            </div>
            <div flex-gt-sm="25" flex="100" style="border: 2px solid black;padding: 10px;">
                <h1 style="color:green;font-size:16px;">Filtros</h1>
                    NO DATA

                
                <h1 style="color:green;font-size:16px;">Componente Asignar</h1>
                <onpe-adan-asignar
                    ubigeo="electorUbigeo"
                    btn-select-local="btnasignar(data)"                    
                ></onpe-adan-asignar>                  

            </div>

            <div flex-gt-sm="100" flex="100" style="border: 2px solid black;padding: 10px;"> 
                <h1 style="color:orange;font-size:16px;">Componente Mesa</h1>
                <onpe-reporte-mesa 
                    data="datamesa"
                    ver-total-mesas="true" 
                    ver-reglas-mesas="true" btn-reglas-mesas=""              
                ></onpe-reporte-mesa> 
                  
            </div>                
                
        </div>
    
    

</t:master>