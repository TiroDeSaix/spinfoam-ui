import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Form from "./Form"
import FormGroup from "./FormGroup"

storiesOf('Form', module)
  .add('Default', () => <Form />)

storiesOf('FormGroup', module)
  .add('Default', () => <FormGroup/>)
 