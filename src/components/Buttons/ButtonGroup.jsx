import React from "react"
import styled from 'styled-components'
import { motion } from "framer-motion"
import { grid } from "styled-system"

/*
    interface ITopbar {
    links: {

    }
}
TO DO:
    Implement the style-system sizes for font and height

 - Will implement spacing props with styled-system
 - Will implement prop aliases
Example:
    <ButtonGroup links={links} align="left" gap={3} padding={2} direction="x"> 

Desc:

Props: 
    links: Object
    align: String ("left" | "right" | "fill")
    gapX: Number
    padding: Number
    direction: String ("x" | "y")
    h: Number (height)
    overflow?: String
    
*/




export default ({ children, gapX = [1, 3, 5]}) => {
    return (
        <ButtonGroup gridColumnGap={gapX}> 
             { children } 
        </ButtonGroup>
    )
}

export const ButtonGroup = styled(motion.div)`
   display: inline-grid;

   justify-content: center;
   align-items: center;

`