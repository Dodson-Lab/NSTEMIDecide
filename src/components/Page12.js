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

import { ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { strings } from '../..';

class Page12 extends Component {
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
    const pages = ['Home','Page 11', '', 'Page 13','Page 13']
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
        "12",
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
              <Text></Text>
                <Text style={[styles.sectionParagraph, styles.highlight, styles.centerText, {fontSize: 20}]}>{strings('page12.title')}</Text>
                <View style={styles.sectionContainer}>
                <Text style={[styles.sectionParagraph, styles.highlight]}>{strings('page12.subtitle1')}</Text>
                    <Text style={styles.sectionParagraph}>
                    {strings('page12.paragraph1')}
                    </Text>
                </View>
                <Text></Text>
                <View style={styles.sectionContainer}>
                <Text style={[styles.sectionParagraph, styles.highlight]}>{strings('page12.subtitle2')}</Text>
                    <Text style={styles.sectionParagraph}>
                    {strings('page12.paragraph2')}
                    </Text>
                </View>
                <Text></Text>
                <View style={styles.sectionContainer}>
                <Text style={[styles.sectionParagraph, styles.highlight]}>{strings('page12.subtitle3')}</Text>
                    <Text style={styles.sectionParagraph}>
                    {strings('page12.paragraph3')}
                    </Text>
                </View>
                <Text></Text>
                <View style={styles.sectionContainer}>
                <Text style={[styles.sectionParagraph, styles.highlight]}>{strings('page12.subtitle4')}</Text>
                    <Text style={styles.sectionParagraph}>
                    Garg et al. Routine Invasive Versus Selective Invasive Strategy in Elderly Patients Older Than 75 Years With Non-ST-Segment Elevation Acute Coronary Syndrome: A Systematic Review and Meta-Analysis. Mayo Clinical Proceedings. 2018; 436-444.
                    </Text>
                    <Text></Text>
                    <Text style={styles.sectionParagraph}>
                    Dodson JA, Hajduk A, Geda M, et al. Determinants and outcomes of acute kidney injury among older patients undergoing invasive coronary angiography for acute myocardial infarction: The SILVER-AMI Study. Am J Med. 2019; 30458-9.
                    </Text>
                    <Text></Text>
                    <Text style={styles.sectionParagraph}>
                    Mehran R, Aymong ED, Nikolsky E, et al. A simple risk score for prediction of contrast-induced nephropathy after percutaneous coronary intervention: Development and initial validation. JACC. 2004; 1393-1399.
                    </Text>
                    <Text></Text>
                    <Text style={styles.sectionParagraph}>
                    Cardiac Catheterization. Retrieved from https://www.heart.org/en/health-topics/heart-attack/diagnosing-a-heart-attack/cardiac-catheterization.
                    </Text>
                </View>
                <Text></Text>
                <View style={styles.sectionContainer}>
                <Text style={[styles.sectionParagraph, styles.highlight]}>{strings('page12.subtitle5')}</Text>
                <Text style={styles.sectionParagraph}>John A. Dodson, MD</Text>
                </View>
                <Text></Text>
                <View style={styles.sectionContainer}>
                <Text style={[styles.sectionParagraph, styles.highlight]}>{strings('page12.subtitle6')}</Text>
                <Text style={styles.sectionParagraph}>Mallory Barnett, MD</Text>
                <Text style={styles.sectionParagraph}>Sarwat I. Chaudhry, MD</Text>
                <Text style={styles.sectionParagraph}>Victoria V. Dickson, PhD</Text>
                <Text style={styles.sectionParagraph}>Sohah Iqbal, MD</Text>
                <Text style={styles.sectionParagraph}>Nicholas J. Kiefer, MD</Text>
                <Text style={styles.sectionParagraph}>Daniel D. Matlock, MD</Text>
                <Text style={styles.sectionParagraph}>Rachel A. Sibley, MD</Text>
                <Text style={styles.sectionParagraph}>Erica Spatz, MD</Text>
                <Text style={styles.sectionParagraph}>Jenny Summapund, MA</Text>
                </View>
                <View style={styles.sectionContainer}>
                <Text></Text>
                <Text style={[styles.sectionParagraph, styles.highlight]}>{strings('page12.subtitle7')}</Text>
                <Text style={styles.sectionParagraph}>
                Anna Kiefer
                </Text>
                <Text></Text>
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
              {/* <Text style={styles.pageNumber}>12</Text> */}
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
    margin: wp('1%')
  },
  titleContainer: {
    margin: hp('1.5%'),
  },
  sectionContainer: {
      marginLeft: 20,
      marginRight: 20,
    //   marginTop: 10
  },
  sectionParagraph: {
    fontSize: hp('1.8%'),
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
      textAlign: 'center',
      textDecorationLine: 'underline',
      margin: 10,
      fontSize: 18
  },
  sectionTitle: {
    fontSize: hp('3.5%'),
    fontWeight: '700',
    color: Colors.black,
    fontFamily: 'Avenir',
    // marginBottom: hp('1.5%'),
    textAlign: 'center'
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
    marginLeft: 5,
    marginRight: 5
  },
  attributionWrapper: {
    margin: 10,
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

export default Page12;
