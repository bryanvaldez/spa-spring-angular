<md-dialog aria-label="SOLUCION" class="modal-form popUpEstilos" >
    <md-toolbar >
        <div class="md-toolbar-tools">
            <h1>${PROCESO}</h1>  
            <h2>Lista de Distritos</h2> 
            <md-button class="md-icon-button btn-close" ng-click="close()">
                <md-icon aria-label="Close dialog" class="material-icons"><i class="fa fa-times" aria-hidden="true"></i></md-icon>
            </md-button>
        </div>
    </md-toolbar>    
    <md-dialog-content >      
        <div class="md-padding" >
        <div class="contenedorTablaNormal" ng-if="getListaDistritosAsignados.length > 0">
            <strong > Lista de Distritos Asignados</strong>
        <table style="margin-top:15px" class="TablaEstiloSis ">
            <thead>
                <tr>                                                       
                    <th style="width: 15%;">UBIGEO</th>
                    <th style="width: 25%;">Departamento</th>                            
                    <th style="width: 30%;">Provincia</th>
                    <th style="width: 30%;">Distrito</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="listA in getListaDistritosAsignados">
                    <td style="width: 15%;"><span ng-bind="listA.UBIGEO"></span></td>                            
                    <td style="width: 25%;"><span ng-bind="listA.DEPARTAMENTO"></span></td>
                    <td style="width: 30%;"><span ng-bind="listA.PROVINCIA"></span></td>                            
                    <td style="width: 30%;"><span ng-bind="listA.DISTRITO"></span></td>
                </tr>
            </tbody>
        </table>
        </div>
        
        <div class="contenedorTablaNormal" ng-if="getListaDistritosFaltantes.length > 0">
            <strong> Lista de Distritos Faltantes</strong>
        <table style="margin-top:15px" class="TablaEstiloSis ">
            <thead>
                <tr>                                                       
                    <th style="width: 15%;">UBIGEO</th>
                    <th style="width: 25%;">Departamento</th>                            
                    <th style="width: 30%;">Provincia</th>
                    <th style="width: 30%;">Distrito</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="listB in getListaDistritosFaltantes">
                    <td style="width: 15%;"><span ng-bind="listB.UBIGEO"></span></td>                            
                    <td style="width: 25%;"><span ng-bind="listB.DEPARTAMENTO"></span></td>
                    <td style="width: 30%;"><span ng-bind="listB.PROVINCIA"></span></td>                            
                    <td style="width: 30%;"><span ng-bind="listB.DISTRITO"></span></td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    </md-dialog-content>
    <md-dialog-actions layout="row" layout-align="end center">         
        <md-button type="submit" ng-click="verExcelAsignados()" class="btn-confirm estilosBotonGeneral " ng-if="getListaDistritosAsignados.length > 0">DESCARGAR EXCEL ASIGNADOS</md-button> 
        <md-button type="submit" ng-click="verExcelFaltantes()" class="btn-confirm estilosBotonGeneral " ng-if="getListaDistritosFaltantes.length > 0">DESCARGAR EXCEL FALTANTES</md-button> 
        <md-button type="submit" ng-click="close()" class="btn-confirm estilosBotonGeneral ">ACEPTAR</md-button> 
    </md-dialog-actions>
</md-dialog>