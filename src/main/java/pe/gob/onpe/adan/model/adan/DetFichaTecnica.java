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
@Table(name = "DET_FICHA_TECNICA")
public class DetFichaTecnica {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "SEQ_DET_FICHA_TECNICA")
    @SequenceGenerator(name = "SEQ_DET_FICHA_TECNICA", sequenceName = "SEQ_DET_FICHA_TECNICA_PK")
    @Column(name = "N_DET_FICHA_PK")
    private Integer id;

    @Column(name = "N_FICHA_TECNICA")
    private Integer fichaTecnica;

    @Column(name = "N_TIPO_AUTORIDAD")
    private Integer autoridad;

    @Column(name = "N_CANT_AUTORIDAD")
    private Integer cantAutoridad;

    @Column(name = "N_ESTADO")
    private Integer estado;   

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getFichaTecnica() {
        return fichaTecnica;
    }

    public void setFichaTecnica(Integer fichaTecnica) {
        this.fichaTecnica = fichaTecnica;
    }

    public Integer getAutoridad() {
        return autoridad;
    }

    public void setAutoridad(Integer autoridad) {
        this.autoridad = autoridad;
    }

    public Integer getCantAutoridad() {
        return cantAutoridad;
    }

    public void setCantAutoridad(Integer cantAutoridad) {
        this.cantAutoridad = cantAutoridad;
    }

    public Integer getEstado() {
        return estado;
    }

    public void setEstado(Integer estado) {
        this.estado = estado;
    }
    
    
}
