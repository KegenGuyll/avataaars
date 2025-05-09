import { HatColorOption, Selector } from '../../options'
import makeColor from '../../utils/makeColor'

export interface Props {
  maskID: string
}

const id = 'Color/Palette/Gray-01'

const Black = makeColor('Black', '#262E33', id)
const Blue01 = makeColor('Blue01', '#65C9FF', id)
const Blue02 = makeColor('Blue02', '#5199E4', id)
const Blue03 = makeColor('Blue03', '#25557C', id)
const Gray01 = makeColor('Gray01', '#E6E6E6', id)
const Gray02 = makeColor('Gray02', '#929598', id)
const Heather = makeColor('Heather', '#3C4F5C', id)
const PastelBlue = makeColor('PastelBlue', '#B1E2FF', id)
const PastelGreen = makeColor('PastelGreen', '#A7FFC4', id)
const PastelOrange = makeColor('PastelOrange', '#FFDEB5', id)
const PastelRed = makeColor('PastelRed', '#FFAFB9', id)
const PastelYellow = makeColor('PastelYellow', '#FFFFB1', id)
const Pink = makeColor('Pink', '#FF488E', id)
const Red = makeColor('Red', '#FF5C5C', id)
const White = makeColor('White', '#FFFFFF', id)

export default function Colors({ maskID }: Props) {
  return (
    <Selector option={HatColorOption} defaultOption={Gray01}>
      <Black maskID={maskID} />
      <Blue01 maskID={maskID} />
      <Blue02 maskID={maskID} />
      <Blue03 maskID={maskID} />
      <Gray01 maskID={maskID} />
      <Gray02 maskID={maskID} />
      <Heather maskID={maskID} />
      <PastelBlue maskID={maskID} />
      <PastelGreen maskID={maskID} />
      <PastelOrange maskID={maskID} />
      <PastelRed maskID={maskID} />
      <PastelYellow maskID={maskID} />
      <Pink maskID={maskID} />
      <Red maskID={maskID} />
      <White maskID={maskID} />
    </Selector>
  )
}
