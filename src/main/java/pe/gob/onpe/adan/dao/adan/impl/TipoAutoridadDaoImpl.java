/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import java.util.List;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.TipoAutoridadDao;
import pe.gob.onpe.adan.model.adan.TipoAutoridad;

/**
 *
 * @author AQuispec
 */
@Repository("tipoAutoridadDao")
public class TipoAutoridadDaoImpl extends AbstractDao<Integer, TipoAutoridad> implements TipoAutoridadDao {

    @Override
    public List<TipoAutoridad> findByEstadoOrderByDescripcionAsc(int estado) {
        List<TipoAutoridad> lst = getEntityManager()
                .createQuery("SELECT T FROM TipoAutoridad T WHERE T.estado = :estado ORDER BY T.descripcion ASC")
                .setParameter("estado", estado)
                .getResultList();
        return lst;
    }
}
