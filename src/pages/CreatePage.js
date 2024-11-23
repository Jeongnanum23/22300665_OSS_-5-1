import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function CreatePage() {
  const [friend, setFriend] = useState({ name: "", age: "", rc: "" });
  const nameRef = useRef();
  const ageRef = useRef();
  const rcRef = useRef();
  const navigate = useNavigate();

  const addFriend = async () => {
    if (!friend.name || !friend.age || !friend.rc) {
      alert("모든 필드를 입력하세요!");
      return;
    }

    await fetch("https://6729c63f6d5fa4901b6e4b0c.mockapi.io/assignment_4/friend_list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(friend),
    });

    navigate("/list");
  };

  return (
    <div>
      <h1 style={{ontWeight: "bold", textAlign: "center", margin: "20px"}}>Create Friend</h1>
      <div style={{margin:"10px"}}>
        <label>Name:</label>
        <input
          ref={nameRef}
          type="text"
          value={friend.name}
          onChange={(e) => setFriend({ ...friend, name: e.target.value })}
        />
      </div>
      <div style={{margin:"10px"}}>
        <label>Age:</label>
        <input
          ref={ageRef}
          type="number"
          value={friend.age}
          onChange={(e) => setFriend({ ...friend, age: e.target.value })}
        />
      </div>
      <div style={{margin:"10px"}}>
        <label>RC:</label>
        <input
          ref={rcRef}
          type="text"
          value={friend.rc}
          onChange={(e) => setFriend({ ...friend, rc: e.target.value })}
        />
      </div>
      <button style={{margin:"10px"}} onClick={addFriend}>Add Friend</button>
    </div>
  );
}

export default CreatePage;
