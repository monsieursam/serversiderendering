import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import './MenuBloc.scss'

class Header extends Component {
  render() {
    return <div className='menu-bloc'>
      <div className='menu'>
        <NavLink to='/login'><div className='menu-list'>Login</div></NavLink>
        <NavLink to='/signup'><div>Sign up</div></NavLink>
        <NavLink to='/panier'><div>Panier</div></NavLink>
        <NavLink to='/aboutus'><div>About us</div></NavLink>
        <NavLink to='/contact'><div>Contact</div></NavLink>
        <NavLink to='/press'><div>Press</div></NavLink>
        </div>
    </div>
  }
}

export default Header