import './App.css';
import AnimalsList from './AnimalsList';
import { animals } from './animals-data';
import BeerList from './BeerList';
import { beers } from './beer-data';

function App() {
  return (
    <div className="App">
      <AnimalsList animals={animals} />
      <hr/>
      <BeerList beers={beers} />
      <hr/>
    </div>
  );
}

export default App;