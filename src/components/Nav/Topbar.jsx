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


*/

/*

    

<Topbar sticky={true} useProgress={true} />
    
Props:
    sticky?: Boolean
    leaveOnRest?: Boolean
    useProgress?: Boolean
    background: String
    padding: Number
    font?: String

        Expose interpolated values and create variants based on the animation type, 
        The value is passed down to the respective child of the ButtonGroup within
   

    
*/

export default () => {
    return (
        <Topbar>
            
        </Topbar>
    )
}

const Topbar = styled(motion.div)`
    width: 100vw;
    height: 3em;

    background: #C6AE82;

`
