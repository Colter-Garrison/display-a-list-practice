export default function FriendItem({ name, favorites, location }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Favorite music: {favorites.music}</p>
      <p>Favorite color: {favorites.color}</p>
      <p>Favorite activity: {favorites.activity}</p>
      <p>Located in: {location}</p>
    </div>
  );
}
