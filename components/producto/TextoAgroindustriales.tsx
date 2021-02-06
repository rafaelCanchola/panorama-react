import React from "react";
import {StyleSheet, TouchableOpacity, Text, View} from "react-native";

function TextoAgroindustriales(props) {
    return (
        <View style={[styles.container,{backgroundColor:props.color, width:props.width - 40}]}>
            <Text style={styles.agaveTequilero}>{props.participacion}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderRadius: 5,
        alignSelf:"center",
    },
    agaveTequilero: {
        color: "#fff",
        fontSize: 36,
        fontFamily: "montserrat-700",
        textAlign: "center",
    }
});

export default TextoAgroindustriales;
