import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import Bicycle from './components/Bicycle';
import Car from './components/Car';
import Student from './components/Student';

export default function App() {
  return (
    <ScrollView style={{ marginTop: 30 }}>
      <Student />
      <StatusBar style="auto" />
    </ScrollView>
  );
}