import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components" 

import ButtonGroup from "../Buttons/ButtonGroup"

// Will Convert to Typescript 

// import HorizontalBG from "../ButtonGroup/"
/*
const Topbar: React.FC = () => {
    return (
    <>
    </>
    
    )
}

interface ITopbar {
    links: {
        left:  {
            Name: String,
            Name: String,
            Name: String,
        }

    }
    
}

*/

/*
    There is the option to hard code the ButtonGroups

    <Topbar sticky={true} useProgress={true} />

    links: Array => Takes in list of objects that are computed into ButtonGroups
*/

export default ({links}) => {
    let btnGroups = links.map(btnGroup => {
        
    })

    return (
        <Topbar>
            
        </Topbar>
    )
}

const Topbar = styled(motion.div)`
    width: 100%;
    height: 3em;

    background: 

`
