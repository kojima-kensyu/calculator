import './App.css';
import { Counter } from './components/Counter'

function App() {
  return (
    <div className="App">
      <Counter counter_type={0} />
      <Counter counter_type={1}/>
    </div>
  );
}

export default App;
