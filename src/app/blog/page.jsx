"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useSearchParams } from "next/navigation";

const page = () => {
  const searchParams = useSearchParams();

  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    })();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <h1>This is a Blog page</h1>
      <h1>Boss Name: {searchParams.get("name")} </h1>
      <h1>Boss ID: {searchParams.get("id")} </h1>
      {users.map((item, index) => (
        <div key={index}>
          <h1> Name: {item.name} </h1>
          <h1> User Name: {item.username} </h1>
        </div>
      ))}
    </div>
  );
};

export default page;
