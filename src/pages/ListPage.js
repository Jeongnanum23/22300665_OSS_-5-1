import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FriendList from "../components/FriendList";

function ListPage() {
  const [friends, setFriends] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    const response = await fetch("https://6729c63f6d5fa4901b6e4b0c.mockapi.io/assignment_4/friend_list");
    const data = await response.json();
    setFriends(data);
  };

  const handleFriendClick = (id) => {
    // 친구 이름을 클릭하면 해당 친구의 ID를 가지고 Update 페이지로 이동
    navigate(`/update/${id}`);
  };

  return (
    <div>
      <h1 style={{fontWeight: "bold", textAlign: "center", margin: "20px"}}>Friend List</h1>
      <FriendList friends={friends} onFriendClick={handleFriendClick} />
      <button onClick={() => navigate("/detail")} style={{margin:"10px" }}>디테일 보기</button>
      <button onClick={() => navigate("/create")}>친구 추가</button>
    </div>
  );
}

export default ListPage;
