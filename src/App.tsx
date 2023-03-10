import UserList from "./components/UserList";
import UserItem from "./components/UserItem";
import Card, { CardVariant } from "./components/Card";
import axios from "axios";
import React from "react";
import List from "./components/List";
import { IUser } from "./types/types";

const App = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);

  React.useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <Card variant={CardVariant.outlined} width="200px" height="200px">
        <button>Click me</button>
      </Card>
      <UserList users={users} />
      <List itmes={users} renderItem={(user : IUser) => <UserItem user={user} key={user.id}/>
    </div>
  )
    
//  23 минута
};

export default App;
