import './App.css'

import Hero from './component/Hero'
import Profile from './component/Profile'


function App () {
  return (
    <div className='App'>

      <div className='App-header container'>
        <div className='row'>
          <div className='column'>
            <code>&lt; html &gt;</code>
            <code>&lt; body &gt;</code>
            <Hero />
            <div className='row'>
              <div className='column'>
                <code>&lt;/ body &gt;</code>
                <code>&lt;/ html &gt;</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
