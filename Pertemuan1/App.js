import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function App() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.paragraph}>
         <Image source={require('./fly.png')}
         style={{width: 200, height: 200 ,borderRadius : 100}} />
         
      </Text>
      <Text style={styles.paragraph}> hallo</Text>
      <Text style={styles.paragraph}> hera dwi pradita</Text>
      <Text style={styles.paragraph}> 212310054</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
