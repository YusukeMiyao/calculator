import React, { useContext, useReducer, useState } from "react"
import { Reducer } from "./reducer/reducer"

export const AllContext = React.createContext()
export const useAllContext = () => useContext(AllContext)

const defaultState = {
  frontNum: 0,
  operater: "",
  backNum: null,
}

export const setContext = createContext({
  state: defaultState,
  dispatch(_) {
    console.warn("Context.Provider外からの呼び出し")
  },
})
// export const useSetContext = () => useContext(Context)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, defaultState)
  const value = { state, dispatch }

  return <Context.Provider value={value}>{children}</Context.Provider>
}
