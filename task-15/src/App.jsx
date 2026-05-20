import "./App.css";
import useUsers from "./hooks/useUsers";

function App() {
  const { users, loading, error } = useUsers();

  if (loading) {
    return <h1 className="status">Loading...</h1>;
  }

  if (error) {
    return <h1 className="status">{error}</h1>;
  }

  return (
    <div className="app">
      <h1>User Details</h1>

      <div className="card-container">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h2>{user.name}</h2>

            <p>
              <strong>User ID:</strong> {user.id}
            </p>

            <p>
              <strong>Username:</strong> {user.username}
            </p>

            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <p>
              <strong>Phone:</strong> {user.phone}
            </p>

            <p>
              <strong>Website:</strong> {user.website}
            </p>

            <p>
              <strong>Company:</strong> {user.company.name}
            </p>

            <p>
              <strong>Address:</strong> {user.address.street}
            </p>

            <p>
              <strong>City:</strong> {user.address.city}
            </p>

            <p>
              <strong>Zipcode:</strong> {user.address.zipcode}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;