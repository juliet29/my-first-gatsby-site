import React from "react"
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme"

export default ({ element }) => {
    return <ChakraProvider  theme={theme}>{element}</ChakraProvider>
  }