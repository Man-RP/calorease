import React, {FC} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Divider} from '..';
import {isRTL, RFValue, screenHeight} from '../../../constants';

interface Row {
  onRemovePress: Function;
  text: string[];
}

interface Props {
  containerStyle?: ViewStyle;
  rowsData: Row[];
  headerRowText: string[];
  columnsWidth: number[];
  columnsTextAlign?: (
    | 'center'
    | 'auto'
    | 'left'
    | 'right'
    | 'justify'
    | undefined
  )[];
  withoutFooterRow?: boolean;
  footerPressCallback?: Function;
}

const Table: FC<Props> = (props: Props) => {
  const {
    rowsData,
    containerStyle,
    headerRowText,
    columnsTextAlign,
    columnsWidth,
    withoutFooterRow = false,
    footerPressCallback = () => null,
  } = props;

  const Row: FC<{
    header?: boolean;
    data: string[];
    width: number[];
    align?: ('center' | 'auto' | 'left' | 'right' | 'justify' | undefined)[];
    textStyles?: TextStyle[];
    onRemovePress?: Function;
  }> = ({
    header = false,
    data,
    width,
    align,
    textStyles,
    onRemovePress = () => null,
  }) => {
    return (
      <View
        style={[
          {
            flexDirection: isRTL ? 'row' : 'row-reverse',
          },
          !header && styles.rowContainer,
        ]}>
        <View style={styles.iconContainer}>
          {!header && (
            <Ionicons
              name="remove-circle"
              size={23}
              color="#FD687D"
              onPress={() => onRemovePress()}
            />
          )}
        </View>
        <View style={styles.RowTextContainer}>
          {data.map((item, index) => (
            <Text
              key={index}
              style={[
                styles.textAll,
                header ? styles.textHeader : styles.textRow,
                {
                  width: `${width[index]}%`,
                  textAlign: align ? align[index] : 'center',
                },
                textStyles,
              ]}>
              {item}
            </Text>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        data={rowsData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Row
            data={item.text}
            width={columnsWidth}
            align={columnsTextAlign}
            onRemovePress={item.onRemovePress}
          />
        )}
        ListHeaderComponent={() => (
          <>
            <Row
              header
              data={headerRowText}
              width={columnsWidth}
              align={columnsTextAlign}
            />
            <Divider />
          </>
        )}
        ItemSeparatorComponent={Divider}
        ListFooterComponent={() =>
          withoutFooterRow ? (
            <Divider />
          ) : (
            <>
              <Divider />
              <TouchableWithoutFeedback onPress={() => footerPressCallback()}>
                <View
                  style={[
                    styles.rowContainer,
                    {alignItems: 'center', justifyContent: 'center'},
                  ]}>
                  <MaterialIcons
                    name="playlist-add"
                    size={30}
                    color="#707070"
                  />
                </View>
              </TouchableWithoutFeedback>
              <Divider />
            </>
          )
        }
      />
    </View>
  );
};

export default Table;

const styles = StyleSheet.create({
  container: {
    width: 266,
    minHeight: '22%',
  },
  rowContainer: {
    height: 0.078125 * screenHeight,
  },
  iconContainer: {
    flexDirection: isRTL ? 'row-reverse' : 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  RowTextContainer: {
    flexDirection: isRTL ? 'row' : 'row-reverse',
    flex: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textAll: {
    fontFamily: 'Segoe UI',
    fontWeight: '700',
    fontSize: RFValue(14),
    flexWrap: 'wrap',
  },
  textHeader: {
    color: '#949397',
  },
  textRow: {
    color: '#707070',
  },
});
