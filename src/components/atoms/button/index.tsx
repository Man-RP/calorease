import React, {FC} from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
  TouchableHighlightProps,
} from 'react-native';
import {RFValue} from '../../../constants';

interface Props extends TouchableHighlightProps {
  title: string;
  wide?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}
const Button: FC<Props> = (props: Props) => {
  const {title, style, wide, textStyle, ...others} = props;
  return (
    <TouchableHighlight
      underlayColor={'#fff'}
      style={[
        styles.buttonContainer,
        {width: wide ? RFValue(320) : RFValue(178)},
        style,
      ]}
      {...others}>
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
