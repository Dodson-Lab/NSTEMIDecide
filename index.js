/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

export const HEARTIMAGE = require('./images/heart.png')
AppRegistry.registerComponent(appName, () => App);
