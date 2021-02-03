import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Button from '.';
import CenterView from '../../../../storybook/stories/CenterView';
import {boolean, text, withKnobs} from '@storybook/addon-knobs';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: Function) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <Button
      onPress={action('clicked-wide')}
      title={text('title', 'כותרת')}
      wide={boolean('wide', true)}
    />
  ))
  .add('narrow', () => (
    <Button onPress={action('clicked-narrow')} title={'הוסף ארוחה'} />
  ))
  .add('wide', () => (
    <Button wide onPress={action('clicked-narrow')} title={'הרשמה'} />
  ));
