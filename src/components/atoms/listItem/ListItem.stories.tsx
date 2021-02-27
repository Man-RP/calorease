import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import ListItem from '.';
import CenterView from '../../../../storybook/stories/CenterView';
import {boolean, text, withKnobs} from '@storybook/addon-knobs';
import {View} from 'react-native';
import {screenWidth} from '../../../constants';

storiesOf('ListItem', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: Function) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <View style={{width: screenWidth * 0.76}}>
      <ListItem
        item={{
          title: text('title', 'פריט'),
          value: 'בחר',
          icon: boolean('V-Icon', false),
        }}
        onPress={action('pressed-default')}
      />
    </View>
  ))
  .add('ListItem-withSubtitle', () => (
    <View style={{width: screenWidth * 0.76}}>
      <ListItem
        item={{
          title: text('title', 'פריט'),
          subtitle: text('subtitle', '0 קלרוריות 100 גרם'),
          value: text('value', 'בחר'),
        }}
        onPress={action('pressed-withSubtitle')}
      />
    </View>
  ))
  .add('ListItem-withIcon', () => (
    <View style={{width: screenWidth * 0.76}}>
      <ListItem
        item={{
          title: text('title', 'יחידה גדולה'),
          subtitle: text('subtitle', '0 קלרוריות 100 גרם'),
          icon: true,
        }}
        onPress={action('pressed-withIcon')}
      />
    </View>
  ));
