import { View, StyleSheet, useColorScheme, Alert } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Button, Chip, Text } from 'react-native-paper';
import { ScrollView } from 'react-native';

type SectionProps = PropsWithChildren<{
    title: string;
  }>;

function Section2({children, title}: SectionProps): JSX.Element {
   

    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription2,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {children}
        </Text>
      </View>
    );
  }

export default function Detail() {
    const [textLines, setTextLines]= React.useState(4);
    const [displayContent, setDisplayContent]= React.useState(false);
  return (
    <ScrollView style={{flex:1, backgroundColor:'pink',}}>
      
      <View style={{height:400 }}>
            <Text>test</Text>
      </View>
      <View style={styles.sectionContainerWrapper}>
      <Section2 title="Test product">
           Lorem Ipsum . 2020
           </Section2> 
           <Text variant="labelSmall">29 ratings. 4.3 of 5</Text>
           <Button  mode="contained" onPress={() => Alert.alert('Alert','Pressed')}>
    Buy product - from 30 Kr
  </Button>
  <View style={{flexDirection:'row'}}>
  <Button  mode="text" icon="bell" onPress={() => Alert.alert('Alert','Pressed')}>
    Notify me when the product is available. 
  </Button>
  
  </View>
  <View>
  <Text variant="labelSmall" numberOfLines={textLines} ellipsizeMode="tail" style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem soluta laborum facere expedita quisquam ex necessitatibus qui? Perspiciatis nam possimus vitae ducimus, error tempora et ab sunt, odit fuga quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur a voluptas distinctio officiis earum fugit provident! Explicabo deserunt odio placeat nisi officiis autem voluptas natus, minima dolorem? Temporibus, molestiae corrupti.</Text>
  <View style={{flexDirection:'row', alignSelf:'flex-end'}}>
  <Button  mode="text"onPress={() => {
      if (textLines == 0){
      setTextLines(4)}
      else{
        setTextLines(0)
      }
      }}>
   Read More
  </Button>
  
  </View>
  <ScrollView horizontal={true} alwaysBounceHorizontal showsHorizontalScrollIndicator={false} style={{paddingVertical:20}}>
         <View style={{ flexDirection: 'row'}}>
         <Chip style={{borderRadius:20, marginLeft:24 }}  onPress={() => Alert.alert('Alert','Pressed')}>Search</Chip>
         <Chip style={{borderRadius:20, marginLeft:10 }}  onPress={() => Alert.alert('Alert','Pressed')}>Search</Chip>
         <Chip style={{borderRadius:20, marginLeft:10 }}  onPress={() => Alert.alert('Alert','Pressed')}>Search</Chip>
         <Chip style={{borderRadius:20, marginLeft:10 }}  onPress={() => Alert.alert('Alert','Pressed')}>Search</Chip>
         <Chip style={{borderRadius:20, marginLeft:10 }}  onPress={() => Alert.alert('Alert','Pressed')}>Search</Chip>
         <Chip style={{borderRadius:20, marginLeft:10 }}  onPress={() => Alert.alert('Alert','Pressed')}>Search</Chip>
         <Chip style={{borderRadius:20, marginLeft:10 }}  onPress={() => Alert.alert('Alert','Pressed')}>Search</Chip>
         <Chip style={{borderRadius:20, marginLeft:10 }}  onPress={() => Alert.alert('Alert','Pressed')}>Search</Chip>
         </View>
         </ScrollView>
  </View>
  <View>
  <Button  mode="text" icon="menu-down"  contentStyle={{flexDirection: 'row-reverse', justifyContent:'space-between', }} onPress={() => setDisplayContent(!displayContent)}>
    Product details
  </Button>
  {displayContent?(
 <View>
 <Text style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum beatae, praesentium saepe sint cupiditate cumque, sit molestias corrupti atque perspiciatis aspernatur ea odit ratione! Aliquam amet odit ut veritatis? Ipsum?</Text>
</View>
  ):null}
 
  </View>
  
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    sectionContainerWrapper: {
        backgroundColor:'white', borderTopLeftRadius:20, borderTopRightRadius:20, elevation:2,
      paddingHorizontal: 24, 
    },
    sectionContainer: {
        marginTop: 20,
     
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