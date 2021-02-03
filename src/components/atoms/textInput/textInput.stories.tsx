import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React, {FC} from 'react';
import {TextInput} from '..';
import CenterView from '../../../../storybook/stories/CenterView';
import {withKnobs, object, text, radios, boolean} from '@storybook/addon-knobs';

export const actions = {
  onChangeText: action('onChangeText'),
};

storiesOf('TextInput', module)
  .addDecorator(withKnobs)
  .addDecorator((story: Function) => <CenterView>{story()}</CenterView>)
  .add('default', () => (
    <TextInput
      value={text('value', '')}
      placeholder={text('placeholder', 'פלייסהולדר')}
      search={boolean('search', false)}
      {...actions}
    />
  ))
  .add('search', () => (
    <TextInput search value="" placeholder={'שם הפריט'} {...actions} />
  ));
