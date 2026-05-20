import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User List</h1>

      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/user/${user.id}`}>
            <h3>{user.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default UserList;