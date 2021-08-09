import React, { useEffect, useState } from 'react';
import { getStory } from '../../services/api';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator, Linking } from 'react-native';

export const Story = ({ storyId }) => {

 const [story, setStory] = useState({});
      
    useEffect(() => {
        getStory(storyId).then((data) => {
          if (data && data.url) {
           setStory(data);
          }
          
        });
    }, []);
    
    const { title, kids, id, url } = story;


    return story && url ? (
      <View style={styles.headTop} data-id={id}>

      <Text onPress={() => Linking.openURL(url)}>
        <View
          style={styles.headBox}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Text style={styles.headText}>{title}</Text>
        </View>
        </Text>
      </View>
    ) : null;
}
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path fill="#FF0066" d="M43,-42.8C50.6,-35.4,48,-17.7,50.8,2.8C53.6,23.3,61.8,46.6,54.2,54C46.6,61.4,23.3,52.8,4.2,48.6C-14.9,44.4,-29.8,44.5,-45.5,37.1C-61.2,29.8,-77.6,14.9,-77,0.6C-76.3,-13.6,-58.6,-27.2,-42.9,-34.5C-27.2,-41.9,-13.6,-43,2.1,-45.1C17.7,-47.1,35.4,-50.1,43,-42.8Z" transform="translate(100 100)" />
</svg>
const styles = StyleSheet.create({
  headTop:{
    alignItems: 'center',
    marginTop: 55,
  },
  headBox: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 1,
    padding: 43,
    width: 280,
    borderRadius: 10,

  },
  headText:{
    color: '#fff',
  },
});
export default Story
