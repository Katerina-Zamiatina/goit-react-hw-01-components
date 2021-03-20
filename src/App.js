import Profile from "./components/Profile";
import StatisticsList from "./components/StatisticsList";
// import FriendsList from "./components/FriendsList";
// import Transactions from "./components/Transactions";
import user from "./json/user.json";
import statistics from "./json/statistical-data.json";

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
      
      {/* <FriendsList />
      <Transactions /> */}
    </>
  );
};

export default App;
