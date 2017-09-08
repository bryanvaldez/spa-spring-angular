/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.dao.adan;

import java.util.List;

/**
 *
 * @author bvaldez
 */
public interface MesaDao {
    List findAllMesaById(String id);
    String findMesaById(String id);
}
