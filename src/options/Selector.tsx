import { useContext, useEffect } from 'react'
import Option from './Option'
import OptionContext from './OptionContext'
import { ExtendedComponent } from '../models/ExtendedComponent'
import React from 'react'

function getComponentOptionValue(component: ExtendedComponent) {
  const optionValue = component.optionValue
  if (!optionValue) {
    throw new Error(`optionValue should be provided for ${component}`)
  }
  return optionValue
}

export interface Props {
  option: Option
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultOption: ExtendedComponent<any>
  children?: React.ReactNode
}

const Selector: React.FC<Props> = ({
  option,
  defaultOption,
  children,
}: Props) => {
  const optionContext = useContext(OptionContext)

  if (!optionContext) {
    throw new Error('OptionContext is not available')
  }

  const defaultValue =
    typeof defaultOption === 'string'
      ? defaultOption
      : getComponentOptionValue(defaultOption)
  optionContext.dispatch({
    type: 'SET_DEFAULT_VALUE',
    key: option.key,
    payload: defaultValue,
  })

  useEffect(() => {
    optionContext.dispatch({ type: 'OPTION_ENTER', key: option.key })

    return () => {
      optionContext.dispatch({ type: 'OPTION_EXIT', key: option.key })
    }
  }, [option.key, optionContext])

  useEffect(() => {
    const values = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return getComponentOptionValue(child.type as ExtendedComponent)
      }
      throw new Error('Invalid child element')
    })

    if (new Set(values).size !== values?.length) {
      throw new Error('Duplicate values')
    }

    optionContext.dispatch({
      type: 'SET_OPTIONS',
      key: option.key,
      payload: values,
    })
  }, [children, option.key, optionContext])

  let result: React.ReactNode | null = null
  React.Children.forEach(children, (child) => {
    if (
      React.isValidElement(child) &&
      getComponentOptionValue(child.type as ExtendedComponent) === defaultValue
    ) {
      result = child
    }
  })

  return <>{result}</>
}

export default Selector
