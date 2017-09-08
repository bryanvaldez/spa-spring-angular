<md-dialog aria-label="DOCUMENTOS" class="modal-form popUpEstilos" ng-controller="documentosController as ctrl">
    <md-toolbar>
        <div class="md-toolbar-tools">
            <h1>${PROCESO}</h1>            
            <h2>DOCUMENTOS</h2>
            <md-button class="md-icon-button btn-close" ng-click="close()">
                <md-icon aria-label="Close dialog" class="material-icons"><i class="fa fa-times" aria-hidden="true"></i></md-icon>
            </md-button>
        </div>
    </md-toolbar>    
    <md-dialog-content  class="md-padding">      
        <h2  class="tituloSecundario"><b>Reglas</b></h2>
        <div class="contenedorTablaNormal">
            <table class="TablaEstiloSis">
                <thead>
                    <tr>
                        <th style="width: 5%;" class="rownum">N°</th>                            
                        <th style="width: 40%;" class="space">Nombre del Documento</th>
                        <th style="width: 25%;">N° Resolución</th>                            
                        <th style="width: 20%;">Fecha de Carga</th>
                        <th style="width: 10%;"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="doc in docReglas">
                        <td style="width: 5%;" class="rownum"><span ng-bind="$index + 1"></span></td>                            
                        <td style="width: 40%;" class="space"><span ng-bind="doc.nombre"></span></td>
                        <td style="width: 25%;"><span ng-bind="doc.resolucion"></span></td>                            
                        <td style="width: 20%;"><span>[[ doc.fechaCarga | dateFormat2 ]]</span></td>
                        <td style="width: 10%;">
                <md-button  class="md-fab butonpekeAsignado md-primary estilosBotonGeneral"  ng-click="downloadArchivo('reglas', doc.id)" >
                    <i class="material-icons">&#xE8B6;</i>
                </md-button>
                </td>                                                                                    
                </tr>
                </tbody>
            </table>
        </div>
        <h2 class="tituloSecundario"><b>Fichas Técnicas</b></h2>
        <div class="contenedorTablaNormal">
            <table class="TablaEstiloSis">
                <thead>
                    <tr>
                        <th style="width: 5%;">N°</th>                            
                        <th style="width: 40%;">Nombre del Documento</th>
                        <th style="width: 25%;">N° Resolución</th>                            
                        <th style="width: 20%;">Fecha de Carga</th>
                        <th style="width: 10%;"></th>                                                                                    
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="fichasT in fichasTecnicas">
                        <td style="width: 5%;" class="rownum"><span ng-bind="$index + 1"></span></td>                            
                        <td style="width: 40%;" class="space"><span ng-bind="fichasT.nombreArchivo"></span></td>
                        <td style="width: 25%;"><span ng-bind="fichasT.resolucion"></span></td>                            
                        <td style="width: 20%;"><span>[[ fichasT.fechaArchivo | dateFormat2 ]]</span></td>
                        <td style="width: 10%;">
                <md-button  class="md-fab butonpekeAsignado md-primary estilosBotonGeneral"  ng-click="downloadArchivo('fichaTecnica', fichasT.id)" >
                    <i class="material-icons">&#xE8B6;</i>
                </md-button>
                </td>                                                                                    
                </tr>
                </tbody>
            </table>
        </div>
    </md-dialog-content>
    <md-dialog-actions layout="row" layout-align="end center">
        <md-button ng-click="close()" class="btn-confirm estilosBotonGeneral ">ACEPTAR</md-button> 
    </md-dialog-actions> 
</md-dialog>