import React from 'react'
import { GlobalContext } from './GlobalContext'

const GlobalStates = (props) => {
  return (
    <GlobalContext.Provider value={{ }}>
      {props.children}
    </GlobalContext.Provider>  )
}

export default GlobalStates