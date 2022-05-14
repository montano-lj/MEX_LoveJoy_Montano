import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import './App.css';
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";



function App() {
  const adminUser = {
    email: "admin",
    password: "admin1234"
  }
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      setError("Details does not match.");
    }
  }
  const Logout = () => {
    console.log("logged out.");
    setUser({ name: "", email: "" });
  }
  // const priority = TodoList => {
  //   if (TodoList.priority === )
  // }
  return (
    <div className='app'>
      {(user.email !== "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <TodoList />
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
