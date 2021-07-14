import React from "react"
import styled from "styled-components"
import { useSetContext } from "./Context"

export const OptionButton = ({ option, action }) => {
  const context = useSetContext()
  return (
    <Button onClick={() => context.dispatch({ type: action })}>{option}</Button>
  )
}

const Button = styled.button``
