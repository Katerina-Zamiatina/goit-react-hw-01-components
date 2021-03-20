import PropTypes from "prop-types";
import Friends from "./Friends";

const FriendsList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li className="item" key={id}>
        <Friends url={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ).isRequired,
};

export default FriendsList;
