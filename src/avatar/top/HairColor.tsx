import * as React from 'react'

import { HairColorOption, Selector } from '../../options'
import makeColor from '../../utils/makeColor'

export interface Props {
  maskID: string
}

const id = 'Skin/👶🏽-03-Brown'

const Auburn = makeColor('Auburn', '#A55728', id)
const Black = makeColor('Black', '#2C1B18', id)
const Blonde = makeColor('Blonde', '#B58143', id)
const BlondeGolden = makeColor('BlondeGolden', '#D6B370', id)
const Brown = makeColor('Brown', '#724133', id)
const BrownDark = makeColor('BrownDark', '#4A312C', id)
const PastelPink = makeColor('PastelPink', '#F59797', id)
const Blue = makeColor('Blue', '#000fdb', id)
const Platinum = makeColor('Platinum', '#ECDCBF', id)
const Red = makeColor('Red', '#C93305', id)
const SilverGray = makeColor('SilverGray', '#E8E1E1', id)

const HairColor: React.FC<Props> = ({ maskID }) => (
  <Selector option={HairColorOption} defaultOption={BrownDark}>
    <Auburn maskID={maskID} />
    <Black maskID={maskID} />
    <Blonde maskID={maskID} />
    <BlondeGolden maskID={maskID} />
    <Brown maskID={maskID} />
    <BrownDark maskID={maskID} />
    <PastelPink maskID={maskID} />
    <Blue maskID={maskID} />
    <Platinum maskID={maskID} />
    <Red maskID={maskID} />
    <SilverGray maskID={maskID} />
  </Selector>
)

export default HairColor
