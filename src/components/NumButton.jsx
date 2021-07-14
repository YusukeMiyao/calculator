import React from "react"
import styled from "styled-components"
import { useSetContext } from "./Context"

export const NumButton = ({ num }) => {
  const context = useSetContext()
  return (
    <Button onClick={() => context.dispatch(context.onNumClick(num))}>
      {num}
    </Button>
  )
}

const Button = styled.button``
