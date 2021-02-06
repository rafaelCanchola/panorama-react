import {ImageBackground, StyleSheet, Text, View} from "react-native";
import React from "react";

function ImagenConsumo(props) {
    if(props.consumo === '0.00') {
        return null;
    }
    else{
        return(
            <View>
                <Text style={styles.tituloConsumo}>
                    Consumo anual per cápita
                </Text>
                <ImageBackground
                    source={require("../../assets/images/CUCHARA.png")}
                    resizeMode="contain"
                    style={[styles.imagenConsumo,{backgroundColor: props.bgcolor}]}
                    imageStyle={styles.imagenConsumo_imageStyle}
                >
                    <Text style={styles.datoConsumo}>{props.consumo}</Text>
                </ImageBackground>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    tituloConsumo: {
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        textAlign: "center",
        fontSize: 18,
        left: 0
    },
    imagenConsumo: {
        width: 327,
        height: 327,
        alignSelf: "center",
        backgroundColor: "rgba(0,114,127,1)",
        left: 0
    },
    imagenConsumo_imageStyle: {},
    datoConsumo: {
        fontFamily: "montserrat-700",
        color: "rgba(255,255,255,1)",
        fontSize: 41,
        marginTop: 194,
        alignSelf:'center',
    },
});

export default ImagenConsumo;