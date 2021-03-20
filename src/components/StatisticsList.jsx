import PropTypes from "prop-types";
import Statistics from "./Statistics";

const StatisticsList = ({ stats, title }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className="item">
          <Statistics label={label} percentage={percentage} />
        </li>
      ))}
    </ul>
  </section>
);

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};

export default StatisticsList;
