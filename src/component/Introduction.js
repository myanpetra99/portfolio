import React, { Component } from 'react'
import logo from '../user.jpg'

export default class Introduction extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='column'>
            <img src={logo} className='App-logo'></img>
           
          </div>
          <div className='column'>
          <p>Hello There <div className='wave'>👋</div> </p>
            <p>My Name is Petra</p>
            
          </div>
        </div>
      </div>
    )
  }
}
