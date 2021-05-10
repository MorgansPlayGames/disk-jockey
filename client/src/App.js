import logo from './logo.svg';
import './App.css';
import Login from './pages/Login'
import { Home } from './pages/Home';

function App() {
  return (
    <div className="main">
      <Home/>
      <Login />
    </div>
  );
}

export default App;
