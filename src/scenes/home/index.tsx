import {DrawerNavigationProp} from '@react-navigation/drawer';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../navigations';
import {AppDrawerParamList} from '../../navigations/app-navigator';

interface Props {
  navigation: CompositeNavigationProp<
    StackNavigationProp<RootStackParamList, 'Main'>,
    DrawerNavigationProp<AppDrawerParamList, 'Home'>
  >;
}

interface Props {}

const HomeScreen = (props: Props) => {
  return (
    <View>
      <Text>Hello HomeScreen!</Text>
    </View>
  );
};

export default HomeScreen;
