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
@Table(name = "TAB_PARAMETRO")
public class Parametro {
    
    @Id
    @GeneratedValue
    @Column(name = "N_PARAMETRO_PK")
    private Long id;

    @Column(name = "C_TABLA")
    private String tabla;

    @Column(name = "C_COLUMNA")
    private String columna;

    @Column(name = "C_DESCRIPCION")
    private String descripcion;

    @Column(name = "N_CODIGO")
    private int nCodigo;

    @Column(name = "C_CODIGO")
    private String cCodigo;

    @Column(name = "N_ORDEN")
    private int orden;

    @Column(name = "N_FLAG")
    private int flag;    

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTabla() {
        return tabla;
    }

    public void setTabla(String tabla) {
        this.tabla = tabla;
    }

    public String getColumna() {
        return columna;
    }

    public void setColumna(String columna) {
        this.columna = columna;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getnCodigo() {
        return nCodigo;
    }

    public void setnCodigo(int nCodigo) {
        this.nCodigo = nCodigo;
    }

    public String getcCodigo() {
        return cCodigo;
    }

    public void setcCodigo(String cCodigo) {
        this.cCodigo = cCodigo;
    }

    public int getOrden() {
        return orden;
    }

    public void setOrden(int orden) {
        this.orden = orden;
    }

    public int getFlag() {
        return flag;
    }

    public void setFlag(int flag) {
        this.flag = flag;
    }
    
    
}

