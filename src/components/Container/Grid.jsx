import React from "react"
import useMedia from "../../fx/useMedia"
import theme from "../../theme"
import styled from "styled-components"
import motion from "framer-motion"

const media = theme.media
// Implements "Stack"
/* 

Desc: 
    Will also implement minmax() with fr units


Container Props: 
    rows: Array (3 items for each breakpoint)
    columns: Array
    gap: Number
    template: Array (of Arrays, for customized Layouts)
    placeContent: String
    placeItems: String
    w: Number (width)
    h: Number (height)

Cell Props:
    size: Object ({sm: , md: , lg: })
    fontSize: Number (line height is scale invariant to font-size)
    placeSelf: String


*/

export default ({   rows = {sm: auto, md: auto, lg: auto}, 
                    colmuns = {sm: 1, md: 2, lg: 3}, 
                    gap, 
                    template, 
                    placeContent, 
                    placeItems,
                    w,
                    h
                }) => {
                    const media = useMedia([ `(min-width: ${breakpoints[0]}`,
                          `(min-width: ${breakpoints[1]}`, 
                          `(min-width: ${breakpoints[2]}`,
                          `(min-width: ${breakpoints[3]}`
                        ], 
                        [0, 8, 32, 128],
                        8
                      )
                }


const Grid = styled(motion.div)`
    display: grid;
    place-content: ${({placeContent}) => placeContent};
    place-items: ${({placeItems}) => placeItems};
    grid-template-areas: ${({template}) => template.flat().join(' ')};
    grid-auto-rows: max-content;
    grid-template



`