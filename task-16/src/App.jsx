import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [editId, setEditId] = useState(null);

  // READ API DATA
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // CREATE & UPDATE
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all fields");
      return;
    }

    // UPDATE
    if (editId !== null) {
      const updatedUsers = users.map((user) =>
        user.id === editId
          ? { ...user, ...formData }
          : user
      );

      setUsers(updatedUsers);

      setEditId(null);
    } else {
      // CREATE
      const newUser = {
        id: users.length + 1,
        ...formData,
      };

      setUsers([...users, newUser]);
    }

    // CLEAR FORM
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  // EDIT
  const handleEdit = (user) => {
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
    });

    setEditId(user.id);
  };

  // DELETE
  const handleDelete = (id) => {
    const filteredUsers = users.filter(
      (user) => user.id !== id
    );

    setUsers(filteredUsers);
  };

  return (
    <div className="app">
      <h1>React CRUD Table</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <button type="submit">
          {editId !== null ? "Update User" : "Add User"}
        </button>
      </form>

      {/* TABLE */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>{user.phone}</td>

                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;