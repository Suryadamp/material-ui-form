import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import MultisepFrom from './Components/MultisepForm';

function App() {
  return (
    <div className="App">

<Route path="/" component={MultisepFrom} />

    </div>
  );
}

export default App;
