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
let screenheight = Dimensions.get("window").height;

import { ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { PCI_IMAGE, PCI_1, PCI_1_ES, PCI_2, PCI_3, PCI_4 } from '../..';
import { CABG_IMAGE_EN, CABG_IMAGE_ES } from '../..';

import { strings } from '../..';

import i18n from 'i18n-js'

class Page6 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    }

    this.onLayout = this.onLayout.bind(this);
    this.navigate = this.navigate.bind(this);

    if (i18n.locale == "es") {
      this.state.CABGimage = CABG_IMAGE_ES
      this.state.pci_1 = PCI_1_ES
    } else {
      this.state.CABGimage = CABG_IMAGE_EN
      this.state.pci_1 = PCI_1
    }
    this.state.pci_2 = PCI_2
  }
  navigate (selectedIndex) {
    const pages = ['Home','Page 5', '', 'Page 7','Page 12']
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
        "6",
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
                    <Text style={styles.sectionTitle}>{strings('page6.title')}</Text>
                </View>
            <View style={styles.sectionContainer}>
                <View style={styles.sectionParagraph}>
                <Text style={styles.listText}>{strings('page6.paragraph1')}</Text>
                </View>
            </View>
            <View style={styles.labelContainer}>
                <View style={styles.labelBox}>
                    <Text style={[styles.labelText, styles.boldText]}>
                    {strings('page6.paragraph2')}
                    </Text>
                </View>
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.listItem}>
                <Unorderedlist style={styles.bullet}><Text style={styles.listText}>
                {strings('page6.paragraph3')}
                </Text></Unorderedlist>
                </View>
            </View>
            <View style={styles.sectionContainer}>
            {/* <View> */}
                {/* onLayout={this.onLayout}
                style={[styles.imageContainer,
                  {height: hp("20%"), width: this.state.width * .85}]}> */}
                    <View style={styles.containerWrapper}>
                      <View style={{alignItems: 'center'}}>
                        <View onLayout={this.onLayout}
                        style={[styles.imageContainer,
                        {height: hp("15%")}]}>
                        <Image style={styles.image} source={ this.state.pci_1 } resizeMode="contain"/>
                        </View>
                        {/* <View styles={styles.textContainer}> */}
                        <Text style={styles.imageText}>{strings('page6.image1')}</Text>
                        <View onLayout={this.onLayout}
                        style={[styles.imageContainer,
                        {height: hp("12%")}]}>
                        <Image style={styles.image} source={ PCI_2 } resizeMode="contain"/>
                        </View>
                        {/* <View styles={styles.textContainer}> */}
                        <Text style={styles.imageText}>{strings('page6.image2')}</Text>
                        {/* </View> */}
                        <View onLayout={this.onLayout}
                        style={[styles.imageContainer,
                        {height: hp("12%")}]}>
                        <Image style={styles.image} source={ PCI_3 } resizeMode="contain"/>
                        </View>
                        {/* <View styles={styles.textContainer}> */}
                        <Text style={styles.imageText}>{strings('page6.image3')}</Text>
                        <View onLayout={this.onLayout}
                        style={[styles.imageContainer,
                        {height: hp("12%")}]}>
                        <Image style={styles.image} source={ PCI_4 } resizeMode="contain"/>
                        </View>
                        {/* <View styles={styles.textContainer}> */}
                        <Text style={styles.imageText}>{strings('page6.image4')}</Text>
                      </View>  
                        {/* <View style={styles.attributionContainer}> */}
                        <Text style={styles.attribution}>
                          Adapted from RelayHealth and/or its affiliates. All rights reserved.
                        </Text>
                        {/* </View> */}
                  </View>
                {/* </View> */}
            </View>
            <View style={styles.sectionContainer}></View>
            <View style={styles.labelContainer}>
                <View style={styles.labelBox}>
                    <Text style={[styles.labelText, styles.boldText]}>
                    {strings('page6.paragraph4')}
                    </Text>
                </View>
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.listItem}>
                <Unorderedlist style={styles.bullet}><Text style={styles.listText}>
                {strings('page6.paragraph5')}
                </Text></Unorderedlist>
                </View>
            </View>
            <View style={styles.sectionContainer}>
                <View
                onLayout={this.onLayout}
                style={[styles.imageSmallContainer,
                  {height: this.state.width * .6}]}>
                  {/* <View style={styles.containerWrapper}> */}
                    <Image style={styles.image} source={ this.state.CABGimage } resizeMode="contain"/>
                    <Text style={styles.attribution}>
                      Adapted from American Heart Association.
                    </Text>
                  {/* </View> */}
                </View>
            </View>
            <View style={styles.sectionContainer}></View>
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
              {/* <Text style={styles.pageNumber}>4</Text> */}
            </View>
              {/* <Text style={styles.pageNumber}>6</Text> */}
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
  titleContainer: {
    marginTop: hp('3%'),
    paddingHorizontal: wp('5%'),
  },
  sectionContainer: {
    margin: hp('1%'),
    paddingHorizontal: wp('5%'),
    // marginBottom: hp('2%')
  },
  boldText: {
    fontWeight: '700'
  },
  listText: {
    fontSize: hp('2.2%'),
    fontFamily: 'Avenir'
  },
  labelText: {
    fontSize: hp('2.2%'),
    color: Colors.white,
    fontFamily: 'Avenir'
  },
  attribution: {
    fontSize: 7,
    textAlign: 'right'
  },
  listItem: {
    margin: wp('2%'),
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
  imageContainer: {
    flexDirection: "row",
  },
  attributionContainer: {
    backgroundColor: Colors.white,
    margin: 5,
    marginTop: 20
  },
  imageText: {
    backgroundColor: Colors.white,
    textAlign: "left",
    margin: 10,
    marginTop: 5,
    fontSize: hp('1.8%'),
    // fontWeight: "700",
    fontFamily: 'Avenir'
  },
  textContainer: {
    backgroundColor: Colors.white,
  },
  imageSmallContainer: {
    // height: hp('22%'),
    backgroundColor: Colors.white,
    // flexDirection: "row",
    padding: 5,
    borderWidth: 1
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
    fontSize: hp('3.1%'),
    fontWeight: '700',
    color: Colors.black,
    fontFamily: 'Avenir',
    // marginBottom: hp('1.5%')
  },
  containerWrapper: {
    // marginLeft: wp('5%'),
    // marginRight: wp('5%'),
    padding: 5,
    backgroundColor: Colors.white,
    borderWidth: 1
    // alignItems: 'center'
  },
  labelBox: {
    // margin: wp('1%'),
    backgroundColor: '#1f3864',
    padding: wp('1%'),
    // margin: wp('2%'),
    paddingHorizontal: wp('2%')
  },
  labelContainer: {
    // width: wp('90%')
  },
  sectionParagraph: {
    marginBottom: wp('3%')
  },
  footer: {
    margin: hp('.5%')
  },
  bullet: {
    fontSize: hp('2%')
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

export default Page6;
