import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import useLockBodyScroll from "../../fx/useLockBodyScroll"
import Container from "../Container/FlexContainer"

// Add default props 
// 

/*
To Do:

Example:

Desc: 

Props: 

*/

export default ({ children }) => {
    return  <Container> 
                <Modal>
                    {children} 
                </Modal>
            </Container>
}

export const Modal = styled(motion.div)`
    height: 10em;
    width: 10em;
    border: 1px solid black;
`