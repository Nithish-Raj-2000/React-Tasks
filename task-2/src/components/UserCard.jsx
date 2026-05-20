import React from "react";

function UserCard(props) {
  return (
    <div style={styles.card}>
      <h2>{props.name}</h2>
      <p><b>Age:</b> {props.age}</p>
      <p><b>Email:</b> {props.email}</p>
      <p><b>Role:</b> {props.role}</p>
      <p><b>Location:</b> {props.location}</p>
      <p><b>Phone:</b> {props.phone}</p>
      <p><b>Company:</b> {props.company}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    margin: "10px",
    borderRadius: "10px",
    width: "250px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
  }
};

export default UserCard;