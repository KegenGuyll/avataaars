import { Selector, SkinOption } from '../options'
import makeColor from '../utils/makeColor'

export interface Props {
  maskID: string
}

const id = 'Skin/👶🏽-03-Brown'

const Tanned = makeColor('Tanned', '#FD9841', id)
const Yellow = makeColor('Yellow', '#F8D25C', id)
const Pale = makeColor('Pale', '#FFDBB4', id)
const Light = makeColor('Light', '#EDB98A', id)
const Brown = makeColor('Brown', '#D08B5B', id)
const DarkBrown = makeColor('DarkBrown', '#AE5D29', id)
const Black = makeColor('Black', '#614335', id)

const Skin: React.FC<Props> = ({ maskID }) => (
  <Selector option={SkinOption} defaultOption={Light}>
    <Tanned maskID={maskID} />
    <Yellow maskID={maskID} />
    <Pale maskID={maskID} />
    <Light maskID={maskID} />
    <Brown maskID={maskID} />
    <DarkBrown maskID={maskID} />
    <Black maskID={maskID} />
  </Selector>
)

export default Skin
