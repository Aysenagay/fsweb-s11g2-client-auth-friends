import { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "./axiosAuth";

export default function AddFriends() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    axiosWithAuth()
      .post(`/api/friends`, data)
      .then((res) => {
        setData({ name: "", email: "" });
        history.push("/friendslist");
      })
      .catch((err) => {
        setData({ name: "", email: "" });
      });
  }

  return (
    <>
      <h1>ADD FRIEND</h1>
      <form onSubmit={handleSubmit}>
        <label className="">
          NAME:
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </label>
        <label className="">
          EMAIL:
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
