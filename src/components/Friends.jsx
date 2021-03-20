import PropTypes from "prop-types";
import defImg from "./default.jpeg";

const Friends = ({ url, name, isOnline }) => (
  <>
    <span className="status">{isOnline}</span>
    <img src={url} alt={name} className="avatar" width="48" />
    <p className="name">{name}</p>
  </>
);

Friends.defaultProps = {
  url: defImg,
};

Friends.propTypes = {
  url: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friends;
