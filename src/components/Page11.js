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
  Dimensions,
  Linking
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

import { COMFORT_IMAGE } from '../..';

import { ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { strings } from '../..';


class Page11 extends Component {
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
    const pages = ['Home','Page 10', '', 'Page 12','Page 13']
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
        "11",
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
                <View style={[styles.titleContainer, styles.centerText]}>
                    <Text style={styles.sectionTitle}>
                    {strings('page11.title')}
                    </Text>
                </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionParagraph}>
                {strings('page11.paragraph1')}
                </Text>
            </View>
            <Text></Text>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionParagraph}>
                {strings('page11.paragraph2')}
                </Text>
            </View>
            <View style={styles.imageContainer}>
                <Image onLayout={this.onLayout}
                style={[{
                  width: wp('100%'),
                  height: wp('40%')}]}
                source={ COMFORT_IMAGE } resizeMode="contain"/>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={[styles.sectionParagraph, styles.centerText]}>
                {strings('page11.paragraph3')}
                </Text>
            </View>
            <Text></Text>
        <View style={styles.faqContainer}>
            <View style={styles.sectionContainer}>
                <Text style={[styles.sectionParagraph, styles.highlight, styles.underline]}>
                {strings('page11.paragraph4')}
                </Text>
            </View>
            <Text></Text>
            <View style={styles.sectionContainer}>
                <Text style={[styles.sectionParagraph, styles.highlight]}>
                {strings('page11.paragraph5')}
                </Text>
                <Text style={[styles.sectionParagraph]}>
                {strings('page11.paragraph6')}
                </Text>
            </View>
            <Text></Text>
            <View style={styles.sectionContainer}>
                <Text style={[styles.sectionParagraph, styles.highlight]}>
                {strings('page11.paragraph7')}
                </Text>
                <Text style={[styles.sectionParagraph]}>
                {strings('page11.paragraph8')}
                </Text>
            </View>
            <Text></Text>
            <View style={styles.sectionContainer}>
                <Text style={[styles.sectionParagraph, styles.highlight]}>
                {strings('page11.paragraph9')}
                </Text>
                <Text style={[styles.sectionParagraph]}>
                {strings('page11.paragraph10')}
                </Text>
            </View>
        </View>
            
        <View style={styles.attributionWrapper}>
            <Text style={[styles.attribution, styles.highlight]}>Sources of Information</Text>
            <Text style={styles.attribution}>Cardiac Catheterization.</Text>
            <Text style={styles.attribution}>Retrieved from:
            <Text style={{color: '#0000EE'}}
      onPress={() => Linking.openURL('https://www.heart.org/en/health-topics/heart-attack/diagnosing-a-heart-attack/cardiac-catheterization')}> The American Heart Association, Inc.
            </Text>
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
              {/* <Text style={styles.pageNumber}>11</Text> */}
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
    margin: hp('1.5%'),
    maxWidth: hp('65%'),
    marginTop: hp('3%'),
    paddingHorizontal: wp('5%'),
    alignSelf: "center"
  },
  sectionContainer: {
      marginLeft: wp('4%'),
      marginRight: wp('4%'),
    //   marginTop: 10
  },
  sectionParagraph: {
    fontSize: hp('2.2%'),
    fontWeight: '400',
    color: Colors.black,
    fontFamily: 'Avenir',
    alignItems: 'center',
  },
  highlight: {
      fontWeight: '700'
  },
  underline: {
      textDecorationLine: 'underline'
  },
  image: {
      width: hp('40%'),
      height: hp('20%')
  },

  imageContainer: {
    margin: wp('5%'),
    alignItems: 'center'
  },
  centerText: {
      textAlign: 'center'
  },

  sectionTitle: {
    fontSize: hp('3%'),
    fontWeight: '700',
    color: Colors.black,
    fontFamily: 'Avenir',
    // marginBottom: hp('1.5%'),
    textAlign: 'center',
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
  faqContainer: {
    margin: wp('3%')
  },
  attributionWrapper: {
    marginLeft: wp('5%'),
    marginBottom: wp('2%'),
    marginTop: wp('2%')
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

export default Page11;
