import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Button, StyleSheet, Text, View,ScrollView, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { Stories } from './components/stories';
import About from './screens/about';
import Welcome from './screens/welcome';
import Login from './screens/login';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer
    animationEnabled='true'
    animationTypeForReplace='push'>
      <Stack.Navigator>
        <Stack.Screen 
        name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App