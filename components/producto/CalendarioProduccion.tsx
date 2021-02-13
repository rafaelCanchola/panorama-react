import React from "react";
import {
    Dimensions,
    FlatList,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";

const ImagesArray = require('../../components/producto/ImagesArray').default

function CalendarioProduccion(props) {
    var monthName = [
        {id:'1',month:'Enero',prod:props.calendarioarr[0].enero},
        {id:'2',month:'Febrero',prod:props.calendarioarr[0].febrero},
        {id:'3',month:'Marzo',prod:props.calendarioarr[0].marzo},
        {id:'4',month:'Abril',prod:props.calendarioarr[0].abril},
        {id:'5',month:'Mayo',prod:props.calendarioarr[0].mayo},
        {id:'6',month:'Junio',prod:props.calendarioarr[0].junio},
        {id:'7',month:'Julio',prod:props.calendarioarr[0].julio},
        {id:'8',month:'Agosto',prod:props.calendarioarr[0].agosto},
        {id:'9',month:'Septiembre',prod:props.calendarioarr[0].septiembre},
        {id:'10',month:'Octubre',prod:props.calendarioarr[0].octubre},
        {id:'11',month:'Noviembre',prod:props.calendarioarr[0].noviembre},
        {id:'12',month:'Diciembre',prod:props.calendarioarr[0].diciembre},];

    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get('window').height;

    const Item = ({month,info}) =>(
        <ImageBackground
            source={ImagesArray(props.color)}
            resizeMode={"center"}
            style={[styles.imagenConsumo,{backgroundColor:'white',width:(screenWidth/2.085),height:(screenHeight/5.3)}]}>
            <Text style={[styles.fechaConsumo, { color:props.color,}]}>{'\n\n'+month}</Text>
            <Text style={[styles.datoConsumo,{color:'black'}]}>{info}</Text>

        </ImageBackground>
    );

    const renderItem = ({item}) => (
        <Item month={item.month} info={item.prod}/>
    );

    return (
            <View style={{flex:1,}}>
                <FlatList data={monthName} renderItem={renderItem} keyExtractor={item => item.id} horizontal={true} pagingEnabled={true} />
            </View>
        )

}

const styles = StyleSheet.create({
    imagenConsumo: {
        flex:1,
    },
    fechaConsumo: {
        fontFamily: "montserrat-700",
        fontSize: 25,
        textAlign: 'center',
        flex:0,
        position:'relative',

    },
    datoConsumo:{
        fontFamily: "montserrat-700",
        fontSize: 38,
        textAlign: 'center',
        flex:0,
    }

});

export default CalendarioProduccion;