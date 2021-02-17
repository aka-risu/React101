import Friend from './Friend.js';
const FriendList = ({ friends }) => (
  <>
    <ul className="friend-list">
      <Friend friends={friends} />
    </ul>
  </>
);
export default FriendList;
