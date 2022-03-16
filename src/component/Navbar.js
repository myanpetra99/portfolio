import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'

export default class Navbar extends Component {
  render () {
    return (
      <div className='sticky-nav'>
        <ul>
          <li className='navbar-logo'>
            <a href="#home">Michael Yan Petra</a>
          </li>

        </ul>
        
      </div>
    )
  }
}
