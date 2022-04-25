import Sidebar from './components/Sidebar/Sidebar.jsx';
import MainDash from './components/MainDash/MainDash.jsx';
import RightSide from './components/RightSide/RightSide.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
