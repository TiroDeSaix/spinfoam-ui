import React, { Children, isValidElement, cloneElement, useState, useEffect, useCallback } from "react"

//EXAMPLE:  const newChildren = useRadioList(children, allowMultiple=false)

export default (originalChildren, allowMultiple = true) => {
//////////////////////////////////////////////////
// Initialize radioList values

  const [values, setValues] = useState([]) //Array(originalChildren.length).fill(false)
  const [newChildren, setChildren] = useState(originalChildren);
 /////////////////////////////////////////////////

  useEffect(() => {
   
    setChildren(newChildren => Children.map(newChildren, (child, idx) => {
      if (!isValidElement(child)) {return}

      if (child.props.isSelected && child.props.value) {
        setValues([...values, chid.props.value])
      }

      if (!allowMultiple) {

      }

      return cloneElement(child, {isSelected:  })
    }));
    
  }, [values])


///////////////////////////////////////////////////

// Modifies the list that keeps track of what indexes are activ

  return newChildren

}
