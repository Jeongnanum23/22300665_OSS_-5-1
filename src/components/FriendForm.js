import React, { useState } from 'react';

function FriendForm({ onSubmit, initialData = {} }) {
  const [name, setName] = useState(initialData.name || '');
  const [age, setAge] = useState(initialData.age || '');
  const [rc, setRc] = useState(initialData.rc || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, age, rc });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>이름</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>나이</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>
        <label>RC</label>
        <input type="text" value={rc} onChange={(e) => setRc(e.target.value)} />
      </div>
      <button type="submit">저장</button>
    </form>
  );
}

export default FriendForm;
