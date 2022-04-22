import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { Form } from "./components/Form";
import { Card } from "./components/Card";

export const App = () => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [errorMsg, setErrorMsg] = useState("请在上方的搜索栏输入Github User");

  const submit = (username) => {
    getUser(username);
    setErrorMsg("");
  };

  const APIURL = "https://api.github.com/users/";

  const getRepos = async (username) => {
    try {
      const { data } = await axios.get(
        APIURL + username + "/repos?sort=created"
      );
      setRepos(data);
      setErrorMsg("");
    } catch (error) {
      console.error(error);
      setErrorMsg("Problem fetching repos");
    }
  };

  const getUser = async (username) => {
    try {
      const { data } = await axios.get(APIURL + username);
      setUser(data);
      getRepos(username);
    } catch (error) {
      if (error.response.status === 404) {
        setErrorMsg("No Profile with this username");
      }
    }
  };

  return (
    <div className="container">
      <Form search={submit} />
      <Card user={user} repos={repos} errorMsg={errorMsg} />
    </div>
  );
};
