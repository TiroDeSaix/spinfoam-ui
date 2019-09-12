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

  

*/

export default ({ children }) => {
    return <SwipeMenu> {children} </SwipeMenu>
}

const SwipeMenu = styled(motion.div)`
    height: 10em;
    width: 10em;
    border: 1px solid black;
`