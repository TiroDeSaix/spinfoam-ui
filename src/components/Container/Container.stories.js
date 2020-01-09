import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Container from "./FlexContainer"

storiesOf('Container', module)
  .add('default', () => {
    return  <Container> 
              <div> A </div>
              <div> B</div>
              <div> C</div>
              <div> D</div>
              <div> E</div>
            </Container>
  })

storiesOf('Grid', module)
  .add("")
 