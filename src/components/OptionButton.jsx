import React from "react"
import styled from "styled-components"
import { useSetContext } from "./Context"

export const OptionButton = ({ option, action }) => {
  const context = useSetContext()
  return (
    <Button onClick={() => context.dispatch({ type: action })}>{option}</Button>
  )
}

const Button = styled.button`
  background-color: #fe9a2e;
  border: solid 1px #ed891d;
  color: #fff;
  font-size: 2em;
  text-align: center;
  border-radius: 8px;
  width: 24%;
  height: 100%;
`
