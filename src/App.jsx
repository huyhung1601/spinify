import './app.scss';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <div className="menu">
        <Sidebar/>
      </div>
      <div className="mainboard">
        <Header/>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
