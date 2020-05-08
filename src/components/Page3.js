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

import Unorderedlist from 'react-native-unordered-list';
import { ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Page3 extends Component {

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
    const pages = ['Page 1','Page 2', '', 'Page 4','Page 11']
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
        "3",
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
              <View
              onLayout={this.onLayout} 
              style={[styles.sectionContainer, styles.centerTitle, {marginTop: this.state.height * .04}]}>
                    <Text style={styles.sectionTitle}>Your values</Text>
                </View>
              <View
              onLayout={this.onLayout} 
              style={[styles.sectionContainer, {marginTop: this.state.height * .02}]}>
                    <Text style={styles.sectionParagraph}>
                        We understand that being diagnosed with a heart attack may be causing you worry and fear. 
                        Others like you may even feel sad or depressed because they
                        are not sure how this diagnosis will interfere with their future
                        activities.
                        <Text style={styles.highlight}> These feelings are common among patients with heart issues. </Text>
                    </Text>
                </View>
                <View
              onLayout={this.onLayout} 
              style={[styles.sectionContainer, {marginTop: this.state.height * .02}]}>
                    <Text style={[styles.sectionParagraph, styles.highlight]}>Communication can help.</Text>
                </View>
                <View
              onLayout={this.onLayout} 
              style={[styles.sectionContainer, {marginTop: this.state.height * .02}]}>
                    <Text style={styles.sectionParagraph}>
                    Speaking to a professional–like your cardiologist—will help lessen the
                    fears you may have about the disease. Listing your priorities and asking
                    questions with your doctor can help better shape your expectations of the future.
                    </Text>
                </View>
                <View
              onLayout={this.onLayout} 
              style={[styles.sectionContainer, {marginTop: this.state.height * .02}]}>
                    <Text style={[styles.sectionParagraph, styles.highlight]}>
                    Consider asking yourself these questions in order to help guide your
                    discussion with your cardiologist:
                    </Text>
                </View>
                <View
              onLayout={this.onLayout} 
              style={[styles.sectionContainer, {marginTop: this.state.height * .03, marginBottom: this.state.height * .09}]}>
                    <View style={[styles.blueBox]}>
                      <View style={styles.listItem}>
                        <Unorderedlist style={styles.bullet}><Text style={styles.listText}>What are my priorities?</Text></Unorderedlist>
                      </View>
                      <View style={styles.listItem}>
                        <Unorderedlist style={styles.bullet}><Text style={styles.listText}>How do I feel about procedures?</Text></Unorderedlist>
                      </View>
                      <View style={styles.listItem}>
                        <Unorderedlist style={styles.bullet}><Text style={styles.listText}>What are my current fears about the cardiac
                            catheterization procedure?</Text></Unorderedlist>
                      </View>
                    </View>
                </View>
            </View>

            </ScrollView>
            <View style={styles.footer}>
              <Text style={styles.copyright}>Copyright 2020 New York University.</Text>
              <Text style={styles.copyright}>All Rights Reserved.</Text>
              {/* <Text style={styles.pageNumber}>3</Text> */}
              <View style={styles.buttonGroup}>
              <ButtonGroup
            buttons={buttons}
            onLayout={this.onLayout} 
            disabled={[2]}
            onPress={this.navigate}
            selectedIndex={selectedIndex}
            containerStyle={{height: hp('6%'), width: this.state.width * .9}}/>
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
  body: {
    backgroundColor: '#f6f6f6',
  },
  listItem: {
    marginTop: hp('.5%'),
  },
  listText: {
    fontSize: hp('2.2%'),
  },
  sectionContainer: {
    // marginTop: hp('2%'),
    paddingHorizontal: wp('5%'),
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
  bullet: {
    fontSize: hp('2%')
  },
  sectionParagraph: {
    fontSize: hp('2.2%'),
    marginTop: hp('1.5%'),
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
      borderRadius: wp('2%'),
      borderWidth: wp('.3%'),
      padding: wp('2.5%')
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

export default Page3;
