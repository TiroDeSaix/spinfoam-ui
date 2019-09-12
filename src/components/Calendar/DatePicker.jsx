import React, { useState } from "./node_modules/react"
import styled from "./node_modules/styled-components"
import { motion } from "./node_modules/framer-motion"


// Add default props 
// 

/*
To Do:

Example: 

Desc: 

Props: 
  

*/

export default ({ children }) => {
    return <DatePicker> {children} </DatePicker>
}

const DatePicker = styled(motion.div)`
   display: grid;

`