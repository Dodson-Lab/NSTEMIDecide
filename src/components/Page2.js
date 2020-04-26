/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationChange as rol
} from 'react-native-responsive-screen';
import { HEART_BLOOD_IMAGE } from '../..';

class Page2 extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
            <ScrollView 
            maximumZoomScale={10.0}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
            <View style={styles.body}>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Acute myocardial infarction (heart attack)</Text>
                <Text style={styles.sectionParagraph}>
                    If you are reading this, you are an older adult (age ≥75 years)
                    recently diagnosed with a heart attack. 
                    This means you did not have enough blood flow to your heart,
                    which can cause damage to your heart muscles. 
                    Due to the type of heart attack you had, you do not require an emergency
                    procedure. But there are a few treatment options for you,
                    including medications and procedures.
                    This is a tool for you and your cardiologist to discuss the available 
                    treatment options, learn about their risks and benefits,
                    and determine if they match your values.
                </Text>
            </View>
                <View style={styles.sectionContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={ HEART_BLOOD_IMAGE } resizeMode="contain"/>
                </View>
                </View>
            </View>
            </ScrollView>
            <View><Text style={styles.footer}>2</Text></View>
            </SafeAreaView>
        )
    }
}

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
    // height: hp('100%')
  },
  sectionContainer: {
    margin: hp('1%'),
    marginTop: hp('2%'),
    paddingHorizontal: wp('5%'),
  },
  imageContainer: {
    height: hp('45%'),
    alignContent: 'center',
    backgroundColor: Colors.white,
    marginBottom: hp('2%')
  },
  image: {
      width: undefined,
      height: undefined,
      flex: 1,
      margin: wp('2%')
  },
  sectionTitle: {
    fontSize: hp('3.5%'),
    fontWeight: '700',
    color: Colors.black,
    fontFamily: 'Helvetica Neue',
  },
  sectionParagraph: {
    fontSize: hp('2.2%'),
    marginTop: hp('2%'),
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
  footer: {
    fontSize: hp('2%'),
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
    margin: hp('.5%')
  }
});

export default Page2;
