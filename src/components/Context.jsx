import React, { useContext, useReducer } from "react"
import { Reducer } from "../reducer/reducer"
import { INPUT_NUM } from "../utils/constant"

const defaultState = {
  numInFront: "0",
  operater: "",
  numInBack: null,
}

export const SetContext = React.createContext({})
export const useSetContext = () => useContext(SetContext)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, defaultState)
  const onNumClick = (num) => ({
    type: INPUT_NUM,
    inputNum: num,
  })
  const value = { state, dispatch, onNumClick }

  return <SetContext.Provider value={value}>{children}</SetContext.Provider>
}
