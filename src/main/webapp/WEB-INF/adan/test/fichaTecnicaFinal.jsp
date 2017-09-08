<md-dialog aria-label="FICHA TECNICA FINAL" class="modal-form popUpEstilos" ng-controller="fichaTFinalController as ctrl">
    <md-toolbar>
        <div class="md-toolbar-tools">
            <h1>${PROCESO}</h1>            
            <h2>FICHA TÉCNICA FINAL</h2>
            <md-button class="md-icon-button btn-close" ng-click="close()">
                <md-icon aria-label="Close dialog" class="material-icons"><i class="fa fa-times" aria-hidden="true"></i></md-icon>
            </md-button>
        </div>
    </md-toolbar>    

    <md-dialog-content >        
        <div class="md-padding" >



            <div class="SistemaComentatext ng-binding textoResaltanteCuadro">
                <p class="textoSobresaliente">Fecha de la Versión: <b ng-bind="fichaTecnica.fechaVersion | dateFormat2">00/00/0000</b> </p>
                <p class="textoSobresaliente">En base a la resolucion: <b ng-bind="fichaTecnica.resolucion"></b> 
                <md-button  class="btn-confirm estilosBotonGeneral butonpekeAsignado  md-fab " ng-click="downloadArchivo(fichaTecnica.id)"><i class="material-icons">&#xE2C4;</i> </md-button>
                <span ng-bind="fichaTecnica.nombreArchivo"></span> </p>

            </div>


            <div class="divinormal"></div>
            <ul class="UlFichaTecnicaFinal">
                <li><b class="listado">1°</b><span>Tipo de Elección:</span> <strong ng-bind="tipoEleccion.descripcion"> </strong></li>
                <li class="sublistado"><span>Variable</span> <strong  ng-bind="fichaTecnica.nombreCorto"></strong></li>
                <li class="sublistado"><span>Municipales</span> <strong  ng-bind="fichaTecnica.municipalidades"></strong> <strong  ng-bind="tipoEleccion.distrital"></strong></li>
                <li class="sublistado"><span>Autoridades a Elegir</span>      <div class="contenedorRepitAutoridades">              
                    <strong ng-bind="det.cantAutoridad + ' ' + det.descAutoridad" ng-repeat="det in detalle"></strong>     
                    <div>            
                </li>
                <li><b class="listado">2°</b><span>Periodicidad:</span> <strong  ng-bind="periodicidad"></strong></li>  
                <li><b class="listado">3°</b><span>Fecha de la Elección:</span> <strong ng-bind="fichaTecnica.fechaEleccion | dateFormat2"></strong></li>
                <li><b class="listado">4°</b><span>Distritos:</span> <strong>[[fichaTecnica.distritos]]</strong></li>
                <li><b class="listado">5°</b><span>CCPP:</span> <strong>[[fichaTecnica.ccpp]]</strong></li>
                <li><b class="listado">6°</b><span>ODPEs:</span> <strong>[[fichaTecnica.odpes]]</strong></li>
                <li><b class="listado">7°</b><span>Electores Hábiles:</span> <strong>[[fichaTecnica.eh]]</strong></li>
                <li><b class="listado">8°</b><span>Mesas de Sufragio:</span> <strong>[[fichaTecnica.mesas]]</strong></li>
                <li><b class="listado">9°</b><span>Locales de Votación::</span> <strong>[[fichaTecnica.lv]]</strong></li>
            </ul>

        </div>
    </md-dialog-content>
    <md-dialog-actions layout="row" layout-align="end center">  
        <md-button ng-click="downloadWord()" type="submit" class="btn-confirm estilosBotonGeneral ">ABRIR EN WORD</md-button>
        <md-button ng-click="showPDF()" class="btn-confirm estilosBotonGeneral ">ABRIR EN PDF</md-button> 
        <md-button ng-click="downloadExcel()" type="submit" class="btn-confirm estilosBotonGeneral "> <i class="material-icons">&#xE2C4;</i>DESCARGAR EXCEL DE DETALLE</md-button> 
        <!--<md-button type="submit" class="btn-confirm estilosBotonGeneral "> <i class="material-icons">&#xE434;</i>CAPTURA</md-button> -->
    </md-dialog-actions>

</md-dialog>