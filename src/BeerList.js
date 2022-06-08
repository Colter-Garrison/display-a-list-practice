import BeerItem from './BeerItem';

export default function BeerList({ beers }) {
  return <div>
    {
      beers.map((beer, i) => <BeerItem
        {...beer}
        key={beer + i}/>)
    }
  </div>;
}