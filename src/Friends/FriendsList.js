import Friend from './Ffdfriend.js';
const FriendList = ({ friends }) => (
  <>
    <ul className="friend-list">
      <Friend friends={friends} />
    </ul>
  </>
);
export default FriendList;
