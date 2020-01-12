import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
// import { useSelector, useDispatch } from "react-redux"
// import useMedia from "../../fx/useMedia"


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
    placeContent = `center space-around`, 
    direction = `row`, 
    gutter = "1em",
    w,
    h
}) => {
    const Container = styled(motion.div)`
    border: 1px solid black;
    text-align: center;
    display: flex;
    flex-direction: ${direction}
    place-content: ${placeContent};
    padding: calc(${gutter}/2);
    width: ${w};
    height: ${h};

    & > * {
        flex: 1;
        margin: calc(${gutter}/2);
        border: 1px solid black;
    }
`
    return <Container> {children} </Container>
}

