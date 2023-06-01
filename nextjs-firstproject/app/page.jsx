import React from "react";
import Users from "@/components/Users";

async function fetchUsers() {
    const res = await fetch("https://reqres.in/api/users");
    const data = await res.json();
    return data.data;
};

//react server component
async function indexPage() {
  const users = await fetchUsers();
  console.log(users);
  return(
    <div>
      <h1>Index Page</h1>
        <Users users={users}/>
    </div>
  )
}

export default indexPage;
