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

import { CARDIAC_CATHETERIZATION_IMAGE } from '../..';

class Page5 extends Component {
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
                <View style={[styles.sectionContainer, styles.centerTitle]}>
                    <Text style={styles.sectionTitle}>What is cardiac catheterization?</Text>
                </View>
            <View style={styles.sectionContainer}>
                <View style={styles.sectionParagraph}>
                    <View style={styles.listItem}>
                    <Unorderedlist>
                    <Text style={[styles.boldText, styles.listText]}>
                      <Text style={styles.underlineText}>Cardiac catheterization</Text> is a procedure to look for blockages in your heart.
                    </Text> 
                    </Unorderedlist>
                    </View>
                    <View style={styles.listItem}>
                    <Unorderedlist><Text style={styles.listText}>
                        A dye is injected through a tube (catheter). This tube can enter
                        one of two spots: through the leg (femoral artery) or
                        the wrist (radial artery).
                    </Text></Unorderedlist>
                    </View>
                    <View style={styles.listItem}>
                    <Unorderedlist><Text style={styles.listText}>
                    The dye makes the arteries visible on X-ray, allowing doctors
                    to see  if there are blocked arteries.
                        </Text></Unorderedlist>
                    </View>
                </View>
            </View>
            <View style={styles.labelContainer}>
                <View style={styles.labelBox}>
                    <Text style={[styles.labelText, styles.boldText]}>
                        Cardiac catheterization
                    </Text>
                </View>
            </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={ CARDIAC_CATHETERIZATION_IMAGE } resizeMode="contain"/>
                </View>
            </View>
            </ScrollView>
            <View style={styles.footer}>
              <Text style={styles.copyright}>Copyright 2020 New York University.</Text>
              <Text style={styles.copyright}>All Rights Reserved.</Text>
              <Text style={styles.pageNumber}>5</Text>
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
  sectionContainer: {
    marginTop: hp('2%'),
    paddingHorizontal: wp('5%'),
  },
  boldText: {
    fontWeight: '700'
  },
  listText: {
    fontSize: hp('2.4%')
  },
  labelText: {
    fontSize: hp('2%'),
    color: Colors.white,
  },
  listItem: {
    marginBottom: hp('2%')
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
  imageContainer: {
    height: hp('35%'),
    alignContent: 'center',
    backgroundColor: Colors.white,
    margin: wp('3%'),
  },
  centerTitle: {
    alignItems: 'center',
    alignContent: 'center',
  },
  image: {
      width: undefined,
      height: undefined,
      flex: 1,
  },
  sectionTitle: {
    fontSize: hp('3.5%'),
    fontWeight: '700',
    color: Colors.black,
    fontFamily: 'Helvetica Neue',
    marginBottom: hp('1.5%')
  },
  labelBox: {
    margin: wp('1%'),
    backgroundColor: '#1f3864',
    paddingTop: wp('.5%'),
    paddingBottom: wp('.5%'),
    paddingLeft: wp('1%'),
    paddingRight: wp('7%'),
    alignContent: 'center',
    alignItems: 'center'
  },
  labelContainer: {
    width: wp('65%')
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
});

export default Page5;
