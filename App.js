/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
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

import FlipPage, {FlipPagePage} from 'react-native-flip-page';

import Page1 from './src/components/Page1'
import Page2 from './src/components/Page2'
import Page3 from './src/components/Page3'
import Page4 from './src/components/Page4'
import Page5 from './src/components/Page5'
import Page6 from './src/components/Page6'
import Page7 from './src/components/Page7'
import Page8 from './src/components/Page8'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <FlipPage orientation={'horizontal'}>
          <FlipPagePage>
            <Page1/>
          </FlipPagePage>
          <FlipPagePage>
            <Page2/>
          </FlipPagePage>
          <FlipPagePage>
            <Page3/>
          </FlipPagePage>
          <FlipPagePage>
            <Page4/>
          </FlipPagePage>
          <FlipPagePage>
            <Page5/>
          </FlipPagePage>
          <FlipPagePage>
            <Page6/>
          </FlipPagePage>
          <FlipPagePage>
            <Page7/>
          </FlipPagePage>
          <FlipPagePage>
            <Page8/>
          </FlipPagePage>
        </FlipPage>
    </>
  );
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
