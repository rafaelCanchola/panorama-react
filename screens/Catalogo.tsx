import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    ScrollView,
    Text,
    TouchableOpacity
} from "react-native";
import MaterialRadio from "../components/catalogo/MaterialRadio";
import BotonMostrarAgricola from "../components/catalogo/BotonMostrarAgricola";
import {useNavigation} from "@react-navigation/native";

function Catalogo(props) {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.imagenFondoStack}>
                <ImageBackground
                    source={require("../assets/images/Agricola2019.jpg")}
                    resizeMode="center"
                    style={styles.imagenFondo}
                    imageStyle={styles.imagenFondo_imageStyle}
                >
                    <View style={styles.scrollArea}>
                        <ScrollView
                            horizontal={false}
                            contentContainerStyle={styles.scrollArea_contentContainerStyle}
                        >
                            <View style={styles.iconoProductoRow}>
                                <Image
                                    source={require("../assets/images/t_aga.jpg")}
                                    resizeMode="cover"
                                    style={styles.iconoProducto}
                                ></Image>
                                <TouchableOpacity onPress={() => navigation.navigate('Producto')}>
                                    <Text style={styles.nombreProducto}>Agave Tequilero</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </ImageBackground>
                <TouchableOpacity style={styles.radioCatalogos}>
                    <View style={styles.radioAgricolaRow}>
                        <MaterialRadio style={styles.radioAgricola}></MaterialRadio>
                        <MaterialRadio style={styles.radioPecuario}></MaterialRadio>
                        <MaterialRadio style={styles.radioPesquero}></MaterialRadio>
                    </View>
                </TouchableOpacity>
                <BotonMostrarAgricola style={styles.botonAgricola}></BotonMostrarAgricola>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imagenFondo: {
        top: 0,
        left: 0,
        width: 375,
        height: 610,
        position: "absolute"
    },
    imagenFondo_imageStyle: {},
    scrollArea: {
        width: 375,
        height: 368,
        backgroundColor: "rgba(230,230, 230,0.75)",
        marginTop: 143
    },
    scrollArea_contentContainerStyle: {
        height: 368,
        width: 375,
        flexDirection: "row"
    },
    iconoProducto: {
        width: 40,
        height: 40,
        borderRadius: 5
    },
    nombreProducto: {
        fontFamily: "roboto-700",
        color: "#121212",
        height: 25,
        width: 275,
        fontSize: 19,
        marginLeft: 14,
        marginTop: 7
    },
    iconoProductoRow: {
        height: 40,
        flexDirection: "row",
        flex: 1,
        marginRight: 28,
        marginLeft: 18,
        marginTop: 26
    },
    radioCatalogos: {
        top: 549,
        left: 128,
        width: 120,
        height: 40,
        position: "absolute",
        flexDirection: "row"
    },
    radioAgricola: {
        width: 40,
        height: 40,
        backgroundColor: "rgba(63,81,181,1)"
    },
    radioPecuario: {
        width: 40,
        height: 40
    },
    radioPesquero: {
        height: 40,
        width: 40
    },
    radioAgricolaRow: {
        height: 40,
        flexDirection: "row",
        flex: 1
    },
    botonAgricola: {
        height: 56,
        width: 300,
        position: "absolute",
        left: 38,
        top: 42,
        backgroundColor: "rgba(0,120,83,1)",
        borderWidth: 2,
        borderColor: "rgba(255,255,255,1)",
        borderStyle: "solid",
        borderRadius: 7
    },
    imagenFondoStack: {
        width: 375,
        height: 610
    },
    footerRegresar: {
        width: 375,
        height: 56,
        backgroundColor: "rgba(230, 230, 230,1)",
        marginTop: 1
    }
});

export default Catalogo;
