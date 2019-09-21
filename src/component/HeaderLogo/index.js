import React, { Component } from 'react'

import logo from '../../img/logoofficialc.png'

import './HeaderLogo.scss'

class HeaderLogo extends Component {
  render() {
    return (
      <div className="logo">
        <img className='logoimage' src={logo}></img>
      </div>)
  }
}

export default HeaderLogo