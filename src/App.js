import { useState } from "react";
import axios from "axios";

// components
import Navbar from "./components/navbar/Navbar";
import UserCard from "./components/userCard/UserCard";
import Loader from "./components/spinner/Loader";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    setIsLoading(true);
    setError(null);
    setUsers([]);
    try {
      const response = await axios.get("https://reqres.in/api/users?page=1");
      setIsLoading(false);
      setUsers(response.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="App">
      <Navbar getUsers={getUsers} isLoading={isLoading} />
      <section className="users">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div className="error">
            <p>{error.message}</p>
          </div>
        ) : users && users.length > 0 ? (
          users.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <h2 className="empty">Please get users!</h2>
        )}
      </section>
    </main>
  );
}

export default App;
