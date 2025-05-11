import BlazerShirt from './BlazerShirt'
import BlazerSweater from './BlazerSweater'
import CollarSweater from './CollarSweater'
import GraphicShirt from './GraphicShirt'
import Hoodie from './Hoodie'
import Overall from './Overall'
import ShirtCrewNeck from './ShirtCrewNeck'
import ShirtScoopNeck from './ShirtScoopNeck'
import ShirtVNeck from './ShirtVNeck'
import { ClotheOption, Selector } from '../../options'
import React from 'react'

const Clothes: React.FC = () => (
  <Selector option={ClotheOption} defaultOption={BlazerShirt}>
    <BlazerShirt />
    <BlazerSweater />
    <CollarSweater />
    <GraphicShirt />
    <Hoodie />
    <Overall />
    <ShirtCrewNeck />
    <ShirtScoopNeck />
    <ShirtVNeck />
  </Selector>
)

export default Clothes
