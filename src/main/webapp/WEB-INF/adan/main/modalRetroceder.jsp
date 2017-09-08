<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<md-dialog aria-label="RETROCEDER" class="modal-form popUpEstilos">    
    <md-toolbar>
        <div class="md-toolbar-tools">
            <h1>${PROCESO}</h1>            
            <h2>RETROCEDER</h2>
            <md-button class="md-icon-button btn-close" ng-click="close()">
                <md-icon aria-label="Close dialog" class="material-icons"><i class="fa fa-times" aria-hidden="true"></i></md-icon>
            </md-button>
        </div>
    </md-toolbar>    
    <div >
        <md-dialog-content >      
            <div class="md-padding">

                <h3  class="tituloSecundario">Opciones de retroceso </h3>
                <p class="SistemaComentatext">Seleccione a que opción desea Retroceder:</p>


                <ul class="listaRetro" >
                    <li ng-repeat="opt in options" >                                

                        <c:set var="temp" value="[[options[$index-1].N_MODULO_PK]]"/>                                                                                       

                        <div  ng-if="opt.N_MODULO_PK != ${temp} " class="ListadoAparecer">

                            <md-button data-toggle="collapse" href="#collapse[[opt.N_MODULO_PK]]" class=" estilosBotonGeneral ButonPrincipal  md-primary ">
                                <span class="spanBotonGrande">  <b>[[opt.C_NOMBRE_MODULO]]</b>   </span>
                                <i class="material-icons">&#xE313;</i>
                            </md-button>


                            <ul id="collapse[[opt.N_MODULO_PK]]" class="panel-collapse collapse  listaRetro">
                            <li ng-repeat="sub in optionsTemp">
                                <div  class="list-group " ng-if="opt.N_MODULO_PK === sub.N_MODULO_PK">
                                    <div >
                                        <md-button class="md-primary estilosBotonGeneral ButonPrincipal  ButonListCascadaDos " ng-click="retroceder(sub.N_OPCION_PK)" ng-disabled="sub.N_ESTADO===0 || sub.N_ESTADO===2">
                                             <span>[[sub.C_NOMBRE_OPCION]]</span>
                                          <i class="material-icons">&#xE15E;</i>
                                        </md-button>
                                    </div>                                        
                                </div>
                            </li>                                    
                        </ul>
                            
                            
                        </div>


                        


                    </li>

                </ul>

                <!--<div ng-repeat="opt in options">
                    <ul class=listaRetro>
                        <md-button ng-click="retroceder(opt.N_OPCION_PK)"  class="md-primary estilosBotonGeneral ButonPrincipal">
                            <span class="spanBotonGrande">  <b> [[opt.c_NOMBRE_OPCION]] </span>
                            <i class="material-icons">&#xE042;</i>
                        </md-button>
                    </ul>
                </div> --> 
            </div>
        </md-dialog-content>
        <md-dialog-actions layout="row" layout-align="end center">                         
        </md-dialog-actions>
    </div>   
</md-dialog>
