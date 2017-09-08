/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.model.adan;


import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author bvaldez
 */
@Entity
@Table(name="TAB_MODULO")
public class Modulo implements Serializable{

    @Id
    @Column(name="N_MODULO_PK")
    @JsonProperty("N_MODULO_PK")        
    private Integer N_MODULO_PK;
    
    @Column(name="C_NOMBRE_MODULO")
    @JsonProperty("C_NOMBRE_MODULO")      
    private String C_NOMBRE_MODULO;
    
    @Column(name="C_ENLACE")
    @JsonProperty("C_ENLACE")              
    private String C_ENLACE;
    
    @Column(name="N_ORDEN")
    @JsonProperty("N_ORDEN")              
    private Integer N_ORDEN;
    
    @Column(name="N_ESTADO")
    @JsonProperty("N_ESTADO")              
    private Integer N_ESTADO;    

    public Integer getN_MODULO_PK() {
        return N_MODULO_PK;
    }

    public void setN_MODULO_PK(Integer N_MODULO_PK) {
        this.N_MODULO_PK = N_MODULO_PK;
    }

    public String getC_NOMBRE_MODULO() {
        return C_NOMBRE_MODULO;
    }

    public void setC_NOMBRE_MODULO(String C_NOMBRE_MODULO) {
        this.C_NOMBRE_MODULO = C_NOMBRE_MODULO;
    }

    public String getC_ENLACE() {
        return C_ENLACE;
    }

    public void setC_ENLACE(String C_ENLACE) {
        this.C_ENLACE = C_ENLACE;
    }

    public Integer getN_ORDEN() {
        return N_ORDEN;
    }

    public void setN_ORDEN(Integer N_ORDEN) {
        this.N_ORDEN = N_ORDEN;
    }

    public Integer getN_ESTADO() {
        return N_ESTADO;
    }

    public void setN_ESTADO(Integer N_ESTADO) {
        this.N_ESTADO = N_ESTADO;
    }
}
