import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

// Add default props 
// 

/*
To Do:

Desc:

Example:

Props: 
  

*/

export default ({ children }) => {
    return <Accordian> {children} </Accordian>
}

const Accordian = styled(motion.div)`
    height: 10em;
    width: 10em;
    border: 1px solid black;
`