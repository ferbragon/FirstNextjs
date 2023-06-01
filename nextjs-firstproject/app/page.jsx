import React from "react";

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
        <ul>
          {
            users.map((user, index) => (
              <li key={index}>
                <div>
                  <h5>{user.id}</h5>
                  <p>{user.email}</p>
                </div>
                <img src={user.avatar} alt={user.email} />
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default indexPage;
