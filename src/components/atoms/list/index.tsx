import React, {FC, useRef} from 'react';
import {FlatList, FlatListProps, StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../../constants';
import LineDivider from '../divider';

export interface IListItem {
  title: string;
  subtitle?: string;
  value?: string;
  icon?: boolean;
}

const List = (props: FlatListProps<IListItem>) => {
  const {data, style} = props;
  const height = useRef<number>(
    data ? 2 + data.length * 2 + 3 * 0.0916 * screenHeight : 0,
  );

  return (
    <>
      <FlatList
        {...props}
        style={[styles.container, {height: height.current}, style]}
        ItemSeparatorComponent={() => <LineDivider />}
        ListHeaderComponent={() => <LineDivider />}
        ListFooterComponent={() => <LineDivider />}
      />
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    width: 0.77 * screenWidth,
    flexGrow: 0,
  },
});
