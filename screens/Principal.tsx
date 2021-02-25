import {Component} from "react";
import React from "react";
import {View, StyleSheet, Text, Dimensions, Image} from "react-native"

import BotonInfografias from "../components/principal/BotonInfografias";
import BotonProducto from "../components/principal/BotonProducto";

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width
const screenContainer = screenWidth - 30

export default class Principal extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:1, justifyContent: "center",alignItems:'center'}}>
                    <View style={{padding:20}}></View>
                    <Image source={require('../assets/images/panorama.png')} resizeMode="contain" style={{width:screenContainer,height:screenContainer-80}}/>
                    <Text style={styles.intro}>Un campo productivo, inclusivo y sustentable para alimentar a México.</Text>
                    <BotonProducto style={styles.botonProducto}></BotonProducto>
                    <BotonInfografias style={styles.botonInfografias}></BotonInfografias>
                    <View style={{flex:1}}></View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
    },
    intro: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        fontSize: 18,
        textAlign: "center",
        alignSelf: "center",
        margin:10,
        width:screenWidth -60
    },
    botonProducto: {
        width: screenWidth-30,
        minHeight:50,
        backgroundColor: "rgba(0,120,83,1)",
        borderWidth: 2,
        borderColor: "rgba(255,255,255,1)",
        borderStyle: "solid",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            height: 7,
            width: 3
        },
        elevation: 12,
        shadowOpacity: 0.4,
        shadowRadius: 4,
        borderRadius: 7,
        margin:10,
        alignSelf: "center"
    },
    botonInfografias: {
        width: screenWidth-30,
        minHeight:50,
        borderWidth: 2,
        borderColor: "rgba(255,255,255,1)",
        borderRadius: 7,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 7
        },
        elevation: 12,
        shadowOpacity: 0.4,
        shadowRadius: 4,
        margin:10,
        alignSelf: "center"
    },
});
