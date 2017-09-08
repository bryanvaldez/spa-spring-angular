/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pe.gob.onpe.adan.helper;

import com.google.gson.JsonObject;
import com.google.gson.internal.StringMap;
import java.util.ArrayList;
import java.util.List;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.Predicate;
import pe.gob.onpe.adan.constants.Constants;
import pe.gob.onpe.excelvalidator.model.DetalleFormato;

/**
 *
 * @author MArrisueno
 */
public class ValidadorCampoUnico {

    private final List<DetalleFormato> columnas;
    private final List<StringMap> jsonExcelUltimaCarga;
    private final List<StringMap> jsonObservacionDetalleUltimaCarga;
    private final JsonObject jsonObservacionGeneralUltimaCarga;
    private final List<StringMap> jsonDetalleArray;
    private List<StringMap> ubigeos;

    public ValidadorCampoUnico(List<DetalleFormato> columnas, List<StringMap> jsonExcelUltimaCarga, List<StringMap> jsonObservacionDetalleUltimaCarga) {
        this.columnas = columnas;
        this.jsonExcelUltimaCarga = jsonExcelUltimaCarga;
        this.jsonObservacionDetalleUltimaCarga = new ArrayList<>();
        jsonObservacionGeneralUltimaCarga = GestorCarga.getObservacionGeneral();
        jsonDetalleArray = new ArrayList<>();
    }

    public ValidadorCampoUnico() {
        this.columnas = new ArrayList<>();
        this.jsonExcelUltimaCarga = new ArrayList<>();
        this.jsonObservacionDetalleUltimaCarga = new ArrayList<>();
        jsonObservacionGeneralUltimaCarga = GestorCarga.getObservacionGeneral();
        jsonDetalleArray = new ArrayList<>();
    }

    public List<StringMap> getJsonExcelUltimaCarga() {
        return jsonExcelUltimaCarga;
    }

    public List<StringMap> getJsonObservacionDetalleUltimaCarga() {
        return jsonObservacionDetalleUltimaCarga;
    }

    public JsonObject getJsonObservacionGeneralUltimaCarga() {
        return jsonObservacionGeneralUltimaCarga;
    }

    public void setUbigeos(List<String> ubigeos) {
        this.ubigeos = new ArrayList<>();
        if (ubigeos != null && ubigeos.size() > 0) {
            for (String ubigeo : ubigeos) {
                StringMap<String> map = new StringMap<>();
                map.put("C_UBIGEO", ubigeo);
                this.ubigeos.add(map);
            }
        }
    }

    public void validarDetalle(int type, List<StringMap> jsonDetalle, List<JsonObject> jsonObservacionDetalleLastUpload) {
        boolean agregado = false;
        for (StringMap element : jsonDetalle) {
            String validacion = "";

            if (type == Constants.TIPO_CARGA_ODPE) {
                if (!existeUbigeo(element)) {
                    if (element.get("C_VALIDACION") != null) {
                        validacion = element.get("C_VALIDACION").toString();
                    }
                    validacion += "Ubigeo no existe en el Padrón. ";
                }
            }

            if (type == Constants.TIPO_CARGA_LOCAL) {
                if (!existeUbigeo(element)) {
                    if (element.get("C_VALIDACION") != null) {
                        validacion = element.get("C_VALIDACION").toString();
                    }
                    validacion += "Ubigeo no existe en ODPE. ";
                }
            }

            for (final DetalleFormato upload : columnas) {
                if (upload.getUnico() == 1) {
                    final String data = element.get(upload.getColumnaTabla()).toString(); //CAMBIO AGMR
                    //final String data = element.get(upload.getColumnaExcel()).toString();
                    Predicate predicate = new Predicate() {
                        @Override
                        public boolean evaluate(Object o) {
                            StringMap<String> object = (StringMap<String>) o;
//                            return object.get(upload.getColumnaTabla()).equals(data);
                            return object.get(upload.getColumnaExcel()).equals(data);
                        }
                    };
                    if (element.get("N_DUPLICADO") == null) {
                        StringMap<String> jsonObject = (StringMap<String>) CollectionUtils.find(jsonExcelUltimaCarga, predicate);

                        if (jsonObject != null) {
                            validacion = "";
                            if (element.get("C_VALIDACION") != null) {
                                validacion = element.get("C_VALIDACION").toString();
                            }
                            validacion += upload.getColumnaExcel()+ ":" + "Ya existe un registro cargado ";
                            element.put("C_VALIDACION", validacion);
                            jsonDetalleArray.add(element);
                            agregado = true;
                        }
                    } else {
                        element.remove("N_DUPLICADO");
                        jsonDetalleArray.add(element);
                        agregado = true;
                    }
                }
            }
            if (!agregado) {
                jsonDetalleArray.add(element);
            } else {
                agregado = false;
            }
        }
    }

    public void validarData(int type, List<StringMap> jsonExcelCopy, List<StringMap> jsonExcel, List<JsonObject> jsonObservacionDetalleLastUpload) {
        for (StringMap element : jsonExcelCopy) {
            String validacion = "";
            boolean agregarDetalleError = false;

            if (type == Constants.TIPO_CARGA_ODPE) {
                if (!existeUbigeo(element)) {
                    if (element.get("C_VALIDACION") != null) {
                        validacion = element.get("C_VALIDACION").toString();
                    }
                    validacion += "Ubigeo no existe en el padrón. ";
                    element.put("C_VALIDACION", validacion);
                    agregarDetalleError = true;
                }
            }

            if (type == Constants.TIPO_CARGA_LOCAL) {
                if (!existeUbigeo(element)) {
                    if (element.get("C_VALIDACION") != null) {
                        validacion = element.get("C_VALIDACION").toString();
                    }
                    validacion += "Ubigeo no existe en ODPE. ";
                    element.put("C_VALIDACION", validacion);
                    agregarDetalleError = true;
                }
            }

//            for (final DetalleFormato upload : columnas) {
//                if (upload.getUnico() == 1) {
//                    final String data = element.get(upload.getColumnaTabla()).toString();
//                    Predicate predicate = new Predicate() {
//                        @Override
//                        public boolean evaluate(Object o) {
//                            StringMap<String> object = (StringMap<String>) o;
//                            return object.get(upload.getColumnaTabla()).equals(data);
//                        }
//                    };
//
//                    StringMap<String> jsonObject = (StringMap<String>) CollectionUtils.find(jsonExcelUltimaCarga, predicate);
//
//                    validacion = "";
//                    if (jsonObject != null) {
//
//                        validacion = "";
//                        if (element.get("C_VALIDACION") != null) {
//                            validacion = element.get("C_VALIDACION").toString();
//                        }
//
//                        validacion += upload.getColumnaExcel() + ":" + "Ya existe un registro cargado|";
//                        element.put("C_VALIDACION", validacion);
//                        agregarDetalleError = true;
//                    }
//                }               
//               
//            }
            if (agregarDetalleError) {
                final String ubigeo = element.get("C_UBIGEO").toString();
                java.util.function.Predicate p = new java.util.function.Predicate<StringMap>() {
                    @Override
                    public boolean test(StringMap t) {
                        return t.get("C_UBIGEO").equals(ubigeo);
                    }
                };
                jsonExcel.removeIf(p);
                jsonDetalleArray.add(element);
            }
        }
        if (jsonExcel.size() > 0) {
            for (int i = 0; i < jsonExcel.size(); i++) {
                jsonExcelUltimaCarga.add(jsonExcel.get(i));
            }
        }

        jsonObservacionGeneralUltimaCarga.addProperty("cantidadRegistros", jsonExcelUltimaCarga.size());
        jsonObservacionGeneralUltimaCarga.addProperty("cantidadRegistrosCargados", jsonExcel.size());
        actualizarObservacionGeneral();

    }

    private void actualizarObservacionGeneral() {
        if (jsonDetalleArray.size() > 0) {
            for (StringMap jsonObservacionDetalleItem : jsonDetalleArray) {
                jsonObservacionDetalleUltimaCarga.add(jsonObservacionDetalleItem);
            }
        }
        jsonObservacionGeneralUltimaCarga.addProperty("cantidadRegistrosError", jsonObservacionDetalleUltimaCarga.size());

        int cantidadRegistrosCargados = jsonObservacionGeneralUltimaCarga.get("cantidadRegistrosCargados").getAsInt();
        cantidadRegistrosCargados += jsonObservacionDetalleUltimaCarga.size();
        jsonObservacionGeneralUltimaCarga.addProperty("cantidadRegistrosCargados", cantidadRegistrosCargados);

        int cantidadRegistrosCorrectos = jsonObservacionGeneralUltimaCarga.get("cantidadRegistrosCargados").getAsInt()
                - jsonObservacionGeneralUltimaCarga.get("cantidadRegistrosError").getAsInt();

        jsonObservacionGeneralUltimaCarga.addProperty("cantidadRegistrosCorrectos", cantidadRegistrosCorrectos);
    }

    public boolean existeUbigeo(StringMap element) {
        final String ubigeo = element.get("C_UBIGEO").toString();
        if ("".equalsIgnoreCase(ubigeo)) {
            return true;
        }
        Predicate predicate = new Predicate() {
            @Override
            public boolean evaluate(Object o) {
                StringMap<String> object = (StringMap<String>) o;
                return object.get("C_UBIGEO").equals(ubigeo);
            }
        };
        StringMap<String> jsonObject = (StringMap<String>) CollectionUtils.find(ubigeos, predicate);
        return (jsonObject != null);
    }
}
