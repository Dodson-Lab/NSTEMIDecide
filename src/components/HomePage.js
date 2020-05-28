/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
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

import { ButtonGroup, Card } from 'react-native-elements';
import { LOGO } from '../..';

import i18n, { translate } from 'i18n-js'

import en from '../../localization/en.json';
import es from '../../localization/es.json';

// Define the supported translations
i18n.translations = {
    en,
    es
  };

class HomePage extends Component {
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
    const page = 'Page 1'
    const lang = 'en'
    const languages = ['en', 'es']
    const language = languages[selectedIndex]
    i18n.locale = language
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
            <Text>English </Text>,
            <Text>Spanish</Text>
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
            <View style={[styles.imageContainer]}>
                <Image style={styles.image} source={ LOGO } resizeMode="contain"/>
                </View>
            <View style={styles.smallContainer}>
            <Text style={styles.sectionTitle}>A Cardiac Catheterization Decision Aid Tool</Text></View>
                <Card
  title='select a language'
  titleStyle={[styles.selectText, {marginBottom: 10}]}>
      <ButtonGroup
      onLayout={this.onLayout}
textStyle={{
fontSize: hp('2.5%'),
fontWeight: '500',
fontFamily: "Avenir",
}}
onPress={this.navigate}
selectedIndex={selectedIndex}
buttons={buttons}
containerStyle={{height: 100, width: this.state.width * .8}}
/>
</Card>

        <View
        onLayout={this.onLayout}
        style={[styles.smallContainer, {height: this.state.height * .2}]}>
        <Text style={styles.attribute}>New York University</Text>
        </View>
          </View>
          </ScrollView>
        </SafeAreaView>

        );
      }
    }




const styles = StyleSheet.create({
    body: {
    //   flex: 1,
      alignItems: 'center',
      paddingTop: hp('7%'),
      backgroundColor: '#f6f6f6',
      flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    image: {
        width: hp('25%'),
        height: hp('25%'),
        alignSelf: "center",
        borderWidth: 1.5,
        borderColor: "#D3D3D3"
      },
      sectionTitle: {
        textAlign: "center",
        fontSize: hp('3%'),
        fontWeight: '400',
        fontFamily: 'Avenir',
        color: Colors.black
      },
      buttonContainer: {
        padding: wp('3%')
      },
    selectText: {
        fontSize: hp('2%'),
        fontWeight: '400',
        color: "#626d7a",
        fontFamily: 'Avenir',
        textAlign: "center"
    },
    attribute: {
    fontSize: hp('2%'),
    fontWeight: '200',
    color: "#626d7a",
    fontFamily: 'Avenir',
    },
    icon: {
    fontSize: hp('2%'),
    color: "#626d7a"
    },
    smallContainer: {
    justifyContent: "center",
    marginTop: hp('3%'),
    marginBottom: hp('1.5%')
    },
  });


export default HomePage;
