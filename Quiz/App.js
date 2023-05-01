import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RCC from './components/RCC';
import ListScrollView from './components/ListScrollView';
import { Users } from './components/Users';
import { ScrollView } from 'react-native';
import SignIn from './components/SignIn';
import Home from './components/Home';
import About from './components/About';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='About' component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
