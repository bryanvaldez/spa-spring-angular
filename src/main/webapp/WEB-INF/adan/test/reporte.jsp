<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<t:master title="report">       
    
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
    
        <div  ng-controller="reporteController as ctrl" layout="row" layout-wrap>
            <div flex-gt-sm="30" flex="100" style="border: 2px solid black;padding: 10px;">
                
                <h1 style="color:#12a537;font-size:16px;">Componente historial</h1> 
                
              
            <h1 style="color:red;font-size:16px;">Componente Electores</h1>                
            <onpe-reporte-electores
                data="dataElector"
                active-graphic="true"
                ver-total-electores="true"
                ver-porcentage-genero="true"
                ver-cantidad-preferencial="true"                    
                ver-total-electores-grafico="true"                    
                ver-cantidad-temporal="true"
            ></onpe-reporte-electores>                           
               

            </div>
            <div flex-gt-sm="40" flex="100" style="border: 2px solid black;padding: 10px;">
                <h1 style="color:#8c9eff;font-size:16px;">Componente Electores</h1>
                            
                    <onpe-reporte-mapa 
                        mapa="mapa"                    
                    ></onpe-reporte-mapa>  
            </div>
            <div flex-gt-sm="30" flex="100" style="border: 2px solid black;padding: 10px;">
                <h1 style="color:green;font-size:16px;">Filtros</h1>
                    NO DATA

                
                <h1 style="color:green;font-size:16px;">Componente Asignar</h1>
                
                <onpe-reporte-local 
                    data="datalocal"
                    ver-total-local="true" 
                    ver-barra-porcentaje-local="true"
                    ver-crear-local="true" btn-crear-local=""
                    ver-locales-incompletos="true" btn-locales-incompletos="" 
                    ver-locales-deshabilitados="true" btn-locales-deshabilitados=""
                    ver-nuevos-distritos="true"
                    ver-total-cpp="true"
                ></onpe-reporte-local>                   
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