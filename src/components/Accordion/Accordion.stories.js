import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Accordion from "./Accordion"

storiesOf('Accordian', module)
  .add('Default', () => <Accordion/>)