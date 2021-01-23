import React, { Component } from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    TextInput,
    Text,
    Image
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import FooterRegresar from "../components/infografia/FooterRegresar";

function Infografia(props) {
    return (
        <View style={styles.container}>
                <View style={styles.scrollArea}>
                    <ScrollView
                        horizontal={false}
                        contentContainerStyle={styles.scrollArea_contentContainerStyle}
                    >
                        <View style={styles.nombreInfografiaRow}>
                            <TextInput
                                placeholder="Servicio de Información Agroalimentaria y Pesquera"
                                multiline={true}
                                numberOfLines={2}
                                style={styles.nombreInfografia}
                            ></TextInput>
                            <Icon name="download" style={styles.iconoDescargar}></Icon>
                        </View>
                    </ScrollView>
                </View>
                <Text style={styles.tituloInfografias}>INFOGRAFÍAS</Text>
                <Image
                    source={require("../assets/images/infografia_(1).jpg")}
                    resizeMode="contain"
                    style={styles.iconoInfografia}
                ></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: "center",
        justifyContent: "center",
    },
    footerRegresar: {
        height: 56,
        backgroundColor: "rgba(230, 230, 230,1)",
        marginTop: 611
    },
    scrollArea: {
        top: 0,
        left: 1,
        width: 332,
        height: 527,
        position: "absolute",
        borderRadius: 57
    },
    scrollArea_contentContainerStyle: {
        height: 527,
        width: 332,
        flexDirection: "row"
    },
    nombreInfografia: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        width: 228,
        height: 38,
        fontSize: 16
    },
    iconoDescargar: {
        color: "rgba(128,128,128,1)",
        fontSize: 30,
        height: 30,
        width: 30,
        marginTop: 4
    },
    nombreInfografiaRow: {
        height: 38,
        flexDirection: "row",
        flex: 1,
        marginLeft: 74,
        marginTop: 87
    },
    tituloInfografias: {
        top: 0,
        position: "absolute",
        fontFamily: "montserrat-900",
        color: "rgba(128,128,128,1)",
        width: 345,
        height: 48,
        textAlign: "center",
        fontSize: 40,
        left: 1
    },
    iconoInfografia: {
        top: 68,
        left: 0,
        width: 75,
        height: 75,
        position: "absolute"
    },
    scrollAreaStack: {
        width: 346,
        height: 527,
        marginTop: -604,
        marginLeft: 14
    }
});

export default Infografia;
