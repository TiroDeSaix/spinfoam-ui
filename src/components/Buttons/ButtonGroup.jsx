import React, { useContext, Children, cloneElement } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import theme from "../../theme"
import Button from "./Button";
import useMedia from "../../fx/useMedia"
import uuid from "uuid"

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
export const ButtonContext = React.createContext({buttons: []})
////////////////////////////////////

const defaultProps = {

}

export default ({children, ...props}) => {

  if (props.connect) {
    Children.map(children, (child, i) => {
      let uid = uuid()
      ButtonContext.buttons.push({button: child, isSelected: false, id: uid})
      cloneElement(child, {id: uid})
    })
  }
  

  const fd = props.direction == 'x' ? 'row' : props.direction == 'y' ? 'column' : null // Pass Defaults
  const spacing = props.direction == 'x' ? `0 ${props.gap}` : props.direction == 'y' ? `${props.gap} 0` : `0 ${props.gap}` // Pass Defaults
  

  //const 
  // parse such that it can use a passed in unit value on a given scale even if an int is passed 

  const custom = {
    flexDirection: fd
  }

  return (
    <ButtonContext.Provider value={{ spacing }}>
      <ButtonGroup style={{...custom}} {...props}>
        {props.children}
      </ButtonGroup>
    </ButtonContext.Provider>
  );
};

const ButtonGroup = styled(motion.div)`
  display: flex;
  place-content: center stretch;
  place-items: center center;
  width: ${({w}) => w};
  padding: ${({p}) => p};
  transform: translateY(${({offset}) => offset});
  background: ${({bg}) => bg}
  height: 1em;
  border: 1px solid black;
  overflow: hidden;
`

/*
<ButtonGroup>
  <Button onClick={() => dispatch({type: 'add', dest: 'counter1', payload: 1 })}
  <Button onClick={e => dispatch({type: 'add', dest: 'list3', payload: e.target.value})}

</ButtonGroup>





*/