import logo from './logo.svg';
import './App.css';

import { Welcome } from './welcome';

function App() {
  return (
    <div className="App">
      This is my first react app
      <Welcome name= "Ben" age= "25"/>
    </div>
  );
}

export default App;
