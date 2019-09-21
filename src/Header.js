import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import logo from './img/logoofficialc.png'

class Header extends Component {
  render() {
    return <Fragment>
    <header className="header">
        <div className="header-left">
          <input type='text' placeholder='Search'></input>
        </div>
        <div className="header-right">
          <Link to='/login'><div>Login</div></Link>
          <Link to='/signup'><div>Sign up</div></Link>
          <Link to='/panier'><div>Panier</div></Link>
        </div>
      </header>
      <div className="logo">
            <img className='logoimage' src={logo}></img>
        </div>
    </Fragment>
  }
}

export default Header