import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Posts() {
  const [usersArray, setUsersArray] = useState([]);

  useEffect(() => {
    fetch(`https://social-media-project-s52o.onrender.com/users`)
      .then((r) => r.json())
      .then((users) => setUsersArray(users))
  }, [])

  const element = <FontAwesomeIcon icon={faCoffee} />

  const usersElement = usersArray.map((user) => {
    return <h2>{user.name}</h2>
  });

  return (
    <div>
      {element}
      {usersElement}
      <h1>will this work?</h1>
    </div>
  );
}

export default Posts;