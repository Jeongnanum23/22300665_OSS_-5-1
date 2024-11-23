import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FriendList from "../components/FriendList";

function ListPage() {
  const [friends, setFriends] = useState([]);
  const [idToDelete, setIdToDelete] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    const response = await fetch("https://6729c63f6d5fa4901b6e4b0c.mockapi.io/assignment_4/friend_list");
    const data = await response.json();
    setFriends(data);
  };

 
  const deleteFriend = async (id) => {
    if (!id) {
      alert("ID를 입력하세요!");
      return;
    }

    const response = await fetch(
      `https://6729c63f6d5fa4901b6e4b0c.mockapi.io/assignment_4/friend_list/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      
      setFriends(friends.filter(friend => friend.id !== id));
      alert("친구가 삭제되었습니다.");
    } else {
      alert("삭제에 실패했습니다.");
    }
  };

  return (
    <div>
      <h1 style={{ fontWeight: "bold", textAlign: "center", margin: "20px" }}>Friend List</h1>
      <FriendList friends={friends} />

      
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="ID"
          value={idToDelete}
          onChange={(e) => setIdToDelete(e.target.value)}
          style={{ padding: "10px", marginRight: "10px" }}
        />
        <button
          onClick={() => deleteFriend(idToDelete)}
          style={{ padding: "10px", backgroundColor: "red", color: "white",margin: "10px" }}
        >
          삭제
        </button>
      </div>

      <button onClick={() => navigate("/detail")} style={{ margin: "10px" }}>
        디테일 보기
      </button>
      <button onClick={() => navigate("/create")}>친구 추가</button>
    </div>
  );
}

export default ListPage;
