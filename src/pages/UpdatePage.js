import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

function UpdatePage() {
  const { id } = useParams(); // URL에서 ID 가져오기
  const [friend, setFriend] = useState({ name: "", age: "", rc: "" });
  const [editCount, setEditCount] = useState(0); // 수정 횟수
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const rcRef = useRef(null);

  // 페이지 로드 시 친구 데이터 가져오기
  useEffect(() => {
    const fetchFriend = async () => {
      const response = await fetch(
        `https://6729c63f6d5fa4901b6e4b0c.mockapi.io/assignment_4/friend_list/${id}`
      );
      const data = await response.json();
      setFriend(data); // 데이터 로드
    };
    fetchFriend();
  }, [id]);

  // 수정 시 호출되는 함수
  const handleChange = async (field, value) => {
    // 1. 로컬 state 업데이트
    setFriend((prev) => ({ ...prev, [field]: value }));

    // 2. 수정 횟수 증가
    setEditCount((prev) => prev + 1);

    // 3. 서버 업데이트
    await fetch(
      `https://6729c63f6d5fa4901b6e4b0c.mockapi.io/assignment_4/friend_list/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...friend, [field]: value }),
      }
    );
  };

  // 유효성 검사 (useRef 활용)
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
        {/* 이름 수정 */}
        <div style={{ fontWeight: "bold", margin: "20px" }} className="form-group">
          <label>이름</label>
          <input
            type="text"
            value={friend.name}
            ref={nameRef} // 유효성 검사용
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>

        {/* 나이 수정 */}
        <div style={{ fontWeight: "bold", margin: "20px" }} className="form-group">
          <label>나이</label>
          <input
            type="number"
            value={friend.age}
            ref={ageRef} // 유효성 검사용
            onChange={(e) => handleChange("age", e.target.value)}
          />
        </div>

        {/* RC 수정 */}
        <div style={{ fontWeight: "bold", margin: "20px" }} className="form-group">
          <label>RC</label>
          <input
            type="text"
            value={friend.rc}
            ref={rcRef} // 유효성 검사용
            onChange={(e) => handleChange("rc", e.target.value)}
          />
        </div>
      </form>

      {/* 수정 횟수 */}
      <p style={{ fontWeight: "bold", margin: "20px" }}>
        총 수정 횟수: {editCount}
      </p>

      {/* 유효성 검사 버튼 */}
      <button style={{ fontWeight: "bold", margin: "20px" }} onClick={validateInputs}>
        유효성 검사
      </button>
    </div>
  );
}

export default UpdatePage;
