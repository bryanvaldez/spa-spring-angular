/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import java.util.List;
import javax.persistence.Query;
import org.hibernate.SQLQuery;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.MesaDao;
import pe.gob.onpe.adan.model.adan.Mesa;

/**
 *
 * @author bvaldez
 */
@Repository("mesaDao")
public class MesaDaoImpl extends AbstractDao<Integer, Mesa> implements MesaDao{

    @Override
    public List findAllMesaById(String id) {
        
        String sql = "SELECT  M.C_MESA AS MESA, COUNT(M.C_MESA) AS ELECTORES, S.N_ELECTORES AS TOTAL, M.N_TIPO_SOLUCION AS SOLUCION, S.C_RUTA_IMAGEN AS RUTAIMAGEN FROM TAB_ASIGNACION_MESA M INNER JOIN TAB_TIPO_SOLUCION S ON S.N_TIPO_SOLUCION_PK = M.N_TIPO_SOLUCION WHERE M.C_LOCAL = :id GROUP BY M.C_MESA, S.N_ELECTORES, M.N_TIPO_SOLUCION,S.C_RUTA_IMAGEN ORDER BY M.C_MESA";
        Query query = getEntityManager().createNativeQuery(sql)
                .setParameter("id", id);
        query.unwrap(SQLQuery.class).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
        List mesas = query.getResultList();
        
        return mesas;
        
    }
    
    @Override
    public String findMesaById(String id) {
             
        String sql = "SELECT C_LOCAL FROM TAB_ASIGNACION_MESA WHERE C_MESA = :id GROUP BY C_MESA, C_LOCAL";
        Query query = getEntityManager().createNativeQuery(sql)
                .setParameter("id", id);                
        String local = query.getSingleResult().toString();
                
        return local;
        
    }
    
}