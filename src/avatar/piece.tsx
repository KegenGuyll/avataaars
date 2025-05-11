import * as React from 'react'

import Clothe from './clothes'
import Graphics from './clothes/Graphics'
import Accessories from './top/accessories'
import FacialHair from './top/facialHair'
import Top from './top'

import Eyes from './face/eyes'
import Eyebrows from './face/eyebrow'
import Mouth from './face/mouth'
import Skin from './Skin'

export enum AvatarStyle {
  Circle = 'Circle',
  Transparent = 'Transparent',
}

export interface PieceProps {
  pieceSize?: string
  pieceType?:
    | 'top'
    | 'clothe'
    | 'graphics'
    | 'accessories'
    | 'accesories'
    | 'facialHair'
    | 'eyes'
    | 'eyebrows'
    | 'mouth'
    | 'nose'
    | 'skin'
  avatarStyle: AvatarStyle
  style?: React.CSSProperties
  viewBox?: string
}

const PieceComponent: React.FC<PieceProps> = ({
  pieceSize,
  pieceType,
  avatarStyle,
  style,
  viewBox,
}) => (
  <svg
    style={style}
    width={pieceSize ? `${pieceSize}px` : undefined}
    height={pieceSize ? `${pieceSize}px` : undefined}
    viewBox={viewBox || '0 0 264 280'}
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'>
    {pieceType === 'top' && <Top />}
    {pieceType === 'clothe' && <Clothe />}
    {pieceType === 'graphics' && <Graphics maskID='1234' />}
    {(pieceType === 'accessories' || pieceType === 'accesories') && (
      <Accessories />
    )}
    {pieceType === 'facialHair' && <FacialHair />}
    {pieceType === 'eyes' && <Eyes />}
    {pieceType === 'eyebrows' && <Eyebrows />}
    {pieceType === 'mouth' && <Mouth />}
    {pieceType === 'nose' && null}
    {pieceType === 'skin' && <Skin maskID='5678' />}
  </svg>
)

export default PieceComponent
