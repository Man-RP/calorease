import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../../navigations';
import {AuthStackParamList} from '../../navigations/auth-navigator';

interface Props {
  navigation: CompositeNavigationProp<
    StackNavigationProp<RootStackParamList, 'Authentication'>,
    StackNavigationProp<AuthStackParamList, 'SignUp'>
  >;
}

const SignUpScreen = (props: Props) => {
  return (
    <View>
      <Text>Hello SignUpScreen!</Text>
    </View>
  );
};

export default SignUpScreen;
