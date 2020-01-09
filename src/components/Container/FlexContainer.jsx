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
    spacing system if explicit units are not specified
Example:

Desc:
     Generic Container that will implement responsiveness for the children.
    Wrapping a component in Container should automagically make it responive.
    "Container" will also act as a liason for data from the redux store, to any component

      Implements "Flexbox and minmax()", usually contains items that flow in one direction

Props: 
   
    placeContent: 
    gutter: 

*/



export default ({ 
    children, 
    placeContent, 
    direction, 
    gutter 
}) => {
    let gutterVal = gutter ? gutter.replace(/[^\d.-]/g, '') : gutter
    //let unit = gutter
    // append the unit type
    
    const Container = styled(motion.div)`
    border: 10px solid black;
    display: flex;
    flex-direction: ${direction || `row`}
    place-content: ${placeContent || `center center`};
    padding: ${+gutterVal/2 + `px`|| `1em`}

    & > * {
        flex: 1;
        margin: ${+gutterVal/2 + `px` || `1em`};
        border: 1px solid black;
    }
`

    return <Container> {children} </Container>
}

