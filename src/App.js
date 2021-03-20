import Profile from "./components/Profile";
import StatisticsList from "./components/StatisticsList";
import FriendsList from "./components/FriendsList";
import TransactionHistory from "./components/TransactionHistory";
import user from "./json/user.json";
import statistics from "./json/statistical-data.json";
import friends from "./json/friends.json";
import transactions from "./json/transactions.json";

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
