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

import { PCI_IMAGE } from '../..';
import { CABG_IMAGE } from '../..';

class Page6 extends Component {
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
    const pages = ['Page 1','Page 5', '', 'Page 7','Page 11']
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
                    <Text style={styles.sectionTitle}>Ways to improve blood flow</Text>
                </View>
            <View style={styles.sectionContainer}>
                <View style={styles.sectionParagraph}>
                <Text style={styles.listText}>If a blockage is found during the cardiac catheterization,
                two options are usually given to improve blood flow:</Text>
                </View>
            </View>
            <View style={styles.labelContainer}>
                <View style={styles.labelBox}>
                    <Text style={[styles.labelText, styles.boldText]}>
                    Percutaneous Coronary Intervention (PCI), also known as stent
                    </Text>
                </View>
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.listItem}>
                <Unorderedlist style={styles.bullet}><Text style={styles.listText}>
                Most patients with simple blockages receive a stent.
                </Text></Unorderedlist>
                </View>
            </View>
            <View style={styles.sectionContainer, {flex: 1, flexDirection: "row", justifyContent: "center"}}>
            <View
                onLayout={this.onLayout}
                style={[styles.imageContainer,
                  {height: hp("60%"), width: this.state.width * .85}]}>
                    {/* , width: this.state.width * .8 */}
                    {/* <View style={styles.containerWrapper}>
                        <View style={styles.listItem}>
                        <Unorderedlist><Text style={styles.listText}>
                        Balloon catheter is inserted into the artery.
                        </Text></Unorderedlist>
                        </View>
                        <View style={styles.listItem}>
                        <Unorderedlist><Text style={styles.listText}>
                        Balloon is inflated to expand the stent.
                        </Text></Unorderedlist>
                        </View>
                        <View style={styles.listItem}>
                        <Unorderedlist><Text style={styles.listText}>
                        Balloon is deflated.
                        </Text></Unorderedlist>
                        </View>
                        <View style={styles.listItem}>
                        <Unorderedlist><Text style={styles.listText}>
                        Catheter is removed. Stent remains to hold artery open.
                        </Text></Unorderedlist>
                        </View>
                    </View> */}
                    <View style={styles.containerWrapper}>
                        <Image style={styles.image} source={ PCI_IMAGE } resizeMode="contain"/>
                        <Text style={styles.attribution}>
                          © RelayHealth and/or its affiliates.
                        </Text>
                        <Text style={styles.attribution}>
                          All rights reserved.
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.sectionContainer}></View>
            <View style={styles.labelContainer}>
                <View style={styles.labelBox}>
                    <Text style={[styles.labelText, styles.boldText]}>
                    Coronary Artery Bypass Graft (CABG)
                    </Text>
                </View>
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.listItem}>
                <Unorderedlist style={styles.bullet}><Text style={styles.listText}>
                If patients have many blockages, sometimes coronary artery bypass graft (CABG) surgery is performed.
                </Text></Unorderedlist>
                </View>
            </View>
            <View style={styles.sectionContainer}>
                <View
                onLayout={this.onLayout}
                style={[styles.imageSmallContainer,
                  {height: this.state.height * .4, height: this.state.width * .4}]}>
                  <View style={styles.containerWrapper}>
                    <Image style={styles.image} source={ CABG_IMAGE } resizeMode="contain"/>
                    <Text style={styles.attribution}>
                      © American Heart Association.
                    </Text>
                  </View>
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
    fontSize: hp('2.2%')
  },
  labelText: {
    fontSize: hp('2.2%'),
    color: Colors.white,
  },
  attribution: {
    fontSize: 7,
    textAlign: 'right'
  },
  listItem: {
    margin: wp('2%')
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
  imageContainer: {
    // height: hp('36%'),
    backgroundColor: Colors.white,
    flexDirection: "row",
    padding: 10,
    borderWidth: 1
  },
  imageSmallContainer: {
    height: hp('22%'),
    backgroundColor: Colors.white,
    flexDirection: "row",
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
    // width: wp('1%'),
    // marginLeft: wp('2%'),
    // marginTop: wp('3%'),
    // marginBottom: wp('3%'),
    flex: 1,
    justifyContent: 'center',
    margin: wp('1.5%')
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
