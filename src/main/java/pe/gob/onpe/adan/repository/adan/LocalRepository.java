/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.repository.adan;

import java.util.ArrayList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.gob.onpe.adan.model.adan.Local;

/**
 *
 * @author bvaldez
 */
@Repository
public interface LocalRepository extends JpaRepository<Local, Integer>{
    
//    ArrayList getLocales(); 
//    ArrayList getTreetable(String idPadre);
//    ArrayList getTreetableHead(String id);
//    ArrayList getTreetableSolucion();
//    void updateDAO(Local local);       
//    void updateSolucion(String id, int solucion);
//    void updateSolucionMasivaPe(String idPadre, int solucion);
//    void updateSolucionMasivaEx(String idPadre, int solucion);
//    void updateSolucionMasivaDe(String idPadre, int solucion);
//    void updateSolucionMasivaPr(String idPadre, int solucion);
//    void updateSolucionMasivaDi(String idPadre, int solucion);    
}
