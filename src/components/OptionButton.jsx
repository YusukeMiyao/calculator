import React from "react"
import styled from "styled-components"
import { useSetContext } from "./Context"

export const OptionButton = ({ option, action, main, border }) => {
  const context = useSetContext()
  return (
    <Button
      onClick={() => context.dispatch({ type: action })}
      theme={{ main, border }}
    >
      {option}
    </Button>
  )
}

const Button = styled.button`
  background-color: ${(props) => props.theme.main};
  border: solid 1px ${(props) => props.theme.border};
  color: ${(props) => (props.theme.main !== "#dcdcdc" ? "#fff" : "#333")};
  font-size: 2em;
  text-align: center;
  border-radius: 8px;
  width: 24%;
  height: 100%;
`
