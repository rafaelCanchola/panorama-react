import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function TituloProducto(props) {
    return (
        <TouchableOpacity style={[styles.container, props.style]}>
            <Text style={styles.agaveTequilero}>Agave Tequilero</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0,114,127,1)",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 7
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 12,
        minWidth: 88,
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 2,
        borderColor: "rgba(255,255,255,1)",
        borderStyle: "solid"
    },
    agaveTequilero: {
        color: "#fff",
        fontSize: 32,
        fontFamily: "montserrat-700"
    }
});

export default TituloProducto;
