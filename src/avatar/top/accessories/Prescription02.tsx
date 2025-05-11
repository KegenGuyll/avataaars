import * as React from 'react'
import { ExtendedComponent } from '../../../models/ExtendedComponent'

const Prescription02: ExtendedComponent = () => {
  const filter1 = React.useId()

  return (
    <g
      id='Top/_Resources/Prescription-02'
      fill='none'
      transform='translate(62.000000, 85.000000)'
      strokeWidth='1'>
      <defs>
        <filter
          x='-0.8%'
          y='-2.4%'
          width='101.5%'
          height='109.8%'
          filterUnits='objectBoundingBox'
          id={filter1}>
          <feOffset
            dx='0'
            dy='2'
            in='SourceAlpha'
            result='shadowOffsetOuter1'
          />
          <feColorMatrix
            values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0'
            type='matrix'
            in='shadowOffsetOuter1'
            result='shadowMatrixOuter1'
          />
          <feMerge>
            <feMergeNode in='shadowMatrixOuter1' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>
      <g
        id='Wayfarers'
        filter={`url(#${filter1})`}
        transform='translate(6.000000, 7.000000)'
        fill='#252C2F'>
        <path
          d='M34,41 L31.2421498,41 C17.3147125,41 9,33.3359286 9,20.5 C9,10.127 10.8170058,0 32.5299306,0 L35.4700694,0 C57.1829942,0 59,10.127 59,20.5 C59,32.5686429 48.7212748,41 34,41 Z M32.3853606,6 C13,6 13,12.8410159 13,21.5015498 C13,28.5719428 16.116254,37 30.9709365,37 L34,37 C46.3649085,37 55,30.6270373 55,21.5015498 C55,12.8410159 55,6 35.6146394,6 L32.3853606,6 Z'
          id='Left'
          fillRule='nonzero'
        />
        <path
          d='M96,41 L93.2421498,41 C79.3147125,41 71,33.3359286 71,20.5 C71,10.127 72.8170058,0 94.5299306,0 L97.4700694,0 C119.182994,0 121,10.127 121,20.5 C121,32.5686429 110.721275,41 96,41 Z M94.3853606,6 C75,6 75,12.8410159 75,21.5015498 C75,28.5719428 78.1194833,37 92.9709365,37 L96,37 C108.364909,37 117,30.6270373 117,21.5015498 C117,12.8410159 117,6 97.6146394,6 L94.3853606,6 Z'
          id='Right'
          fillRule='nonzero'
        />
      </g>
    </g>
  )
}

Prescription02.optionValue = 'Prescription02'

export default Prescription02
