import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
// Add default props 
// 

export default () => {
    return <Container> This is a quick container </Container>
}

const Container = styled(motion.div)`
    height: 10em;
    width: 10em;
    border: 1px solid black;
`
