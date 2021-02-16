import * as React from 'react';
import AppLoading from "expo";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Image, View} from "react-native";
import {useFonts} from "@use-expo/font";
import Principal from '../screens/Principal'
import GraficaProduccion from '../components/producto/GraficaProduccion'
import Contacto from "../screens/Contacto";
import Ayuda from "../screens/Ayuda";
import Infografia from "../screens/Infografia";
import Catalogo from "../screens/Catalogo";
import Producto from "../screens/Producto";
import Introduccion from "../screens/producto/Introduccion";
import Produccion from "../screens/producto/Produccion";
import Comercio from "../screens/producto/Comercio";
import Monografia from "../screens/producto/Monografia";
import Icon from 'react-native-vector-icons/FontAwesome5';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CambioColor = require('../components/CambioColor').default

function ProductoTabs ({navigation,route}){
    const colorLighter = CambioColor(0.5,route.params.color);
    const colorDarker =  CambioColor(0.75,route.params.color);

    React.useLayoutEffect(() => {
        navigation.setOptions({ headerTitle: route.params.name, headerTintColor: route.params.color });
    }, [navigation, route]);
    return (
        <Tab.Navigator tabBarOptions={{
            inactiveTintColor: colorLighter,
            activeTintColor:route.params.color,
        }}>
            <Tab.Screen name='Introducción' component={Introduccion} initialParams={{id:route.params.id-1}} options={{tabBarIcon:({size,color})=>(<Icon name="book" size={size} color={color}/>)}}/>
            <Tab.Screen name='Producción' component={Produccion} initialParams={{id:route.params.id-1}} options={{tabBarIcon:({size,color})=>(<Icon name="dolly" size={size} color={color}/>)}}/>
            <Tab.Screen name='Comercio' component={Comercio} initialParams={{id:route.params.id-1}} options={{tabBarIcon:({size,color})=>(<Icon name="globe-americas" size={size} color={color}/>)}}/>
            <Tab.Screen name='Monografía' component={Monografia} initialParams={{id:(route.params.id-1)}} options={{tabBarIcon:({size,color})=>(<Icon name="newspaper" size={size} color={color}/>)}}/>
        </Tab.Navigator>
    )
}

export default function App(){
    let [fontsLoaded] = useFonts({
        'montserrat-regular': require('../assets/fonts/Montserrat-regular.ttf'),
        'montserrat-italic': require('../assets/fonts/Montserrat-italic.ttf'),
        'montserrat-medium': require('../assets/fonts/Montserrat-MediumItalic.ttf'),
        'montserrat-500': require('../assets/fonts/Montserrat-500.ttf'),
        'montserrat-700': require('../assets/fonts/Montserrat-700.ttf'),
        'montserrat-900': require('../assets/fonts/Montserrat-900.ttf'),
        'roboto-700':require('../assets/fonts/Roboto-700.ttf'),
    });

    if(!fontsLoaded){
        return <View/>
    }else {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={'Principal'} component={Principal}
                                  options={{headerShown: false}}/>
                    <Stack.Screen name={'GraficaProduccion'} component={GraficaProduccion}/>
                    <Stack.Screen name={'Contacto'} component={Contacto}/>
                    <Stack.Screen name={'Ayuda'} component={Ayuda}/>
                    <Stack.Screen name={'Infografia'} component={Infografia}/>
                    <Stack.Screen name={'Catalogo'} component={Catalogo}/>
                    <Stack.Screen name={'Productos'} component={ProductoTabs} />
                    {/*<Stack.Screen name={'Producto'} component={Producto}></Stack.Screen>*/}
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}