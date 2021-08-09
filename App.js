import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { Stories } from './components/stories';
import Story from './components/stories/Story'; 


const App = ()=> {


  return (
    <ScrollView>
    <View style={styles.container}>
        <Stories/>
    </View>
    </ScrollView>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F6D7A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App