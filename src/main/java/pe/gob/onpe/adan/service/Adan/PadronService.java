/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.service.Adan;

import java.util.List;
import pe.gob.onpe.adan.model.adan.Padron;

/**
 *
 * @author bvaldez
 */
public interface PadronService {
    Padron findElectorByDni(String dni);
    List<String> listUbigeosPadron();
    List<String> listUbigeosOdpe();
    String findElectorByPreference(String dni);
    void updateElectorByVip(String dni, int status);
    void updatePadron(Padron padron);
    String executeAsignacionElector(String dni, String oldLocal, String newLocal, String user);  
}
