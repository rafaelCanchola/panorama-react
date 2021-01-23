import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import {useNavigation} from "@react-navigation/native";

function BotonInfografias(props) {

    const navigation = useNavigation();
    return (
        <TouchableOpacity style={[styles.container, props.style]}
                          onPress={() => navigation.navigate('Infografia')}>
            <Text style={styles.infografias}>Infografías</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0,96,142,1)",
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
        textAlign: "center"
    }
});

export default BotonInfografias;
