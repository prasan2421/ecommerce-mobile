/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

 import React from 'react';
 import type {PropsWithChildren} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   
   useColorScheme,
   View,
   Alert
 } from 'react-native';
 import { TextInput,Card,Text, Avatar} from 'react-native-paper';
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import { Button } from 'react-native-paper';
 import { Chip } from 'react-native-paper';
 
 type SectionProps = PropsWithChildren<{
   title: string;
 }>;
 
 function Section({children, title}: SectionProps): JSX.Element {
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
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 }

 function Section2({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={[styles.sectionContainer,styles.sectionContainerWrapper]}>
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


const LeftContent = (props:any) => <Avatar.Icon {...props} icon="folder" />

const MyComponent = () => (
  <Card style={{marginHorizontal:10, width:150}}>
    
    
    <Card.Cover  source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content style={{marginTop:10}}>
    <Text variant="labelSmall">labelSmall . 2020</Text>
      <Text variant="labelLarge">Card title</Text>
     
    </Card.Content>
    
      <View style={{flexDirection: 'row', flexWrap: 'wrap', }}>
      <Button mode="outlined" style={{margin:10}} contentStyle={{padding:0, margin:-5, }} >Kr 50</Button>
      </View>
     
    
  </Card>
);
 
 function Index(): JSX.Element {
   const isDarkMode = useColorScheme() === 'dark';
   const [text, setText] = React.useState('');

 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
    
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}
         alwaysBounceHorizontal
         >
        <View style={styles.sectionContainerWrapper}>
         <View>
          
           <Section title="Pawpaw.no">
            Lorem Ipsum
           </Section> 
          
         </View>
         <View style={styles.sectionContainer}>
         <Chip style={{padding:10, elevation:10}} icon="magnify" mode="outlined" onPress={() => Alert.alert('Alert','Pressed')}>Search</Chip>
         </View>
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

         <View style={{
    
    zIndex:10 ,
  marginVertical:10,
    elevation: 1, // changed to a greater value
    }}>
      <View>
      <Section2 title="Best Seller 2023">
            Lorem Ipsum
           </Section2> 
           <ScrollView horizontal={true} alwaysBounceHorizontal showsHorizontalScrollIndicator={false} style={{paddingVertical:20}}>
         <View style={{ flexDirection: 'row', marginVertical:10}}>
<MyComponent/>
<MyComponent/>
<MyComponent/>
<MyComponent/>
           </View>
           </ScrollView>
      </View>
         
      <View>
      <Section2 title="Best Seller 2023">
            Lorem Ipsum
           </Section2> 
           <ScrollView horizontal={true} alwaysBounceHorizontal showsHorizontalScrollIndicator={false} style={{paddingVertical:20}}>
         <View style={{ flexDirection: 'row', marginVertical:10}}>
<MyComponent/>
<MyComponent/>
<MyComponent/>
<MyComponent/>
           </View>
           </ScrollView>
      </View>
      <View>
      <Section2 title="Best Seller 2023">
            Lorem Ipsum
           </Section2> 
           <ScrollView horizontal={true} alwaysBounceHorizontal showsHorizontalScrollIndicator={false} style={{paddingVertical:20}}>
         <View style={{ flexDirection: 'row', marginVertical:10}}>
<MyComponent/>
<MyComponent/>
<MyComponent/>
<MyComponent/>
           </View>
           </ScrollView>
      </View>
         </View>
       </ScrollView>
    
   );
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
 
 export default Index;

