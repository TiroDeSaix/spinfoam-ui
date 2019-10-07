import React, { useContext } from "react"
import { motion } from "framer-motion"
import { ButtonContext } from "./ButtonGroup"

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
export default ({ text, link, bg, border, shadow, defaultMargin }) => {
    // Spacing will be computed using some scaling 
    //const b = border == 'rounded' ? `` : br == 'circle' ? null : null // Defaults 
    const { spacing } = useContext(ButtonContext)
    
    const bs = shadow ? `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)` : null

    const baseStyles = {
        fontSize: `22px`,
        padding: `.5em`,
        // lineHeight
        boxShadow: bs,
        margin: spacing || defaultMargin,
        
        //border: `1px solid black`,
        textDecoration: 'none',
        letterSpacing: `1px`,
        textAlign: `center`,
        textTransform: `none`,
        color: `black`,
        background: bg,
        cursor: `pointer`,
       
    }
    
    

    return (
        <motion.a href={link} style={{...baseStyles}}> {text} </motion.a>
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

