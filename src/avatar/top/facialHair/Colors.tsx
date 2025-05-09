import { FacialHairColor, Selector } from '../../../options'
import makeColor from '../../../utils/makeColor'

export interface Props {
  maskID: string
}

const id = 'Color/Hair/Brown'

const Auburn = makeColor('Auburn', '#A55728', id)
const Black = makeColor('Black', '#2C1B18', id)
const Blonde = makeColor('Blonde', '#B58143', id)
const BlondeGolden = makeColor('BlondeGolden', '#D6B370', id)
const Brown = makeColor('Brown', '#724133', id)
const BrownDark = makeColor('BrownDark', '#4A312C', id)
const Platinum = makeColor('Platinum', '#ECDCBF', id)
const Red = makeColor('Red', '#C93305', id)
const SilverGray = makeColor('SilverGray', '#E8E1E1', id)

export default function Colors({ maskID }: Props) {
  return (
    <Selector option={FacialHairColor} defaultOption={BrownDark}>
      <Auburn maskID={maskID} />
      <Black maskID={maskID} />
      <Blonde maskID={maskID} />
      <BlondeGolden maskID={maskID} />
      <Brown maskID={maskID} />
      <BrownDark maskID={maskID} />
      <Platinum maskID={maskID} />
      <Red maskID={maskID} />
      <SilverGray maskID={maskID} />
    </Selector>
  )
}
