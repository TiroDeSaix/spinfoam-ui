import React from "react"
import styled from 'styled-components'
import { motion } from "framer-motion"
import { system } from "styled-system"

import Container from "../Container/Container"
import ButtonGroup from "../Buttons/ButtonGroup"
import Button from "../Buttons/Button"


import NavIcon from "./NavIcon"

/*
To Do:
    "implements ButtonGroup w a Container?"

Example:

Desc:
    Takes advantage of the "Layout" component in order to implement 
    positioning of this component, and sizing as well (full page or local)

Props:

*/

const variants = {

}

export default ({w, bg, isCollapsed, p}) => {
    return (
       <Sidebar></Sidebar>
    )
}

export const Sidebar = styled(motion.div)`
   height: 100vh;

`