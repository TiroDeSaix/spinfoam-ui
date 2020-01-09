import React, { useContext, useState, useEffect } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { ButtonContext } from "./ButtonGroup"
//import { dispatch } from "../../reducer"

//const {buttons} = useContext(ButtonContext)

/*

To Do:
    Implement line height based on font-size
    The sizing scale should determine:
        padding 
        line-height
        font-size
        
Desc:


Example:
    <Button />

Props:
    p: Number
    bg: String

    w?: Number (gets passed in as "max-width")
    border: String ("rounded" | "circle" | "default")
    size?: String
    link: String
    text: String

    spacing should be declared with parent prop and passed down to margin

*/
export default ({ text, link, bg, shadow, id}) => {
    // Spacing will be computed using some scaling 
    //const b = border == 'rounded' ? `` : br == 'circle' ? null : null // Defaults 
    const [active, setActive] = useState(false)
    const { spacing } = useContext(ButtonContext)
    
    const bs = shadow ? `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)` : null

    const baseStyles = {
        // lineHeight
        boxShadow: bs,
        margin: spacing,
        
        //border: `1px solid black`,
    }
    /*
    useEffect(() => {
        console.log(active)
    }, [active])
    */

    
    return (
        <Button     //onClick={() => dispatch({type: "toggle", dest: id})} 
                    href={link} 
                    style={{...baseStyles}}
                    //isSelected={buttons.id.isSelected}
        > 
            {text} 
        </Button>
    )
}

// CSS Props to implement into a convention / theme 
// (as in, rendering any value to some scale using custom units)

/*

padding
font-size
font-family
line-height
background



 background: #E0DDCF;
    color: black;
    cursor: pointer;
    font-size: 22px;
    line-height: 5px;
    text-transform: none;
    margin: 0 1em;
    padding: 1em;


*/
const Button = styled(motion.a)`
    font-size: 22px;
    padding: .5em;
    text-decoration: none;
    letter-spacing: 1px;
    text-align: center;
    text-transform: none;
    color: black;
    background: ${({bg}) => bg}
`
