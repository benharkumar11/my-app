import logo from './logo.svg';
import './App.css';

import { Welcome } from './welcome';
import Counter from './counter';
import SimpleForm from './components/simpleForm';

function App() {
  return (
    <div className="App">
      {/* This is my first react app
      <Welcome name= "Ben" age= "25"/>
      <Counter initialValue={5} incrementBy={10} /> */}
      <SimpleForm />
    </div>
  );
}

export default App;
