import User from './User/User';
import user from './User/user.json';
import Statistics from './Statisctics/Statistics';
import stats from './Statisctics/stats.json';
import friends from './Friends/friends.json';
import FriendList from './Friends/FriendsList';
import TransactionHistory from './Transactions/TransactionHistory';
import transactions from './Transactions/transactions.json';
const App = () => {
  return (
    <div>
      {/* <User user={user} /> */}
      {/* <Statistics title="" stats={stats} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
