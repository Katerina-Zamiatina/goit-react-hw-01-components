import Profile from "./components/Profile";
// import Statistic from "./components/Statistic";
// import FriendsList from "./components/FriendsList";
// import Transactions from "./components/Transactions";
import user from "./user.json";

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
      {/* <Statistic />
      <FriendsList />
      <Transactions /> */}
    </>
  );
};

export default App;
