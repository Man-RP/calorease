import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import List, {IListItem} from '.';
import CenterView from '../../../../storybook/stories/CenterView';
import {withKnobs} from '@storybook/addon-knobs';
import ListItem from '../listItem';

const dataDefault: IListItem[] = [
  {
    title: 'תות',
    subtitle: '20 קלוריות ל100 גרם',
    icon: true,
  },
  {
    title: 'תות',
    subtitle: '20 קלוריות ל100 גרם',
    icon: true,
  },
  {
    title: 'תות',
    subtitle: '20 קלוריות ל100 גרם',
    icon: false,
  },
];

const dataChooseItem: IListItem[] = [
  {
    title: 'תות',
    subtitle: '20 קלוריות ל100 גרם',
    icon: true,
  },
  {
    title: "ליצ'י",
    subtitle: '20 קלוריות ל100 גרם',
    icon: false,
  },
  {
    title: "הוסף את 'תפוח' לרשימה...",
    subtitle: "הזן ערכים תזונתיים עבור  'תפוח'...",
    icon: false,
  },
];

const dataAddItem: IListItem[] = [
  {
    title: 'פריט',
    icon: false,
    value: 'בחר',
  },
  {
    title: 'יחידת מידה',
    icon: false,
    value: 'בחר',
  },
  {
    title: 'כמות',
    icon: false,
    value: 'בחר',
  },
];

storiesOf('List', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: Function) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <List
      renderItem={({item, index}) => (
        <ListItem item={item} onPress={action('clicked ' + index)} />
      )}
      data={dataDefault}
      keyExtractor={(item, index) => index.toString()}
    />
  ))
  .add('List-addItem', () => (
    <List
      renderItem={({item, index}) => (
        <ListItem item={item} onPress={action('clicked ' + index)} />
      )}
      data={dataAddItem}
      keyExtractor={(item, index) => index.toString()}
    />
  ))
  .add('List-chooseItem', () => (
    <List
      renderItem={({item, index}) => (
        <ListItem item={item} onPress={action('clicked ' + index)} />
      )}
      data={dataChooseItem}
      keyExtractor={(item, index) => index.toString()}
    />
  ));
