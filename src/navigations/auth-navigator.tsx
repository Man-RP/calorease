import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {headerOptions, screenHeight} from '../constants';
import {LogInScreen, SignUpScreen} from '../scenes';

export type AuthStackParamList = {
  LogIn: undefined;
  SignUp: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigation: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={'LogIn'}
      screenOptions={{
        ...headerOptions,
      }}>
      <Stack.Screen
        name="LogIn"
        component={LogInScreen}
        options={{title: 'התחברות'}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: 'הרשמה',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
