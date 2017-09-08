
<md-content class="md-padding EspacioTabsSeleccionados">
    <form ng-submit="$event.preventDefault()">        
           
        <md-chips class="etiquetasBuscador">
            <md-chip class="md-button-adan">PERÚ</md-chip>
            <md-chip ng-repeat="chip in ctrl.chipObjs">[[chip.name]]</md-chip>
        </md-chips>  
        
        <md-autocomplete  class="EstiloInput InputSinError inputWull" ng-show="ctrl.section.filter && ctrl.section.filterLow"
            md-input-id="autoCompleteUbigeo"
            ng-show="ctrl.viewUbigeo"
            md-no-cache="true"
            md-selected-item="ctrl.selectedUbigeoItem"            
            md-search-text="ctrl.searchUbigeoItem"
            md-selected-item-change="ctrl.selectedItemUbigeoChange(itemUbigeo)"            
            md-items="itemUbigeo in ctrl.querySearchItemUbigeo(ctrl.searchUbigeoItem)"
            md-item-text="itemUbigeo.DISPLAY"            
            md-min-length="1"   
            ng-enter="ctrl.getItemsUbigeoEnter(ctrl.searchUbigeoItem)"
            md-clear-button="false"
            placeholder="Lista de Distritos...">
            <md-item-template>
                <span md-highlight-text="ctrl.searchUbigeoItem" md-highlight-flags="^i">[[itemUbigeo.DISPLAY]]</span>
            </md-item-template>
            <md-not-found >                
                <span ng-if="ctrl.viewUbigeoResult">No se encontraron resultados para "[[ctrl.searchUbigeoItem]]".</span>
                <span ng-if="!ctrl.viewUbigeoResult">Presione ENTER para obtener resultados para "[[ctrl.searchUbigeoItem]]".</span>
            </md-not-found>           
        </md-autocomplete>                                                     
        
    </form>
</md-content>



