import React, { useContext } from "react"
import styled from "styled-components"
import { setContext } from "./components/Context"

function App() {
  const context = useContext(setContext)
  const state = context.state
  const dipatch = context.dipatch()

  return (
    <Wrapper>
      <NumButton onClick={dispatch()}>1</NumButton>
      <NumButton>2</NumButton>
      <NumButton>3</NumButton>
      <NumButton>4</NumButton>
      <NumButton>5</NumButton>
      <NumButton>6</NumButton>
      <NumButton>7</NumButton>
      <NumButton>8</NumButton>
      <NumButton>9</NumButton>
      <NumButton>.</NumButton>
      <OperatorButton>÷</OperatorButton>
      <OperatorButton>×</OperatorButton>
      <OperatorButton>-</OperatorButton>
      <OperatorButton>+</OperatorButton>
      <EqualButton>=</EqualButton>
      <OperatorButton>C</OperatorButton>
      <OperatorButton>AC</OperatorButton>
    </Wrapper>
  )
}

const Wrapper = styled.div``
const NumButton = styled.button``
const OperatorButton = styled.button``
const EqualButton = styled.button``

export default App
