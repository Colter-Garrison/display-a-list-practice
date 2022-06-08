export default function BeerItem({ name, style, brewery }) {
  return (
    <div>
      <h3>{brewery}</h3>
      <p>Beer: {name}</p>
      <p>This beers style is: {style}</p>
    </div>
  );
}