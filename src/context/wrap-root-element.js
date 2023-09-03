import * as React from "react"
import { CartProvider } from "./cart"

const WrapRootElement = ({ children }) => (
  <CartProvider>{children}</CartProvider>
)

export default WrapRootElement
