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
  return (
    <Wrapper>
      <CalculatorWrapper>
        {context.countLimit === true ? (
          <ErrorWrapper>桁数制限</ErrorWrapper>
        ) : (
          <ErrorWrapper></ErrorWrapper>
        )}
        {/* <Form> */}
        <Window>
          <ShowNum>
            {context.numInFront}
            {context.operater}
            {context.numInBack}
          </ShowNum>
        </Window>
        {/* </Form> */}
        <Form>
          <OptionButton
            option={"AC"}
            action={ALL_CLEAR}
            main={"#fe9a2e"}
            border={"#ed891d"}
          />
          <OptionButton
            option={"+/-"}
            action={POSI_AND_NEGA}
            main={"#fe9a2e"}
            border={"#ed891d"}
          />
          <OptionButton
            option={"%"}
            action={ONE_HUNDREDTH}
            main={"#fe9a2e"}
            border={"#ed891d"}
          />
          <OperaterButton operater={"÷"} action={OPERATER} />
        </Form>
        <Form>
          <NumButton num={"7"} />
          <NumButton num={"8"} />
          <NumButton num={"9"} />
          <OperaterButton operater={"×"} action={OPERATER} />
        </Form>
        <Form>
          <NumButton num={"4"} />
          <NumButton num={"5"} />
          <NumButton num={"6"} />
          <OperaterButton operater={"-"} action={OPERATER} />
        </Form>
        <Form>
          <NumButton num={"1"} />
          <NumButton num={"2"} />
          <NumButton num={"3"} />
          <OperaterButton operater={"+"} action={OPERATER} />
        </Form>
        <Form>
          <NumButton num={"0"} />
          <OptionButton
            option={"."}
            action={DECIMAL_POINT}
            main={"#dcdcdc"}
            border={"#cbcbcb"}
          />
          <OptionButton
            option={"C"}
            action={CLEAR}
            main={"#fe9a2e"}
            border={"#ed891d"}
          />
          <OptionButton
            option={"="}
            action={EQUAL}
            main={"#ff4400"}
            border={"#ee3300"}
          />
        </Form>
      </CalculatorWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 260px;
  height: 420px;
  background-color: #eee;
  border-radius: 8px;
  padding: 3% 3% 3% 3%;
  margin: 0 auto;
`
const CalculatorWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex-flow: column;
  justify-content: space-between;
  display: flex;
  /* margin-top: 10%; */
`
const ErrorWrapper = styled.div`
  width: 100%;
  height: 6%;
  font-size: 1.2em;
  color: #ee3300;
`

const Form = styled.div`
  width: 100%;
  height: 14.5%;
  display: flex;
  justify-content: space-between;
`
const Window = styled.div`
  width: 100%;
  height: 18%;
  text-align: right;
  background-color: #888;
  border: solid 1px #888;
  color: #fff;
  border-radius: 8px;
`

const ShowNum = styled.div`
  font-size: ${(props) =>
    props.children[0].length +
      props.children[1].length +
      props.children[2].length <
    13
      ? "2em"
      : "1.8em"};
  overflow-wrap: ${(props) =>
    props.children[0].length + props.children[1] + props.children[2].length < 13
      ? ""
      : "anywhere"};
  height: 100%;
`
