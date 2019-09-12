import React from "react"
import styled from 'styled-components'
import { motion } from "framer-motion"

export default () => {
    return (
        <Button> </Button>
    )
}

export const Button = styled(motion.div)`
    width: 5em;
    height: 3em;

    background: tomato;
    color: black;

    cursor: pointer;

`