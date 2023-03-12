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
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Index from './src/index';
import Navigation from './components/navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

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

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
   
    flex:1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
         
       <StatusBar
        animated={true}
        showHideTransition={'slide'}
         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
         backgroundColor={isDarkMode ? Colors.darker : Colors.lighter}
       />
       
    <NavigationContainer>
    <PaperProvider>
    <Navigation />
  </PaperProvider>
  </NavigationContainer>
   </SafeAreaView>
  );
}


export default App;
