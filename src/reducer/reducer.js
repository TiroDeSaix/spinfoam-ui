import React, { useState, useReducer, useContext } from "react"
import { actions } from "./constants"


const initState = {
    byIds: {}
}

export default (state = initState, action) => {
    const { dest, payload } = action
    switch (action.type) {
        case actions.add: {
            // check the type of payload 
            state[dest] = state[dest] ? [...state[dest], payload] : [payload]
            return {
                ...state,
                byIds: {
                    [payload.id]: {
                        ...payload
                    }
                },
            }
        }
        case actions.remove: {
            
        }
        case actions.update: {

        }
        case actions.toggle: {

        }
    }
}