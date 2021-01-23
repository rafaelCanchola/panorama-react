import {Component} from "react";
import React from "react";
import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from "react-native"
import EntypoIcon from "react-native-vector-icons/Entypo";

import FooterInicio from "../components/principal/FooterInicio";
import BotonTerminos from "../components/contacto/BotonTerminos";

export default class Contacto extends Component{
    render() {
        return (
            <View style={styles.container}>
                <FooterInicio style={styles.footerInicio}></FooterInicio>
                <Text style={styles.textoSIAP}>
                    El Servicio de Información Agroalimentaria y Pesquera, órgano
                    administrativo desconcentrado de la SADER es el encargado de generar
                    estadística e información geográfica en materia agroalimentaria,
                    promoviendo además, la concurrencia y coordinación las demás
                    dependencias y entidades de la Administración Pública Federal, de los
                    Gobiernos Estatales, Municipales y de la Ciudad de México, para la
                    implementación del Sistema Nacional de Información para el Desarrollo
                    Rural Sustentable.
                </Text>
                <View style={styles.iconoFacebookRow}>
                    <EntypoIcon
                        name="facebook-with-circle"
                        style={styles.iconoFacebook}
                    ></EntypoIcon>
                    <Text style={styles.textoFacebook}>siap.sader</Text>
                    <EntypoIcon
                        name="twitter-with-circle"
                        style={styles.iconoTwitter}
                    ></EntypoIcon>
                    <Text style={styles.textoTwitter}>@siap_mx</Text>
                </View>
                <View style={styles.iconoYoutubeRow}>
                    <EntypoIcon
                        name="youtube-with-circle"
                        style={styles.iconoYoutube}
                    ></EntypoIcon>
                    <Text style={styles.textoYoutube}>siapoficial</Text>
                    <EntypoIcon
                        name="instagram-with-circle"
                        style={styles.iconoInstagram}
                    ></EntypoIcon>
                    <Text style={styles.textoInstagram}>siap_mx</Text>
                </View>
                <BotonTerminos style={styles.botonTerminos}></BotonTerminos>
                <View style={styles.gobRow}>
                    <Text style={styles.gob}>gob</Text>
                    <Text style={styles.mxSiap}>.mx/siap</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footerInicio: {
        width: 375,
        height: 56,
        backgroundColor: "rgba(230, 230, 230,1)",
        marginTop: 611,
        alignSelf: "center"
    },
    textoSIAP: {
        fontFamily: "montserrat-regular",
        color: "rgba(31,31,33,1)",
        height: 323,
        width: 278,
        fontSize: 16,
        marginTop: -621,
        marginLeft: 49
    },
    iconoFacebook: {
        color: "rgba(0,120,83,1)",
        fontSize: 40
    },
    textoFacebook: {
        fontFamily: "montserrat-regular",
        color: "rgba(0,0,238,1)",
        height: 19,
        width: 83,
        fontSize: 16,
        textDecorationLine: "underline",
        marginLeft: 7,
        marginTop: 12
    },
    iconoTwitter: {
        color: "rgba(0,120,83,1)",
        fontSize: 40,
        marginLeft: 14
    },
    textoTwitter: {
        fontFamily: "montserrat-regular",
        color: "rgba(0,0,238,1)",
        height: 19,
        width: 83,
        fontSize: 16,
        textDecorationLine: "underline",
        marginLeft: 10,
        marginTop: 12
    },
    iconoFacebookRow: {
        height: 46,
        flexDirection: "row",
        marginTop: 63,
        marginLeft: 49,
        marginRight: 49
    },
    iconoYoutube: {
        color: "rgba(0,120,83,1)",
        fontSize: 40
    },
    textoYoutube: {
        fontFamily: "montserrat-regular",
        color: "rgba(0,0,238,1)",
        height: 19,
        width: 83,
        fontSize: 16,
        textDecorationLine: "underline",
        marginLeft: 7,
        marginTop: 12
    },
    iconoInstagram: {
        color: "rgba(128,128,128,1)",
        fontSize: 40,
        marginLeft: 14
    },
    textoInstagram: {
        fontFamily: "montserrat-regular",
        color: "rgba(0,0,238,1)",
        height: 19,
        width: 83,
        fontSize: 16,
        textDecorationLine: "underline",
        marginLeft: 10,
        marginTop: 12
    },
    iconoYoutubeRow: {
        height: 46,
        flexDirection: "row",
        marginTop: 6,
        marginLeft: 49,
        marginRight: 49
    },
    botonTerminos: {
        height: 44,
        width: 300,
        backgroundColor: "rgba(0,118,255,1)",
        borderWidth: 2,
        borderColor: "rgba(255,255,255,1)",
        borderStyle: "solid",
        borderRadius: 7,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 7
        },
        elevation: 12,
        shadowOpacity: 0.4,
        shadowRadius: 4,
        marginTop: 15,
        marginLeft: 38
    },
    gob: {
        fontFamily: "roboto-700",
        color: "rgba(0,120,83,1)",
        height: 39,
        width: 67,
        fontSize: 32,
        textAlign: "right"
    },
    mxSiap: {
        fontFamily: "montserrat-500",
        color: "rgba(0,120,83,1)",
        height: 19,
        width: 70,
        fontSize: 16,
        marginTop: 10
    },
    gobRow: {
        height: 39,
        flexDirection: "row",
        marginTop: -205,
        marginLeft: 121,
        marginRight: 117
    }
});
