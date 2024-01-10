import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Posts() {
  const [postsArray, setPostsArray] = useState([]);

  useEffect(() => {
    fetch(`https://social-media-project-s52o.onrender.com/posts`)
      .then((r) => r.json())
      .then((posts) => setPostsArray(posts))
  }, [])

  const element = <FontAwesomeIcon icon={faCoffee} />

  const postsElement = postsArray.map((post) => {
    return <h2>{post.name}</h2>
  });

  return (
    <div>
      {element}
      {postsElement}
    </div>
  );
}

export default Posts;