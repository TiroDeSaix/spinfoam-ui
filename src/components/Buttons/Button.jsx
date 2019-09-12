import React from "react"
import styled from 'styled-components'
import { motion } from "framer-motion"

/*

To Do:

Desc:

Example:
    <Button />

Props:
    padding: String
    bg: String
    lh: Number  (line-height)

*/
export default () => {
    return (
        <Button> </Button>
    )
}

export const Button = styled(motion.div)`
    flex: 1;

    background: tomato;
    color: black;

    cursor: pointer;

`