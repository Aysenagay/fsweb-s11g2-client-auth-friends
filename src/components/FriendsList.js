import { useEffect, useState } from "react";
import { axiosWithAuth } from "./axiosAuth";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get(`/api/friends`)
      .then((response) => {
        setFriends(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h1>FRIENDS LIST</h1>
      <ul>
        {friends.map((item) => (
          <li key={item.id}>
            -{item.name}-{item.email}
          </li>
        ))}
      </ul>
    </>
  );
}
