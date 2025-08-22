import * as React from "react"
import { AnimatePresence } from "framer-motion"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import "./modules/analytics/snippet"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AnimatePresence>
      <App />
    </AnimatePresence>
  </React.StrictMode>
)
