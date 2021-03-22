import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import defImg from '../../components/default.jpeg';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} alt={name} className="avatar" width='300'/>
      <div className={styles.text}>
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
      </div>
    </div>
    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defImg,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
