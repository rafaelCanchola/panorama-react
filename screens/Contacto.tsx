import {Component} from "react";
import React from "react";
import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from "react-native"
import EntypoIcon from "react-native-vector-icons/Entypo";

import FooterInicio from "../components/principal/FooterInicio";
import BotonTerminos from "../components/contacto/BotonTerminos";

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width
export default class Contacto extends Component{
    render() {
        return (
            <View style={styles.container}>
                <View style={{width:screenWidth-30}}>
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
                    <View style={styles.gobRow}>
                        <View style={{width:screenWidth/4}}/>
                        <Text style={styles.gob}>gob</Text>
                        <Text style={styles.mxSiap}>.mx/siap</Text>
                    </View>
                    <View style={styles.gobRow}>
                        <View style={{width:screenWidth/20}}/>
                        <EntypoIcon
                            name="facebook-with-circle"
                            style={styles.iconoFacebook}
                        />
                        <Text style={styles.textoFacebook}>siap.sader</Text>
                        <View style={{width:screenWidth/10}}/>
                        <EntypoIcon
                            name="twitter-with-circle"
                            style={styles.iconoFacebook}
                        />
                        <Text style={styles.textoFacebook}>@siap_mx</Text>
                        <View style={{width:screenWidth/10}}/>
                    </View>
                    <View style={styles.gobRow}>
                    <View style={{width:screenWidth/20}}/>
                    <EntypoIcon
                        name="youtube-with-circle"
                        style={styles.iconoFacebook}
                    />
                    <Text style={styles.textoFacebook}>siap.sader</Text>
                    <View style={{width:screenWidth/10}}/>
                    <EntypoIcon
                        name="instagram-with-circle"
                        style={styles.iconoFacebook}
                    />
                    <Text style={styles.textoFacebook}>@siap_mx</Text>
                    <View style={{width:screenWidth/10}}/>
                </View>
                </View>

                <BotonTerminos style={styles.botonTerminos}></BotonTerminos>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:'center',
    },
   textoSIAP: {
        fontFamily: "montserrat-regular",
        fontSize: 16,
        textAlign:'justify',
        },
    iconoFacebook: {
        color: "rgba(0,120,83,1)",
        fontSize: 40
    },
    textoFacebook: {
        fontFamily: "montserrat-regular",
        color: "rgba(0,0,238,1)",
        fontSize: 16,
        textDecorationLine: "underline",
        marginLeft: 7,
        marginTop: 12
    },
   botonTerminos: {
        minHeight:50,
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
        },
    gob: {
        fontFamily: "roboto-700",
        color: "rgba(0,120,83,1)",
        fontSize: 32,

    },
    mxSiap: {
        fontFamily: "montserrat-500",
        color: "rgba(0,120,83,1)",
        fontSize: 16,
        marginTop: 10,
    },
    gobRow: {
        flexDirection: "row",
        margin:15,
    }
});
