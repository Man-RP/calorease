import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Button from '../atoms/Button';
import CenterView from '../../../storybook/stories/CenterView';

storiesOf('Button', module)
  .addDecorator((getStory: Function) => <CenterView>{getStory()}</CenterView>)
  .add('wide', () => (
    <Button onPress={action('clicked-wide')} title={'הרשמה'} wide />
  ))
  .add('narrow', () => (
    <Button onPress={action('clicked-narrow')} title={'הוסף ארוחה'} />
  ));
