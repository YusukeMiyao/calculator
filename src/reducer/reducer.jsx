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

export const Reducer = (state, action) => {
  const numInFront = state.numInFront
  const numInBack = state.numInBack
  const inputNum = action.inputNum
  const operater = state.operater

  switch (action.type) {
    case INPUT_NUM:
      if (
        state.countNumInFront < 11 ||
        (operater !== "" && state.countNumInBack < 11)
      ) {
        return operater === ""
          ? numInFront === "0"
            ? { ...state, numInFront: inputNum }
            : {
                ...state,
                numInFront: numInFront + inputNum,
                countNumInFront: numInFront.length,
              }
          : {
              ...state,
              numInBack: numInBack + inputNum,
              countNumInBack: numInBack.length,
            }
      } else {
        return { ...state, countLimit: true }
      }

    case OPERATER:
      return numInFront.slice(-1) !== "." &&
        numInFront.indexOf("e") === -1 &&
        operater === ""
        ? { ...state, operater: action.operater, countLimit: false }
        : { ...state }

    case POSI_AND_NEGA:
      if (
        numInFront !== "0" &&
        numInFront.slice(-1) !== "." &&
        operater === ""
      ) {
        return {
          ...state,
          numInFront: Number(numInFront) * -1 + "",
          countLimit: false,
        }
      } else if (
        numInBack !== "" &&
        numInBack.slice(-1) !== "." &&
        numInBack !== "0"
      ) {
        return {
          ...state,
          numInBack: Number(numInBack) * -1 + "",
          countLimit: false,
        }
      } else return { ...state }

    case ONE_HUNDREDTH:
      if (
        numInFront.slice(2, 3) !== "." ||
        (operater !== "" && numInBack.slice(2, 3) !== ".")
      ) {
        if (
          numInFront !== "0" &&
          numInFront.slice(-1) !== "." &&
          operater === ""
        ) {
          return {
            ...state,
            numInFront: Number(numInFront) / 100 + "",
            countLimit: false,
          }
        } else if (
          numInBack !== "" &&
          numInBack !== 0 &&
          numInBack.slice(-1) !== "."
        ) {
          return {
            ...state,
            numInBack: Number(numInBack) / 100 + "",
            countLimit: false,
          }
        } else return { ...state }
      } else return { ...state, countLimit: true }

    case DECIMAL_POINT:
      if (
        state.countNumInFront < 11 ||
        (operater !== "" && state.countNumInBack < 11)
      ) {
        if (operater === "" && numInFront.slice(-1) !== ".") {
          return { ...state, numInFront: numInFront + "." }
        } else if (numInBack !== "" && numInBack.slice(-1) !== ".") {
          return { ...state, numInBack: numInBack + "." }
        } else return { ...state }
      } else return { ...state }

    case CLEAR:
      if (numInFront !== "0" && operater === "") {
        let setnumInFront
        if (numInFront.length === 1) {
          setnumInFront = "0"
        } else {
          setnumInFront = numInFront.slice(0, -1)
        }
        return { ...state, numInFront: setnumInFront, countLimit: false }
      } else if (operater !== "" && numInBack === "") {
        return { ...state, operater: "", countLimit: false }
      } else if (numInBack !== "") {
        return {
          ...state,
          numInBack: numInBack.slice(0, -1),
          countLimit: false,
        }
      } else return { ...state }

    case ALL_CLEAR:
      return {
        numInFront: "0",
        operater: "",
        numInBack: "",
        countNumInFront: 1,
        countNumInBack: 0,
        countLimit: false,
      }

    case EQUAL:
      if (numInBack.slice(-1) !== ".") {
        if (numInBack !== "") {
          const setnumInFront = Number(numInFront)
          const setNumInBack = Number(numInBack)
          if (operater === "÷") {
            return {
              numInFront: setnumInFront / setNumInBack + "",
              operater: "",
              numInBack: "",
              countNumInFront: numInFront.length,
              countNumInBack: 0,
              countLimit: false,
            }
          } else if (operater === "×") {
            return {
              numInFront: setnumInFront * setNumInBack + "",
              operater: "",
              numInBack: "",
              countNumInFront: numInFront.length,
              countNumInBack: 0,
              countLimit: false,
            }
          } else if (operater === "-") {
            return {
              numInFront: setnumInFront - setNumInBack + "",
              operater: "",
              numInBack: "",
              countNumInFront: numInFront.length,
              countNumInBack: 0,
              countLimit: false,
            }
          } else if (operater === "+") {
            return {
              numInFront: setnumInFront + setNumInBack + "",
              operater: "",
              numInBack: "",
              countNumInFront: numInFront.length,
              countNumInBack: 0,
              countLimit: false,
            }
          } else return { ...state }
        }
      } else return { ...state }
      break

    default:
      throw new Error("エラー発生")
  }
}
