import React, { Component, Fragment } from 'react'

import logo from './img/logoofficialc.png'

class Header extends Component {
  render() {
    return (
      <div className="logo">
            <img className='logoimage' src={logo}></img>
        </div>)
  }
}

export default Header