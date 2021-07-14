import React from "react"
import styled from "styled-components"
import { useSetContext } from "./Context"

export const OperaterButton = ({ operater, action }) => {
  const context = useSetContext()
  return (
    <Button onClick={() => context.dispatch({ type: action, operater })}>
      {operater}
    </Button>
  )
}

const Button = styled.button``
