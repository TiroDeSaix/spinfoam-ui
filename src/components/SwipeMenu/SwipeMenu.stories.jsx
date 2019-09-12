import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SwipeMenu from "./SwipeMenu"
import Carousel from "./Carousel"

storiesOf('SwipeMenu', module)
  .add('Default', () => <SwipeMenu/>)

storiesOf('Carousel', module)
  .add('Default', () => <Carousel/>)
 