import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

// Add default props 
// 

/*
To Do:

Example:

Desc:

Props:    

*/

export default ({ children }) => {
    return <VideoCard> {children} </VideoCard>
}

const VideoCard = styled(motion.div)`
    height: 10em;
    width: 10em;
    border: 1px solid black;
`