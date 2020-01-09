import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import Container from "../Container/FlexContainer"
import Form from "./Form"


// Add default props 
// 

/*

To Do:

Example:

Desc:

Props: 

*/

export default ({ children }) => {
    return (
        <FormGroup> {children} </FormGroup>
    )
}

export const FormGroup = styled(motion.div)`
    display: grid;
    height: 10em;
    width: 10em;
    border: 1px solid black;
`