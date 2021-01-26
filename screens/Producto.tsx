import React, {Component, useEffect, useState} from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Image,
    ImageBackground,
    Text, Dimensions
} from "react-native";
import TituloProducto from "../components/producto/TituloProducto";
import MostrarProducto from "./MostrarProducto";
import ImagenProducto from "../components/producto/ImagenProducto";
import ImagenConsumo from "../components/producto/ImagenConsumo";

import OcticonsIcon from "react-native-vector-icons/Octicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import produc from "../json/productos"

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width

function Producto(props) {
    const idProducto = 1;
    return (
        <View style={styles.container}>
            <View >
                <View >

                    <ScrollView
                        horizontal={false}
                        contentContainerStyle={styles.scrollArea_contentContainerStyle}
                    >
                        <TituloProducto nombre={produc[idProducto].producto} color={produc[idProducto].color_fondo} style={styles.tituloProducto}></TituloProducto>
                        <ImagenProducto img={produc[idProducto].imagen_producto.split("\/")[1]}/>
                        <ImagenConsumo bgcolor={"rgba(0,114,127,1)"}/>

                        <Text style={styles.tituloConsumo}>
                            Consumo anual per cápita
                        </Text>
                        <Text style={styles.tituloParticipacion}>
                            Participación en la producción n...
                        </Text>
                        <Text style={styles.datoParticipacion}>2.3%</Text>
                <Text style={styles.textoPrincipal}>
                    En 2019 se tenían plantadas 103 mil hec...
                </Text>

            <Text style={styles.tituloVolumen}>
                Volumen de la producción nacional
            </Text>
                        <MostrarProducto/>

                <Text style={styles.tituloTop}>
                    Top en volumen de producción...
                </Text>


                <FontAwesomeIcon
                    name="table"
                    style={styles.tablaTop}
                ></FontAwesomeIcon>
                <Text style={styles.tituloPorcentaje}>
                    Porcentaje del valor de la produc...
                </Text>
            <Image
                source={require("../assets/images/mapas/m_aga.jpg")}
                resizeMode="cover"
                style={styles.imagenMapa}
            ></Image>
            <Text style={styles.textoPorcentaje}>
                Jalisco incrementó 3.1% la producción d...
            </Text>
            <Text style={styles.tituloIndicadores}>Indicadores 2019</Text>
            <FontAwesomeIcon
                name="table"
                style={styles.tablaIndicadores}
            ></FontAwesomeIcon>
            <Text style={styles.tituloMensual}>
                Producción mensual nacional (%)
            </Text>
            <Text style={styles.textoMensual}>
                La jima (cosecha) de agave está presen...
            </Text>
            <SimpleLineIconsIcon
                name="calendar"
                style={styles.calendarioMensual}
            ></SimpleLineIconsIcon>
            <Text style={styles.tituloExterior}>Comercio exterior 2019</Text>
            <Text style={styles.textoExterior}>
                Durante 2019 las ventas internacionales...
            </Text>
            <Text style={styles.tituloOrigen}>Origen-destino comercial</Text>
            <Text style={styles.textoOrigen}>
                En 2019, Japón desplazó al Reino Unido...
            </Text>
            <View style={styles.group}>
                <View style={styles.listadosClientesStack}>
                    <Text style={styles.listadosClientes}>
                        • Cliente principal • Clientes (export...) • Proveedores Entre
                        2018 y 2019 E...
                    </Text>
                    <Image
                        source={require("../assets/images/us.png")}
                        resizeMode="contain"
                        style={styles.imagenBandera}
                    ></Image>
                </View>
            </View>
            <Text style={styles.tituloEvolucion}>
                Evolución de comercio exterior
            </Text>
            <View style={styles.graficaEvolucionStack}>
                <OcticonsIcon
                    name="graph"
                    style={styles.graficaEvolucion}
                ></OcticonsIcon>
                <Text style={styles.tituloDistribucion}>
                    Distribución mensual del comerc...
                </Text>
            </View>
            <FontAwesomeIcon
                name="table"
                style={styles.tablaDistribucion}
            ></FontAwesomeIcon>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    botonMenu: {
        position: "absolute",
        left: 296,
        top: 0,
        width: 56,
        height: 56
    },
    scrollArea: {
        top: 0,
        left: 0,
        width: 375,
        height: 578,
    },
    scrollArea_contentContainerStyle: {
        height: 1544,
        width: 375,
        overflow: "hidden"
    },
    tituloProducto: {
        width: screenWidth -30 ,
        height: 83,
        alignSelf: "center"
    },
    tituloConsumo: {
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: screenWidth -30,
        height: 22,
        textAlign: "center",
        fontSize: 18,
        left: 0
    },
    tituloParticipacion: {
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: screenWidth -30,
        height: 22,
        textAlign: "center",
        fontSize: 18,
        left: 0
    },
    datoParticipacion: {
        fontFamily: "montserrat-900",
        color: "rgba(0,114,127,1)",
        fontSize: 40,
        textAlign: "center",
        lineHeight: 60
    },
    imagenConsumoStack: {
        top: 17,
        left: 0,
        width: 327,
        height: 400,
        position: "absolute"
    },
    textoPrincipal: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        height: 20,
        width: screenWidth -30,
        fontSize: 16,
        alignSelf:"center",
    },
    imagenConsumoStackStack: {
        width: 327,
        height: 417,
        marginTop: 6,
        marginLeft: 24
    },
    tituloVolumen: {
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: screenWidth -30,
        height: 22,
        textAlign: "center",
        fontSize: 18,
        alignSelf: "center"
    },
    graficaVolumen: {
        top: 0,
        left: 144,
        position: "absolute",
        color: "rgba(128,128,128,1)",
        fontSize: 40
    },
    tituloTop: {
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: screenWidth -30,
        height: 22,
        textAlign: "center",
        fontSize: 18,
        alignSelf:"center",
    },
    graficaVolumenStack: {
        width: screenWidth -30,
        height: 64,
        marginTop: 1,
        marginLeft: 24
    },
    tablaTop: {
        color: "rgba(128,128,128,1)",
        fontSize: 40,
        alignSelf:"center",
    },
    tituloPorcentaje: {
        position: "absolute",
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: 327,
        height: 22,
        textAlign: "center",
        fontSize: 18,
        top: 35,
        left: 0
    },
    tablaTopStack: {
        width: 327,
        height: 57,
        marginLeft: 24
    },
    imagenMapa: {
        width:  screenWidth -30,
        height: 200,
        alignSelf: "center",
    },
    textoPorcentaje: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        height: 20,
        width: screenWidth -30,
        fontSize: 16,
        marginTop: 7,
        alignSelf:"center",
    },
    tituloIndicadores: {
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: 327,
        height: 22,
        textAlign: "center",
        fontSize: 18,
        marginLeft: 26
    },
    tablaIndicadores: {
        color: "rgba(128,128,128,1)",
        fontSize: 40,
        marginLeft: 171
    },
    tituloMensual: {
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: 327,
        height: 22,
        textAlign: "center",
        fontSize: 18,
        marginLeft: 26
    },
    textoMensual: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        height: 20,
        width: 327,
        fontSize: 16,
        marginLeft: 26
    },
    calendarioMensual: {
        color: "rgba(128,128,128,1)",
        fontSize: 40,
        marginLeft: 171
    },
    tituloExterior: {
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: 327,
        height: 22,
        textAlign: "center",
        fontSize: 18,
        marginLeft: 24
    },
    textoExterior: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        height: 20,
        width: 327,
        fontSize: 16,
        marginLeft: 24
    },
    tituloOrigen: {
        fontFamily: "montserrat-500",
        color: "#121212",
        height: 20,
        width: 327,
        fontSize: 16,
        marginLeft: 24
    },
    textoOrigen: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        height: 20,
        width: 327,
        fontSize: 16,
        marginLeft: 26
    },
    group: {
        width: 328,
        height: 80,
        marginLeft: 27
    },
    listadosClientes: {
        top: 0,
        position: "absolute",
        fontFamily: "montserrat-regular",
        color: "#121212",
        height: 80,
        width: 328,
        fontSize: 16,
        left: 0
    },
    imagenBandera: {
        top: 0,
        left: 221,
        width: 75,
        height: 39,
        position: "absolute"
    },
    listadosClientesStack: {
        width: 328,
        height: 80
    },
    tituloEvolucion: {
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: 327,
        height: 22,
        textAlign: "center",
        fontSize: 18,
        marginLeft: 26
    },
    graficaEvolucion: {
        top: 0,
        left: 144,
        position: "absolute",
        color: "rgba(128,128,128,1)",
        fontSize: 40
    },
    tituloDistribucion: {
        position: "absolute",
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: 327,
        height: 22,
        textAlign: "center",
        fontSize: 18,
        top: 44,
        left: 0
    },
    graficaEvolucionStack: {
        width: 327,
        height: 66,
        marginLeft: 24
    },
    tablaDistribucion: {
        color: "rgba(128,128,128,1)",
        fontSize: 40,
        marginLeft: 169
    },
    footerRegresarStackStack: {
        width: 375,
        height: 636,
        marginTop: 31
    }
});

export default Producto;
