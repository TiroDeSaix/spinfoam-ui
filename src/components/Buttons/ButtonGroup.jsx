import React from "react"
import styled from 'styled-components'
import { motion } from "framer-motion"
import { system } from "styled-system"
/*
    interface ITopbar {
    links: {
        left:  {
            Name: String,
            Name: String,
            Name: String,
        }

    }
    
}

Will implement spacing props with system

<ButtonGroup links={links} align="left" gap={3}> 

Props: 
    links: Object
    align: String ("left" | "right" | "fill")
    gap: Number
    padding: Number
    direction: String (as in "x" or "y")

*/
export default () => {
    return (
        <ButtonGroup> </ButtonGroup>
    )
}

export const ButtonGroup = styled(motion.div)`
   display: flex;
   flex: 1;


`