import React, {FC} from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';

interface Props {
  style?: ViewStyle;
}

const LineDivider: FC<Props> = (props: Props) => {
  const {style} = props;
  return <View style={[styles.line, style]} />;
};

export default LineDivider;

const styles = StyleSheet.create({
  line: {
    borderWidth: 0.5,
    borderColor: '#E6E6E6',
  },
});
