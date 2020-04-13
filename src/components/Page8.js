/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
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

import { HEART_BLOOD_IMAGE } from '../..';

class Page8 extends Component {
      /**
   * Log out an example event after zooming
   *
   * @param event
   * @param gestureState
   * @param zoomableViewEventObject
   */
  logOutZoomState = (event, gestureState, zoomableViewEventObject) => {
    console.log('');
    console.log('');
    console.log('-------------');
    console.log('Event: ', event);
    console.log('GestureState: ', gestureState);
    console.log('ZoomableEventObject: ', zoomableViewEventObject);
    console.log('');
    console.log(`Zoomed from ${zoomableViewEventObject.lastZoomLevel} to  ${zoomableViewEventObject.zoomLevel}`);
  }
    render() {
        return (
        <View style={{ flex: 1 }}>
        <ReactNativeZoomableView
          maxZoom={1.5}
          minZoom={0.5}
          zoomStep={0.5}
          initialZoom={1}
          bindToBorders={true}
          onZoomAfter={this.logOutZoomState}
          style={{
            padding: 10,
          }}
        >
            <Text>HELLO THERE</Text>
        {/* <Image style={styles.image} source={ HEART_BLOOD_IMAGE } resizeMode="contain"/> */}
        </ReactNativeZoomableView>
        </View>
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
    backgroundColor: '#E8E8E8',
    height: hp('100%'),
  },
  contentContainer: {
      flex: 1
  },
  sectionContainer: {
    marginTop: hp('12%'),
    textAlign: 'center',
  },
  centerTitle: {
      textAlign: 'center'
  },
  sectionTitle: {
    fontSize: hp('3%'),
    fontWeight: '700',
    color: Colors.black,
    fontFamily: 'Helvetica Neue',
  },
  sectionParagraph: {
    fontSize: hp('2.2%'),
    fontWeight: '400',
    color: Colors.black,
    fontFamily: 'Helvetica Neue',
    alignItems: 'center',
  },
  sectionNote: {
    fontSize: hp('1.5%'),
    height: 130
  },
  boldText: {
    fontWeight: '700'
  },
  whiteContainer: {
    backgroundColor: Colors.white,
    paddingLeft: hp('1.5%'),
    paddingRight: hp('1.5%'),
    paddingTop: hp('1.5%'),
    margin: hp('2%'),
    borderColor: Colors.gray,
    borderWidth: wp('.1%'),
  }
});

export default Page8;
