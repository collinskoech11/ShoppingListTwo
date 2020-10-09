import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'App.css' ;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Start App</Text>
      <StatusBar style="auto" />
      <div className="nav">
        Hello React Native
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
