import React, { useContext, Children, cloneElement } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import theme from "../../themes"
import Button from "./Button";
import useMedia from "../../fx/useMedia"

/*
    interface ITopbar {
    links: {

    }
}
TO DO:
    
    Will add functionality for nested ButtonGroups (In the examples of Menus, Drop Downs, etc...)
    Nested Button Groups will treat

Example:
    <ButtonGroup links={links} align="left" gap={3} padding={2} direction="x"> 

Desc: 
     ButtonGroup simply creates a base range of the inner buttons' dimensions
     and flex direction.
     Used in:
        Sidebar
        Topbar

The "gap" between child buttons will rely on the width/height of the outer
container and use the "justify-content" attribute for spacing 

How can width be specified based on width of children?

Props: 
    links: Array
    justify: String ("left" | "right" | "fill")
      Justify works mostly with nested Button Groups
    
    gapX: Number
    padding: Number [on a scale of tightness]

    direction: String ("x" | "y")

    h: Number (height)
    w: Number (width)
      All top level Button Group containers should have specified dimensions 
      If width or height is of type Array, call useMedia 

    flex:
      use minmax()?
    
*/
////////////////////////////////////
export const ButtonContext = React.createContext({spacing: ""})
////////////////////////////////////

const defaultProps = {

}

export default ({ children, 
                  direction, 
                  gap, 
                  p, 
                  justify = `center`, 
                  w, 
                  h,
                  m,
                  placing,
                  flex,
                }) => {

  const fd = direction == 'x' ? 'row' : direction == 'y' ? 'column' : null // Pass Defaults
  const spacing = direction == 'x' ? `0 ${gap}` : direction == 'y' ? `${gap} 0` : `0 ${gap}` // Pass Defaults
  

  //const 
  // parse such that it can use a passed in unit value on a given scale even if an int is passed 

  const baseStyles = {
    display: `inline-flex`,
    placeContent: placing,

    padding: p,
    width: w,
    height: h,
    margin: m,
    flexDirection: fd,
  }

  return (
    <ButtonContext.Provider value={{ spacing }}>
      <motion.div style={{...baseStyles}}>
        {children}
      </motion.div>
    </ButtonContext.Provider>
  );
};