import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {isRTL, RFValue} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  placeholder: string;
  width?: number | string;
  height?: number | string;
  search?: boolean;
  rtl?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
  maxLength?: number;
}

const Input = (props: Props) => {
  const {
    onChangeText,
    value,
    placeholder,
    search,
    containerStyle,
    style,
    maxLength = 32,
  } = props;

  return (
    <View
      style={[
        styles.container,
        {
          width: search ? RFValue(187) : RFValue(328),
          height: search ? RFValue(40) : RFValue(50),
        },
        containerStyle,
      ]}>
      {search && <Icon name="search" size={16} color="#A4A2AA" />}
      <TextInput
        style={[
          styles.TextInput,
          {
            fontSize: search ? RFValue(13) : RFValue(18),
            marginRight: search ? 3 : 0,
            textAlign: value.length === 0 ? 'right' : 'auto',
          },
          style,
        ]}
        onChangeText={(text) => onChangeText(text)}
        maxLength={maxLength}
        value={value}
        placeholderTextColor={'#E6E6E6'}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: isRTL ? 'row' : 'row-reverse',
    justifyContent: isRTL ? 'flex-end' : 'flex-start',
    alignItems: 'center',
    height: RFValue(50),
    width: RFValue(328),
    borderColor: '#A4A2AA',
    borderWidth: 1,
    borderRadius: 9.5,
    paddingHorizontal: 10,
  },
  TextInput: {
    fontFamily: 'Segoe UI',
    color: '#A4A2AA',
    fontSize: RFValue(18),
    fontWeight: 'bold',
    borderWidth: 0,
    flex: 1,
  },
});
