import React from 'react'
import Style from './VideoGridItem.module.scss'
import {Link} from 'react-router-dom'

export const VideoGridItem = (props) => {
  const {id, src, title} = props;
  return (
    <Link to={{pathname: '/watch', search: `?v=${id}`}} className={Style.item}>
      <img src={src} alt={title} />
      <div className={Style.info}>
        <span>{title}</span>
      </div>
    </Link>
  )

}

