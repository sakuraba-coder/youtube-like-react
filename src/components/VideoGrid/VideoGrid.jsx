import React from 'react'
import Style from './VideoGrid.module.scss'

export const VideoGrid = (props) => {
  const { children } = props;
  return (
    <div className={Style.container}>
      {children}
    </div>
  )
}


