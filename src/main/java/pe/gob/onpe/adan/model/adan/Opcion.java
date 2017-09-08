/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.model.adan;

import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author bvaldez
 */
@Entity
@Table(name="TAB_OPCION")
public class Opcion {
    
    @Id
    @Column(name="N_OPCION_PK")
    @JsonProperty("N_OPCION_PK")      
    private Integer N_OPCION_PK;
            
    @Column(name="C_NOMBRE_OPCION")
    @JsonProperty("C_NOMBRE_OPCION")             
    private String C_NOMBRE_OPCION;
            
    @Column(name="C_ENLACE")
    @JsonProperty("C_ENLACE")             
    private String C_ENLACE;
            
    @Column(name="N_ORDEN")
    @JsonProperty("N_ORDEN")             
    private Integer N_ORDEN;
            
    @Column(name="N_MODULO")
    @JsonProperty("N_MODULO")             
    private Integer N_MODULO;
            
    @Column(name="N_PERFIL")
    @JsonProperty("N_PERFIL")             
    private Integer N_PERFIL;
            
    @Column(name="N_ACTIVO")
    @JsonProperty("N_ACTIVO")             
    private Integer N_ACTIVO;

    @Column(name="N_ESTADO")
    @JsonProperty("N_ESTADO")             
    private Integer N_ESTADO;    
    
    @Column(name="N_PROCEDIMIENTO")
    @JsonProperty("N_PROCEDIMIENTO")             
    private Integer N_PROCEDIMIENTO; 
    
    public Integer getN_OPCION_PK() {
        return N_OPCION_PK;
    }

    public void setN_OPCION_PK(Integer N_OPCION_PK) {
        this.N_OPCION_PK = N_OPCION_PK;
    }

    public String getC_NOMBRE_OPCION() {
        return C_NOMBRE_OPCION;
    }

    public void setC_NOMBRE_OPCION(String C_NOMBRE_OPCION) {
        this.C_NOMBRE_OPCION = C_NOMBRE_OPCION;
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

    public Integer getN_MODULO() {
        return N_MODULO;
    }

    public void setN_MODULO(Integer N_MODULO) {
        this.N_MODULO = N_MODULO;
    }

    public Integer getN_PERFIL() {
        return N_PERFIL;
    }

    public void setN_PERFIL(Integer N_PERFIL) {
        this.N_PERFIL = N_PERFIL;
    }

    public Integer getN_ACTIVO() {
        return N_ACTIVO;
    }

    public void setN_ACTIVO(Integer N_ACTIVO) {
        this.N_ACTIVO = N_ACTIVO;
    }

    public Integer getN_ESTADO() {
        return N_ESTADO;
    }

    public void setN_ESTADO(Integer N_ESTADO) {
        this.N_ESTADO = N_ESTADO;
    }

    public Integer getN_PROCEDIMIENTO() {
        return N_PROCEDIMIENTO;
    }

    public void setN_PROCEDIMIENTO(Integer N_PROCEDIMIENTO) {
        this.N_PROCEDIMIENTO = N_PROCEDIMIENTO;
    }
    
}
