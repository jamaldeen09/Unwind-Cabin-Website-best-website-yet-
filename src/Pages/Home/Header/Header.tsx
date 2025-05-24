import React from 'react'
import NavComponent from '../../../components/NavComponent'
import HeaderBody from './HeaderBody'

const Header = () => {
  return (
    <header className="min-h-fit">
        <NavComponent />
        <HeaderBody />
    </header>
  )
}

export default Header