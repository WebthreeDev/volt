import React from 'react'
import { SvgProps } from '@gravis.finance/uikit'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="0"
        fill="white"
      />
    </svg>
  )
}

export default Icon
