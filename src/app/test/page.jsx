'use client'
// import React, { useState } from "react";

// const UserList = ({ users, onUserClick }) => {
//   console.log("UserList rendered");

//   return (
//     <>
//       {users.map((user) => (
//         <p key={user.id} onClick={() => onUserClick(user.name)}>
//           {user.name}
//         </p>
//       ))}
//     </>
//   );
// };

// export default function App() {
//   const [search, setSearch] = useState("");
//   const [count, setCount] = useState(0);

//   const users = [
//     { id: 1, name: "Ankit" },
//     { id: 2, name: "Rahul" },
//     { id: 3, name: "Pooja" },
//   ];
//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleUserClick = (name) => {
//     alert(name);
//   };

//   return (
//     <div className="pt-40 text-white">
//       <input
//         placeholder="Search user"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <button onClick={() => setCount(count + 1)}>
//         Counter: {count}
//       </button>

//       <UserList users={filteredUsers} onUserClick={handleUserClick} />
//     </div>
//   );
// }

import React, { useState, useMemo, useCallback } from "react";

const UserList = React.memo(({ users, onUserClick }) => {
  console.log("UserList rendered");

  return (
    <>
      {users.map((user) => (
        <p key={user.id} onClick={() => onUserClick(user.name)}>
          {user.name}
        </p>
      ))}
    </>
  );
});

export default function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const users = useMemo(
    () => [
      { id: 1, name: "Ankit" },
      { id: 2, name: "Rahul" },
      { id: 3, name: "Pooja" },
    ],
    []
  );

  // ✅ useMemo for heavy filtering
  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  // ✅ useCallback for function reference
  const handleUserClick = useCallback((name) => {
    alert(name);
  }, []);

  return (
    <>
      <div className="pt-40 text-white">
       <input
         placeholder="Search user"
         value={search}
         onChange={(e) => setSearch(e.target.value)}
       />

       <button onClick={() => setCount(count + 1)}>
         Counter: {count}
       </button>

       <UserList users={filteredUsers} onUserClick={handleUserClick} />
     </div>
    </>
  );
}

