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
  ,Dimensions
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

import { COMFORT_IMAGE } from '../..';

class Page11 extends Component {
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
                <View style={[styles.titleContainer, styles.centerText]}>
                    <Text style={styles.sectionTitle}>
                    To have a cardiac catheterization procedure or not? 
                    </Text>
                </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionParagraph}>
                   Now that you have more information about cardiac catheterization,
                   consider what matters most to you. Will going through
                   this procedure help you achieve your goals? 
                </Text>
            </View>
            <Text></Text>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionParagraph}>
                Thinking about this will help you make a better decision on
                whether a cardiac catheterization procedure is right for you.
                </Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={ COMFORT_IMAGE } resizeMode="contain"/>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={[styles.sectionParagraph, styles.centerText]}>
                If you have additional questions or concerns about the procedure, 
                address them to your clinical care team.
                </Text>
            </View>
            <Text></Text>
        <View style={styles.faqContainer}>
            <View style={styles.sectionContainer}>
                <Text style={[styles.sectionParagraph, styles.highlight, styles.underline]}>
                Frequently Asked Questions:
                </Text>
            </View>
            <Text></Text>
            <View style={styles.sectionContainer}>
                <Text style={[styles.sectionParagraph, styles.highlight]}>
                Will I be asleep during the cardiac catheterization procedure?
                </Text>
                <Text style={[styles.sectionParagraph]}>
                Sedation is given to patients for the procedure to alleviate any
                possible pain or anxiety. To minimize pain at the catheterization
                site, a local anesthetic is given. The procedure is usually without
                discomfort once the artery has been accessed.
                </Text>
            </View>
            <Text></Text>
            <View style={styles.sectionContainer}>
                <Text style={[styles.sectionParagraph, styles.highlight]}>
                What happens after cardiac catheterization?
                </Text>
                <Text style={[styles.sectionParagraph]}>
                You will be in a recovery room for a few hours where your vital
                signs and catheterization site will be monitored for safety. 
                </Text>
            </View>
            <Text></Text>
            <View style={styles.sectionContainer}>
                <Text style={[styles.sectionParagraph, styles.highlight]}>
                What happens after I get home? 
                </Text>
                <Text style={[styles.sectionParagraph]}>
                You will be instructed to take medications and make
                follow-up appointments with your doctor. You may be able to
                return to your normal activities as soon as the day after
                the procedure, depending on your functional level. 
                </Text>
            </View>
        </View>
            
        <View style={styles.attributionWrapper}>
            <Text style={[styles.attribution, styles.highlight]}>Sources of Information</Text>
            <Text style={styles.attribution}>Cardiac Catheterization.</Text>
            <Text style={styles.attribution}>Retrieved from: 
            <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.heart.org/en/health-topics/heart-attack/diagnosing-a-heart-attack/cardiac-catheterization')}> The American Heart Association, Inc.
            </Text>

            </Text>
        </View>
        
            </View>

            </ScrollView>

            <View style={styles.footer}>
              <Text style={styles.copyright}>Copyright 2020 New York University.</Text>
              <Text style={styles.copyright}>All Rights Reserved.</Text>
              <Text style={styles.pageNumber}>11</Text>
            </View>
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
  },
  titleContainer: {
    margin: hp('1.5%'),
  },
  sectionContainer: {
      marginLeft: 20,
      marginRight: 20,
    //   marginTop: 10
  },
  sectionParagraph: {
    fontSize: hp('2.2%'),
    fontWeight: '400',
    color: Colors.black,
    fontFamily: 'Helvetica Neue',
    alignItems: 'center',
  },
  highlight: {
      fontWeight: '700'
  },
  underline: {
      textDecorationLine: 'underline'
  },
  image: {
      width: hp('40%'),
      height: hp('20%')
  },

  imageContainer: {
    margin: wp('5%'),
    alignItems: 'center'
  },
  centerText: {
      textAlign: 'center'
  },

  sectionTitle: {
    fontSize: hp('3.5%'),
    fontWeight: '700',
    color: Colors.black,
    fontFamily: 'Helvetica Neue',
    // marginBottom: hp('1.5%'),
    textAlign: 'center'
  },
  footer: {
    margin: hp('.5%')
  },
  pageNumber: {
    fontSize: hp('2%'),
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
  },
  copyright: {
    fontSize: hp('1.2%'),
    textAlign: 'right',
    fontFamily: 'Helvetica Neue',
  },
  faqContainer: {
    marginLeft: 5,
    marginRight: 5
  },
  attributionWrapper: {
    margin: 10,
  },
  attribution: {
    fontSize: hp('1.2%'),
    textAlign: 'left',
    fontFamily: 'Helvetica Neue',
  },

});

export default Page11;
