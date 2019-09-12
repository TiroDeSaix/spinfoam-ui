import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from "./Button"
import ButtonGroup from "./ButtonGroup"

// Create an object for Default Props


storiesOf("ButtonGroup", module)
    .add("Default", () => <ButtonGroup> </ButtonGroup>)

storiesOf("Button", module)
    .add("Default", () => <Button> Default Button </Button>)

