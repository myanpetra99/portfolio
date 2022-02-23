
import './App.css';
import Navbar from './component/Navbar';
import Introduction from './component/Introduction';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Introduction/>
       
      </header>
    </div>
  );
}

export default App;
