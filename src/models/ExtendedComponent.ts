import React from "react"

interface ExtendedComponent<P = Record<string, unknown>> extends React.FC<P> {
  optionValue: string
  displayName?: string
}

export type {
  ExtendedComponent
}
