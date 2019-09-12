import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useSelector, useDispatch } from "react-redux"
import useMedia from "../../fx/useMedia"

// Add default props 
// 

/*
To Do:

Example:

Desc:
     Generic Container that will implement responsiveness for the children.
    Wrapping a component in Container should automagically make it responive.
    "Container" will also act as a liason for data from the redux store, to any component

Props: 
    w: Number
    h: Number
    p: Number
    m: Number
    shadow?: String
    data: Object

*/

export default ({ children }) => {
    return <Container> {children} </Container>
}

const Container = styled(motion.div)`
    height: 10em;
    width: 10em;
    border: 1px solid black;
    display: flex;
    justify-content: center;
`