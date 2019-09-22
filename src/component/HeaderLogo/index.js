import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../img/logoofficialc.png'

import './HeaderLogo.scss'

class HeaderLogo extends Component {
  render() {
    return (
      <div className="logo">
        <Link to='/'>
          <img className='logoimage' src={logo}></img>
        </Link>
      </div>)
  }
}

export default HeaderLogo