export default function CiderItem({ cidery, name, tastes }) {
  return (
    <div>
      <h3>{cidery}</h3>
      <p>Cider: {name}</p>
      <p>Tasting notes: {tastes}</p>
    </div>
  );
}