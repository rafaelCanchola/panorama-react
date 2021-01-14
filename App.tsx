import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Sales} from './Sales'


  export default class App extends React.Component {

    render() {
      return (
          <View style={styles.container}>
            <Sales />
            <StatusBar style="auto"/>
          </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      textAlign: 'center',
  },
});
