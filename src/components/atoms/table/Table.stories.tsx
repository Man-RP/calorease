import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import {withKnobs} from '@storybook/addon-knobs';
import {Table} from '..';

const dataDefault: {
  onRemovePress: Function;
  text: string[];
}[] = [
  {
    text: ['תפוח אדמה', "5 יח'", '300'],
    onRemovePress: action('remove potato'),
  },
  {
    text: ['תפוח עץ', "2 יח'", '300'],
    onRemovePress: action('remove apple'),
  },
  {
    text: ['תפוז', "24 יח'", '3200'],
    onRemovePress: action('remove orange'),
  },
  {
    text: ['ביצה', "3 יח'", '250'],
    onRemovePress: action('remove egg'),
  },
];

const dataMeals: {
  onRemovePress: Function;
  text: string[];
}[] = [
  {
    text: ['ארוחת בוקר', '600'],
    onRemovePress: action('remove breakfest'),
  },
  {
    text: ['ארוחת צהריים', '600'],
    onRemovePress: action('remove lunch'),
  },
  {
    text: ['ארוחת ערב', '600'],
    onRemovePress: action('remove dinner'),
  },
];

storiesOf('Table', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: Function) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <Table
      rowsData={dataDefault}
      headerRowText={['מוצר', 'כמות', 'קלוריות']}
      columnsTextAlign={['center', 'center', 'center']}
      columnsWidth={[30, 30, 30]}
      footerPressCallback={action('add item')}
    />
  ))
  .add('Table-withMeals', () => (
    <Table
      rowsData={dataMeals}
      headerRowText={['ארוחה', 'קלוריות']}
      columnsTextAlign={['right', 'center']}
      columnsWidth={[50, 30]}
      footerPressCallback={action('add meal')}
    />
  ));
