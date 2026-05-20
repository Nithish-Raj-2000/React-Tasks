import React from "react";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div style={styles.container}>
      
      <UserCard
        name="Arun"
        age={22}
        email="arun@gmail.com"
        role="Frontend Developer"
        location="Chennai"
        phone="9876543210"
        company="TechSoft"
      />

      <UserCard
        name="Priya"
        age={24}
        email="priya@gmail.com"
        role="UI Designer"
        location="Bangalore"
        phone="9123456780"
        company="DesignPro"
      />

      <UserCard
        name="Rahul"
        age={26}
        email="rahul@gmail.com"
        role="Backend Developer"
        location="Hyderabad"
        phone="9988776655"
        company="CodeBase"
      />

      <UserCard
        name="Sneha"
        age={23}
        email="sneha@gmail.com"
        role="Tester"
        location="Pune"
        phone="9012345678"
        company="QA Labs"
      />

      <UserCard
        name="Vikram"
        age={28}
        email="vikram@gmail.com"
        role="Full Stack Developer"
        location="Mumbai"
        phone="9090909090"
        company="DevHub"
      />

    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }
};

export default App;