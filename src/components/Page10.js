

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Linking,
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

import { BRAIN_IMAGE, KIDNEY_IMAGE, DROPLET_IMAGE } from '../..';

import Unorderedlist from 'react-native-unordered-list';
let screenheight = Dimensions.get("window").height;

class Page10 extends Component {
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
                    <Text style={styles.sectionTitle}>Risks of Cardiac Catheterization
                    </Text>
                </View>

                <View style={[styles.cardContainer]}>
                  <Text style={styles.sectionParagraph}>
                  As an older adult, your risks of undergoing a cardiac catheterization
                  procedure are higher than in younger patients.
                  </Text>
                  <Text></Text>
                  <Text style={styles.sectionParagraph}>
                  Studies have shown that older patients who get a cardiac
                  catheterization procedure have these risks within 1 year*:
                  </Text>
                  <Text></Text>

                  <View style={[styles.listContainer]}>
                    <View style={styles.rowContainer}>
                        <View style={styles.leftContainer}>
                            <View style={styles.listItemContainer}>
                            <Image style={[styles.image, {textAlign: 'left'}]} source={ BRAIN_IMAGE } resizeMode="contain"/>
                            <Text style={[styles.sectionParagraph, styles.highlight]}>Stroke</Text>
                            </View>
                        </View>
                        <View style={styles.rightContainer}>
                        <Text style={[styles.sectionParagraph, styles.highlight]}>1%</Text>
                        </View>
                    </View>
                    <Text style={[styles.sectionParagraph]}>
                    Out of 100 patients, 1 will experience a stroke. 99 will not.
                    </Text>
                    <Text></Text>
                    <View style={styles.rowContainer}>
                        <View style={styles.leftContainer}>
                            <View style={styles.listItemContainer}>
                            <Image style={[styles.image, {textAlign: 'left'}]} source={ DROPLET_IMAGE } resizeMode="contain"/>
                            <Text style={[styles.sectionParagraph, styles.highlight]}>Bleeding</Text>
                            </View>
                        </View>
                        <View style={styles.rightContainer}>
                        <Text style={[styles.sectionParagraph, styles.highlight]}>6%</Text>
                        </View>
                    </View>
                    <Text style={[styles.sectionParagraph]}>
                    Out of 100 patients, 6 will experience bleeding. 94 will not.
                    </Text>
                    <Text></Text>
                    <View style={styles.rowContainer}>
                        <View style={styles.leftContainer}>
                            <View style={styles.listItemContainer}>
                            <Image style={[styles.image, {textAlign: 'left'}]} source={ KIDNEY_IMAGE } resizeMode="contain"/>
                            <Text style={[styles.sectionParagraph, styles.highlight]}>Kidney problems</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.rowContainer}>
                        <View style={styles.leftContainer}>
                        <View style={styles.listItemContainer}>
                        <Unorderedlist>
                        <Text style={[styles.sectionParagraph, styles.lightHighlight]}>
                        Temporary, reversible
                        </Text>
                        </Unorderedlist>
                        </View>
                        </View>
                        <Text style={[styles.sectionParagraph, styles.highlight]}>20%</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <View style={styles.leftContainer}>
                        <Text  style={[styles.sectionParagraph]}>
                        Out of 100 patients, 20 will experience temporary,
                        reversible kidney problems. 80 will not.
                        </Text>
                        </View>
                    </View>
                    <Text></Text>
                    <View style={styles.rowContainer}>
                        <View style={styles.leftContainer}>
                        <View style={styles.listItemContainer}>
                        <Unorderedlist>
                        <Text style={[styles.sectionParagraph, styles.lightHighlight]}>
                        Dialysis
                        </Text>
                        </Unorderedlist>
                        </View>
                        </View>
                        <Text style={[styles.sectionParagraph, styles.highlight]}>0.1%</Text>
                    </View>

                    <View style={styles.rowContainer}>
                        <View style={styles.leftContainer}>
                        <Text  style={[styles.sectionParagraph]}>
                        Out of 100 patients, less than 1 may require dialysis. Your
                        physician can determine this risk more precisely with a
                        calculator: <Text style={styles.linkStyle} onPress={ ()=> Linking.openURL('https://www.mdcalc.com/mehran-score-post-pci-contrast-nephropathy')}>Mehran Score</Text>.
                        </Text>
                        </View>
                    </View>
                    <Text></Text>
                    {/* <View style={styles.rowContainer}> */}
                        {/* <View style={styles.listItemContainer}> */}
                        <Text style={[styles.sectionParagraph, styles.centerText]}>
                        Due to your medical history, your risk may be higher or lower
                        than the numbers provided above.
                        </Text>
                        {/* </View> */}
                    {/* </View> */}

                </View>
                <Text></Text>
                <Text style={[styles.sectionParagraph, styles.smallText]}>
                *Most events occur at the time of catheterization.
                </Text>

                </View>

                <View style={styles.attributionWrapper}>
                    <Text style={[styles.attribution, styles.highlight]}>Sources of Information</Text>
                    <Text style={styles.attribution}>Garg et al. Routine Invasive Versus Selective Invasive Strategy in Elderly Patients Older Than 75 Years 
                    With Non-ST-Segment Elevation Acute Coronary Syndrome: A Systematic Review and Meta-Analysis. Mayo Clinical Proceedings. 2018; 436-444.
                    </Text>
                    <Text></Text>
                    <Text style={styles.attribution}>
                    Dodson JA, Hajduk A, Geda M, et al. Determinants and outcomes of acute kidney
                    injury among older patients undergoing invasive coronary angiography
                    for acute myocardial infarction: The SILVER-AMI Study. Am J Med. 2019; 30458-9. 
                    </Text>
                    <Text></Text>
                    <Text style={styles.attribution}>
                    Mehran R, Aymong ED, Nikolsky E, et al. A simple risk score for
                    prediction of contrast-induced nephropathy after percutaneous
                    coronary intervention: Development and initial validation. JACC. 2004; 1393-1399.
                    </Text>
                </View>

            </View>
            </ScrollView>
              <View style={styles.footer}>
                <Text style={styles.copyright}>Copyright 2020 New York University.</Text>
                <Text style={styles.copyright}>All Rights Reserved.</Text>
                <Text style={styles.pageNumber}>10</Text>
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
    margin: wp('2%')
  },
  sectionTitle: {
    fontSize: hp('3%'),
    fontWeight: '700',
    fontFamily: 'Helvetica Neue',
    textAlign: 'center'
  },
  sectionParagraph: {
    fontSize: hp('2.2%'),
    fontWeight: '400',
    color: Colors.black,
    fontFamily: 'Helvetica Neue',
    // alignItems: 'center',
  },
  linkStyle: {
    color: '#0000EE',
    textDecorationLine: 'underline',
    fontWeight: '500'
  },
  centerText: {
    textAlign: 'center'
  },
  smallText: {
    fontSize: wp('3.5%')
  },
  subsetParagraph: {
    fontSize: hp('2.2%'),
    fontWeight: '400',
    color: Colors.black,
    fontFamily: 'Helvetica Neue',
    alignItems: 'center',
    flex: 1,
    flexWrap: 'wrap'
  },
  rowContainer: {
    // height: wp('10%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderBottomWidth: 1
    // backgroundColor: 'blue',
  },
  subItem: {
    textAlign: "right",
    // justifyContent: "right",
    // alignContent: "right"
    alignItems: "flex-end",
    marginTop: 0,
    // marginLeft: 20
  },
// rightSide: {
//     alignItems: "center"
// },

cardContainer: {
  padding: wp('3%'),
//   alignItems: 'center',
//   alignContent: 'center',
//   justifyContent: 'center',
  margin: wp('3%'),
  backgroundColor: Colors.white,
  borderColor: Colors.gray,
  borderWidth: wp('.07%'),
},
listContainer: {
    // marginLeft: wp('3%'),
    // marginRight: wp('3%'),
},
listItemContainer: {
    flexDirection: 'row',
    // justifyContent: "space-between",
    alignItems: "center"
},
leftContainer: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
},
rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // alignItems: 'center',
},
pullLeft: {
    // marginLeft: wp('-30%')
},  
listWordContainer: {
    // margin: wp('3%'),
},
image: {
    height: 50,
    width: 50,
    marginRight: wp('2%')
},
highlight: {
    fontWeight: '700'
},
lightHighlight: {
    fontWeight: '500'
},
// columnContainer: {
//   alignItems: 'center',
//   alignContent: 'center',
//   justifyContent: 'center',
//   flexDirection: 'row',
// },


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

export default Page10;