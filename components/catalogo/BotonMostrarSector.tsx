import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default class BotonMostrarSector extends Component<any, any>{
    render(){
        const sector=[
            {nombre:'Agrícola',color:'rgb(0, 120, 83)'},
            {nombre:'Pecuario',color:'rgb(147, 37, 44)'},
            {nombre:'Pesquero',color:'rgb(55, 187, 211)'}
        ];

        switch (this.props.nombre){
            case 'agricola': return(
                <TouchableOpacity style={[styles.container, this.props.style,{backgroundColor:sector[0].color}]} disabled={true}>
                    <Text style={styles.agricola}>{sector[0].nombre}</Text>
                </TouchableOpacity>
            )
            case 'pecuario': return(
                <TouchableOpacity style={[styles.container, this.props.style,{backgroundColor:sector[1].color}]} disabled={true}>
                    <Text style={styles.agricola}>{sector[1].nombre}</Text>
                </TouchableOpacity>
            )
            case 'pesquero': return(
                <TouchableOpacity style={[styles.container, this.props.style,{backgroundColor:sector[2].color}]} disabled={true}>
                    <Text style={styles.agricola}>{sector[2].nombre}</Text>
                </TouchableOpacity>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
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
    agricola: {
        color: "#fff",
        fontSize: 32,
        fontFamily: "montserrat-regular"
    }
});

