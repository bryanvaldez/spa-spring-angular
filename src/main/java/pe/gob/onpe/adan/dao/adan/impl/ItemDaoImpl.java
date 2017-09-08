/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import java.util.List;
import javax.persistence.Query;
import org.apache.commons.lang3.StringUtils;
import org.hibernate.SQLQuery;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.ItemDao;
import pe.gob.onpe.adan.model.adan.Item;

/**
 *
 * @author marrisueno
 */

@Repository("itemDao")
public class ItemDaoImpl extends AbstractDao<Integer, Item> implements ItemDao{           
        
    @Override     
    public List getItems(String tipo, String value) {
        String sql = "";
        if (tipo.equals("LOCAL")) {
            sql = "SELECT TYPE, VALUE, DISPLAY, AUX FROM (SELECT 'LOCAL' AS TYPE, C_CODIGO AS VALUE, C_CODIGO || ' - ' || C_NOMBRE AS DISPLAY, C_UBIGEO AS AUX FROM TAB_LOCAL WHERE N_ESTADO IN (0,1) ORDER BY C_NOMBRE) WHERE ROWNUM <= 100 AND DISPLAY LIKE :value";
            value = '%' + value.toUpperCase() + '%';
        } else if (tipo.equals("MESA")) {
            sql = "SELECT TYPE, VALUE, DISPLAY, AUX FROM (SELECT DISTINCT 'MESA' AS TYPE, C_MESA AS VALUE, C_MESA AS DISPLAY, C_UBIGEO AS AUX FROM TAB_ASIGNACION_MESA ORDER BY C_MESA) WHERE ROWNUM <= 100 AND DISPLAY LIKE :value";
            value = '%' + value.toUpperCase() + '%';
        } else if (tipo.equals("ELECTOR")) {
            sql = "SELECT TYPE, VALUE, DISPLAY, AUX FROM (SELECT 'ELECTOR' AS TYPE, NUMELE AS VALUE, NUMELE || ' - ' || APPAT || ' ' || APMAT || ' ' || NOMBRES AS DISPLAY, UBIGEO AS AUX FROM TAB_PADRON) WHERE ROWNUM <=100 AND DISPLAY LIKE :value";        
            if (value.length() == 8 && StringUtils.isNumericSpace(value)) {
                sql = "SELECT 'ELECTOR' AS TYPE, NUMELE AS VALUE, NUMELE || ' - ' || APPAT || ' ' || APMAT || ' ' || NOMBRES AS DISPLAY, UBIGEO AS AUX FROM TAB_PADRON WHERE NUMELE = :value";
            } else {
                value = '%' + value.toUpperCase() + '%';
            }           
        }      
                                
//        Query query = getEntityManager().createNativeQuery(sql, Item.class)
//                .setParameter("value", value);        
        Query query = getEntityManager().createNativeQuery(sql)
                .setParameter("value", value);
        query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
        List<Item> list = query.getResultList();
        
        return list;
    }
    
    @Override
    public List getDistritos(String ubigeo, String value) {
        value = '%' + value.toUpperCase() + '%';
        String sql = "SELECT U.ODPE AS TYPE, U.UBIGEO AS VALUE, U.DESCRIPCION AS DISPLAY, O.DESCRIPCION AS AUX FROM TAB_UBIGEO U INNER JOIN TAB_ODPE O ON O.ODPE = U.ODPE WHERE U.UBIPADRE = :ubigeo AND U.DESCRIPCION LIKE :value ORDER BY 3";
//        List<Item> list = getEntityManager().createNativeQuery(sql, Item.class)
//                .setParameter("ubigeo", ubigeo)
//                .setParameter("value", value)
//                .getResultList();
        
        Query query = getEntityManager().createNativeQuery(sql)
                .setParameter("ubigeo", ubigeo)
                .setParameter("value", value);
        query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
        List list = query.getResultList();
        
        return list;
    }
    
    @Override
    public List getUbigeo(String ubigeo) {
        String sql = "SELECT DIST.DESCRIPCION AS TYPE, PROV.DESCRIPCION AS VALUE, DPTO.DESCRIPCION AS DISPLAY, ODPE.DESCRIPCION AS AUX FROM TAB_UBIGEO DIST INNER JOIN TAB_ODPE ODPE ON ODPE.ODPE = DIST.ODPE INNER JOIN TAB_UBIGEO PROV ON PROV.UBIGEO = DIST.UBIPADRE INNER JOIN TAB_UBIGEO DPTO ON DPTO.UBIGEO = PROV.UBIPADRE WHERE DIST.UBIGEO = :ubigeo";
        
        Query query = getEntityManager().createNativeQuery(sql)
                .setParameter("ubigeo", ubigeo);        
        query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
        List list = query.getResultList();
        
        return list;
    }
    
    
}
