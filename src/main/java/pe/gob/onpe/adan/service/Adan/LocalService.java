/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Adan;

import java.util.List;
import pe.gob.onpe.adan.model.adan.Local;

/**
 *
 * @author bvaldez
 */
public interface LocalService {
    List<Local> findAllLocalByUbigeo(String ubigeo, String code); 
    List<Local> findAllLocal();  
    void saveLocal(Local local);
    String disabledLocal(String user, String code);
    String enabledLocal(String user, String code);
    Local findLocalByCode(String code);    
}
