/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.model.adan;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 *
 * @author bvaldez
 */
@Entity
@Table(name = "TAB_CONFIGURACION")
public class Configuracion {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "SEQ_CONFIGURACION")
    @SequenceGenerator(name = "SEQ_CONFIGURACION", sequenceName = "SEQ_CONFIGURACION_PK")  
    @Column(name = "N_CONFIGURACION_PK")
    private int id;

    @Column(name = "C_DESCRIPCION")
    private String descripcion;

    @Column(name = "C_DATO")
    private String dato;

    @Column(name = "N_CANT_COLUMNAS")
    private int cantColumnas;

    @Column(name = "C_COLUM_RPT") 
    private String columRpt;    

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

    public String getDato() {
        return dato;
    }

    public void setDato(String dato) {
        this.dato = dato;
    }

    public int getCantColumnas() {
        return cantColumnas;
    }

    public void setCantColumnas(int cantColumnas) {
        this.cantColumnas = cantColumnas;
    }

    public String getColumRpt() {
        return columRpt;
    }

    public void setColumRpt(String columRpt) {
        this.columRpt = columRpt;
    }

}
