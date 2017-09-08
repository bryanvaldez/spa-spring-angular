/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan;

import java.util.List;

/**
 *
 * @author marrisueno
 */
public interface ItemDao {    
    List getItems(String sql, String value);
    List getDistritos(String ubigeo, String value);
    List getUbigeo(String ubigeo);
}
