import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Text,
    TouchableOpacity, FlatList, Dimensions
} from "react-native";
import {bindActionCreators} from "redux";
import {addProducto,addConteo,deleteProductos} from "../actions/analyticsActions";
import {connect} from 'react-redux';
import BotonMostrarSector from "../components/catalogo/BotonMostrarSector";
import SideSwipe from 'react-native-sideswipe';
import produc from "../json/productos";
import {BottomBar, ProductoAnimado} from "../components/animations/ProductAnim";
const ImagesArray = require('../components/producto/ImagesArray').default

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get('window').height;


class Carousel extends Component<any, any>{
    state = {
        currentIndex: 0,
        productIdIndex: 0,
        fontsLoaded: false,
    };
    render(){
        const {navigation,productos} = this.props;

    const pagesArray = [
        {id:'1',img:'Fagricola',limite:[0,60],name:'SECTOR AGRÍCOLA'},{id:'2',img:'Fpecuario',limite:[60,69],name:'SECTOR PECUARIO'},{id:'3',img:'Fpesquero',limite:[69,75],name:'SECTOR PESQUERO'}
    ];

    const NavigateProducto = (idproducto:any,color_fondo:any,producto:any) => {
        let busqueda = productos.find(producto => producto.idProducto == idproducto);
        if(typeof(busqueda) !== 'undefined' && busqueda != null ){
            this.props.addConteo(idproducto);
        }else{
            this.props.addProducto(idproducto);
        }
        navigation.navigate('Productos', {id:idproducto,color:color_fondo,name:producto})
    }
    const renderItem = ({item}) =>(
            /*<Item sector={item.img} limite={item.limite}/>*/
        <ImageBackground source={ImagesArray(item.img)}
                         resizeMode={'stretch'}
                         style={{width:(screenWidth),height:(screenHeight/3.1), }}>
            <Text style={styles.tituloSeleccionar}>{item.name}</Text>
            <SideSwipe
                data={produc.slice(item.limite[0],item.limite[1])}
                shouldCapture={() => true}
                itemWidth={ProductoAnimado.WIDTH}
                threshold={ProductoAnimado.WIDTH / 3}
                extractKey={item => item.idproducto}
                contentOffset={(screenWidth - ProductoAnimado.WIDTH)/2}
                onIndexChange={index =>
                    this.setState(() => ({ currentIndex: index }))}

                renderItem={({ itemIndex, currentIndex, item, animatedValue }) =>
                    (
                        <ProductoAnimado
                            product={item}
                            index={itemIndex}
                            currentIndex={currentIndex}
                            animatedValue={animatedValue}
                        />
                    )}
            />
            <TouchableOpacity style={[styles.botonSeleccionar,{backgroundColor:produc[this.state.currentIndex+item.limite[0]].color_fondo}]} onPress={() =>
                NavigateProducto(produc[this.state.currentIndex+item.limite[0]].idproducto,produc[this.state.currentIndex+item.limite[0]].color_fondo,produc[this.state.currentIndex+item.limite[0]].producto)}>
                <Text style={styles.tituloSeleccionar}>SELECCIONAR PRODUCTO</Text>
            </TouchableOpacity>

        </ImageBackground>
            );
        return (
            <View style={styles.container}>
                <View style={{margin:screenHeight/40}}/>
                <FlatList data={pagesArray} renderItem={renderItem} keyExtractor={item => item.id}  />
                {/*
                */}

                {/*<ImageBackground source={ImagesArray(pagesArray[1].img)}
                                 resizeMode={'stretch'}
                                 style={{width:(screenWidth),height:(screenHeight/3), justifyContent:'center'}}>
                    <BotonMostrarSector style={styles.botonAgricola} nombre={pagesArray[1].img}></BotonMostrarSector>
                </ImageBackground>

                <ImageBackground source={ImagesArray(pagesArray[2].img)}
                                 resizeMode={'stretch'}
                                 style={{width:(screenWidth),height:(screenHeight/3), justifyContent:'center'}}>
                    <BotonMostrarSector style={styles.botonAgricola} nombre={pagesArray[2].img}></BotonMostrarSector>
                </ImageBackground>
*/}
            </View>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addProducto, addConteo }, dispatch)
}
const mapStateToProps = (state) => {
    return{
        productos: state.analytics.productos,
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Carousel)

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
    botonSeleccionar: {
        width: '90%',
        justifyContent: 'center',
        borderRadius: 4,
        alignSelf:'center',
        minHeight:40
    },
    tituloSeleccionar: {
        color: 'white',
        letterSpacing: 1.3,
        fontSize: 20,
        fontFamily: 'roboto-700',
        alignSelf:'center'
    },
});

