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

class Page1 extends Component {
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
                  <Text style={styles.sectionTitle}>Cardiac catheterization:</Text>
                  <Text style={styles.sectionDescription}>
                  Is this procedure right for you?
                  </Text>
              </View>
              <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>A Decision Aid Tool</Text>
                  <Text style={styles.sectionDescription}>
                  for older patients (age ≥75) considering cardiac catheterization as
                  treatment for a heart attack
                  </Text>
              </View>
              <View style={styles.sectionContainer}>
                  <Text style={styles.noteTitle}>Note for clinicians:</Text>
                  <Text style={styles.noteDescription}>
                  This decision aid is designed for patients with Non-ST elevation MI (NSTEMI) only.
                  </Text>
              </View>
            </View>
            </ScrollView>
            <View><Text style={styles.footer}>1</Text></View>
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
    // height: hp('100%'),
  },
  sectionContainer: {
    marginTop: hp('12%'),
    margin: hp('1%'),
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: hp('3.5%'),
    fontWeight: '700',
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
    fontSize: hp('1.8%'),
    fontWeight: '700',
    color: Colors.black,
    fontFamily: 'Helvetica Neue',
  },
  noteDescription: {
    fontSize: hp('1.8%'),
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

export default Page1;
