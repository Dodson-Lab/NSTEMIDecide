

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Linking,
  Dimensions,
  Button
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

import { ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import Unorderedlist from 'react-native-unordered-list';
let screenheight = Dimensions.get("window").height;

class Page10 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    }

    this.onLayout = this.onLayout.bind(this);
    this.navigate = this.navigate.bind(this);
  }
  navigate (selectedIndex) {
    const pages = ['Page 1','Page 9', '', 'Page 11','Page 13']
    const page = pages[selectedIndex]
    this.props.navigation.navigate(page)
    this.setState({selectedIndex})
  }
  onLayout(e) {
    this.setState({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    });
  }
    render() {
      const buttons = [
        <Icon name="angle-double-left" style={{fontSize: 25}}/>,
        <Icon name="angle-left" style={{fontSize: 25}}/>,
        "10",
        <Icon name="angle-right" style={{fontSize: 25}}/>,
        <Icon name="angle-double-right" style={{fontSize: 25}}/>,
      ]
      const { selectedIndex } = this.state
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
                <View style={[styles.titleContainer, styles.centerTitle]}>
                    <Text style={styles.sectionTitle}>Risks of Cardiac Catheterization</Text>
                </View>

                <View style={[styles.cardContainer]}>
                  <View style={styles.paragraphContainer}>
                  <Text style={styles.sectionParagraph}>
                  As an older adult, your risks of undergoing a cardiac catheterization
                  procedure are higher than in younger patients.
                  </Text>
                  <Text></Text><Text></Text>
                  <Text style={styles.sectionParagraph}>
                  Studies have shown that older patients who get a cardiac
                  catheterization procedure have these risks within 1 year*:
                  </Text>
                  </View>

                  <View style={[styles.listContainer]}>
                    <View style={styles.rowContainer}>
                        <View style={styles.leftContainer}>
                            <View style={styles.listItemContainer}>
                            <Image style={[styles.image, {textAlign: 'left'}]} source={ BRAIN_IMAGE } resizeMode="contain"/>
                            <Text style={[styles.sectionParagraph, styles.highlight, {fontSize: hp('2.5%')}]}>Stroke</Text>
                            </View>
                        </View>
                        <View style={styles.rightContainer}>
                        <Text style={[styles.sectionParagraph, styles.highlight, {fontSize: hp('2.5%')}]}>1%</Text>
                        </View>
                    </View>
                    <View style={styles.subheaderContainer}>
                    <Text style={[styles.sectionParagraph]}>
                    Out of 100 patients, 1 will experience a stroke. 99 will not.
                    </Text>
                    </View>
                    <Text></Text>
                    <View style={styles.rowContainer}>
                        <View style={styles.leftContainer}>
                            <View style={styles.listItemContainer}>
                            <Image style={[styles.image, {textAlign: 'left'}]} source={ DROPLET_IMAGE } resizeMode="contain"/>
                            <Text style={[styles.sectionParagraph, styles.highlight, {fontSize: hp('2.5%')}]}>Bleeding</Text>
                            </View>
                        </View>
                        <View style={styles.rightContainer}>
                        <Text style={[styles.sectionParagraph, styles.highlight, {fontSize: hp('2.5%')}]}>6%</Text>
                        </View>
                    </View>
                    <View style={styles.subheaderContainer}>
                    <Text style={[styles.sectionParagraph]}>
                    Out of 100 patients, 6 will experience bleeding. 94 will not.
                    </Text>
                    </View>
                    <Text></Text>
                    <View style={styles.rowContainer}>
                        <View style={styles.leftContainer}>
                            <View style={styles.listItemContainer}>
                            <Image style={[styles.image, {textAlign: 'left'}]} source={ KIDNEY_IMAGE } resizeMode="contain"/>
                            <Text style={[styles.sectionParagraph, styles.highlight, {fontSize: hp('2.5%')}]}>Kidney problems</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.rowContainer}>
                      <View style={styles.leftContainer}>
                        <View style={styles.bulletHeaderContainer}>
                        <Unorderedlist style={styles.bullet}>
                        <Text style={[styles.sectionParagraph, styles.lightHighlight]}>
                        Temporary, reversible
                        </Text>
                        </Unorderedlist>
                        </View>
                        </View>
                        <Text style={[styles.sectionParagraph, styles.highlight, {fontSize: hp('2.5%')}]}>20%</Text>
                    </View>
                    <View style={styles.subheaderContainer}>
                    <Text style={[styles.sectionParagraph]}>
                    Out of 100 patients, 20 will experience temporary,
                        reversible kidney problems. 80 will not.
                    </Text>
                    </View>
                    <Text></Text>
                    <View style={styles.rowContainer}>
                        <View style={styles.leftContainer}>
                        <View style={styles.bulletHeaderContainer}>
                        <Unorderedlist style={styles.bullet}>
                        <Text style={[styles.sectionParagraph, styles.lightHighlight]}>
                        Dialysis
                        </Text>
                        </Unorderedlist>
                        </View>
                        </View>
                        <Text style={[styles.sectionParagraph, styles.highlight, {fontSize: hp('2.5%')}]}>0.1%</Text>
                    </View>
                    <View style={styles.subheaderContainer}>

                    <Text style={[styles.sectionParagraph]}>
                        Out of 100 patients, less than 1 may require dialysis. Your
                        physician can determine this risk more precisely with a
                        calculator:
                    </Text>
                    </View>
                    <View>
                    <Button
                      title="Mehran Score"
                      selectedIndex={selectedIndex}
                      onPress={() => this.props.navigation.navigate('Mehran Score')}
                      style={{backgroundColor: Colors.red}}/>
                    </View>
                    <View style={styles.sectionContainer}>
                    <View style={styles.rowContainer}>
                      <Text style={[styles.sectionParagraph, styles.centerText]}>
                      Due to your medical history, your risk may be higher or lower
                      than the numbers provided above.
                      </Text></View>
                    </View>
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
                <View style={styles.buttonGroup}>
              <ButtonGroup
            buttons={buttons}
            onLayout={this.onLayout} 
            disabled={[2]}
            onPress={this.navigate}
            selectedIndex={selectedIndex}
            containerStyle={{height: hp('8%'), width: this.state.width * .9}}/>
            </View>
                {/* <Text style={styles.pageNumber}>10</Text> */}
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
    backgroundColor: '#f6f6f6',
  },
  sectionContainer: {
    margin: wp('2%')
  },
  sectionTitle: {
    fontSize: hp('3%'),
    fontWeight: '700',
    fontFamily: 'Avenir',
    textAlign: 'center'
  },
  sectionParagraph: {
    fontSize: hp('2.2%'),
    fontWeight: '400',
    color: Colors.black,
    fontFamily: 'Avenir',
    // alignItems: 'center',
  },
  bullet: {
    fontSize: hp('2%')
  },
  button: {
    margin: 0
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
    fontSize: hp('1.5%')
  },
  titleContainer: {
    marginTop: hp('3%'),
    paddingHorizontal: wp('5%'),
  },
  subsetParagraph: {
    fontSize: hp('2.2%'),
    fontWeight: '400',
    color: Colors.black,
    fontFamily: 'Avenir',
    alignItems: 'center',
    flex: 1,
    flexWrap: 'wrap'
  },
  rowContainer: {
    // height: wp('10%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: wp('1%')
    // borderBottomWidth: 1
    // backgroundColor: 'blue',
  },
  subheaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: wp('10%')
  },
  bulletHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: wp('7.5%')
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
  margin: wp('4%'),
  backgroundColor: Colors.white,
  borderColor: Colors.gray,
  borderWidth: wp('.07%'),
},
paragraphContainer: {
  marginBottom: wp('3%')
},
listContainer: {
    // marginLeft: wp('3%'),
    // marginRight: wp('3%'),
},
listItemContainer: {
    flexDirection: 'row',
    // justifyContent: "space-between",
    alignItems: "center",
    // marginLeft: wp('10%')
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
    fontWeight: '700',
},
lightHighlight: {
    fontWeight: '500'
},
//  FOOTER 
  footer: {
    margin: hp('.5%')
  },
  pageNumber: {
    fontSize: hp('2%'),
    textAlign: 'center',
    fontFamily: 'Avenir',
  },
  copyright: {
    fontSize: hp('1.2%'),
    textAlign: 'right',
    fontFamily: 'Avenir',
  },
  attributionWrapper: {
    margin: wp('2%'),
  },
  attribution: {
    fontSize: hp('1.2%'),
    textAlign: 'left',
    fontFamily: 'Avenir',
  },
  buttonGroup: {
    alignItems: "center",
  }

});

export default Page10;
