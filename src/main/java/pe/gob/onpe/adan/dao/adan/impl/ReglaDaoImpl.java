/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan.impl;

import java.util.List;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.dao.adan.ReglaDao;
import pe.gob.onpe.adan.model.adan.Regla;

/**
 *
 * @author AQuispec
 */
@Repository("reglaDao")
public class ReglaDaoImpl extends AbstractDao<Integer, Regla> implements ReglaDao{

    @Override
    public List<Regla> finAllRegla() {
        List<Regla> lst = getEntityManager()
                .createQuery("SELECT R FROM Regla R")
                .getResultList();
        return lst;   
    }
    
}
