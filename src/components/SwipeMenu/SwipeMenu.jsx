import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

// Add default props 
// 

/*
To Do:

Example: 
    
Desc: 
    Menu that scrolls in and out of overflow

Props: 
    direction: String = "x" | "y"
    gap: Number
    perspective: Boolean (customizes "closeness" of non focused items)
    faded: Boolean 
    pivot: Boolean

    

  

*/

export default ({ children }) => {
    return <SwipeMenu> {children} </SwipeMenu>
}

const SwipeMenu = styled(motion.div)`
    height: 10em;
    width: 10em;
    border: 1px solid black;
`