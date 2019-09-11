import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Topbar from "./Topbar"

// Create an object for Default Props



storiesOf("Nav", module)
    .add("Default", () => <Topbar />)