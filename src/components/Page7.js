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

class Page7 extends Component {
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
            <View style={styles.contentContainer}>
                <View style={styles.sectionContainer}>
                    <Text style={[styles.sectionTitle, styles.centerTitle]}> 
                        Procedure or No Procedure:
                    </Text>
                    <Text style={[styles.sectionTitle, styles.centerTitle]}>
                        what are the benefits and risks of each option?
                    </Text>
                </View>
                <View style={styles.contentWhiteContainer}>
                  <View style={styles.sectionContainer}>
                      <View style={styles.whiteContainer}>
                      <Text style={[styles.sectionParagraph, styles.centerTitle]}> 
                      In studies to date of patients age ≥75, cardiac catheterization procedure has not been shown to prolong your life. 
                      </Text>
                      <Text></Text>
                      <Text style={[styles.sectionParagraph, styles.centerTitle, styles.boldText]}> 
                      Your risks of experiencing a repeated heart attack, heart procedure, and other risks will be discussed in the following pages. 
                      </Text>
                      <Text></Text>
                      </View>
                  </View>
                </View>
            </View>
              <View style={styles.sectionNote}>
                  <Text style={styles.boldText}>
                    Please note:
                  </Text>
                  <View style={styles.whiteContainer}>
                      <Text>
                      Numbers used in this decision aid were based on studies of older adults who experienced a heart attack.
                      Your clinical circumstances may be different from the populations observed
                      in these studies.</Text>
                      <Text style={styles.boldText}>
                      Your individual medical history has not been considered in these estimates.
                      </Text>
                  </View>
              </View>
            </View>
            </ScrollView>
            <View><Text style={styles.footer}>7</Text></View>
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
    // height: hp('90%'),
  },
  contentContainer: {
    alignItems: 'center',
    margin: 10
  },
  contentWhiteContainer: {
    // width: wp('150%'),
    marginBottom: hp('15%')
  },
  sectionContainer: {
    marginTop: hp('8%'),
    marginLeft: wp('2.5%'),
    marginRight: wp('2.5%'),
    textAlign: 'center',
  },
  centerTitle: {
      textAlign: 'center'
  },
  sectionTitle: {
    fontSize: hp('3%'),
    fontWeight: '700',
    color: Colors.black,
    fontFamily: 'Helvetica Neue',
  },
  sectionParagraph: {
    fontSize: hp('2.2%'),
    fontWeight: '400',
    color: Colors.black,
    fontFamily: 'Helvetica Neue',
    alignItems: 'center',
  },
  sectionNote: {
    fontSize: hp('1.5%'),
    // margin: wp('1%'),
    padding: wp('5%'),
  },
  boldText: {
    fontWeight: '700'
  },
  whiteContainer: {
    backgroundColor: Colors.white,
    // margin: wp('2%'),
    padding: wp('3%'),
    // paddingLeft: hp('1.5%'),
    // paddingRight: hp('1.5%'),
    // paddingTop: hp('1.5%'),
    // margin: hp('.5%'),
    borderColor: Colors.gray,
    borderWidth: wp('.2%'),
  },
  footer: {
    fontSize: hp('2%'),
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
    margin: hp('.5%')
  }
});

export default Page7;
