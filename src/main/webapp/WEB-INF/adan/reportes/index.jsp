<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<t:master title="Reportes">        

    <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/static/css/reportes/reportes.css" media="screen,projection"/>    
    <script charset="UTF-8" type="text/javascript" src="${pageContext.request.contextPath}/static/js/controller/reportes/reportesController.js"></script>
    <div>
        <div>
            <div id="divReportes" ng-controller="reporteCtrl">
                <div class="contdmoree">
                    <section class="ColumnaFull"  >                

                            <h1 class="tituloPincipal"><b>Reportes</b></h1>
                        <article class="cont-carts" ng-cloak>
                            <div ng-repeat="reporte in reportes"   class="tarjeta_dash" ng-cloak  >
                                <h3 class="tituloTerciario">
                                    <b> [[reporte.etiqueta]]</b>
                                    <i class="material-icons">&#xE24B;</i>
                                </h3>
                                <div  class="cont-tarj"> 
                                    <p class="SistemaComentatext">  [[reporte.descripcion]]  </p>                          
                                    <md-button class="md-fab md-primary botonFoter estilosBotonGeneral" aria-label="" ng-click="generarReportes(reporte.id)" >
                                        <i class="material-icons">&#xE884;</i>
                                    </md-button>
                                </div>

                            </div>
                        </article>
                    </section>



                    <footer class="OpcionesFooterGenerales">
                        <div class="colum2 text-izq  alineadoIzquieda"> 
                            <md-button ng-show="false" class="md-fab md-primary botonFoter estilosBotonGeneral" md-theme="" aria-label="Use Android">
                                <i class="material-icons">&#xE434;</i>
                            </md-button>
                        </div>
                        <div class="colum2 text-der alineadoDerecha"> 

                            <md-button ng-show="true" class="md-primary estilosBotonGeneral" ng-click="back()">
                                <i class="material-icons">&#xE314;</i>
                                Regresar
                            </md-button>
                            <md-button ng-show="false" class="md-primary estilosBotonGeneral" ng-click="next()"> 
                                Continuar
                                <i class="material-icons">&#xE315;</i>
                            </md-button>                                 
                        </div>
                    </footer>

                </div>    
            </div> 
        </div> 
    </div>
</t:master>

