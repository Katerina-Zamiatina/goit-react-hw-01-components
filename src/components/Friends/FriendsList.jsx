import PropTypes from 'prop-types';
import Friend from './Friend';

const FriendsList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li className="item" key={id}>
        <Friend url={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

FriendsList.defaultProps = {
  type: true,
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ).isRequired,
};

export default FriendsList;
