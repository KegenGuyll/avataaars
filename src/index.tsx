import React from 'react'
import { OptionProvider } from './options/OptionContext'
import Avatar, { AvatarStyle } from './avatar'
import { allOptions } from './options'

export { default as Avatar, AvatarStyle } from './avatar'
export { Option, allOptions } from './options'

import PieceComponent from './avatar/piece'
import { PieceType } from './avatar/piece'

export interface Props {
  avatarStyle: string
  className?: string
  style?: React.CSSProperties
  topType?: string
  accessoriesType?: string
  hairColor?: string
  facialHairType?: string
  facialHairColor?: string
  clotheType?: string
  clotheColor?: string
  graphicType?: string
  eyeType?: string
  eyebrowType?: string
  mouthType?: string
  skinColor?: string
  pieceType?: PieceType
  pieceSize?: string
  viewBox?: string
}

const AvatarComponent: React.FC<Props> = (props) => {
  const { avatarStyle, style, className }: Props = props

  return (
    <OptionProvider options={allOptions}>
      <Avatar
        avatarStyle={avatarStyle as AvatarStyle}
        style={style}
        className={className}
      />
    </OptionProvider>
  )
}

const Piece: React.FC<Props> = (props) => {
  const { style, pieceType, pieceSize, viewBox }: Props = props

  return (
    <OptionProvider options={allOptions}>
      <PieceComponent
        style={style}
        pieceType={pieceType}
        pieceSize={pieceSize}
        viewBox={viewBox}
      />
    </OptionProvider>
  )
}

export { AvatarComponent, Piece }
