import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '_scenes/home';
import AboutScreen from '_scenes/about';

const DrawerNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Home: {
    screen: HomeScreen,
  },
  About: {
    screen: AboutScreen,
  },
};

const AppNavigator = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

export default AppNavigator;
