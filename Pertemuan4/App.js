import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';

export default function App() {
  return (
    <View style={{ marginTop: 40 }}>
      <StatusBar style="dark" hidden={false} />
      <Home />
    </View>
  );
}