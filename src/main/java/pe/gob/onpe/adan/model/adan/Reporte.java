/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.model.adan;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author MArrisueno
 */
@Entity
@Table(name = "TAB_REPORTE")
public class Reporte implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "N_REPORTE_PK")
    private int id;        

    @Column(name = "C_CODIGO_REPORTE")
    private String codigo;

    @Column(name = "C_ETIQUETA")
    private String etiqueta;
    
    @Column(name = "C_DESCRIPCION")
    private String descripcion;
        
    @Column(name = "C_QUERY")
    private String query;
    
    @Column(name = "C_FILTRO")
    private String filtro;
    
    @Column(name = "C_NOMBRE_ARCHIVO")
    private String nombreArchivo;
    
    @Column(name = "N_ESTADO")
    private int estado;        
    
    public Reporte() {
    }
    
    public Reporte(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getEtiqueta() {
        return etiqueta;
    }

    public void setEtiqueta(String etiqueta) {
        this.etiqueta = etiqueta;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public String getFiltro() {
        return filtro;
    }

    public void setFiltro(String filtro) {
        this.filtro = filtro;
    }

    public String getNombreArchivo() {
        return nombreArchivo;
    }

    public void setNombreArchivo(String nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
    }

    public int getEstado() {
        return estado;
    }

    public void setEstado(int estado) {
        this.estado = estado;
    }

    
}
