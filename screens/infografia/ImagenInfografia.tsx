import React from "react";
import {Dimensions, StyleSheet, View, Image, Text, ScrollViewComponent, ScrollView, Animated} from "react-native";
import {PinchGestureHandler, State} from "react-native-gesture-handler";

const ImagesArray = require('../../components/producto/ImagesArray').default

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width
const screenContainer = screenWidth - 30

export default function ImagenInfografia({navigation,route}){

    let scale = new Animated.Value(1)

    const onZoomEvent = Animated.event(
        [
            {
                nativeEvent: { scale: scale }
            }
        ],
        {
            useNativeDriver: true
        }
    )

    const onZoomStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            Animated.spring(scale, {
                toValue: scale,
                useNativeDriver: true
            }).start()
        }
    }

    return(
        <View style={styles.container}>
            <ScrollView >
                <PinchGestureHandler
                    onGestureEvent={onZoomEvent}
                    onHandlerStateChange={onZoomStateChange}>
                <Animated.Image source={ImagesArray(route.params.image)} style={{transform: [{ scale: scale }]}} resizeMode={'contain'} />
                </PinchGestureHandler>
            </ScrollView>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    scrollView: {
        backgroundColor: '#fff',
        width: screenWidth - 15,
    },
    scrollViewContainer: {
        alignItems: 'center',
    },
    textoPrincipal: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        width: screenContainer,
        fontSize: 16,
        margin:10,
        textAlign:'justify',
    },
});