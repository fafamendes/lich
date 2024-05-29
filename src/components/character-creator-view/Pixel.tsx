import React, { CSSProperties } from 'react'

export interface PixelProps extends React.HTMLAttributes<HTMLDivElement> {
  size: number
  active?: boolean
  activeColor?: CSSProperties['color']
  inactiveColor?: CSSProperties['color']
}

export const Pixel: React.FC<PixelProps> = ({ size, active, activeColor, inactiveColor, ...rest }) => {
  return (
    <div className='hover:cursor-pointer hover:border hover:border-white'
      style={
        {
          width: size,
          height: size,
          backgroundColor: active ? activeColor || 'black' : inactiveColor || 'white',
          boxShadow: active ? 'hsl(204 70% 95% / 1) 0px 0px 4px 1px' : 'none',
        }
      }
      {...rest} />
  )
}