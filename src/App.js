import Profile from './components/Profile/Profile';
import StatisticsList from './components/Statistics/StatisticsList';
import FriendsList from './components/Friends/FriendsList';
import TransactionHistory from './components/Transaction/TransactionHistory';
import user from './components/Profile/user.json';
import statistics from './components/Statistics/statistical-data.json';
import friends from './components/Friends/friends.json';
import transactions from './components/Transaction/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList title="Upload stats" stats={statistics} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
