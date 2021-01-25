import {Image, ScrollView, View,StyleSheet} from "react-native";
import React, {useState} from "react";

function ImagenProducto(props){
    return (
        <Image
            source={props.img}
            resizeMode="contain"
            style={styles.imagenPrincipal}
        ></Image>
    );
}

const styles =StyleSheet.create({
    imagenPrincipal: {
        width: 327,
        height: 218,
        marginTop: 10,
        alignSelf: "center"
    },

})

export default ImagenProducto;