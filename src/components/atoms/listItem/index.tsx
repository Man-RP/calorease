import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {isRTL, RFValue, screenHeight} from '../../../constants';
import {IListItem} from '../list';

interface Props extends TouchableOpacityProps {
  item: IListItem;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  iconStyle?: TextStyle;
  valueStyle?: TextStyle;
}

const ListItem: FC<Props> = (props: Props) => {
  const {
    containerStyle,
    titleStyle,
    subtitleStyle,
    iconStyle,
    valueStyle,
    ...others
  } = props;

  const {title, subtitle, value, icon} = props.item;

  return (
    <TouchableOpacity {...others}>
      <View style={[styles.container, containerStyle]}>
        {subtitle ? (
          <View style={styles.titleContainer}>
            <Text style={[styles.textAll, styles.title, titleStyle]}>
              {title}
            </Text>
            <Text style={[styles.textAll, styles.subtitle, subtitleStyle]}>
              {subtitle}
            </Text>
          </View>
        ) : (
          <Text style={[styles.textAll, styles.title, titleStyle]}>
            {title}
          </Text>
        )}
        {icon ? (
          <Icon style={iconStyle} name="checkmark" size={26} color="#FF9B70" />
        ) : (
          <Text style={[styles.textAll, styles.value, valueStyle]}>
            {value}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 0.0916 * screenHeight,
    flexDirection: isRTL ? 'row' : 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textAll: {
    fontFamily: 'Segoe UI',
  },
  title: {
    fontSize: RFValue(16),
    fontWeight: '700',
    color: '#707070',
    lineHeight: RFValue(21),
  },
  subtitle: {
    fontSize: RFValue(10),
    color: '#949397',
    lineHeight: RFValue(13),
  },
  value: {
    fontSize: RFValue(16),
    color: '#FF9B70',
  },
  titleContainer: {
    // backgroundColor: 'red',
  },
});
