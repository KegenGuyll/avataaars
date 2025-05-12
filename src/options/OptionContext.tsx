import { createContext, useContext, useReducer, ReactNode } from 'react'
import Option from './Option'

export interface OptionState {
  key: string
  options: Array<string>
  defaultValue?: string
  available: number
}

export type OptionContextState = { [index: string]: OptionState }

interface OptionContextActions {
  type: 'SET_DEFAULT_VALUE' | 'SET_OPTIONS' | 'OPTION_ENTER' | 'OPTION_EXIT'
  key: string
  payload?: string | string[]
}

const OptionContext = createContext<{
  state: OptionContextState
  dispatch: React.Dispatch<OptionContextActions>
} | null>(null)

const optionReducer = (
  state: OptionContextState,
  action: OptionContextActions
): OptionContextState => {
  switch (action.type) {
    case 'SET_DEFAULT_VALUE': {
      const { key, payload } = action
      return {
        ...state,
        [key]: {
          ...state[key],
          defaultValue: payload as string,
        },
      }
    }
    case 'SET_OPTIONS': {
      const { key, payload } = action
      return {
        ...state,
        [key]: {
          ...state[key],
          options: payload as string[],
        },
      }
    }
    case 'OPTION_ENTER': {
      const { key } = action
      return {
        ...state,
        [key]: {
          ...state[key],
          available: state[key].available + 1,
        },
      }
    }
    case 'OPTION_EXIT': {
      const { key } = action
      return {
        ...state,
        [key]: {
          ...state[key],
          available: state[key].available - 1,
        },
      }
    }
    default:
      return state
  }
}

interface OptionProviderProps {
  options: Option[]
  children: ReactNode
}

export const OptionProvider: React.FC<OptionProviderProps> = ({
  options,
  children,
}: OptionProviderProps) => {
  const initialState: OptionContextState = options.reduce((acc, option) => {
    acc[option.key] = { key: option.key, options: [], available: 0 }
    return acc
  }, {} as OptionContextState)

  const [state, dispatch] = useReducer(optionReducer, initialState)

  return (
    <OptionContext.Provider value={{ state, dispatch }}>
      {children}
    </OptionContext.Provider>
  )
}

export const useOptionContext = () => {
  const context = useContext(OptionContext)
  if (!context) {
    throw new Error('useOptionContext must be used within an OptionProvider')
  }
  return context
}

export default OptionContext
