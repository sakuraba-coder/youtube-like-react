import React from 'react'
import Header from './Header/Header';
import Style from './Layout/Layout.module.scss'

const Layout = (props) => {
  const {children} = props;
  return (
    <div className={Style.wrapper}>
      <Header />
      <div className={Style.main}>
        {children}
      </div>
    </div>
  )
}

export default Layout