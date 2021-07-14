state = {
  frontNum: 0,
  operater: "",
  backNum: null,
}

export const Reducer = (state, action) => {
  switch (action.type) {
    case "inputNum":
      return operater === ""
        ? { ...state, frontNum: action.inputNum }
        : { ...state, backNum: action.inputNum }

    case "operater":
      return { ...state, operater: action.operater }

    case "posiAndNega":
      if (frontNum === 0 && operater === "") {
        return { ...state, frontNum: frontNum * -1 }
      } else if (backNum !== 0) {
        return { ...state, backNum: backNum * -1 }
      } else return

    case "oneHundredth":
      if (frontNum === 0 && operater === "") {
        return { ...state, frontNum: frontNum / 100 }
      } else if (backNum !== 0) {
        return { ...state, backNum: backNum / 100 }
      } else return

    case "decimalPoint":
      if (operater === "") {
        return { ...state, frontNum: frontNum }
      } else if (backNum !== 0) {
        return { ...state, backNum: backNum }
      } else return

    case "clear":
      if (frontNum !== 0 && operater === "") {
        const frontNumStr = `${frontNum}`
        return { ...state, frontNum: Number(frontNumStr.slice(0, -1)) }
      } else if (operater !== "" && backNum === null) {
        return { ...state, operater: "" }
      } else {
        //(backNum !== null) {
        const backNumStr = `${backtNum}`
        let setBackNum = Number(backNumStr.slice(0, -1))
        setBackNum === 0 ? (setBackNum = null) : setBackNum
        return { ...state, backNum: setBackNum }
      }

    case "allClear":
      return {
        frontNum: 0,
        operater: "",
        backNum: null,
      }

    case "equal":
      return { frontNum: frontNum + operater + backNum }

    default:
      throw new Error("エラー発生")
  }
}
