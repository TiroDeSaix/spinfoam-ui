import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from "./Button"
import ButtonGroup from "./ButtonGroup"
import Dropdown from "./Dropdown"
import Select from "./Select"

// Create an object for Default Props


const dropdownData = [
    {link: "#", text: "English"},
    {link: "#", text: "French"},
    {link: "#", text: "Spanish"},
    {link: "#", text: "Portugese"},
]

const sampleButtons =   <> 
                            <Button text="Alpha" /> 
                            <Button text="Bravo" />
                        </>

const sampleNested =    <ButtonGroup w="100%" direction="y" p="1em" placing="space-between">
                            <ButtonGroup direction="y" w="20%">{sampleButtons}</ButtonGroup>
                            <ButtonGroup direction="y">{sampleButtons}</ButtonGroup>
                        </ButtonGroup>

const shadowButtons =   <> 
                            <Button text="ALPHA" shadow /> 
                            <Button text="BRAVO" shadow />
                            <Button text="CHARLIE" shadow />
                            <Button text="KILO" shadow  />
                        </>

const options = ["English", "Spanish", "French", "German"]

storiesOf("ButtonGroup", module)
    .add("Default", () => <ButtonGroup p="1em" direction="x" gap="1em">{sampleButtons}</ButtonGroup>)
    .add("Nested", () => <>{sampleNested}</>)

storiesOf("Button", module)
    .add("Default", () => <Button> Default Button </Button>)
    .add("With Box Shadow", () => <ButtonGroup p="1em" gap="1em">{shadowButtons}</ButtonGroup>)

storiesOf("Dropdown", module)
    .add("Default", () => <Dropdown items={dropdownData} />)

storiesOf("Select", module)
    .add("Allow One", () => <Select options={options} />)
