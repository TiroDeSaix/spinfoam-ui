import React, { useContext, useState, useEffect } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { ButtonContext } from "./ButtonGroup"
//import { dispatch } from "../../reducer"

//const {buttons} = useContext(ButtonContext)

/*
Replace
 
To Do:
    Implement line height based on font-size
    The sizing scale should determine:
        padding 
        line-height
        font-size
    Wrap text with a container that has no padding to avoid needing
    to programmatically add line-heights.  
Desc:


Example:
    <Button />

Props:
    p: Number
    bg: String

    w?: Number (gets passed in as "max-width")
    border: String ("rounded" | "circle" | "default")
    size: Number
        value from a spacing system that implements a combination of:
            padding
            margin
            font-size
    link: String

*/
export default ({ 
    children, 
    link = "#", 
    bg, 
    shadow = `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`, 
    p = "8px",
    br = `8px`,
    color = "black",
    size,
    ...props
}) => {
    const Button = styled(motion.a)`
    font-size: 22px;
    text-decoration: none;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: none;
    padding: ${p};
    color: ${color};
    background: ${bg};
    box-shadow: ${shadow};
    border-radius: ${br};
    display: flex;
    place-content: center center;
    position: relative;
    width: max-content;
    flex: 1;
    &:hover {
        cursor: pointer;
    }
`
    const TextWrapper = styled.span`
        width: max-content;
        height: min-content;
    `
    
    return <Button href={link} {...props}> 
                <TextWrapper> {children} </TextWrapper>
           </Button>
    
}