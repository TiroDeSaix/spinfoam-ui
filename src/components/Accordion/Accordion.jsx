import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import Button from "../Buttons/Button"

import useRadioList from "../../fx/useRadioList"


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
    <Accordion> 
        

    </Accordion>

Props: 
    title: String
    direction: String ("x" | "y")
    cascaded: Boolean (If cascaded it will look like a set of cards
                        if not, the size is "squished" via minmax() )
    overflow: Boolean
    oneAtATime: Boolean (Keeps one open at a time)
    expandOnHover: Boolean
    gap: Number
    nested?:

Children:
    

*/

export default ({ children, data }) => {
    /*
    
    */

    const newChildren = useRadioList(children)
    console.log(newChildren)
    return  <Accordion> 
                {newChildren} 
            </Accordion>
}

const Accordion = styled(motion.div)`
    height: 10em;
    width: 10em;
    border: 1px solid black;

`
// extends or implements Layout and MediaCard/UICard
// Children of
const AccordionItem = ({id, title, isOpen, tabColor, children}) => {
    return (
        <Wrapper>
            <Button bg={tabColor}></Button>
            
        </Wrapper>
    )
}

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;

`