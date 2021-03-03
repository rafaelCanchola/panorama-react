import React from "react";
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Text,
    TouchableOpacity, FlatList, Dimensions
} from "react-native";
import BotonMostrarSector from "../components/catalogo/BotonMostrarSector";
const ImagesArray = require('../components/producto/ImagesArray').default

import produc from "../json/productos";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get('window').height;

function Catalogo({navigation}) {

    const pagesArray = [
        {id:'1',img:'agricola',limite:[0,60]},{id:'2',img:'pecuario',limite:[60,69]},{id:'3',img:'pesquero',limite:[69,75]}
    ];

    {/*
    <View style={styles.imagenFondoStack}>
                <ImageBackground
                    source={require("../assets/images/.jpg")}
                    resizeMode="center"
                    style={styles.imagenFondo}
                    imageStyle={styles.imagenFondo_imageStyle}
                >
                    <View style={styles.scrollArea}>
                        <ScrollView
                            horizontal={false}
                            contentContainerStyle={styles.scrollArea_contentContainerStyle}
                        >

                        </ScrollView>
                    </View>
                </ImageBackground>
                <TouchableOpacity style={styles.radioCatalogos}>
                    <View style={styles.radioAgricolaRow}>
                        <MaterialRadio style={styles.radioAgricola}></MaterialRadio>
                        <MaterialRadio style={styles.radioPecuario}></MaterialRadio>
                        <MaterialRadio style={styles.radioPesquero}></MaterialRadio>
                    </View>
                </TouchableOpacity>
                <BotonMostrarAgricola style={styles.botonAgricola}></BotonMostrarAgricola>
            </View>
    */}


    const Item = ({sector,limite}) => (
        <ImageBackground source={ImagesArray(sector)}
                         resizeMode={"cover"}
                         style={{width:(screenWidth)}}>
            <BotonMostrarSector style={styles.botonAgricola} nombre={sector}></BotonMostrarSector>
            <View style={styles.flatlistView}>
                {/*
                    produc.slice(limite[0],limite[1]).map((item)=>
                        <View style={styles.iconoProductoRow} key={item.idproducto}>
                            <Image
                                source={ImagesArray(item.imagen_producto.split("\/")[1])}
                                resizeMode="cover"
                                style={styles.iconoProducto}
                            />
                            <TouchableOpacity onPress={() => navigation.navigate('Producto',{id:item.idproducto})}>
                                <Text style={styles.nombreProducto}>{item.producto}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                */}
                <FlatList data={produc.slice(limite[0],limite[1])} renderItem={renderProduct} keyExtractor={item => item.idproducto}   />
            </View>
            </ImageBackground>
    );
    const renderProduct = ({item}) => (
    <View style={styles.iconoProductoRow}>
        <TouchableOpacity style={styles.botonProducto} onPress={() => navigation.navigate(
            'Productos', {id:item.idproducto,color:item.color_fondo,name:item.producto}
            )}>
            <Image
                source={ImagesArray(item.imagen_producto.split("\/")[1])}
                resizeMode="cover"
                style={styles.iconoProducto}
            />
            <Text style={styles.nombreProducto}>{item.producto}</Text>
        </TouchableOpacity>
    </View>
    );

    const renderItem = ({item}) =>(
        <Item sector={item.img} limite={item.limite}/>
        );

    return (
        <View style={styles.container}>
            <FlatList data={pagesArray} renderItem={renderItem} keyExtractor={item => item.id} horizontal={true} pagingEnabled={true} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    iconoProducto: {
        width: 40,
        height: 40,
        borderRadius: 5
    },
    nombreProducto: {
        fontFamily: "roboto-700",
        fontSize: 19,
        marginLeft: 14,
        marginTop: 7
    },
    iconoProductoRow: {
        flexDirection: "row",
        margin:20,
    },
    radioCatalogos: {
        top: 549,
        left: 128,
        width: 120,
        height: 40,
        position: "absolute",
        flexDirection: "row"
    },
    radioAgricola: {
        width: 40,
        height: 40,
        backgroundColor: "rgba(63,81,181,1)"
    },
    radioPecuario: {
        width: 40,
        height: 40
    },
    radioPesquero: {
        height: 40,
        width: 40
    },
    radioAgricolaRow: {
        height: 40,
        flexDirection: "row",
        flex: 1
    },
    botonProducto:{
        flexDirection:"row",
        width:(screenWidth - 30)
    },
    flatlistView:{
        alignSelf:'center',
        width: (screenWidth - 30),
        margin:10,
        backgroundColor: "rgba(230,230, 230,0.75)",
        borderRadius: 5,
        height: (screenHeight/1.4)
    },
    botonAgricola: {
        height: 60,
        alignSelf:'center',
        width: (screenWidth - 30 ),
        borderWidth: 2,
        borderColor: "rgba(255,255,255,1)",
        borderStyle: "solid",
        borderRadius: 7,
        margin:20,
    },
});

export default Catalogo;
