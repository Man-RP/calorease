import React, {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {headerOptions, screenHeight} from '../constants';
import {HomeScreen} from '../scenes';

export type AppDrawerParamList = {
  Home: undefined;
};

const Drawer = createDrawerNavigator<AppDrawerParamList>();

const MainNavigation: FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        ...headerOptions,
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'בית'}}
      />
    </Drawer.Navigator>
  );
};

export default MainNavigation;
