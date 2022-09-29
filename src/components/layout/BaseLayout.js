import React from 'react';
import {Link} from 'react-router-dom'
import Header from './Header'


const BaseLayout = ({children}) => {
  return (
    <>
    <Header/>
        <br/>
        <br/>
      {children}
    </>
  )
}

export default BaseLayout
