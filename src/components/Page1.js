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

import i18n from 'i18n-js'

import { ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { strings } from '../..';

let screenheight = Dimensions.get("window").height;

class Page1 extends Component {

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
    const pages = ['Page 1','Page 1', '', 'Page 2','Page 11']
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
        "1",
        <Icon name="angle-right" style={{fontSize: 25}}/>,
        <Icon name="angle-double-right" style={{fontSize: 25}}/>,
      ]
      const { selectedIndex } = this.state
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: "e8e8e8"}}>
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
              style={[styles.body, {height: this.state.height + 15}]}>
              <View
              onLayout={this.onLayout} 
              style={[styles.sectionContainer, {marginTop: this.state.height * .05}]}>
                  <Text style={styles.sectionTitle}>{strings('page1.title')}</Text>
                  <Text style={styles.sectionDescription}>
                  {strings('page1.description')}
                  </Text>
              </View>
              <View
              onLayout={this.onLayout} 
              style={[styles.sectionContainer, {marginTop: this.state.height * .03}]}>
                  <Text style={styles.sectionTitle}>{strings('page1.sub_title')}</Text>
                  <Text style={styles.sectionDescription}>
                  {strings('page1.sub_description')}
                  </Text>
              </View>
              <View
              onLayout={this.onLayout} 
              style={[styles.sectionContainer, {marginTop: this.state.height * .03}]}>
                  <Text style={styles.noteTitle}>{strings('page1.note_title')}</Text>
                  <Text style={styles.noteDescription}>
                  {strings('page1.note_description')}
                  </Text>
              </View>
            </View>
            </ScrollView>
            <View style={styles.footer}>
              <View style={styles.attribution}>
              <Text style={styles.copyright}>Copyright 2020 New York University.</Text>
              <Text style={styles.copyright}>All Rights Reserved.</Text></View>
              <View style={styles.buttonGroup}>
            <ButtonGroup
            buttons={buttons}
            onLayout={this.onLayout} 
            disabled={[0,1,2]}
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
  },
  sectionContainer: {
    marginTop: hp('2%'),
    margin: hp('1%'),
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: hp('3.5%'),
    fontWeight: '700',
    color: Colors.black,
    fontFamily: 'Avenir',
  },
  sectionDescription: {
    fontSize: hp('3.5%'),
    fontWeight: '400',
    color: Colors.black,
    fontFamily: 'Avenir',
  },
  noteTitle: {
    fontSize: hp('1.8%'),
    fontWeight: '700',
    color: Colors.black,
    fontFamily: 'Avenir',
  },
  noteDescription: {
    fontSize: hp('1.8%'),
    fontWeight: '400',
    color: Colors.black,
    fontFamily: 'Avenir',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
  },
  pageNumber: {
    fontSize: hp('2%'),
    textAlign: 'center',
    fontFamily: 'Avenir',
  },
  copyright: {
    fontSize: hp('1%'),
    textAlign: 'right',
    fontFamily: 'Avenir',
  },
  attribution: {
    backgroundColor: '#f6f6f6',
    padding: hp('.5%'),
  },
  arrow: {
    fontSize: 20,
  },
  buttonGroup: {
    alignItems: "center",
  }
});

export default Page1;
