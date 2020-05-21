/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Platform
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationChange as rol
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/FontAwesome'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

Icon.loadFont();


import Page1 from './src/components/Page1'
import Page2 from './src/components/Page2'
import Page3 from './src/components/Page3'
import Page4 from './src/components/Page4'
import Page5 from './src/components/Page5'
import Page6 from './src/components/Page6'
import Page7 from './src/components/Page7'
import Page8 from './src/components/Page8'
import Page9 from './src/components/Page9'
import Page10 from './src/components/Page10'
import Page11 from './src/components/Page11'
import Page12 from './src/components/Page12'
import Page13 from './src/components/Page13'
import MehranScore from './src/components/MehranScore'

import SplashScreen from 'react-native-splash-screen'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName="Page1">
      <Stack.Screen name="Page 1" component={Page1} />
      <Stack.Screen name="Page 2" component={Page2} />
      <Stack.Screen name="Page 3" component={Page3} />
      <Stack.Screen name="Page 4" component={Page4} />
      <Stack.Screen name="Page 5" component={Page5} />
      <Stack.Screen name="Page 6" component={Page6} />
      <Stack.Screen name="Page 7" component={Page7} />
      <Stack.Screen name="Page 8" component={Page8} />
      <Stack.Screen name="Page 9" component={Page9} />
      <Stack.Screen name="Page 10" component={Page10} />
      <Stack.Screen name="Page 11" component={Page11} />
      <Stack.Screen name="Page 12" component={Page12} />
      <Stack.Screen name="Mehran Score" component={MehranScore} />
      <Stack.Screen name="Page 13" component={Page13} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
  
const App: () => React$Node = () => {
  useEffect( () => {
    SplashScreen.hide()
  }, []);
  return MyStack()
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#E8E8E8',
    height: hp('100%')
  },
  sectionContainer: {
    marginTop: hp('15%'),
    paddingHorizontal: 24,
    flex: 1,
  },
  sectionTitle: {
    fontSize: hp('3.5%'),
    fontWeight: '600',
    color: Colors.black,
    fontFamily: 'Helvetica Neue',
  },
  sectionDescription: {
    fontSize: hp('3.5%'),
    fontWeight: '400',
    color: Colors.black,
    fontFamily: 'Helvetica Neue',
  },
  noteTitle: {
    fontSize: hp('2%'),
    fontWeight: '600',
    color: Colors.black,
    fontFamily: 'Helvetica Neue',
  },
  noteDescription: {
    fontSize: hp('2%'),
    fontWeight: '400',
    color: Colors.black,
    fontFamily: 'Helvetica Neue',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
