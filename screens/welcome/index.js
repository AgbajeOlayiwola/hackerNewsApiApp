import * as React from 'react';
import {ScrollView,StyleSheet, Button, View, Text } from 'react-native';
import { Stories } from '../../components/stories';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation(); 
    return (
    <ScrollView>
        <View style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </View>
      <Stories/>
      </View>
      </ScrollView>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    backgroundColor:'#FCDDBC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Welcome
