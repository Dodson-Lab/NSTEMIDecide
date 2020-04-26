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

import { HEART_IMAGE, HEART_ATACK_NO_OP_IMAGE, HEART_ATACK_OP_IMAGE } from '../..';

class Page8 extends Component {
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
                    <Text style={styles.sectionTitle}>Benefits of Cardiac Catheterization
                    </Text>
                </View>
                <View style={styles.sectionContainer}>
                    <View style={styles.imageContainer}>
                        <View style={styles.imageSmallWrapper}>
                            <Image style={styles.image} source={ HEART_IMAGE } resizeMode="contain"/>
                        </View>
                        <View style={styles.containerWrapper}>
                            <Text style={styles.cardText}>
                            Chance of Another <Text style={styles.orangeText}>Heart Attack</Text> in the Next Year.
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.sectionContainer}>
                  <View style={{flexDirection:"row"}}>
                      <View style={styles.whiteContainer}>
                          <Text>No cardiac catheterization</Text>
                          <Text>79/100 people did not have another heart attack.</Text>
                          <Text>21/100 people did.</Text>
                          <View style={styles.imageWrapper}>
                            <Image style={styles.image} source={ HEART_ATACK_NO_OP_IMAGE } resizeMode="contain"/>
                          </View>
                          <View styles={styles.CircleShapeView}></View>
                          {/* <Text>Did not have another heart attack</Text>
                          <Text>Had another heart attack</Text> */}
                      </View>
                      <View style={styles.whiteContainer}>
                          <Text>88/100 people did not have another heart attack.</Text>
                          <Text>12/100 people did.</Text>
                          <View style={styles.imageWrapper}>
                            <Image style={styles.image} source={ HEART_ATACK_OP_IMAGE } resizeMode="contain"/>
                          </View>
                          <Text>Did not have another heart attack</Text>
                          <Text>Prevented from another heart attack due to having the procedure</Text>
                          <Text>Had another heart attack</Text>
                      </View>
                  </View>
                </View>
            </View>
            </ScrollView>
            <View><Text style={styles.footer}>8</Text></View>
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
      height: hp('100%'),
      fontFamily: 'Helvetica Neue'
    },
    sectionTitle: {
        fontSize: hp('3%'),
        fontWeight: '700',
        fontFamily: 'Helvetica Neue',
        textAlign: 'center'
    },
    whiteContainer: {
      flex: 1,
      backgroundColor: Colors.white,
      paddingLeft: hp('1.5%'),
      paddingRight: hp('1.5%'),
      paddingTop: hp('1.5%'),
      margin: hp('.5%'),
      // height: hp('40%'),
      borderColor: Colors.gray,
      borderWidth: wp('.1%'),
    },
    cardText: {
        fontSize: hp('2.2%'),
        fontWeight: '700',
        // textAlign: 'center',
        // padding: hp('1%')
    },
    orangeText: {
        color: "#ed7d31"
    },
      sectionContainer: {
          margin: wp('2%')
        // marginTop: hp('1%'),
        // padding: wp('5%'),
      },
      boldText: {
        fontWeight: '700'
      },
      imageWrapper: {
        // flex: 1,
        // height: hp('36%'),
        // backgroundColor: Colors.white,
        flexDirection: "row",
      },
    //   labelText: {
    //     fontSize: hp('2.2%'),
    //     color: Colors.white,
    //   },
    //   listItem: {
    //     marginBottom: hp('1%')
    //   },
      // underlineText: {
      //   textDecorationLine: 'underline',
      // },
      imageContainer: {
        // width: wp('80%'),
        // backgroundColor: Colors.white,
        flexDirection: "row",
      },
      image: {
          width: wp('20%'),
          height: hp('40%'),
          // height: undefined,
          flex: 1,
      },
      imageSmallWrapper: {
        margin: wp('.5%'),
      },
      containerWrapper: {
        //   margin: wp('2%')
        // width: wp('75%'),
        // margin: wp('2%')
        // alignContent: "center",
        // alignItems: "center"
        // marginLeft: wp('2%'),
        // marginTop: wp('3%'),
        // marginBottom: wp('3%'),
        // flex: 1,
      },
      footer: {
        fontSize: hp('2%'),
        textAlign: 'center',
        fontFamily: 'Helvetica Neue',
        margin: hp('.5%')
      },
      blueDot: {
        width: 44,
        height: 44,
        borderRadius: 44/2,
        color: "#7cb4d4",
        backgroundColor: "#7cb4d4",


        // height: 25px;
        // width: 25px;
        // background-color: #bbb;
        // border-radius: 50%;
        // display: "flex"
      },
      darkBlueDot: {
        color: "#456d84"
      },
      orangeDot: {
        color: "#f68000"
      },
      CircleShapeView: {
        //To make Circle Shape
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        backgroundColor: '#FF00FF',
      },
      labelBox: {
        // margin: wp('1%'),
        // backgroundColor: '#1f3864',
        // paddingTop: wp('.5%'),
        // paddingBottom: wp('.5%'),
        // paddingLeft: wp('4%'),
        // paddingRight: wp('7%'),
        // alignContent: 'center',
        // alignItems: 'center',
      },
  });

export default Page8;
