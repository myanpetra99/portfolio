import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Profile from './component/Profile'
import 'react-vertical-timeline-component/style.min.css'
import Timeline from './component/Timeline'

function App () {
  return (
    <div className='App'>

      <div className='App-header container'>
        <div className='row'>
          <div className='column'>
            <code>&lt; html &gt;</code>
            <code>&lt; body &gt;</code>
            <Hero />
            <Profile />
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
