import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

function UpdatePage() {
  const { id } = useParams(); 
  const [friend, setFriend] = useState({ name: "", age: "", rc: "" });
  const [editCount, setEditCount] = useState(0); 
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const rcRef = useRef(null);

  
  useEffect(() => {
    const fetchFriend = async () => {
      const response = await fetch(
        `https://6729c63f6d5fa4901b6e4b0c.mockapi.io/assignment_4/friend_list/${id}`
      );
      const data = await response.json();
      setFriend(data); 
    };
    fetchFriend();
  }, [id]);

 
  const handleChange = async (field, value) => {
   
    setFriend((prev) => ({ ...prev, [field]: value }));

   
    setEditCount((prev) => prev + 1);

  
    await fetch(
      `https://6729c63f6d5fa4901b6e4b0c.mockapi.io/assignment_4/friend_list/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...friend, [field]: value }),
      }
    );
  };

  
  const validateInputs = () => {
    if (!nameRef.current.value) alert("이름을 입력하세요.");
    if (!ageRef.current.value || isNaN(ageRef.current.value))
      alert("유효한 나이를 입력하세요.");
    if (!rcRef.current.value) alert("RC를 입력하세요.");
  };

  return (
    <div>
      <h1 style={{ fontWeight: "bold", textAlign: "center", margin: "20px" }}>
        Update Friend
      </h1>
      <form>
        
        <div style={{ fontWeight: "bold", margin: "20px" }} className="form-group">
          <label>이름</label>
          <input
            type="text"
            value={friend.name}
            ref={nameRef} 
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>

        
        <div style={{ fontWeight: "bold", margin: "20px" }} className="form-group">
          <label>나이</label>
          <input
            type="number"
            value={friend.age}
            ref={ageRef} 
            onChange={(e) => handleChange("age", e.target.value)}
          />
        </div>

      
        <div style={{ fontWeight: "bold", margin: "20px" }} className="form-group">
          <label>RC</label>
          <input
            type="text"
            value={friend.rc}
            ref={rcRef} 
            onChange={(e) => handleChange("rc", e.target.value)}
          />
        </div>
      </form>

     
      <p style={{ fontWeight: "bold", margin: "20px" }}>
        총 수정 횟수: {editCount}
      </p>

      
      <button style={{ fontWeight: "bold", margin: "20px" }} onClick={validateInputs}>
        유효성 검사
      </button>
    </div>
  );
}

export default UpdatePage;
