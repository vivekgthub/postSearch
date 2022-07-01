import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Post() {
  const [result, setResult] = useState(null);
  const location = useLocation();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${location.state.id}`)
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
      });
  }, []);
  return (
    <>
      {!result ? (
        <div>
          <h1>Post</h1>
          <h2>Loading</h2>
        </div>
      ) : (
        <div>
          <h1>Post1</h1>
          <h1>{result.title}</h1>
          <p>{result.body}</p>
          <Link to="/">Back to home</Link>
        </div>
      )}
    </>
  );
}

export default Post;
