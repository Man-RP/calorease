import React from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {RFValue} from '../../constants';

interface Props {
  title: string;
  onPress: () => void;
  wide?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}
const Button = (props: Props) => {
  const {onPress, title, style, wide, textStyle} = props;
  return (
    <TouchableHighlight
      underlayColor={'#fff'}
      style={[
        styles.buttonContainer,
        {width: wide ? RFValue(320) : RFValue(178)},
        style,
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.buttonText,
          {fontSize: wide ? RFValue(20) : RFValue(18)},
          ,
          textStyle,
        ]}>
        {title}
      </Text>
    </TouchableHighlight>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    width: RFValue(320),
    height: RFValue(50),
    backgroundColor: '#FF9B70',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    fontFamily: 'Segoe UI',
    fontSize: RFValue(20),
    color: '#F9F4F2',
    fontWeight: 'bold',
  },
});
