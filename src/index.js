import React from "react"
import ReactDOM from "react-dom"
import { Template } from "./components/Template"
import { ContextProvider } from "./components/Context"

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Template />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
