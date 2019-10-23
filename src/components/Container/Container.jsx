import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useSelector, useDispatch } from "react-redux"
import useMedia from "../../fx/useMedia"
import theme from "../../theme"

// Add default props 
// 

/*
To Do:

Example:

Desc:
     Generic Container that will implement responsiveness for the children.
    Wrapping a component in Container should automagically make it responive.
    "Container" will also act as a liason for data from the redux store, to any component

      Implements "Flexbox and minmax()", usually contains items that flow in one direction

Props: 
    w: array 
    h: array
    p: array (inset)
    m: array
    shadow?: String
    data: Object
    placeContent: 

*/



export default ({ children }) => {
    return <Container> {children} </Container>
}

const Container = styled(motion.div)`
    border: 1px solid black;
    display: flex;
    
    place-content: center center;
    
`