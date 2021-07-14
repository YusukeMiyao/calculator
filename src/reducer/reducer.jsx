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
      return operater === ""
        ? numInFront === "0"
          ? { ...state, numInFront: inputNum }
          : { ...state, numInFront: numInFront + inputNum }
        : numInBack === null
        ? { ...state, numInBack: inputNum }
        : { ...state, numInBack: numInBack + inputNum }

    case OPERATER:
      return numInFront.slice(-1) !== "."
        ? { ...state, operater: action.operater }
        : { ...state }

    case POSI_AND_NEGA:
      if (
        numInFront !== "0" &&
        numInFront.slice(-1) !== "." &&
        operater === ""
      ) {
        return { ...state, numInFront: Number(numInFront) * -1 + "" }
      } else if (
        numInBack !== null &&
        numInBack.slice(-1) !== "." &&
        numInBack !== "0"
      ) {
        return { ...state, numInBack: Number(numInBack) * -1 + "" }
      } else return { ...state }

    case ONE_HUNDREDTH:
      if (
        numInFront !== "0" &&
        numInFront.slice(-1) !== "." &&
        operater === ""
      ) {
        return { ...state, numInFront: Number(numInFront) / 100 + "" }
      } else if (
        numInBack !== null &&
        numInBack !== 0 &&
        numInBack.slice(-1) !== "."
      ) {
        return { ...state, numInBack: Number(numInBack) / 100 + "" }
      } else return { ...state }

    case DECIMAL_POINT:
      if (operater === "" && numInFront.slice(-1) !== ".") {
        return { ...state, numInFront: numInFront + "." }
      } else if (numInBack !== null && numInBack.slice(-1) !== ".") {
        return { ...state, numInBack: numInBack + "." }
      } else return { ...state }

    case CLEAR:
      if (numInFront !== "0" && operater === "") {
        let setnumInFront
        if (numInFront.length === 1) {
          setnumInFront = "0"
        } else {
          setnumInFront = numInFront.slice(0, -1)
        }
        return { ...state, numInFront: setnumInFront }
      } else if (operater !== "" && numInBack === null) {
        return { ...state, operater: "" }
      } else if (numInBack !== null) {
        let setnumInBack
        if (numInBack.length === 1) {
          setnumInBack = null
        } else {
          setnumInBack = numInBack.slice(0, -1)
        }
        return { ...state, numInBack: setnumInBack }
      } else return { ...state }

    case ALL_CLEAR:
      return {
        numInFront: "0",
        operater: "",
        numInBack: null,
      }

    case EQUAL:
      if (numInBack.slice(-1) !== ".") {
        if (numInBack !== null) {
          const setnumInFront = Number(numInFront)
          const setnumInBack = Number(numInBack)
          if (operater === "÷") {
            return {
              numInFront: setnumInFront / setnumInBack + "",
              operater: "",
              numInBack: null,
            }
          } else if (operater === "×") {
            return {
              numInFront: setnumInFront * setnumInBack + "",
              operater: "",
              numInBack: null,
            }
          } else if (operater === "-") {
            return {
              numInFront: setnumInFront - setnumInBack + "",
              operater: "",
              numInBack: null,
            }
          } else if (operater === "+") {
            return {
              numInFront: setnumInFront + setnumInBack + "",
              operater: "",
              numInBack: null,
            }
          } else return { ...state }
        }
      } else return { ...state }
      break

    default:
      throw new Error("エラー発生")
  }
}
