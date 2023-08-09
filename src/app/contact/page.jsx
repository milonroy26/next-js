import React from "react";
import Navbar from "../../components/Navbar";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}

const page = async () => {
  const myUsers = await getData();

  return (
    <div>
      <Navbar></Navbar>
      <h1>This is a Contact page</h1>
      {myUsers.map((item, index) => (
        <ul>
          <li key={index}>My name is: {item.name} </li>
        </ul>
      ))}
    </div>
  );
};

export default page;
