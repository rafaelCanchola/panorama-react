import {Image, ScrollView, View,StyleSheet} from "react-native";
import React from "react";
const ImagesArray = require('../../components/producto/ImagesArray').default

function ImagenProducto(props){
    return (
        <Image
            source={ImagesArray(props.img)}
            resizeMode="contain"
            style={styles.imagenPrincipal}
        ></Image>
    );
}

const styles =StyleSheet.create({
    imagenPrincipal: {
        height: 218,
        marginTop: 10,
        alignSelf: "center"
    },
})

export default ImagenProducto;