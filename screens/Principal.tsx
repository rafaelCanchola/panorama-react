import {Component} from "react";
import React from "react";
import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from "react-native"

import BotonInfografias from "../components/principal/BotonInfografias";
import BotonProducto from "../components/principal/BotonProducto";

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width


export default class Principal extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:1, justifyContent: "center",alignItems:'center'}}>
                    <View style={styles.titleStack}>
                        <Text style={[styles.title,{fontSize:36, letterSpacing:15,}]}>PANORAMA</Text>
                        <Text style={[styles.title,{fontSize: 33,}]}>AGROALIMENTARIO</Text>
                        <Text style={[styles.title,{fontSize: 36,letterSpacing:15}]}>2020</Text>
                    </View>
                    <Text style={styles.intro}>Un campo productivo, inclusivo y sustentable para alimentar a México.</Text>
                    <BotonProducto style={styles.botonProducto}></BotonProducto>
                    <BotonInfografias style={styles.botonInfografias}></BotonInfografias>
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
    title: {
        fontFamily: "montserrat-900",
        color: "rgba(193,167,129,1)",
        textAlign: "center",
    },
    titleStack: {
        width: screenWidth-60,
    },
    intro: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        fontSize: 18,
        textAlign: "center",
        alignSelf: "center",
        margin:20,
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
