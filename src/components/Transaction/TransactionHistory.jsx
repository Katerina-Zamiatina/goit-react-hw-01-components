import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';


const TransactionHistory = ({ items }) => (
  <table className={styles.table}>
    <thead className={styles.head}>
      <tr>
        <th className={styles["head-cell"]}>Type</th>
        <th className={styles["head-cell"]}>Amount</th>
        <th className={styles["head-cell"]}>Currency</th>
      </tr>
    </thead>
    <tbody className={styles.cell}>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td className={styles["body-cell"]}>{type}</td>
          <td className={styles["body-cell"]}>{currency}</td>
          <td className={styles["body-cell"]}>{amount}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
