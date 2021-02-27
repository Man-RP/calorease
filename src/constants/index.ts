import {Dimensions} from 'react-native';
import {I18nManager} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const isRTL = I18nManager.isRTL;

import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export {screenWidth, screenHeight, RFPercentage, RFValue, isRTL};
