import React from "react";
import { Link } from "react-router-dom";

function FriendList({ friends }) {
  return (
    <div className="list-group">
      {friends.map((friend) => (
        <Link
          to={`/update/${friend.id}`}
          key={friend.id}
          className="list-group-item list-group-item-action"
        >
          {friend.id} - {friend.name}
        </Link>
      ))}
    </div>
  );
}

export default FriendList;
