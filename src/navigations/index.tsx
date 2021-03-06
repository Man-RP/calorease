import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../scenes/home';
import {screenHeight} from '../constants';
import AuthNavigation, {AuthStackParamList} from './auth-navigator';
import {NavigatorScreenParams} from '@react-navigation/native';
import MainNavigation from './app-navigator';

export type RootStackParamList = {
  Main: undefined;
  Authentication: NavigatorScreenParams<AuthStackParamList>;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Authentication'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Authentication" component={AuthNavigation} />
        <Stack.Screen name="Main" component={MainNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
