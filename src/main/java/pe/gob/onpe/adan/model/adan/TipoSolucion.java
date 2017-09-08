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
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 *
 * @author bvaldez
 */
@Entity
@Table(name = "TAB_TIPO_SOLUCION")
public class TipoSolucion implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "SEQ_TIPO_SOLUCION")
    @SequenceGenerator(name = "SEQ_TIPO_SOLUCION", sequenceName = "SEQ_TIPO_SOLUCION_PK")
    @Column(name = "N_TIPO_SOLUCION_PK")
    private int id;

    @Column(name = "C_DESCRIPCION")
    private String descripcion;

    @Column(name = "N_ELECTORES")
    private int electores;

    @Column(name = "C_ALIAS")
    private String alias;

    @Column(name = "N_ESTADO")
    private int estado;

    @Column(name = "B_IMAGEN")
    private byte[] imagen;    

    @Column(name = "C_RUTA_IMAGEN")
    private String rutaImagen;
    
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

    public int getElectores() {
        return electores;
    }

    public void setElectores(int electores) {
        this.electores = electores;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public int getEstado() {
        return estado;
    }

    public void setEstado(int estado) {
        this.estado = estado;
    }

    public byte[] getImagen() {
        return imagen;
    }

    public void setImagen(byte[] imagen) {
        this.imagen = imagen;
    }

    public String getRutaImagen() {
        return rutaImagen;
    }

    public void setRutaImagen(String rutaImagen) {
        this.rutaImagen = rutaImagen;
    }
        
}
