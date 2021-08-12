import React from 'react'
import {Image, StyleSheet, Text, View,ScrollView, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';

function DetailsScreen() {
    return (
      <ScrollView>
      <View style={{
        alignItems: 'center', 
        marginTop: 55,
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' }}
    >
        <Image style={styles.imag} source={require('../../assets/FullSizeRender-105-removebg-preview.png')} />
        <View style={styles.textView}>
        <Text style={styles.textCont}>
            I am Agbaje Olayiwola Taoheed, a FULL STACK WEB DEVELOPER A 
            Dynamic, in Lagos, Nigeria i specialize
            in front end development using HTML, CSS 
            and javascript , i focus on learning new 
            technologies and being up to date on all 
            the latest frameworks.
        </Text>
            </View>
      </View>
      </ScrollView>

    );
  }
  const styles = StyleSheet.create({
    imag:{
      width: 300,
      height:500,
      marginLeft: 120,      
    },
    textView:{
      borderRadius: 20,
      padding: 43,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#272932',
    },
    textCont: {
      marginBottom: 1,
      width: 320,
      color: 'white',
    },
    headText:{
      color: '#fff',
    },
  }); 
export default DetailsScreen
