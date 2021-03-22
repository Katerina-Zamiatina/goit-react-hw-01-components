import PropTypes from 'prop-types';
import defImg from '../../components/default.jpeg';

const Friend = ({ url, name, isOnline }) => (
  <>
    <span className="status"></span>
    <img src={url} alt={name} className="avatar" width="48" />
    <p className="name">{name}</p>
  </>
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
