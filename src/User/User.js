import Stats from "./Stats";
const User = ({ user: { avatar, tag, name, location, stats } }) => (
  <>
    {/* {user.map(({ avatar, tag, name, location, stats }) => ( */}
    <div key={tag} className="profile">
      <p>{name}</p>
      <div className="description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          className="avatar"
          width="100"
        />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <Stats stats={stats} />
    </div>
    {/* ))} */}
  </>
);
export default User;
