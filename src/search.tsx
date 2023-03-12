import { View, Text,StyleSheet, Alert, } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper';

export default function Search({navigation}:any) {
  return (
    <View style={styles.sectionContainerWrapper}>
      <View>
      <TextInput
      mode="outlined"
      label="Search"
      placeholder="Type a Name or a Title"
      left={
   
      <TextInput.Icon icon="arrow-left" onPress={()=>navigation.goBack()}/>
    
    }
    //   right={<TextInput.Affix text="/100" />}
    />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    sectionContainerWrapper: {
      
      paddingHorizontal: 24,
    },
    sectionContainer: {
     marginTop: 32,
     
   },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 36,
      fontWeight: '400',
    },
    sectionDescription2: {
     marginTop: 8,
     fontSize: 14,
     color:'gray'
   },
    highlight: {
      fontWeight: '700',
    },
  });