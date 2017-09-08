/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.model.adan;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author bvaldez
 */
@Entity
@Table(name = "TAB_TIPO_ELECCION")
public class TipoEleccion {
    
    @Id
    @GeneratedValue
    @Column(name = "N_TIPO_ELECCION_PK")
    private int id;

    @Column(name = "C_DESCRIPCION")
    private String descripcion;

    @Column(name = "N_ESTADO")
    private int estado;

    @Column(name = "N_DISTRITAL")
    private String distrital;    

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getEstado() {
        return estado;
    }

    public void setEstado(int estado) {
        this.estado = estado;
    }

    public String getDistrital() {
        return distrital;
    }

    public void setDistrital(String distrital) {
        this.distrital = distrital;
    }
    
    
    
}
