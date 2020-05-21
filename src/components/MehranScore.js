

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Linking,
  Dimensions,
  Switch,
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

import PropTypes from 'prop-types';

import { BRAIN_IMAGE, KIDNEY_IMAGE, DROPLET_IMAGE } from '../..';

import { ButtonGroup, Divider, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


import Unorderedlist from 'react-native-unordered-list';
let screenheight = Dimensions.get("window").height;

class MehranScore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      score: {}
    }
    this.updateIndex0 = this.updateIndex0.bind(this)
    this.updateIndex1 = this.updateIndex1.bind(this)
    this.updateIndex2 = this.updateIndex2.bind(this)
    this.updateIndex3 = this.updateIndex3.bind(this)
    this.updateIndex4 = this.updateIndex4.bind(this)
    this.updateIndex5 = this.updateIndex5.bind(this)
    this.updateIndex6 = this.updateIndex6.bind(this)
    this.onLayout = this.onLayout.bind(this);
    this.navigate = this.navigate.bind(this);
  }
  navigate (selectedIndex) {
    const pages = ['Page 1','Page 10', '', 'Page 11','Page 13']
    const page = pages[selectedIndex]
    this.props.navigation.navigate(page)
    this.setState({selectedIndex})
  }
  updateIndex0 (selectedFormIndex0) {
      let val = 0;
      if (selectedFormIndex0 == 1) {
          val = 5
      }
      this.state.score[0] = val
      this.setState({selectedFormIndex0})
      console.log(this.state.score)
  }
  updateIndex1 (selectedFormIndex1) {
    let val = 0;
    if (selectedFormIndex1 == 1) {
        val = 5
    }
    this.state.score[1] = val
    this.setState({selectedFormIndex1})
}
updateIndex2 (selectedFormIndex2) {
    let val = 0;
    if (selectedFormIndex2 == 1) {
        val = 5
    }
    this.state.score[2] = val
    this.setState({selectedFormIndex2})
}
updateIndex3 (selectedFormIndex3) {
    let val = 0;
    if (selectedFormIndex3 == 1) {
        val = 4
    }
    this.state.score[3] = val
    this.setState({selectedFormIndex3})
}
updateIndex4 (selectedFormIndex4) {
    let val = 0;
    if (selectedFormIndex4 == 1) {
        val = 3
    }
    this.state.score[4] = val
    this.setState({selectedFormIndex4})
}
updateIndex5 (selectedFormIndex5) {
    let val = 0;
    if (selectedFormIndex5 == 1) {
        val = 3
    }
    this.state.score[5] = val
    this.setState({selectedFormIndex5})
}
updateIndex6 (selectedFormIndex6) {
    let val = 0;
    if (selectedFormIndex6 == 1) {
        val = 2
    } else if (selectedFormIndex6 == 2) {
        val = 4
    } else if (selectedFormIndex6 == 3) {
        val = 6
    }
    this.state.score[6] = val
    this.setState({selectedFormIndex6})
}
handleInputChange = (value) => {
    if (/^\d+$/.test(value)) {
      this.setState({
        value: value
      });
    }
    this.state.score['cml'] = Math.floor(value / 100)
  }
  calculateMehranScore () {
      let score = 0;
      for (let [key, value] of Object.entries(this.state.score)) {
        score += Number(value)
      }
      let risk = 0;
      let dialysis = 0;
      if (score <= 5) {
          risk = 7.5;
          dialysis = .04;
      } else if (score < 10) {
          risk = 14;
          dialysis = .12; 
      } else if (score < 15) {
          risk = 26.1;
          dialysis = 1.09;
      } else {
          risk = 57.3
          dialysis = 12.6;
      }
      this.setState({
        mehranScore: score,
        risk: risk,
        dialysis: dialysis
      })
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
        "10a",
        <Icon name="angle-right" style={{fontSize: 25}}/>,
        <Icon name="angle-double-right" style={{fontSize: 25}}/>,
      ]
      const formButtons = [
          'No', 'Yes'
      ]
      const eGFRButtons = [
          '≥60  0', '40 to <60  +2', '20 to <40  +4', '<20  +6'
      ]
      const { selectedIndex } = this.state
      const { selectedFormIndex0 } = this.state
      const { selectedFormIndex1 } = this.state
      const { selectedFormIndex2 } = this.state
      const { selectedFormIndex3 } = this.state
      const { selectedFormIndex4 } = this.state
      const { selectedFormIndex5 } = this.state
      const { selectedFormIndex6 } = this.state
      const { value } = this.state
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
                    <Text style={styles.sectionTitle}>Mehran Score</Text>
                </View>
                <View style={styles.sectionContainer}>
                    <View style={styles.rowContainer}>
                    <Text style={[styles.sectionParagraph, styles.centerText]}>
                    Predicts risk of contrast-induced nephropathy (CIN) after
                    percutaneous coronary intervention (PCI).
                    </Text></View>
                </View>
               
                <View style={styles.sectionParagraph}>
                <View style={[styles.columnContainer]}>
                    <View style={[styles.column]}>
                        <Text>Hypotension</Text>
                        <Text>SBP 80 for ≥1 hr requiring inotrope or
                        balloon pump within 24 hrs of catheterization</Text>
                    </View>
                    <View style={[styles.column]}>
                    <ButtonGroup
                    onPress={this.updateIndex0}
                    selectedIndex={selectedFormIndex0}
                    buttons={formButtons}
                    containerStyle={{height: 30}}
                    />
                    </View>
                </View>
                </View>
                <Divider style={{ backgroundColor: 'blue', height: 1}} />
                <View style={styles.sectionParagraph}>
                <View style={[styles.columnContainer]}>
                    <View style={[styles.column]}>
                        <Text>Intra-aortic balloon pump</Text>
                    </View>
                    <View style={[styles.column]}>
                    <ButtonGroup
                    onPress={this.updateIndex1}
                    selectedIndex={selectedFormIndex1}
                    buttons={formButtons}
                    containerStyle={{height: 30}}
                    />
                    </View>
                </View>
                </View>
                <Divider style={{ backgroundColor: 'blue', height: 1}} />
                <View style={styles.sectionParagraph}>
                <View style={[styles.columnContainer]}>
                    <View style={[styles.column]}>
                        <Text>Congestive heart Failure</Text>
                        <Text>CHF class III/IV by New York Heart Association
                            Classification and/or history of pulmonary edema</Text>
                    </View>
                    <View style={[styles.column]}>
                    <ButtonGroup
                    onPress={this.updateIndex2}
                    selectedIndex={selectedFormIndex2}
                    buttons={formButtons}
                    containerStyle={{height: 30}}
                    />
                    </View>
                </View>
                </View>
                <Divider style={{ backgroundColor: 'blue', height: 1}} />
                <View style={styles.sectionParagraph}>
                <View style={[styles.columnContainer]}>
                    <View style={[styles.column]}>
                        <Text>Age >75 years</Text>
                    </View>
                    <View style={[styles.column]}>
                    <ButtonGroup
                    onPress={this.updateIndex3}
                    selectedIndex={selectedFormIndex3}
                    buttons={formButtons}
                    containerStyle={{height: 30}}
                    />
                    </View>
                </View>
                </View>
                <Divider style={{ backgroundColor: 'blue', height: 1}} />
                <View style={styles.sectionParagraph}>
                <View style={[styles.columnContainer]}>
                    <View style={[styles.column]}>
                        <Text>Anemia</Text>
                        <Text>Baseline hematocrit value &#60;39&#37; for men and &#60;36&#37; for women</Text>
                    </View>
                    <View style={[styles.column]}>
                    <ButtonGroup
                    onPress={this.updateIndex4}
                    selectedIndex={selectedFormIndex4}
                    buttons={formButtons}
                    containerStyle={{height: 30}}
                    />
                    </View>
                </View>
                </View>
                <Divider style={{ backgroundColor: 'blue', height: 1}} />
                <View style={styles.sectionParagraph}>
                <View style={[styles.columnContainer]}>
                    <View style={[styles.column]}>
                        <Text>Diabetes</Text>
                    </View>
                    <View style={[styles.column]}>
                    <ButtonGroup
                    onPress={this.updateIndex5}
                    selectedIndex={selectedFormIndex5}
                    buttons={formButtons}
                    containerStyle={{height: 30}}
                    />
                    </View>
                </View>
                </View>
                <Divider style={{ backgroundColor: 'blue', height: 1}} />
                <View style={styles.sectionParagraph}>
                <View style={[styles.columnContainer]}>
                    <View style={[styles.column]}>
                        <Text>Contrast media volume</Text>
                    </View>
                    <View style={[styles.column]}>
                    <Input
                    keyboardType='numeric'
                    placeholder='mL'
                    onChangeText={this.handleInputChange}
                    value={this.state.value}
                    />
                    </View>
                </View>
                </View>
                <Divider style={{ backgroundColor: 'blue', height: 1}} />
                <View style={styles.sectionParagraph}>
                <View style={[styles.columnContainer]}>
                    <View style={[styles.column]}>
                        <Button title="eGFR" onPress={ ()=>{ Linking.openURL('https://www.mdcalc.com/mdrd-gfr-equation')}}/>
                        <Text>mL/min/1.73 m²</Text>
                    </View>
                    <View style={[styles.column]}>
                    <ButtonGroup
                    vertical='true'
                    onPress={this.updateIndex6}
                    selectedIndex={selectedFormIndex6}
                    buttons={eGFRButtons}
                    containerStyle={{height: 160}}
                    />
                    </View>
                </View>
                </View>
                <Divider style={{ backgroundColor: 'blue', height: 1}} />
                <View style={styles.sectionParagraph}>
                <View style={[styles.columnContainer]}>
                    <View style={[styles.column]}>
                    <Button title="Submit" onPress={() => this.calculateMehranScore()}>
                    </Button>
                    </View>
                </View>
                </View>
                <Divider style={{ backgroundColor: 'blue', height: 1}} />
                <View style={styles.sectionParagraph}>
                <View style={[styles.columnContainer]}>
                    <View style={[styles.column]}>
                    <Text>CIN Risk Score</Text>
                    <Text>{this.state.mehranScore}</Text>
                    </View>
                    <View style={[styles.column]}>
                    <Text>Risk of any post-PCI CIN</Text>
                    <Text>{this.state.risk}</Text>
                    </View>
                    <View style={[styles.column]}>
                    <Text>Risk of post-PCI CIN requiring dialysis</Text>
                    <Text>{this.state.dialysis}</Text>
                    </View>
                </View>
                </View>
                <Divider style={{ backgroundColor: 'blue', height: 1}} />
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
                {/* <Text style={styles.pageNumber}>10</Text> */}
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
    margin: wp('2%')
  },
  sectionTitle: {
    fontSize: hp('3%'),
    fontWeight: '700',
    fontFamily: 'Avenir',
    textAlign: 'center'
  },
  sectionParagraph: {
    fontSize: hp('2.2%'),
    fontWeight: '400',
    color: Colors.black,
    fontFamily: 'Avenir',
    // alignItems: 'center',
  },
  bullet: {
    fontSize: hp('2%')
  },
  linkStyle: {
    color: '#0000EE',
    textDecorationLine: 'underline',
    fontWeight: '500'
  },
  centerText: {
    textAlign: 'center'
  },
  titleContainer: {
    marginTop: hp('3%'),
    paddingHorizontal: wp('5%'),
  },
  columnContainer: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    alignItems: 'center',
},



//  FOOTER 
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
  attributionWrapper: {
    margin: wp('2%'),
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

export default MehranScore;
