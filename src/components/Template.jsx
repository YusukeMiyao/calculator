import React from "react"
import styled from "styled-components"
import {
  ALL_CLEAR,
  CLEAR,
  DECIMAL_POINT,
  EQUAL,
  ONE_HUNDREDTH,
  OPERATER,
  POSI_AND_NEGA,
} from "../utils/constant"
import { useSetContext } from "./Context"
import { NumButton } from "./NumButton"
import { OperaterButton } from "./OperaterButton"
import { OptionButton } from "./OptionButton"

export const Template = () => {
  const context = useSetContext()
  const state = context.state

  return (
    <Wrapper>
      <NumButton num={"0"} />
      <NumButton num={"1"} />
      <NumButton num={"2"} />
      <NumButton num={"3"} />
      <NumButton num={"4"} />
      <NumButton num={"5"} />
      <NumButton num={"6"} />
      <NumButton num={"7"} />
      <NumButton num={"8"} />
      <NumButton num={"9"} />
      <OptionButton option={"%"} action={ONE_HUNDREDTH} />
      <OptionButton option={"+/-"} action={POSI_AND_NEGA} />
      <OptionButton option={"."} action={DECIMAL_POINT} />
      <OperaterButton operater={"÷"} action={OPERATER} />
      <OperaterButton operater={"×"} action={OPERATER} />
      <OperaterButton operater={"-"} action={OPERATER} />
      <OperaterButton operater={"+"} action={OPERATER} />
      <OptionButton option={"="} action={EQUAL} />
      <OptionButton option={"C"} action={CLEAR} />
      <OptionButton option={"AC"} action={ALL_CLEAR} />
      <div>{state.numInFront}</div>
      <div>{state.operater}</div>
      <div>{state.numInBack}</div>
    </Wrapper>
  )
}

const Wrapper = styled.div``
