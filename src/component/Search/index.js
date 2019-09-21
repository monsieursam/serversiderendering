import React, { Component, Fragment } from 'react'

import './Search.scss'

class Header extends Component {
  render() {
    return <div className='search-bloc'>
        <input type="text" placeholder='Search'></input>
    </div>
  }
}

export default Header