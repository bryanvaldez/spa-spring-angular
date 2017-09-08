/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import java.util.List;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.TipoEleccionDao;
import pe.gob.onpe.adan.model.adan.TipoEleccion;

/**
 *
 * @author AQuispec
 */
@Repository("tipoEleccionDao")
public class TipoEleccionDaoImpl extends AbstractDao<Integer, TipoEleccion> implements TipoEleccionDao{

    @Override
    public List<TipoEleccion> findAllByEstado(int estado) {
        List<TipoEleccion> lst = getEntityManager()
                .createQuery("SELECT TE FROM TipoEleccion TE WHERE TE.estado = :estado ORDER BY TE.descripcion ASC")
                .setParameter("estado", estado)
                .getResultList();
        return lst; 
    }

    @Override
    public TipoEleccion findById(int id) {
        return getByKey(id);
    }
    
}
