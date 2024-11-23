import React, { useEffect, useState } from "react";

function DetailPage() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    const response = await fetch("https://6729c63f6d5fa4901b6e4b0c.mockapi.io/assignment_4/friend_list");
    const data = await response.json();
    setFriends(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontWeight: "bold", textAlign: "center", marginBottom: "20px" }}>Detail Page</h1>
      
      
      <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px", border: "1px solid #ddd", fontWeight: "bold" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", fontWeight: "bold" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", fontWeight: "bold" }}>Age</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", fontWeight: "bold" }}>RC</th>
          </tr>
        </thead>
        <tbody>
          {friends.map((friend) => (
            <tr key={friend.id}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{friend.id}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{friend.name}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{friend.age}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{friend.rc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DetailPage;
