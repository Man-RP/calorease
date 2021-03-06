import {StackNavigationOptions} from '@react-navigation/stack';
import {Dimensions, TextStyle, ViewStyle} from 'react-native';
import {I18nManager} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const isRTL = I18nManager.isRTL;

import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export {screenWidth, screenHeight, RFPercentage, RFValue, isRTL};

export const headerOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#FF9B70',
    height: 0.133 * screenHeight,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    marginTop: 0.065625 * screenHeight,
    marginBottom: 0.025 * screenHeight,
    fontWeight: 'bold',
  },
  headerTitleAlign: 'center',
  headerLeftContainerStyle: {
    marginTop: 0.065625 * screenHeight,
    marginBottom: 0.025 * screenHeight,
  },
};
