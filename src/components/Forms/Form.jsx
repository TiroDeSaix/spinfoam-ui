import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import Container from "../Container/Container"


// Add default props 
// 

/*
Desc:

Props: 
    
*/

export default ({ children }) => {
    return (
        <Container> 
            <Form> {children} </Form>       
        </Container>
    )
}

export const Form = styled(motion.input)`
    height: 10em;
    width: 10em;
    border: 1px solid black;
`