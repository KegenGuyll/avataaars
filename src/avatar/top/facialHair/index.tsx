import BeardLight from './BeardLight'
import BeardMajestic from './BeardMajestic'
import BeardMedium from './BeardMedium'
import Blank from './Blank'
import MoustacheFancy from './MoustacheFancy'
import MoustacheMagnum from './MoustacheMagnum'
import { FacialHairOption, Selector } from '../../../options'
import React from 'react'

const FacialHair: React.FC = () => (
  <Selector option={FacialHairOption} defaultOption={Blank}>
    <Blank />
    <BeardMedium />
    <BeardLight />
    <BeardMajestic />
    <MoustacheFancy />
    <MoustacheMagnum />
  </Selector>
)

export default FacialHair
