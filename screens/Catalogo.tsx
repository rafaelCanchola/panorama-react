import React from "react";
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    ScrollView,
    Text,
    TouchableOpacity, FlatList, Dimensions
} from "react-native";
import MaterialRadio from "../components/catalogo/MaterialRadio";
import BotonMostrarSector from "../components/catalogo/BotonMostrarSector";
import {useNavigation} from "@react-navigation/native";

const ImagesArray = require('../components/producto/ImagesArray').default

import produc from "../json/productos";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get('window').height;


function Catalogo(props) {
    const navigation = useNavigation();

    const pagesArray = [
        {id:'1',img:'agricola'},{id:'2',img:'pecuario'},{id:'3',img:'pesquero'}
    ];
    const sectorLim = {
        'agricola':[0,60],
        'pecuario':[60,70],
        'pesquero':[70,75]
    };

    {/*
    <View style={styles.imagenFondoStack}>
                <ImageBackground
                    source={require("../assets/images/Agricola2019.jpg")}
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


    const Item = ({sector}) => (
        <ImageBackground source={ImagesArray(sector)}
                         resizeMode={"cover"}
                         style={{width:(screenWidth)}}>
            <BotonMostrarSector style={styles.botonAgricola} nombre={sector}></BotonMostrarSector>
            <View>
                {
                    (() => {
                        switch (sector){
                            case 'agricola': return(
                                produc.slice(sectorLim.agricola[0],sectorLim.agricola[1]).map((item)=>
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
                            )
                            case 'pecuario': return(
                                produc.slice(sectorLim.pecuario[0],sectorLim.pecuario[1]).map((item)=>
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
                            )
                            case 'pesquero': return(
                                produc.slice(sectorLim.pesquero[0],sectorLim.pesquero[1]).map((item)=>
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
                            )
                        }
                    })()
                }
            </View>
            </ImageBackground>
    );

    const renderItem = ({item}) =>(
        <Item sector={item.img} />
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
        height: 25,
        fontSize: 19,
        marginLeft: 14,
        marginTop: 7
    },
    iconoProductoRow: {
        flexDirection: "row",
        margin:30,
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
    botonAgricola: {
        height: 60,
        alignSelf:'center',
        width: (screenWidth - 30 ),
        borderWidth: 2,
        borderColor: "rgba(255,255,255,1)",
        borderStyle: "solid",
        borderRadius: 7,
        top: 20
    },
});

export default Catalogo;
