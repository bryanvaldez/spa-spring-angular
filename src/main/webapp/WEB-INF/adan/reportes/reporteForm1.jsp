<md-dialog aria-label="FILTROS" class="modal-form popUpEstilos">
    <md-toolbar>
        <div class="md-toolbar-tools">
            <h1>Filtros</h1>            
            <h2>SELECCIONE FILTROS</h2>
            <md-button class="md-icon-button btn-close" ng-click="close()">
                <md-icon aria-label="Close dialog" class="material-icons">close</md-icon>
            </md-button>
        </div>
    </md-toolbar>
    <form name="userForm" ng-submit="submit(1)" > 
        <md-dialog-content>   
            <h2 class="tituloSecundario"><b>Filtros</b></h2>
            <span class="SistemaComentatext">Espacio para Filtros</span>            
        </md-dialog-content>
        <md-dialog-actions >        
            <md-button ng-click="close()" class="btn-cancel estilosBotonGeneral">CANCELAR</md-button>
            <md-button type="submit" class="btn-confirm estilosBotonGeneral">EXPORTAR</md-button>
        </md-dialog-actions>
    </form>          
</md-dialog>