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

class Page4 extends Component {
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
                <View style={[styles.sectionContainer, styles.centerTitle]}>
                    <Text style={styles.sectionTitle}>I had a heart attack.</Text>
                    <Text style={styles.sectionTitle}>What are my options?</Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionParagraph}>
                        We understand that this is a major decision for you.
                        While your cardiologist may have already recommended the procedure,
                        knowing about your options may help you better make an informed decision.
                    </Text>
                </View>
                <View style={styles.sectionBlueContainer}>
                    <View style={[styles.blueBox]}>
                        <View style={styles.sectionBox}>
                            <Text style={[styles.sectionParagraph, styles.highlight]}>
                                Acute myocardial infarction
                            </Text>
                            <Text style={[styles.sectionParagraph, styles.highlight]}>
                                (heart attack)
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.sectionBlueContainer, styles.sideBySide]}>
                    <View style={[styles.smallBlueBox]}>
                        <View style={styles.sectionBox}>
                            <Text style={[styles.sectionParagraph, styles.highlight]}>
                                Procedure
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.smallBlueBox]}>
                        <View style={styles.sectionBox}>
                            <Text style={[styles.sectionParagraph, styles.highlight]}>
                                No procedure
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={[styles.smallBlueBox]}>
                        {/* <View style={styles.sectionBox}> */}
                            <Text style={styles.sectionParagraph}>
                            If you choose to have a cardiac catheterization procedure,
                            and you are found to have a blocked artery,
                            you may also be considered for: 
                            </Text>
                        {/* </View> */}
                    </View>
                    <View style={[styles.smallBlueBox]}>
                        {/* <View style={styles.sectionBox}> */}
                            <Text style={styles.sectionParagraph}>
                            If you choose <Text style={styles.highlight}>not</Text> to have a cardiac catheterization procedure, you will still:
                            </Text>
                            <Text></Text>
                            <Text style={styles.sectionParagraph}>
                            Have the option to get a cardiac catheterization procedure
                            in the future if you have symptoms later on
                            </Text>
                        {/* </View> */}
                    </View>
                </View>
                <View style={styles.sectionBlueContainer}>
                    <View style={[styles.blueBox]}>
                        {/* <View style={styles.sectionBox}> */}
                            <Text style={styles.sectionParagraph}>
                            With either a procedure or no procedure, you will still
                            receive medicines to help your heart.
                            </Text>
                        {/* </View> */}
                    </View>
                </View>
                {/* <View style={styles.sectionContainer}>
                    <Text style={styles.sectionParagraph}>
                    These options are described in detail on the following pages
                    </Text>
                </View> */}
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
  sectionBox: {
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: hp('2%'),
    paddingHorizontal: wp('5%'),
  },
  sectionBlueContainer: {
    marginTop: hp('2%'),
    paddingHorizontal: wp('5%'),
    alignItems: 'center',
    alignContent: 'center',
    display: 'flex'
  },
  sideBySide: {
      flexDirection: 'row',
    //   display: 'flex'
  },
  centerTitle: {
    alignItems: 'center',
    alignContent: 'center',
  },
  sectionTitle: {
    fontSize: hp('3.5%'),
    fontWeight: '700',
    color: Colors.black,
    fontFamily: 'Helvetica Neue',
  },
  sectionParagraph: {
    fontSize: hp('2.2%'),
    fontWeight: '400',
    color: Colors.black,
    fontFamily: 'Helvetica Neue',
    alignItems: 'center'
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
      backgroundColor: '#ddeaf6',
      borderColor: Colors.black,
    //   borderRadius: wp('2%'),
      borderWidth: wp('.4%'),
      padding: wp('2%'),
    //   width: wp('70%'),
  },
  smallBlueBox: {
    backgroundColor: '#ddeaf6',
    borderColor: Colors.black,
  //   borderRadius: wp('2%'),
    borderWidth: wp('.4%'),
    padding: wp('2.5%'),
    width: wp('40%'),
    margin: hp('1%'),
    flex: 1,
}
});

export default Page4;
