import PropTypes from 'prop-types';
import styles from './Friends.module.css';
import Friend from './Friend';

const FriendsList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <Friend key={id} url={avatar} name={name} isOnline={isOnline} />
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ).isRequired,
};

export default FriendsList;
