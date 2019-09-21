import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import './MenuBloc.scss'

class Header extends Component {
  render() {
    return <div className='menu-bloc'>
        <Link to='/login'><div className='menu-list'>Login</div></Link>
        <Link to='/signup'><div>Sign up</div></Link>
        <Link to='/panier'><div>Panier</div></Link>
        <Link to='/aboutus'><div>About us</div></Link>
        <Link to='/contact'><div>Contact</div></Link>
        <Link to='/press'><div>Press</div></Link>
    </div>
  }
}

export default Header