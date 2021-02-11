import React from "react";
import {Dimensions, ScrollView, StyleSheet, Text, View} from "react-native";
import TextoAgroindustriales from "../../components/producto/TextoAgroindustriales";

import produc from "../../json/productos";
import TituloProducto from "../../components/producto/TituloProducto";

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width
const screenContainer = screenWidth - 30

export default function Comercio({navigation,route}){

    const idProducto =  route.params.id;
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer} >
                <Text style={styles.texto}>
                    {produc[idProducto].distribucionmensualprod}
                </Text>

                <Text style={styles.titulo}>Ranking Mundial</Text>
                <Text style={styles.texto}>
                        {produc[idProducto].rankingmundial}º productor mundial
                </Text>
                <Text style={styles.texto}>
                    {produc[idProducto].rankingmundial_descripcion}
                </Text>
                <Text style={styles.texto}>
                    {produc[idProducto].paismasproductivo}
                </Text>
                <TextoAgroindustriales participacion={produc[idProducto].volumen_toneladas + ' toneladas'} color={produc[idProducto].color_fondo} width={screenWidth}/>
                <Text style={styles.titulo}>Comercio exterior 2019</Text>
                <Text style={styles.texto}>
                    {produc[idProducto].comercioexterior}
                </Text>
                <Text style={styles.texto}>
                    Origen-destino comercial
                </Text>
                <Text style={styles.texto}>
                    {produc[idProducto].mercadospotenciales}
                </Text>
                <Text style={styles.titulo}>
                    Evolución de comercio exterior
                </Text>
                <Text style={styles.titulo}>
                    Distribución mensual del comercio exterior (%)
                </Text>

            </ScrollView>
        </View>
        )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
    },
    scrollView:{
        backgroundColor:'#fff',
        width: screenWidth -15,
    },
    scrollViewContainer:{
        alignItems:'center',
    },
    texto: {
        fontFamily: "montserrat-regular",
        width: screenContainer,
        fontSize: 16,
        margin:10,
        textAlign:'justify',
    },
    titulo:{
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: screenContainer,
        textAlign: "center",
        fontSize: 20,
        margin:10,
    },
})