import PropTypes from 'prop-types';
import styles from './Friends.module.css';
import defImg from '../../components/default.jpeg';

const Friend = ({ url, name, isOnline }) => (
  <li className={styles.item}>
    <span className={isOnline ? styles.online : styles.offline} ></span>
    <img src={url} alt={name} className={styles.avatar} />
    <p className="name">{name}</p>
  </li>
);

Friend.defaultProps = {
  url: defImg,
};

Friend.propTypes = {
  url: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friend;
