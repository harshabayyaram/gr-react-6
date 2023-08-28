import React, { useEffect, useState } from "react";

//axios
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => setData(res.data))
      .catch((err) => alert(err.message));
  }, []);
  console.log(data);

  const handleClick = () => {
    axios
      .post("http://localhost:5000", { message: text })
      .then((res) => console.log(res))
      .catch((err) => alert(err.message));
    setText("");
  };

  return (
    <div className="grid justify-center my-5 ">
      <input
        type="text"
        placeholder="Type something ..."
        max={20}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="my-5 p-2 outline-none"
        required
      />
      <div className="btn flex justify-center">
        <button
          className="bg-blue-500 p-2 rounded-xl w-[50%] text-white"
          onClick={handleClick}
        >
          Send to the Server
        </button>
      </div>
      <p className="my-10">From the Express Server</p>
      <p className="text-[20px] text-blue-500">{data?.message}</p>
    </div>
  );
};

export default App;
