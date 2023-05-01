import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ItemImage from './components/ItemImage';
import ItemTypograp from './components/ItemTypograp';
import No4RCC from './components/No4RCC';
import No4RFC from './components/No4RFC';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <No4RFC />
      <StatusBar style="auto" />
    </View>
  );
}