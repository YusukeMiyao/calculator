import React, { useContext } from "react"
import styled from "styled-components"
import {
  ALL_CLEAR,
  CLEAR,
  DECIMAL_POINT,
  EQUAL,
  INPUT_NUM,
  ONE_HUNDREDTH,
  OPERATER,
  POSI_AND_NEGA,
} from "../utils/constant"
import { useSetContext } from "./Context"

export const Template = () => {
  const context = useSetContext()
  const state = context.state
  const dispatch = context.dispatch

  return (
    <Wrapper>
      <NumButton
        onClick={() =>
          dispatch({
            type: INPUT_NUM,
            inputNum: "0",
          })
        }
      >
        0
      </NumButton>
      <NumButton
        onClick={() =>
          dispatch({
            type: INPUT_NUM,
            inputNum: "1",
          })
        }
      >
        1
      </NumButton>
      <NumButton
        onClick={() =>
          dispatch({
            type: INPUT_NUM,
            inputNum: "2",
          })
        }
      >
        2
      </NumButton>
      <NumButton
        onClick={() =>
          dispatch({
            type: INPUT_NUM,
            inputNum: "3",
          })
        }
      >
        3
      </NumButton>
      <NumButton
        onClick={() =>
          dispatch({
            type: INPUT_NUM,
            inputNum: "4",
          })
        }
      >
        4
      </NumButton>
      <NumButton
        onClick={() =>
          dispatch({
            type: INPUT_NUM,
            inputNum: "5",
          })
        }
      >
        5
      </NumButton>
      <NumButton
        onClick={() =>
          dispatch({
            type: INPUT_NUM,
            inputNum: "6",
          })
        }
      >
        6
      </NumButton>
      <NumButton
        onClick={() =>
          dispatch({
            type: INPUT_NUM,
            inputNum: "7",
          })
        }
      >
        7
      </NumButton>
      <NumButton
        onClick={() =>
          dispatch({
            type: INPUT_NUM,
            inputNum: "8",
          })
        }
      >
        8
      </NumButton>
      <NumButton
        onClick={() =>
          dispatch({
            type: INPUT_NUM,
            inputNum: "9",
          })
        }
      >
        9
      </NumButton>
      <OperatorButton onClick={() => dispatch({ type: ONE_HUNDREDTH })}>
        %
      </OperatorButton>
      <OperatorButton onClick={() => dispatch({ type: POSI_AND_NEGA })}>
        +/-
      </OperatorButton>
      <OperatorButton onClick={() => dispatch({ type: DECIMAL_POINT })}>
        .
      </OperatorButton>
      <OperatorButton
        onClick={() => dispatch({ type: OPERATER, operater: "÷" })}
      >
        ÷
      </OperatorButton>
      <OperatorButton
        onClick={() => dispatch({ type: OPERATER, operater: "×" })}
      >
        ×
      </OperatorButton>
      <OperatorButton
        onClick={() => dispatch({ type: OPERATER, operater: "-" })}
      >
        -
      </OperatorButton>
      <OperatorButton
        onClick={() => dispatch({ type: OPERATER, operater: "+" })}
      >
        +
      </OperatorButton>
      <EqualButton onClick={() => dispatch({ type: EQUAL })}>=</EqualButton>
      <OperatorButton onClick={() => dispatch({ type: CLEAR })}>
        C
      </OperatorButton>
      <OperatorButton onClick={() => dispatch({ type: ALL_CLEAR })}>
        AC
      </OperatorButton>
      <div>{state.frontNum}</div>
      <div>{state.operater}</div>
      <div>{state.backNum}</div>
    </Wrapper>
  )
}

const Wrapper = styled.div``
const NumButton = styled.button``
const OperatorButton = styled.button``
const EqualButton = styled.button``
