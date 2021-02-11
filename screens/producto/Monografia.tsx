import React from "react";
import {Dimensions, ScrollView, StyleSheet, Text, View} from "react-native";
import ImagenProducto from "../../components/producto/ImagenProducto";
import TextoDescripcion from "../../components/producto/TextoDescripcion";
import TituloProducto from "../../components/producto/TituloProducto";


import produc from "../../json/productos";

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width
const screenContainer = screenWidth - 30

const CambioColor = require('../../components/CambioColor').default

export default function Monografia({navigation,route}) {
    const idProducto =  route.params.id;
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer} >
                <TituloProducto nombre={produc[idProducto].titulo_monografia} color={produc[idProducto].color_fondo} style={styles.tituloProducto}/>
                <ImagenProducto img={produc[idProducto].imagen_monografia.split("\/")[1]}/>
                <Text style={styles.textoCientifico}>
                    {produc[idProducto].nom_cientifico_monografia}
                </Text>
                <Text style={styles.titulo}>
                    Descripción
                </Text>
                <TextoDescripcion descripcion={produc[idProducto].descripcion_monografia} style={styles.texto}/>
                <Text style={styles.titulo}>
                    Producto
                </Text>
                <TextoDescripcion descripcion={produc[idProducto].contenido_producto_monografia} style={styles.texto}/>
                <Text style={styles.titulo}>
                    Flujo Comercial
                </Text>
                <ImagenProducto img={produc[idProducto].imagen_flujo_comercial.split("\/")[1]}/>
                <TextoDescripcion descripcion={produc[idProducto].texto_flujo_comercial} style={styles.texto}/>
                <Text>{'Liste '+ CambioColor(0.5,"#3f83a3")}</Text>
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
    tituloProducto: {
        width: screenContainer ,
        height: 80,
        margin:20,
    },
    texto: {
        fontFamily: "montserrat-regular",
        width: screenContainer,
        fontSize: 16,
        margin:10,
        textAlign:'justify',
    },
    textoCientifico: {
        fontFamily: "montserrat-medium",
        width: screenContainer,
        fontSize: 16,
        margin:10,
        textAlign:'center'
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