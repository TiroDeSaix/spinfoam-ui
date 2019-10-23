/* 
  styled-system's Prop Alias seems contrived
  instead will implement aliases by passing down props
  from an anon function to a returned styled component
*/
import React, { useContext } from "react"
import useMedia from "./fx/useMedia"


const font = [12, 14, 16, 24, 32, 48, 64, 96, 128]
const space = [ 0, 4, 8, 16, 32, 64, 128, 256]

export const breakpoints = ['40em', '52em', '64em', '80em']

export default {
    color: {
        black: '#000e1a',
        white: '#fff',
        blue: '#007ce0',
        navy: '#004175',
    },
    size: {
      font: [12, 14, 16, 24, 32, 48, 64, 96, 128],
      space: [ 0, 4, 8, 16, 32, 64, 128, 256]
    },
    media: {
     
    },
    Accordion: {
      styleVariants: {

      },
      actionVariants: {

      }
    },
    Button: {
      actionVariants: {

      },
      motionVariants: {

      }
    },

}
