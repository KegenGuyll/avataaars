import React from 'react'

import Eyebrow from './eyebrow'
import Eyes from './eyes'
import Mouth from './mouth'
import Nose from './nose'

const Face: React.FC = () => {
  return (
    <g id='Face' transform='translate(76.000000, 82.000000)' fill='#000000'>
      <Mouth />
      <Nose />
      <Eyes />
      <Eyebrow />
    </g>
  )
}

export default Face
