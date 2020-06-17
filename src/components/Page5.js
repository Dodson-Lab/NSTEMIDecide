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

import Unorderedlist from 'react-native-unordered-list';

import { ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

let screenheight = Dimensions.get("window").height;

import { CARDIAC_CATHETERIZATION_IMAGE, CARDIAC_CATHETERIZATION_IMAGE_ES } from '../..';

import { strings } from '../..';

import i18n from 'i18n-js'

class Page5 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    }

    this.onLayout = this.onLayout.bind(this);
    this.navigate = this.navigate.bind(this);

    if (i18n.locale == "es") {
      this.state.image = CARDIAC_CATHETERIZATION_IMAGE_ES
    } else {
      this.state.image = CARDIAC_CATHETERIZATION_IMAGE
    }
  }
  navigate (selectedIndex) {
    const pages = ['Home','Page 4', '', 'Page 6','Page 12']
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
        "5",
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
            <View
              onLayout={this.onLayout} 
              style={[styles.body]}>
                <View style={[styles.sectionContainer, styles.centerTitle, {marginTop: this.state.height * .03}]}>
                    <Text style={styles.sectionTitle}>{strings('page5.title')}</Text>
                </View>
            <View style={styles.sectionContainer}>
                <View style={styles.sectionParagraph}>
                    <View
              onLayout={this.onLayout} 
              style={[styles.listItem, {marginTop: this.state.height * .02}]}>
                    <Unorderedlist style={styles.bullet}>
                    <Text style={[styles.boldText, styles.listText]}>
                    {strings('page5.paragraph1')}<Text style={styles.underlineText}>{strings('page5.paragraph2')}</Text> {strings('page5.paragraph3')}
                    </Text> 
                    </Unorderedlist>
                    <Text></Text>
                    </View>
                    <View
              onLayout={this.onLayout} 
              style={[styles.listItem, {marginTop: this.state.height * .01}]}>
                    <Unorderedlist style={styles.bullet}><Text style={styles.listText}>
                    {strings('page5.paragraph4')}
                    </Text></Unorderedlist>
                    <Text></Text>
                    </View>
                    <View
              onLayout={this.onLayout} 
              style={[styles.listItem, {marginTop: this.state.height * .01}]}>
                    <Unorderedlist style={styles.bullet}><Text style={styles.listText}>
                    {strings('page5.paragraph5')}
                        </Text></Unorderedlist>
                    </View>
                    <Text></Text>
                </View>
            </View>
            <View
              onLayout={this.onLayout} 
              style={[styles.sectionContainer, {marginTop: this.state.height * .02}]}></View>
            {/* <View style={[styles.sectionContainer]}> */}
              <View style={[styles.labelContainer, {width: this.state.width * .55}]}>
                  <View style={styles.labelBox}>
                      <Text style={[styles.labelText, styles.boldText]}>
                      {strings('page5.paragraph6')}
                      </Text>
                  </View>
              </View>
            {/* </View> */}
                <View
                onLayout={this.onLayout} 
                style={[styles.imageContainer, {height: hp("40%")}]}>
                    <Image style={styles.image} source={ this.state.image } resizeMode="contain"/>
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
    // height: screenheight - hp('10%')
  },
  sectionContainer: {
    paddingHorizontal: wp('5%'),
  },
  boldText: {
    fontWeight: '700'
  },
  listText: {
    fontSize: hp('2.2%'),
    fontFamily: 'Avenir'
  },
  labelText: {
    fontSize: hp('2.5%'),
    color: Colors.white,
    fontFamily: 'Avenir'
  },
  listItem: {
    // marginTop: hp('2%')
  },
  bullet: {
    fontSize: hp('2%')
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
  imageContainer: {
    // height: hp('40%'),
    alignContent: 'center',
    backgroundColor: Colors.white,
    margin: wp('3%'),
    borderWidth: 1,
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
    fontFamily: 'Avenir',
    marginBottom: hp('1.5%')
  },
  labelBox: {
    // margin: wp('1%'),
    backgroundColor: '#1f3864',
    padding: wp('1%'),
    // margin: wp('2%'),
    paddingHorizontal: wp('2%')
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

export default Page5;
