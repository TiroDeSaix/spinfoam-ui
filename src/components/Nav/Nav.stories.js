import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Topbar from "./Topbar"
import Sidebar from "./Sidebar"
import ButtonGroup from "../Buttons/ButtonGroup"
import { Button } from "../Buttons/Button"

// In composition a "Nav" component extends from the Container component and implements 
// responsiveness with the useMedia() hook

// Create an object for Default Props

let topbarContent = <ButtonGroup> 
                        <Button>Home</Button>
                        <Button>About</Button>
                        <Button>Contact</Button>
                    </ButtonGroup>

storiesOf("Topbar", module)
    .add("Default", () => <Topbar>{topbarContent}</Topbar>)

storiesOf("Sidebar", module)
    .add("Default", () => <Sidebar></Sidebar>)