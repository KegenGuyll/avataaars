import * as React from 'react'
import { ExtendedComponent } from '../../../models/ExtendedComponent'

const Sunglasses: ExtendedComponent = () => {
  const path1 = React.useId()
  const path2 = React.useId()
  const filter1 = React.useId()
  const linearGradient1 = React.useId()
  const linearGradient2 = React.useId()

  return (
    <g
      id='Top/_Resources/Sunglasses'
      fill='none'
      transform='translate(62.000000, 85.000000)'
      strokeWidth='1'>
      <defs>
        <filter
          x='-0.8%'
          y='-2.6%'
          width='101.6%'
          height='110.5%'
          filterUnits='objectBoundingBox'
          id={filter1}>
          <feOffset
            dx='0'
            dy='2'
            in='SourceAlpha'
            result='shadowOffsetOuter1'
          />
          <feColorMatrix
            values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0'
            type='matrix'
            in='shadowOffsetOuter1'
            result='shadowMatrixOuter1'
          />
          <feMerge>
            <feMergeNode in='shadowMatrixOuter1' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
        <path
          d='M47.0104611,6.27728008 C49.5212682,6.30134922 50.7082016,6.72633117 51.1359635,9.39189846 C51.5693724,12.0919529 51.1479634,15.1275382 50.648202,17.7869984 C49.8855011,21.8478573 48.6170388,25.8264499 45.6643523,28.794498 C44.1089507,30.3575551 42.2119044,31.6034024 40.1941529,32.4540848 C39.1226305,32.9060098 37.9911085,33.2322006 36.8599395,33.4797175 C36.5292357,33.5519249 33.7060778,33.9478084 35.4375958,33.7466335 C31.3967988,34.2161613 27.0129452,34.1974808 23.6381438,31.5793333 C19.8980507,28.6777448 17.3367734,24.0862872 16.2105455,19.5127916 C15.5516086,16.8368063 14.1670294,10.4365709 16.6968952,8.29693227 C19.5948762,5.84547255 47.0104611,6.27728008 47.0104611,6.27728008 L47.0104611,6.27728008 Z'
          id={path1}
        />
        <path
          d='M78.9192315,6.27468008 C76.4084239,6.29910846 75.2214902,6.72373117 74.7937283,9.38929846 C74.3603192,12.0893529 74.7817283,15.1249382 75.2811369,17.7843984 C76.0441909,21.8452573 77.3126534,25.8238499 80.2653406,28.791898 C81.8207425,30.3549551 83.7177893,31.6008024 85.7355412,32.4518441 C86.8070638,32.9034098 87.938586,33.2296006 89.0697553,33.4771175 C89.4004591,33.5493249 92.2232647,33.9455676 90.4920992,33.7440335 C94.5328971,34.2135613 98.9167517,34.1948808 102.291554,31.5767333 C106.031648,28.6751448 108.592926,24.0840464 109.719154,19.5105508 C110.378091,16.8342063 111.762317,10.4343302 109.232804,8.29433227 C106.334822,5.84287255 78.9192315,6.27468008 78.9192315,6.27468008 L78.9192315,6.27468008 Z'
          id={path2}
        />
        <linearGradient
          x1='50%'
          y1='0%'
          x2='50%'
          y2='70.5058195%'
          id={linearGradient1}>
          <stop stopColor='#FFFFFF' stopOpacity='0.5' offset='0%' />
          <stop stopColor='#000000' stopOpacity='0.5' offset='100%' />
        </linearGradient>
        <linearGradient
          x1='50%'
          y1='0%'
          x2='50%'
          y2='100%'
          id={linearGradient2}>
          <stop stopColor='#FFFFFF' stopOpacity='0.5' offset='0%' />
          <stop stopColor='#000000' stopOpacity='0.5' offset='70.5058195%' />
        </linearGradient>
      </defs>
      <g
        id='Sunglasses'
        filter={`url(#${filter1})`}
        transform='translate(8.000000, 8.000000)'>
        <g id='shades'>
          <use
            fillOpacity='0.700000048'
            fill='#000000'
            xlinkHref={'#' + path1}
          />
          <use
            fill={`url(#${linearGradient1})`}
            style={{ mixBlendMode: 'screen' }}
            xlinkHref={'#' + path1}
          />
        </g>
        <g id='shades'>
          <use
            fillOpacity='0.700000048'
            fill='#000000'
            xlinkHref={'#' + path2}
          />
          <use
            fill={`url(#${linearGradient2})`}
            style={{ mixBlendMode: 'screen' }}
            xlinkHref={'#' + path2}
          />
        </g>
      </g>
    </g>
  )
}

Sunglasses.optionValue = 'Sunglasses'

export default Sunglasses
