import React, {useState} from "react"
import styled from 'styled-components'
import { motion } from "framer-motion"
import { system } from "styled-system"

import Button from "./Button"
import ButtonGroup from "./ButtonGroup"
import useRadioList from "../../fx/useRadioList"


/*
To Do:

Example:

Desc:

Props:
    gap: Number
    isActive: Boolean
    hover: Boolean
    items: Object

*/

const variants = {
    init: {
        opacity: 0,
        height: 0,
    },
    active: {
        height: `12em`,
        opacity: 1
    },
    transition: {
        type: "spring",
        stiffness: 10,
        staggerChildren: 1.2,
        staggerDirection: -1
      }
    }

export default ({items, children, w, h}) => {
    const custom = {
        transform: `translateY(-1em)`

    }

    const [active, setActive] = useState(false)

    const buttons = items.map((item) => <Button link={item.link} text={item.text} />)
    const radioButtons = useRadioList(buttons)
    return (
            <Dropdown onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
                <ButtonGroup    initial="init"
                                animate={active ? "active" : "init"}
                                variants={variants}
                                direction="y"
                                w="8em"
                                offset="2em"
                                bg="white"
                > 
                    {radioButtons}
                </ButtonGroup>
            </Dropdown>
    
    )
}

const Dropdown = styled(motion.div)`
  border: 1px solid black;
  dispay: flex;
  position: relative;
  width: max-content;
  height: 3em;
  padding: 1em;
  margin: 1em;
  
  &:hover {
    cursor: pointer;
  }
  

`