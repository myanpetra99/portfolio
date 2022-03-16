import React, { Component } from 'react'
import logo from '../user.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
export default class Introduction extends Component {
  render () {
    return (
      <section>
        <div className='container'>
          <div className='row'>
            <div className='column'>
              <h1>This is my story to you</h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
