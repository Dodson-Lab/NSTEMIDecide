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

import Unorderedlist from 'react-native-unordered-list';

class Page3 extends Component {
    render() {
        return (
            <SafeAreaView>
            <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
            <View style={styles.body}>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Your values</Text>
                    <Text style={styles.sectionParagraph}>
                        We understand that being diagnosed with a heart attack may be causing you worry and fear. 
                        Others like you may even feel sad or depressed because they
                        are not sure how this diagnosis will interfere with their future
                        activities.
                        <Text style={styles.highlight}> These feelings are common among patients with heart issues. </Text>
                    </Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={[styles.sectionParagraph, styles.highlight]}>Communication can help.</Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionParagraph}>
                    Speaking to a professional–like your cardiologist—will help lessen the
                    fears you may have about the disease. Listing your priorities and asking
                    questions with your doctor can help better shape your expectations of the future.
                    </Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={[styles.sectionParagraph, styles.highlight]}>
                    Consider asking yourself these questions in order to help guide your
                    discussion with your cardiologist:
                    </Text>
                </View>
                <View style={styles.sectionContainer}>
                    <View style={styles.blueBox}>
                        <Unorderedlist><Text>What are my priorities?</Text></Unorderedlist>
                        <Unorderedlist><Text>How do I feel about procedures?</Text></Unorderedlist>
                        <Unorderedlist><Text>What are my current fears about the cardiac
                            catheterization procedure?</Text></Unorderedlist>
                    </View>
                </View>
            </View>
            </ScrollView>
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
    height: hp('100%')
  },
  sectionContainer: {
    marginTop: hp('2%'),
    // marginBottom: hp('1%'),
    paddingHorizontal: wp('5%'),
  },
  imageContainer: {
    // width: wp('100%'),
    height: hp('45%'),
    alignContent: 'center',
    margin: wp('5%'),
    backgroundColor: Colors.white,
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
  blueBox: {
      width: wp('90%'),
      backgroundColor: '#ddeaf6',
      height: hp('10%'),
      borderColor: Colors.black,
      borderRadius: 10,
      borderWidth: wp('.5%'),
      padding: 10
  }
});

export default Page3;
