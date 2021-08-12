import React, {useState, useEffect} from 'react'
import {Image, ScrollView, Button, TextInput, StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SQLite from 'react-native-sqlite-storage'
import { Agent } from 'https';




const db = SQLite.openDatabase(
    {
     name:'Main',
     location:'default',
    },
    ()=>{},
    error => {console.log(error)}
)
export default  Login = () => {
    const navigation = useNavigation(); 
    const [text, onChangeText] = useState(null);
    const [number, onChangeNumber] = useState(null);

useEffect(() => {
    createTable()
    setData();

}, [])

const createTable = ()=>{
   db.transaction((tx)=>{
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS'
            +"Users"
            +"(ID INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT);"
        )
    })
}


const setData = async ()=>{
    if (name.legth==0 || age.legth == 0 ){
        Alert.alert('Warning!!', 'Please Write Your Data')
    }else{
        try{
           await db.transaction( async(tx)=>{
             await tx.executeSql(
                    "INSERT INTO Users (email, password) Values ('"+name+"', '"+age+"')"
                )
            })
            navigation.navigate('Welcome')
        }catch(error){
            console.log(error)
        }
    }


    return (
       
        <ScrollView>
        <Image style={styles.loginImage} source={require('../../assets/login.png')} />
        <View style={styles.container}>
        <Text>Hacker News Api</Text>
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Email"
            name='email'
            keyboardType="default"
            />
            <TextInput
            style={styles.input}
            name='password'
            onChangeText={onChangeNumber}
            placeholder="Password"
            keyboardType="default"
            />
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
            style={styles.loginBtn}
            title="Login"
            onPress={() => navigation.navigate('Welcome')}
            />
    </View>
        </View>
        </ScrollView>
    )
    }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginImage:{
        width: 300,
        height:300,
        marginLeft: 60,
    },
    input:{
        backgroundColor:'#d3d3d3',
        borderRadius:20,
        width:300,
        padding: 15,
        paddingLeft: 50,
        marginTop: 0,
        marginBottom:10,
    },
    loginBtn:{
        padding: 50,
        backgroundColor: '#d3d3d3',
    }
  });
}