<%@ taglib prefix="t" tagdir="/WEB-INF/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<t:master title="login">     
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/login.css" type="text/css" media="screen,projection"/>      
    <script type="text/javascript" src="${pageContext.request.contextPath}/static/js/controller/main/loginController.js"></script>      
    <div  ng-controller="loginCtrl" ng-cloak>
        <div class="cabeceraReal">
            <div style="position: fixed;
                 z-index: 100;
                 top: 0;
                 height: 25vh;
                 min-height: 150px;
                 width: 100%;
                 display: flex;
                 align-items: center;
                 justify-content: center;
                 background: #015780; /* Old browsers */
                
                 " 
                 <c:if test="${SPRING_SECURITY_LAST_EXCEPTION == null}"> class="cabeceraAnimada
                     AnimaciondeCabecera"</c:if>> 
                 <c:if test="${SPRING_SECURITY_LAST_EXCEPTION == null}">
                     <img  src="${pageContext.request.contextPath}/static/img/adan-blanco.svg" class="PersonajeAnimado"></img>
                     <br>
                 </c:if>
                 <img  src="${pageContext.request.contextPath}/static/img/logoAdan.svg" class="LogoSitem"></img>            
            </div>                        
            <div class="content">
                <form name="form" action="${loginUrl}" method="post" role="form">
                    <div class="contenedorLogin" >
                        <div class="block1 conteniidoPartLogin"  >
                            <md-content>
                                <md-input-container class="md-icon-float md-block">
                                    <label>Ingrese su Usuario</label>
                                    <md-icon  md-menu-align-target class="icon-top iconoLoginInput" aria-label="usuario">
                                        <!--   <i style="color: #015780;" class="fa fa-user-circle-o animated tada" aria-hidden="true"></i> -->
                                        <i class="material-icons">&#xE7FD;</i>
                                    </md-icon>
                                    <input required title="Complete este campo" id="username" name="username" class="inputhide" maxlength="8" type="text" is-number flex="90" autocomplete="off" focus-me="focusUser" ng-model="user" valid-number> 
                                </md-input-container>   
                                <md-input-container class="md-icon-float md-block">
                                    <label>Clave</label>
                                    <md-icon  md-menu-align-target class="icon-top iconoLoginInput" aria-label="clave">     
                                        <!--  <i class="fa fa-unlock-alt animated tada" aria-hidden="true"></i> -->
                                        <i class="material-icons"  >&#xE898;</i>
                                    </md-icon>


                                    <input  required id="password" title="Complete este campo" name="password"  type="password" maxlength="22" ng-maxlength="22" autocomplete="false" flex="90" ng-model="password" ng-readonly="true" ng-blur="showHint = false" ng-focus="showHint = true">
                                    <div class="hint-input" >Utilice el teclado seguro en pantalla para ingresar su clave</div>
                                </md-input-container>
                                <c:choose>
                                    <c:when test="${SPRING_SECURITY_LAST_EXCEPTION.message == 'Bad credentials'}">
                                        <font color="red">Usuario y/o Clave incorrecta</font>
                                        <c:remove var = "SPRING_SECURITY_LAST_EXCEPTION" scope = "session" />
                                    </c:when>    
                                    <c:otherwise>
                                        <font color="red">
                                        <c:out value="${SPRING_SECURITY_LAST_EXCEPTION.message}"/>
                                        </font>
                                        <c:remove var = "SPRING_SECURITY_LAST_EXCEPTION" scope = "session" />
                                    </c:otherwise>
                                </c:choose>                                                        
                            </md-content>
                        </div>
                        <div class="block2 conteniidoPartLogin " >
                            <div class="keyboard">
                                <div class="numbers">
                                    <c:forEach items="${numbers}" var="n">
                                        <div ng-keypress="KeyDown($event)" class="key" ng-click="virtualKey('${n}')" ><span ng-keyup="signUpIfEnterPressed($event)">${n}</span></div>
                                        </c:forEach>
                                </div>
                                <div class="letters">
                                    <c:forEach items="${letters}" var="l">
                                        <div ng-keypress="KeyDown($event)" class="key" ng-click="virtualKey('${l}')"><span>${l}</span></div>
                                            </c:forEach>    
                                    <div class="key back" ng-click="backspace()"><span>BORRAR</span></div>
                                </div>
                            </div>
                        </div>
                        <input type="hidden" name="${_csrf.parameterName}" 	value="${_csrf.token}" />
                        <div class="footerBotonIngresar" >
                            <md-button ng-if="form.$invalid"   ng-disabled="form.$invalid || vm.dataLoading" type="submit" ng-click="focusUsers()" class="md-raised button-login BotonLoginAdan estilosBotonGeneral botonInciarSecion"  >
                                INICIAR SESIÓN
                            </md-button>
                            <md-button ng-if="!form.$invalid"  ng-disabled="form.$invalid || vm.dataLoading" type="submit" ng-click="focusUsers()" class="md-raised button-login BotonLoginAdan estilosBotonGeneral botonInciarSecion"  >
                                INICIAR SESIÓN
                            </md-button>                        
                        </div>
                    </div>
                </form>
            </div>      
        </div> 

    </t:master>