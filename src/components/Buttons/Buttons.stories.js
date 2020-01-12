import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { scaleOnHover } from "../../animations/hover"

import Button from "./Button"
import ButtonGroup from "./ButtonGroup"
import Container from "../Container/FlexContainer"
import Dropdown from "./Dropdown"
import Select from "./Select"
import { motion } from 'framer-motion';

// Create an object for Default Props
const v = {
    hover: {
        scale: 1.4
    }
}

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

const testButtons = <> 
                        <Button {...scaleOnHover}> 
                        ALPHA 
                        </Button>
                        <Button> BRAVO </Button>
                        <Button> CHARLIE </Button>
                        <Button> KILO </Button>
                    </>

const options = ["English", "Spanish", "French", "German"]

storiesOf("ButtonGroup", module)
    .add("Default", () => <ButtonGroup p="1em" direction="x" gap="1em">{testButtons}</ButtonGroup>)
    .add("Nested", () => <>{sampleNested}</>)

storiesOf("Button", module)
    .add("Default", () => <Button whileHover={{
        scale: 1.2
      }}> Default Button </Button>)
    .add("With Box Shadow", () => <Container gutter="1em">{testButtons}</Container>)

storiesOf("Dropdown", module)
    .add("Default", () => <Dropdown items={dropdownData} />)

storiesOf("Select", module)
    .add("Allow One", () => <Select options={options} />)
