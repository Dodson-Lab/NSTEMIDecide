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

import { ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Page4 extends Component {

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
    const pages = ['Page 1','Page 3', '', 'Page 5','Page 11']
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
        "4",
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
                <View style={styles.arrowContainer}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                    <Icon name="long-arrow-down" style={styles.arrowLeft}/>
                    <Icon name="long-arrow-down" style={styles.arrowRight}/>
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
                <View style={styles.sectionBlueContainer}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={[styles.smallBlueBox]}>
                        {/* <View style={styles.sectionBox}> */}
                            <Text style={styles.sectionParagraph}>
                            If you choose to have a cardiac catheterization procedure,
                            and you are found to have a blocked artery,
                            you may also be considered for: 
                            </Text>

                            <View style={styles.labelContainer}>
                              <View style={styles.labelBox}>
                                  <Text style={[styles.labelText, styles.boldText]}>
                                      Option 1
                                  </Text>
                              </View>
                            </View>
                            <Text style={styles.sectionParagraph}>
                              Stent placement during procedure</Text>
                              <View style={styles.labelContainer}>
                              <View style={styles.labelBox}>
                                  <Text style={[styles.labelText, styles.boldText]}>
                                      Option 2
                                  </Text>
                              </View>
                            </View>
                            <Text style={styles.sectionParagraph}>
                            Further discussion with your cardiologist for possible future bypass surgery
                            </Text>
                    </View>
                    <View style={[styles.smallBlueBox]}>
                      <Text style={styles.sectionParagraph}>
                      If you choose <Text style={styles.highlight}>not</Text> to have a cardiac catheterization procedure, you will still:
                      </Text>
                      
                      <Text style={styles.sectionParagraph}>
                      Have the option to get a cardiac catheterization procedure
                      in the future if you have symptoms later on
                      </Text>
                    </View>
                </View>
                </View>
                <View style={[styles.sectionBlueContainer, styles.sideBySide]}>
                    <View style={[styles.smallBlueBox]}>
                        <View style={styles.sectionBox}>
                            <Text style={[styles.sectionParagraph, styles.centerText]}>
                            With either a procedure or no procedure, you will still
                            receive medicines to help your heart.
                            </Text>
                        </View>
                    </View>
                </View>
                {/* <View style={styles.sectionContainer}>  */}
                <View style={styles.textWithIcon}>
                  <Text style={styles.iconText}>
                  These options are described in detail on the following pages
                  </Text>
                  <Icon name="long-arrow-right" style={styles.rightArrow}/>
                </View>
                {/* </View> */}
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
            containerStyle={{height: hp('6%'), width: this.state.width * .9}}/>
              {/* <Text style={styles.pageNumber}>4</Text> */}
            </View></View>
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
  icon: {
    fontSize: 35,
    color: Colors.black
  },
  rightArrow: {
    fontSize: wp('5%'),
    // marginTop: 20
  },
  arrowLeft: {
    fontSize: 35,
    paddingRight: wp('10%')
  },
  arrowRight: {
    fontSize: 35,
    paddingLeft: wp('10%')
  },
  iconText: {
    paddingRight: 8,
    fontSize: hp('2.2%'),
    fontWeight: '400',
    color: Colors.black,
    fontFamily: 'Avenir',
    // textAlign: 'center'
  },
  arrowContainer: {
    alignItems: 'center',
    alignContent: 'center',
  },
  textWithIcon: {
    // width: wp('90%'),
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: hp('1%'),
    paddingHorizontal: wp('2%'),
    marginBottom: hp('2%'),
  },
  addedMargin: {
    margin: hp('1%')
  },
  textBeforeIcon: {
    marginRight: 20
  },
  body: {
    backgroundColor: '#f6f6f6',
    // height: screenheight
    // height: hp('100%')
  },
  centerText: {
    textAlign: 'center'
  },
  sectionBox: {
    alignItems: 'center',
  },
  sectionContainer: {
    margin: hp('1%'),
    paddingHorizontal: wp('2%'),
    marginBottom: hp('2%'),
  },
  titleContainer: {
    marginTop: hp('3%'),
    marginBottom: hp('1%'),
    paddingHorizontal: wp('2%'),
  },
  sectionBlueContainer: {
    paddingHorizontal: wp('2%'),
    alignItems: 'center',
    alignContent: 'center',
    // display: 'flex'
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
    fontFamily: 'Avenir',
  },
  sectionParagraph: {
    fontSize: hp('2.2%'),
    fontWeight: '400',
    color: Colors.black,
    fontFamily: 'Avenir',
    alignItems: 'center',
  },
  noteTitle: {
    fontSize: hp('2%'),
    fontWeight: '600',
    color: Colors.black,
    fontFamily: 'Avenir',
  },
  noteDescription: {
    fontSize: hp('2%'),
    fontWeight: '400',
    color: Colors.black,
    fontFamily: 'Avenir',
  },
  highlight: {
    fontWeight: '700',
  },
  blueBox: {
      backgroundColor: '#ddeaf6',
      borderColor: Colors.black,
      borderWidth: wp('.3%'),
      padding: wp('2%'),
  },
  smallBlueBox: {
    backgroundColor: '#ddeaf6',
    borderColor: Colors.black,
    borderWidth: wp('.3%'),
    padding: wp('2.5%'),
    width: wp('40%'),
    margin: hp('1%'),
    flex: 1,
},
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

labelBox: {
  // margin: wp('2%'),
  backgroundColor: '#dbdbdb',
  borderWidth: wp('.3%'),
},
// triangle: {
//   width: 0,
//   height: 0,
//   backgroundColor: 'transparent',
//   borderStyle: 'solid',
//   borderLeftWidth: 20,
//   borderRightWidth: 20,
//   borderBottomWidth: 20,
//   borderLeftColor: 'transparent',
//   borderRightColor: 'transparent',
//   borderBottomColor: '#dbdbdb',
// },
// triangleRight: {
//   transform: [
//     {rotate: '90deg'}
//   ]
// },
labelContainer: {
  width: wp('40%'),
  marginLeft: wp('-5%'),
  margin: 10,
},
labelText: {
  fontSize: hp('2%'),
  color: Colors.black,
  fontWeight: "700",
  padding: 3
},
buttonGroup: {
  alignItems: "center",
}
});

export default Page4;
