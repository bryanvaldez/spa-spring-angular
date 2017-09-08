/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.model.adan;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author marrisueno
 */
@Entity
@Table(name = "TAB_VERSION_PADRON")
public class VersionPadron implements Serializable{
         
    @Id
    @Column(name="C_DOCUMENTO_RENIEC")    
    private String C_DOCUMENTO_RENIEC;        
    
    @Column(name="D_FECHA_CIERRE")    
    private String D_FECHA_CIERRE;
    
    @Column(name="D_FECHA_ACTUALIZACION")    
    private String D_FECHA_ACTUALIZACION;

    public String getC_DOCUMENTO_RENIEC() {
        return C_DOCUMENTO_RENIEC;
    }

    public void setC_DOCUMENTO_RENIEC(String C_DOCUMENTO_RENIEC) {
        this.C_DOCUMENTO_RENIEC = C_DOCUMENTO_RENIEC;
    }

    public String getD_FECHA_CIERRE() {
        return D_FECHA_CIERRE;
    }

    public void setD_FECHA_CIERRE(String D_FECHA_CIERRE) {
        this.D_FECHA_CIERRE = D_FECHA_CIERRE;
    }

    public String getD_FECHA_ACTUALIZACION() {
        return D_FECHA_ACTUALIZACION;
    }

    public void setD_FECHA_ACTUALIZACION(String D_FECHA_ACTUALIZACION) {
        this.D_FECHA_ACTUALIZACION = D_FECHA_ACTUALIZACION;
    }
    
       
}
