import {Component} from "react";
import React from "react";
import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from "react-native"

import BotonInfografias from "../components/principal/BotonInfografias";
import FooterInicio from "../components/principal/FooterInicio";
import BotonProducto from "../components/principal/BotonProducto";

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width


export default class Principal extends Component {
    render(){
        return(
            <View style= {styles.container}>
                <View style={styles.title1Stack}>
                    <Text style={styles.title1}>PANORAMA</Text>
                    <Text style={styles.title2}>AGROALIMENTARIO</Text>
                </View>
                <Text style={styles.title3}>2020</Text>
                <Text style={styles.intro}>Un campo productivo, inclusivo y sustentable para alimentar a México.</Text>
                <BotonProducto style={styles.botonProducto}></BotonProducto>
                <BotonInfografias style={styles.botonInfografias}></BotonInfografias>
                <FooterInicio style={styles.footerInicio}></FooterInicio>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title1: {
        fontFamily: "montserrat-700",
        color: "rgba(193,167,129,1)",
        height: 33,
        width: 300,
        fontSize: 27,
        textAlign: "center",
        letterSpacing: 16,
        position: "absolute",
        top: 0,
        left: 2
    },
    title2: {
        fontFamily: "montserrat-700",
        color: "rgba(193,167,129,1)",
        height: 33,
        width: 300,
        fontSize: 27,
        textAlign: "center",
        letterSpacing: 1,
        position: "absolute",
        top: 31,
        left: 0
    },
    title1Stack: {
        width: 302,
        height: 64,
        marginTop: 78,
        marginLeft: 44
    },
    title3: {
        fontFamily: "montserrat-700",
        color: "rgba(193,167,129,1)",
        height: 33,
        width: 300,
        fontSize: 27,
        textAlign: "center",
        letterSpacing: 16,
        marginLeft: 50
    },
    intro: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        width: 300,
        fontSize: 16,
        textAlign: "center",
        marginTop: 12,
        alignSelf: "center"
    },
    botonProducto: {
        height: 44,
        width: 300,
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
        marginTop: 65,
        alignSelf: "center"
    },
    botonInfografias: {
        height: 44,
        width: 300,
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
        marginTop: 18,
        alignSelf: "center"
    },
    footerInicio: {
        height: 56,
        backgroundColor: "rgba(230, 230, 230,1)",
        marginTop: screenHeight -500
    }
});
