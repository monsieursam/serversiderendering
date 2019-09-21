import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

// import './MenuBloc.scss'

class Header extends Component {
  render() {
    return <div className='search-bloc'>
        <input type="text" placeholder='Search'></input>
    </div>
  }
}

export default Header