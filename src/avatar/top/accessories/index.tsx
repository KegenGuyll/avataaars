import React from 'react'
import Blank from './Blank'
import Kurt from './Kurt'
import Prescription01 from './Prescription01'
import Prescription02 from './Prescription02'
import Round from './Round'
import Sunglasses from './Sunglasses'
import Wayfarers from './Wayfarers'
import { AccessoriesOption, Selector } from '../../../options'

const Accessories: React.FC = () => {
  return (
    <Selector defaultOption={Blank} option={AccessoriesOption}>
      <Blank />
      <Kurt />
      <Prescription01 />
      <Prescription02 />
      <Round />
      <Sunglasses />
      <Wayfarers />
    </Selector>
  )
}

export default Accessories
