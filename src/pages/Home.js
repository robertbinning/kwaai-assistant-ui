import React from "react";
import { auth } from '../firebase';

const Home = () => {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
