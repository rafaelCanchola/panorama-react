import React, { Component } from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Image,
    ImageBackground,
    Text, Dimensions
} from "react-native";
//import FooterRegresar from "../components/FooterRegresar";
//import BotonManu from "../components/BotonManu";
import TituloProducto from "../components/producto/TituloProducto";

import OcticonsIcon from "react-native-vector-icons/Octicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import MostrarProducto from "./MostrarProducto";
import ImagenProducto from "../components/producto/ImagenProducto";
import Images from '../assets/images/index'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width

function Producto(props) {
    return (
        <View style={styles.container}>
            <View >
                <View >

                    <ScrollView
                        horizontal={false}
                        contentContainerStyle={styles.scrollArea_contentContainerStyle}
                    >
                        <TituloProducto style={styles.tituloProducto}></TituloProducto>
                        <ImagenProducto img={Images.t_aga1}/>
                        <MostrarProducto/>
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
    imagenConsumo: {
        top: 7,
        width: 327,
        height: 327,
        position: "absolute",
        backgroundColor: "rgba(0,114,127,1)",
        left: 0
    },
    imagenConsumo_imageStyle: {},
    datoConsumo: {
        fontFamily: "montserrat-700",
        color: "rgba(255,255,255,1)",
        fontSize: 41,
        marginTop: 194,
        marginLeft: 143
    },
    tituloConsumo: {
        top: 0,
        position: "absolute",
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: 327,
        height: 22,
        textAlign: "center",
        fontSize: 18,
        left: 0
    },
    tituloParticipacion: {
        top: 320,
        position: "absolute",
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: 327,
        height: 22,
        textAlign: "center",
        fontSize: 18,
        left: 0
    },
    datoParticipacion: {
        top: 340,
        left: 115,
        position: "absolute",
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
        top: 0,
        position: "absolute",
        fontFamily: "montserrat-regular",
        color: "#121212",
        height: 20,
        width: 327,
        fontSize: 16,
        left: 0
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
        width: 327,
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
        position: "absolute",
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: 327,
        height: 22,
        textAlign: "center",
        fontSize: 18,
        top: 42,
        left: 0
    },
    graficaVolumenStack: {
        width: 327,
        height: 64,
        marginTop: 1,
        marginLeft: 24
    },
    tablaTop: {
        top: 0,
        left: 147,
        position: "absolute",
        color: "rgba(128,128,128,1)",
        fontSize: 40
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
        width: 327,
        height: 200,
        marginLeft: 26
    },
    textoPorcentaje: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        height: 20,
        width: 327,
        fontSize: 16,
        marginTop: 7,
        marginLeft: 24
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
