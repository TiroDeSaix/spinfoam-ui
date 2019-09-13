import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

// Add default props 
// 
// 

/*
To Do:

Desc: 
    Responsive Accordion that has a stack of MediaCard components
    or simple UI Card Components. Data is filtered thru and general
    dimensions are set using the Container Component

Example:


Props: 
    title: String
    direction: String ("x" | "y")
    cascaded: Boolean (If cascaded it will look like a set of cards
                        if not, the size is "squished" via minmax() )
    overflow: Boolean
    oneAtATime: Boolean (Keeps one open at a time)
    expandOnHover: Boolean
    gap: Number

    


*/

export default ({ children }) => {
    return <Accordian> {children} </Accordian>
}

const Accordian = styled(motion.div)`
    height: 10em;
    width: 10em;
    border: 1px solid black;
`
// extends or implements Layout and MediaCard/UICard
// Children of
const AccordianItem = ({title, isOpen, overlay}) => {

}
