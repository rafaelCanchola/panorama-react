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
import React from "react";

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
            source={require("../../assets/calendar.png")}
            resizeMode={"center"}
            style={[styles.imagenConsumo,{backgroundColor:'white',width:(screenWidth/2)}]}>

            <Text style={[styles.fechaConsumo, {width:(screenWidth/2.4), top:'17%', color:'white', backgroundColor: props.color}]}>{month}</Text>
            <Text style={[styles.datoConsumo,{color:'black'}]}>{info}</Text>
        </ImageBackground>
    );

    const renderItem = ({item}) => (
        <Item month={item.month} info={item.prod}/>
    );

    return (
            <View style={{flex:1, height:150}}>
                <FlatList data={monthName} renderItem={renderItem} keyExtractor={item => item.id} horizontal={true} pagingEnabled={true} />
            </View>
        )

}

const styles = StyleSheet.create({
    imagenConsumo: {

    },
    fechaConsumo: {
        fontFamily: "montserrat-700",
        fontSize: 24,
        alignSelf:'center',
        textAlign: 'center',
        borderRadius:2,
        overflow:'hidden'
    },
    datoConsumo:{
        fontFamily: "montserrat-700",
        fontSize: 40,
        alignSelf:'center',
        textAlign: 'center',
    }

});

export default CalendarioProduccion;