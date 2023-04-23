import './App.css';
import AnimalsList from './AnimalsList';
import { animals } from './animals-data';
import BeerList from './BeerList';
import { beers } from './beer-data';
import FriendsList from './FriendsList';
import { friends } from './friends-data';
import CiderList from './CiderList';
import { ciders } from './cider-data';

function App() {
  return (
    <div className="App">
      <AnimalsList animals={animals} />
      <hr/>
      <BeerList beers={beers} />
      <hr/>
      <FriendsList friends={friends} />
      <hr/>
      <CiderList ciders={ciders} />
    </div>
  );
}

export default App;