import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import FooterInicio from "../components/principal/FooterInicio";

function Ayuda(props) {
    return (
        <View style={styles.container}>
            <FooterInicio style={styles.footerInicio}></FooterInicio>
            <View style={styles.scrollArea}>
                <ScrollView
                    horizontal={false}
                    contentContainerStyle={styles.scrollArea_contentContainerStyle}
                >
                    <Text style={styles.tituloBusqueda1}>Búsqueda por Producto</Text>
                    <Text style={styles.textoBusqueda1}>
                        En la esquina inferior derecha se encuentra un menú que tiene saltos
                        a cada sección:{"\n"} • Descripción General{"\n"} • Volumen de la
                        Producción Nacional{"\n"} • Top en Volumen de Producción{"\n"} •
                        Valor de la Producción por Entidad{"\n"} • Indicadores 2019{"\n"} •
                        Producción Mensual Nacional{"\n"} • Ranking Mundial{"\n"} • Comercio
                        Exterior 2019{"\n"} • Evolución del Comercio Exterior{"\n"} •
                        Distribución Mensual del Comercio Exterior{"\n"} • Descripción
                        Particular{"\n"} • Flujo Comercial{"\n"} • Curiosidad{"\n"}De un
                        toque en el área del mapa que desea ampliar, para regresar a la
                        imagen original de un toque fuera del área de la imagen.
                    </Text>
                    <Text style={styles.tituloGlosario1}>Glosario</Text>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footerInicio: {
        width: 375,
        height: 56,
        backgroundColor: "rgba(230, 230, 230,1)",
        marginTop: 611
    },
    scrollArea: {
        width: 278,
        height: 536,
        marginTop: -613,
        marginLeft: 49
    },
    scrollArea_contentContainerStyle: {
        height: 536,
        width: 278,
        overflow: "hidden"
    },
    tituloBusqueda1: {
        fontFamily: "montserrat-500",
        color: "#121212",
        height: 24,
        width: 277,
        textAlign: "center",
        fontSize: 20
    },
    textoBusqueda1: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        height: 457,
        width: 278,
        fontSize: 16,
        marginTop: 13
    },
    tituloGlosario1: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        height: 29,
        width: 278,
        fontSize: 24,
        textAlign: "center",
        marginTop: 13
    }
});

export default Ayuda;
