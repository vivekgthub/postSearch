import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [id, setId] = useState("");
  let navigate = useNavigate();
  const getPost = (data) => {
    navigate("/post", { state: { id: data } });
  };
  return (
    <div>
      <h1>Welcome</h1>
      <h2>Search the post by ID</h2>
      <span>
        <label>
          {/* Post ID:{" "} */}
          <label data-testid='searchLabel' name='searchLabel'>Post ID:</label>
          <input placeholder="enter id to search"
            onChange={(eve) => {
              setId(eve.target.value);
            }}
          ></input>
        </label>
          <button
            onClick={() => {
              getPost(id);
            }}
          >
            Search
          </button>
      </span>
    </div>
  );
}

export default App;
