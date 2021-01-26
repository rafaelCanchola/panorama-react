import {Image, ScrollView, View,StyleSheet} from "react-native";
import React, {useState} from "react";
import Images from '../../assets/images/index'

function ImagesArray(imgName){
    if(imgName === null){
        return Images.m_aga;
    }
    const imagesArray ={
        't_aga1': Images.t_aga1,
        't_aga': Images.t_aga,
        'm_aga': Images.m_aga,
    };
    return imagesArray[imgName];
}

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
        width: 327,
        height: 218,
        marginTop: 10,
        alignSelf: "center"
    },

})

export default ImagenProducto;