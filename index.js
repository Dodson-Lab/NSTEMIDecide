/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import i18n, { translate } from 'i18n-js'

export const HEART_BLOOD_IMAGE = require('./images/heart_blood_clot.png')
export const CARDIAC_CATHETERIZATION_IMAGE = require('./images/cardiac_catheterization.jpg')
export const PCI_IMAGE = require('./images/PCI.jpg')
export const BED_IMAGE = require('./images/bed.png')
export const BRAIN_IMAGE = require('./images/brain.jpg')
export const CABG_IMAGE = require('./images/CABG.png')
export const DROPLET_IMAGE = require('./images/droplet.jpg')
export const HEART_ATACK_NO_OP_IMAGE = require('./images/heart_attack_no_op.png')
export const HEART_ATACK_OP_IMAGE = require('./images/heart_attack_op.png')
export const HEART_PROCEDURE_NO_OP_IMAGE = require('./images/heart_procedure_no_op.png')
export const HEART_PROCEDURE_OP_IMAGE = require('./images/heart_procedure_op.png')
export const KIDNEY_IMAGE = require('./images/kidney.jpg')
export const COMFORT_IMAGE = require('./images/comfort.jpg')
export const HEART_IMAGE = require('./images/heart.png')
export const LOGO = require('./images/logo.png')
export const CROPPED_LOGO = require('./images/cropped_hand.png')

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
    return i18n.t(name, params);
  };

// export const strings = require('./locales/i18n')
AppRegistry.registerComponent(appName, () => App);
