import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div className='sticky-nav'>
          <ul>
              <li>
                    <a href='#home'>Intro</a>
              </li>
              <li>
                    <a href='#link'>About</a>
              </li>
              <li>
                    <a href='#Portfolio'>Portfolio</a>
              </li>
          </ul>
      </div>
    )
  }
}
