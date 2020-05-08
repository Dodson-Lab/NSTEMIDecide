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

import { ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

let screenheight = Dimensions.get("window").height;

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationChange as rol
} from 'react-native-responsive-screen';

class Page7 extends Component {
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
    const pages = ['Page 1','Page 6', '', 'Page 8','Page 11']
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
        "7",
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
            <View style={[styles.body]}>
              
            <View style={styles.contentContainer}>
                <View style={styles.sectionContainer}>
                    <Text style={[styles.sectionTitle, styles.centerTitle]}> 
                        Procedure or No Procedure:
                    </Text>
                    <Text style={[styles.sectionTitle, styles.centerTitle]}>
                        what are the benefits and risks of each option?
                    </Text>
                </View>
                <View
                onLayout={this.onLayout}
                style={[styles.contentWhiteContainer, {marginBottom: this.state.height * .07}]}>
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
                  <Text style={[styles.boldText, styles.noteText]}>
                    Please note:
                  </Text>
                  <View style={styles.whiteContainer}>
                      <Text style={styles.noteText}>
                      Numbers used in this decision aid were based on studies of older adults who experienced a heart attack.
                      Your clinical circumstances may be different from the populations observed
                      in these studies.</Text>
                      <Text style={[styles.boldText, styles.noteText]}>
                      Your individual medical history has not been considered in these estimates.
                      </Text>
                  </View>
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
            containerStyle={{height: hp('6%'), width: this.state.width * .9}}/>

            </View>
              {/* <Text style={styles.pageNumber}>7</Text> */}
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
    // height: hp('90%'),
  },
  contentContainer: {
    alignItems: 'center',
    margin: 10
  },
  contentWhiteContainer: {
    // width: wp('150%'),
    // marginBottom: hp('15%')
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
    fontFamily: 'Avenir',
  },
  sectionParagraph: {
    fontSize: hp('2.2%'),
    fontWeight: '400',
    color: Colors.black,
    fontFamily: 'Avenir',
    alignItems: 'center',
  },
  sectionNote: {
    // margin: wp('1%'),
    padding: wp('5%'),
  },
  boldText: {
    fontWeight: '700'
  },
  noteText: {
    fontSize: wp('2%')
  },
  whiteContainer: {
    backgroundColor: Colors.white,
    padding: wp('1.5%'),
    borderColor: Colors.gray,
    borderWidth: wp('.2%'),
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
  buttonGroup: {
    alignItems: "center",
  }
});

export default Page7;
