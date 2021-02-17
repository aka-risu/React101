const Friend = ({ friends }) => (
  <>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id} className="item">
        {console.log(id.toString())}
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </li>
    ))}
  </>
);
export default Friend;
