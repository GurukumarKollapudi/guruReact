import './App.css';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import State from './components/State';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
        <Home />
        <Dashboard />
        <State />
        <Login />
    </div>
  );
}
export default App;
