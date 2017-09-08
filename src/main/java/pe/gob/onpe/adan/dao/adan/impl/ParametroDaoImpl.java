/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import java.util.List;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.ParametroDao;
import pe.gob.onpe.adan.model.adan.Parametro;

/**
 *
 * @author AQuispec
 */
@Repository("parametroDao")
public class ParametroDaoImpl extends AbstractDao<Integer, Parametro> implements ParametroDao {

    @Override
    public List<Parametro> findAllByTableAndColumn(String nameTable, String nameColumn) {
        
        List<Parametro> lst = getEntityManager()
                .createQuery("SELECT p FROM Parametro p WHERE p.tabla = :tabla AND p.columna = :columna")
                .setParameter("tabla", nameTable)
                .setParameter("columna", nameColumn)
                .getResultList();
        return lst;               
    }

    @Override
    public Parametro findById(int id) {
        return getByKey(id);
    }

    @Override
    public List<Parametro> findByCcodigoAndFlag(String cCodigo, int flag) {
        List<Parametro> lst = getEntityManager()
                .createQuery("SELECT p FROM Parametro p WHERE p.cCodigo = :codigo AND p.flag = :flag")
                .setParameter("codigo", cCodigo)
                .setParameter("flag", flag)
                .getResultList();
        return lst;          
    }

}
