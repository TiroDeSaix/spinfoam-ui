import React from "react"
import styled from 'styled-components'
import { motion } from "framer-motion"
import { system } from "styled-system"
/*
    interface ITopbar {
    links: {

    }
}
TO DO:

 - Will implement spacing props with styled-system
 - Will implement prop aliases
Example:
    <ButtonGroup links={links} align="left" gap={3} padding={2} direction="x"> 

Desc:

Props: 
    links: Object
    align: String ("left" | "right" | "fill")
    gap: Number
    padding: Number
    direction: String (as in "x" or "y")
*/

export default ({ children }) => {
    return (
        <ButtonGroup> { children } </ButtonGroup>
    )
}

export const ButtonGroup = styled(motion.div)`
   display: flex;
   flex: 1;
`