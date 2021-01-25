import * as React from 'react';
import AppLoading from "expo";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {View} from "react-native";
import {useFonts} from "@use-expo/font";
import Principal from '../screens/Principal'
import MostrarProducto from '../screens/MostrarProducto'
import Contacto from "../screens/Contacto";
import Ayuda from "../screens/Ayuda";
import Infografia from "../screens/Infografia";
import Catalogo from "../screens/Catalogo";
import Producto from "../screens/Producto";
const Stack = createStackNavigator();

export default function App(){
    let [fontsLoaded] = useFonts({
        'montserrat-regular': require('../assets/fonts/Montserrat-regular.ttf'),
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
                                  options={{headerShown: false}}></Stack.Screen>
                    <Stack.Screen name={'MostrarProducto'} component={MostrarProducto}></Stack.Screen>
                    <Stack.Screen name={'Contacto'} component={Contacto}></Stack.Screen>
                    <Stack.Screen name={'Ayuda'} component={Ayuda}></Stack.Screen>
                    <Stack.Screen name={'Infografia'} component={Infografia}></Stack.Screen>
                    <Stack.Screen name={'Catalogo'} component={Catalogo}></Stack.Screen>
                    <Stack.Screen name={'Producto'} component={Producto}></Stack.Screen>

                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}