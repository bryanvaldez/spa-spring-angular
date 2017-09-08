<md-dialog aria-label="SOLUCION" class="popUpEstilos">
    <md-toolbar >
        <div class="md-toolbar-tools">
            <h1>${PROCESO}</h1>  
            <h2>Resumen</h2> 
            <md-button class="md-icon-button btn-close" ng-click="close()">
                <md-icon aria-label="Close dialog" class="material-icons"><i class="fa fa-times" aria-hidden="true"></i></md-icon>
            </md-button>
        </div>
    </md-toolbar>    
    <md-dialog-content >      
        <div class="md-padding" >
            <h2 class="tituloSecundario"><b>Ficha técnica actualizada al [[fechaVersion]]</b></h2>
            <table class="TablaEstiloSis  alineadoCentro">
                <thead>
                    <tr>       
                        <th style="width: 120px;" rowspan="2">Tipo de Votación</th>
                        <th ng-if="dataResumenPeru.length > 1" colspan="[[dataResumenPeru.length+1]]" >Nacional</th>       
                        <th ng-if="dataResumenPeru.length === 1">Nacional</th> 
                        <th ng-if="dataResumenExtranjeros.length > 1" colspan="[[dataResumenExtranjeros.length+1]]" >Extranjero</th>       
                        <th ng-if="dataResumenExtranjeros.length === 1">Extranjero</th>
                        <th ng-if="dataResumenPeru.length > 0 && dataResumenExtranjeros.length > 0" style="width: 120px"rowspan="2">Total</th>
                    </tr>
                    <tr>     
                        <th style="width: 120px;" ng-repeat="dataPE in dataResumenPeru">[[dataPE.solucion]]</th> 
                        <th ng-if="dataResumenPeru.length > 1"style="width: 120px">Total Nacional</th>
                        <th style="width: 120px;" ng-repeat="dataEX in dataResumenExtranjeros">[[dataEX.solucion]]</th>
                        <th ng-if="dataResumenExtranjeros.length > 1"style="width: 120px">Total Extranjeros</th>

                    </tr>
                </thead>
                <tbody>
                    <%--
                    <tr >
                        <td ><span>N° Distritos / Ciudades</span></td>   
                        <td ng-repeat="dataPE in dataResumenPeru"><span>[[dataPE.distritos]]</span></td> 
                        <td ng-if="dataResumenPeru.length > 1"><span>[[sumDistritosPE]]</span></td>  
                        <td ng-repeat="dataEX in dataResumenExtranjeros"><span>[[dataEX.ciudades| number:0]]</span></td>
                        <td ng-if="dataResumenExtranjeros.length > 1"><span>[[sumCiudadesEX]]</span></td> 
                        <td ><span>DISTRITOS [[sumDistritosPE]]</span></br><span>CIUDADES [[sumCiudadesEX | number:0]]</span></td> 

                    </tr>--%>
                    <tr >
                        <td ><span>Electores</span></td>   
                        <td ng-repeat="dataPE in dataResumenPeru"><span>[[dataPE.electores| number:0]]</span></td> 
                        <td ng-if="dataResumenPeru.length > 1"><span>[[sumElectoresPE| number:0]]</span></td>  
                        <td ng-repeat="dataEX in dataResumenExtranjeros"><span>[[dataEX.electores| number:0]]</span></td>
                        <td ng-if="dataResumenExtranjeros.length > 1"><span>[[sumElectoresEX| number:0]]</span></td> 
                        <td ng-if="dataResumenPeru.length > 0 && dataResumenExtranjeros.length > 0"><span>[[sumElectoresPE+sumElectoresEX| number:0]]</span></td> 
                    </tr>
                    <tr>
                        <td ><span>Mesas de Sufragio</span></td>   
                        <td ng-repeat="dataPE in dataResumenPeru"><span>[[dataPE.mesas| number:0]]</span></td> 
                        <td ng-if="dataResumenPeru.length > 1"><span>[[sumMesasPE| number:0]]</span></td>  
                        <td ng-repeat="dataEX in dataResumenExtranjeros"><span>[[dataEX.mesas| number:0]]</span></td>
                        <td ng-if="dataResumenExtranjeros.length > 1"><span>[[sumMesasEX| number:0]]</span></td> 
                        <td ng-if="dataResumenPeru.length > 0 && dataResumenExtranjeros.length > 0"><span>[[sumMesasPE+sumMesasEX| number:0]]</span></td> 
                    </tr>
                    <tr >
                        <td ><span>Locales de Votación</span></td>   
                        <td ng-repeat="dataPE in dataResumenPeru"><span>[[dataPE.locales| number:0]]</span></td> 
                        <td ng-if="dataResumenPeru.length > 1"><span>[[sumLocalesPE| number:0]]</span></td>  
                        <td ng-repeat="dataEX in dataResumenExtranjeros"><span>[[dataEX.locales| number:0]]</span></td>
                        <td ng-if="dataResumenExtranjeros.length > 1"><span>[[sumLocalesEX| number:0]]</span></td> 
                        <td ng-if="dataResumenPeru.length > 0 && dataResumenExtranjeros.length > 0"><span>[[sumLocalesPE+sumLocalesEX| number:0]]</span></td> 
                    </tr>
                </tbody>
            </table>
            <br>
            <span>ELECTORES POR ASIGNAR: <b>[[ElectoresAsignar | number:0]]</b></span>
        </div>
    </md-dialog-content>

    <md-dialog-actions layout="row" layout-align="end center"> 
        <md-button type="submit" ng-click="close()" class="btn-confirm estilosBotonGeneral ">ACEPTAR</md-button> 
    </md-dialog-actions>
</md-dialog>