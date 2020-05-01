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
  Image,
  Dimensions
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

let screenheight = Dimensions.get("window").height;

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

              <View style={[styles.cardContainer]}>
                  <Image style={styles.image} source={ HEART_IMAGE } resizeMode="contain"/>
                  <Text style={[styles.cardText, styles.highlight]}>
                  Chance of Another <Text style={styles.orangeText}>Heart Attack</Text> in the Next Year.
                  </Text>
              </View>

              <View style={[styles.columnContainer]}>
                  <View style={[styles.whiteColumn]}>
                    <Text style={[styles.sectionParagraph, styles.highlight, styles.centerText]}>
                      No cardiac catheterization
                    </Text>
                    <Text></Text>
                    <Text style={[styles.sectionParagraph]}>
                      <Text style={styles.highlight}>79/100 </Text>
                      people did not have another heart attack.
                    </Text>
                    <Text></Text>
                    <Text style={[styles.sectionParagraph]}>
                      <Text style={styles.highlight}>21/100 </Text>
                      people did.
                    </Text>
                    <View style={styles.imageContainer}>
                    <Image style={styles.dotImage} source={ HEART_ATACK_NO_OP_IMAGE } resizeMode="contain"/>
                    </View>

                    <View style={[styles.container]}>
                      <View style={styles.dotItem}>
                        <View style={[styles.circle, styles.blue]}></View>
                      </View>
                      <View style={styles.item}>
                        <Text>Did not have another heart attack</Text>
                      </View>
                      <View style={styles.dotItem}>
                        <View style={[styles.circle, styles.orange]}></View>
                      </View>
                      <View style={styles.item}>
                        <Text>Had another heart attack</Text>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.whiteColumn]}>
                      <Text style={[styles.sectionParagraph, styles.highlight, styles.centerText]}>
                      Cardiac catheterization
                      </Text>
                      <Text></Text>
                    <Text style={[styles.sectionParagraph]}>
                      <Text style={styles.highlight}>88/100 </Text>
                      people did not have another heart attack.
                    </Text>
                    <Text></Text>
                    <Text style={[styles.sectionParagraph]}>
                      <Text style={styles.highlight}>12/100 </Text>
                      people did.
                    </Text>
                    <View style={styles.imageContainer}>
                    <Image style={styles.dotImage} source={ HEART_ATACK_OP_IMAGE } resizeMode="contain"/>
                    </View>
                    <View style={[styles.container]}>
                      <View style={styles.dotItem}>
                        <View style={[styles.circle, styles.blue]}></View>
                      </View>
                      <View style={styles.item}>
                        <Text>Did not have another heart attack</Text>
                      </View>
                      <View style={styles.dotItem}>
                        <View style={[styles.circle, styles.darkBlue]}></View>
                      </View>
                      <View style={styles.item}>
                        <Text>Prevented from another heart attack due to having the procedure</Text>
                      </View>
                      <View style={styles.dotItem}>
                        <View style={[styles.circle, styles.orange]}></View>
                      </View>
                      <View style={styles.item}>
                        <Text>Had another heart attack</Text>
                      </View>
                    </View>
                  </View>
              </View>
              <View style={[styles.smallCardContainer]}>
              <View style={[styles.smallCard]}>
                  <Text style={[styles.smallCardText, styles.highlight, styles.centerText]}>
                  Due to having the procedure, 9/100 additional people did not have another heart attack.
                  </Text>
              </View>
              </View>

              <View style={styles.sectionContainer}>
                  <Text style={styles.sectionParagraph}>
                  <Text style={styles.highlightUnderline}>Note</Text>: Many patients who undergo cardiac catheterization also undergo a
                  procedure to open a blocked artery (either a stent or bypass surgery).
                  </Text>
              </View>
              <View style={styles.attributionWrapper}>
                <Text style={[styles.attribution, styles.highlight]}>Sources of Information</Text>
                <Text style={styles.attribution}>Garg et al. Routine Invasive Versus Selective Invasive Strategy in Elderly Patients Older Than 75 Years 
                    With Non-ST-Segment Elevation Acute Coronary Syndrome: A Systematic Review and Meta-Analysis. Mayo Clinical Proceedings. 2018; 436-444.
                </Text>
              </View>
            </View>
            </ScrollView>
              <View style={styles.footer}>
                <Text style={styles.copyright}>Copyright 2020 New York University.</Text>
                <Text style={styles.copyright}>All Rights Reserved.</Text>
                <Text style={styles.pageNumber}>8</Text>
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
    // height: screenheight
  },
  sectionContainer: {
    margin: wp('3%')
  },
  sectionTitle: {
    fontSize: hp('3%'),
    fontWeight: '700',
    fontFamily: 'Helvetica Neue',
    textAlign: 'center'
  },

  whiteColumn: {
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderWidth: wp('.1%'),
    padding: wp('2.5%'),
    // width: wp('40%'),
    margin: hp('1.5%'),
    flex: 1,
    alignItems: 'center',
},
imageContainer: {
  margin: wp('2%')
},
container: {
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-start' // if you want to fill rows left to right
},
dotItem: {
  width: '15%',
  marginTop: 2
},
item: {
  width: '85%' // is 50% of container width
},
cardContainer: {
  padding: 5,
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  margin: wp('3%'),
  backgroundColor: Colors.white,
  borderColor: Colors.gray,
  borderWidth: wp('.1%'),
},
smallCardContainer: {
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  flex: 1
},
smallCard: {
  margin: wp('2%'),
  padding: wp('2%'),
  width: wp('70%'),
  backgroundColor: Colors.white,
  borderColor: Colors.gray,
  borderWidth: wp('.2%'),
},
columnContainer: {
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
},
image: {
  width: 35,
  height: 35
},
dotImage: {
  width: 170,
  height: 170
},
cardText: {
  fontSize: hp('2.2%'),
  fontWeight: '700',
},
smallCardText: {
  fontSize: hp('1.8%'),
  fontWeight: "200"
},
orangeText: {
  color: "#ed7d31"
},
centerText: {
  textAlign: 'center'
},
highlightUnderline: {
  fontWeight: '700',
  textDecorationLine: 'underline'
},
highlight: {
  fontWeight: '700',
},
centerText: {
  textAlign: 'center'
},
sectionParagraph: {
  fontSize: hp('2%'),
  fontWeight: '400',
  color: Colors.black,
  fontFamily: 'Helvetica Neue',
  alignItems: 'center',
},
dotText: {
  fontSize: hp('1.5%'),
  fontWeight: '400',
  color: Colors.black,
  fontFamily: 'Helvetica Neue',
  alignItems: 'center',
},
 circle: {
  width: 15,
  height: 15,
  borderRadius: 15/2,
},
blue: {
  backgroundColor: "#7cb4d4",
},
orange: {
  backgroundColor: "#f68000",
},
darkBlue: {
  backgroundColor: "#456d84"
},
circleContainer: {
  margin: 2,
  marginTop: -4
},
sideBySide: {
  flex: 1
},

//  FOOTER 
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
  attributionWrapper: {
    margin: 10,
  },
  attribution: {
    fontSize: hp('1.2%'),
    textAlign: 'left',
    fontFamily: 'Helvetica Neue',
  },
});

export default Page8;
