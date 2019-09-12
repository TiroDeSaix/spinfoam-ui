import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MediaCard from "./MediaCard"
import Video from "./Video"

storiesOf('Media Card', module)
  .add('Default', () => <MediaCard />)

storiesOf("Video", module)
    .add('Default', () => <Video />)
 