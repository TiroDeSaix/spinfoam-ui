import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import useRadioList from "../../fx/useRadioList"
import Dropdown from "./Dropdown"
import Button from "./Button"


export default ({ options, children }) => {

    const [active, setActive] = useState(false)
    const items = options.map((option, idx) => <Button payload={idx}>{option}</Button>)

    //const { toggle, newChildren } = useRadioList(options) || useRadioList(children)


    return  <Select onClick={() => setActive(true)}>
                <Dropdown items={options}>
                </Dropdown>
                <input type="text" value={[]} />
            </Select>
}

const Select = styled(motion.div)`
    border: 2px solid black;
    border-radius: 20%;
`