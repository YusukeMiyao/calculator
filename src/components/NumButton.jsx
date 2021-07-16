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

const Button = styled.button`
  background-color: #dcdcdc;
  border: solid 1px #cbcbcb;
  color: #333;
  font-size: 2em;
  text-align: center;
  border-radius: 8px;
  width: 24%;
  height: 100%;
`
