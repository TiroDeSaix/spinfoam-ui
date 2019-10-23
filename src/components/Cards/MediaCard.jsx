import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

// Add default props 
// 

/*
To Do:

Example:

Desc: 
    implement ProfileCard as an example

Props: 
    
*/

export default ({ children }) => {
    return <MediaCard> {children} </MediaCard>
}

const MediaCard = styled(motion.div)`
    height: 10em;
    width: 10em;
    border: 1px solid black;
`