export default function BeerItem({ name, style, brewery }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>This beer is a {style}</p>
      <p>and it is brewed by {brewery}</p>
    </div>
  );
}