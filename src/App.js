import './App.css';
import AnimalsList from './AnimalsList';
import { animals } from './animals-data';

function App() {
  return (
    <div className="App">
      <AnimalsList animals={animals} />
    </div>
  );
}

export default App;
