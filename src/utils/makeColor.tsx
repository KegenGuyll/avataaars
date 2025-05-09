import { ExtendedComponent } from '../models/ExtendedComponent'

export interface Props {
  maskID: string
}

function makeColor(name: string, color: string, id: string) {
  const ColorComponent: ExtendedComponent<Props> = (props) => {
    // eslint-disable-next-line react/prop-types
    const { maskID } = props as Props
    return (
      <g id={id} mask={`url(#${maskID})`} fill={color}>
        <g transform='translate(-32.000000, 0.000000)' id='Color'>
          <rect x='0' y='0' width='264' height='244' />
        </g>
      </g>
    )
  }
  ColorComponent.optionValue = name
  ColorComponent.displayName = name
  return ColorComponent
}

export default makeColor
