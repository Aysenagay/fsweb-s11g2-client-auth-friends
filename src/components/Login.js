import { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "./axiosAuth";

export default function Login() {
  const [form, setForm] = useState({
    username: "workintech",
    password: "wecandoit",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    axiosWithAuth()
      .post(`/api/login`, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/friendslist");
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label className="">
          USERNAME:
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </label>
        <label className="">
          PASSWORD:
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
