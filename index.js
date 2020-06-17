/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import i18n, { translate } from 'i18n-js'

export const HEART_BLOOD_IMAGE = require('./images/heart_blood_clot.png')
export const HEART_BLOOD_IMAGE_EN = require('./images/heart_blood_clot_en_2.jpg')
export const HEART_BLOOD_IMAGE_ES = require('./images/heart_blood_clot_es.jpg')
export const CARDIAC_CATHETERIZATION_IMAGE = require('./images/cardiac_catheterization.jpg')
export const CARDIAC_CATHETERIZATION_IMAGE_ES = require('./images/cardiac_catheterization_es.jpg')
export const PCI_IMAGE = require('./images/PCI.jpg')
export const BED_IMAGE = require('./images/bed.png')
export const BRAIN_IMAGE = require('./images/brain.jpg')
export const CABG_IMAGE_EN = require('./images/CABG_en.jpg')
export const CABG_IMAGE_ES = require('./images/CABG_es.jpg')
export const PCI_1_ES = require('./images/PCI_1_es.png')
export const PCI_1 = require('./images/PCI_1.jpg')
export const PCI_2 = require('./images/PCI_2.jpg')
export const PCI_3 = require('./images/PCI_3.jpg')
export const PCI_4 = require('./images/PCI_4.jpg')
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
