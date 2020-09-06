import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserData } from "../../redux/actions/userActions";
import axios from "axios";

const User = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const getUser = useCallback((id, history) =>
    dispatch(getUserData(id), [dispatch])
  );

  const [user, setUser] = useState({});

  useEffect(() => {
    console.log("enter in useEffect");
    axios
      .get(`http://localhost:5000/api/auth/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>User info</h2>
      {user}
    </div>
  );
};

export default User;
