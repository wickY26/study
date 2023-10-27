import React from 'react'
import { IconProps } from './types'
import iconPaths from './constants'

const Icon = ({
  color,
  name,
  style,
  w = 24,
  h = 24,
}: IconProps) => (
  <svg
    viewBox={`0 0 ${w} ${h}`}
    fill={color}
    className={`h-8 w-8 ${style ? style : ''}`}
  >
    <path d={iconPaths[name]}></path>
  </svg>
)

export default Icon
