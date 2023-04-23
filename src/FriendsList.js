import FriendItem from './FriendItem';

export default function FriendsList({ friends }) {
  return (
    <div>
      {
        friends.map((friend, i) => <FriendItem {...friend} key={name + i}/>)
      }
    </div>
  );
}
