import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import {useNavigation} from "@react-navigation/native";

function BotonProducto(props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={[styles.container, props.style]}
                          onPress={() => navigation.navigate('Catalogo')}>
            <Text style={styles.infografias}>
                {props.infografias || "Busqueda por Producto"}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E91E63",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.35,
        shadowRadius: 5,
        elevation: 2,
        minWidth: 88,
        paddingLeft: 16,
        paddingRight: 16
    },
    infografias: {
        color: "#fff",
        fontSize: 17,
        fontFamily: "montserrat-regular",
        width: 222,
        textAlign: "center"
    }
});

export default BotonProducto;
