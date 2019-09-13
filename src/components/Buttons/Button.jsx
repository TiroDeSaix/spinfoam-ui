import React from "react"
import styled from 'styled-components'
import { space } from "styled-system"
import { motion } from "framer-motion"

/*

To Do:
    Implement line height based on font-size


Desc:


Example:
    <Button />

Props:
    p: Number
    bg: String
    w?: Number (gets passed in as "max-width")
    br: String ("rounded" | "circle")
    size?: String


*/
export default ({children}) => {
    return (
        <Button m={[2, 4, 8]}> {children} </Button>
    )
}

export const Button = styled(motion.div)`
    flex: 1;
    height: 90%;
    text-align: center;

    background: transparent;
    color: black;

    cursor: pointer;


    font-size: 22px;
    line-height: 36px;
`