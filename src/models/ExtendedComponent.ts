import React from "react"

type ExtendedComponent<P = Record<string, unknown>> = React.FC<P> & {
  children?: React.ReactNode
  optionValue: string
  displayName?: string
}

export type {
  ExtendedComponent
}
