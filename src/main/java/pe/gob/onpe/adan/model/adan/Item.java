/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.model.adan;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 *
 * @author MArrisueno
 */

//@SqlResultSetMapping(name = "ItemResult", classes = {
//    @ConstructorResult(targetClass = Item.class,
//        columns = {
//            @ColumnResult(name = "ID"),
//            @ColumnResult(name = "TYPE"),
//            @ColumnResult(name = "VALUE"),
//            @ColumnResult(name = "DISPLAY"),
//            @ColumnResult(name = "AUX")})
//    })

//@SqlResultSetMapping(
//    name="ItemResult",
//    entities={
//        @EntityResult(entityClass=Item.class),
//        @EntityResult(
//            entityClass=Item.class,
//            fields={
//                @FieldResult(name="ID", column="ID"),
//                @FieldResult(name="TYPE", column="TYPE"),
//                @FieldResult(name="VALUE", column="VALUE"),
//                @FieldResult(name="DISPLAY", column="DISPLAY"),
//                @FieldResult(name="AUX", column="AUX")
//            }
//        )
//    }
//)

//@SqlResultSetMapping(name="[ItemResult]", 
//        entities={ 
//            @EntityResult(entityClass=Item.class, fields={
//                @FieldResult(name="ID", column="ID"),
//                @FieldResult(name="TYPE", column="TYPE"), 
//                @FieldResult(name="VALUE", column="VALUE"),
//                @FieldResult(name="DISPLAY", column="DISPLAY"),
//                @FieldResult(name="AUX", column="AUX")                    
//            })},
//        columns={
//            @ColumnResult(name="ID"),
//            @ColumnResult(name="TYPE"),
//            @ColumnResult(name="VALUE"),
//            @ColumnResult(name="DISPLAY"),
//            @ColumnResult(name="AUX")
//        }
//    )


@Entity
public class Item implements Serializable {
         
    @Id private String TYPE;
    private String VALUE;
    private String DISPLAY;
    private String AUX;                         
    
    public String getTYPE() {
        return TYPE;
    }

    public void setTYPE(String TYPE) {
        this.TYPE = TYPE;
    }

    public String getVALUE() {
        return VALUE;
    }

    public void setVALUE(String VALUE) {
        this.VALUE = VALUE;
    }

    public String getDISPLAY() {
        return DISPLAY;
    }

    public void setDISPLAY(String DISPLAY) {
        this.DISPLAY = DISPLAY;
    }

    public String getAUX() {
        return AUX;
    }

    public void setAUX(String AUX) {
        this.AUX = AUX;
    }   
        
}
