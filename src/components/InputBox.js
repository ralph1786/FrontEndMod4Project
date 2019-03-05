import React from "react";

const textarea = {
  width: "70%",
  height: "30px",
  margin: "35px 0px 0px 30px",
  fontSize: "20px"
};

const InputBox = () => {
  return (
    <div>
      <textarea type="text" placeholder="type here!" style={textarea} />
      <button>Send</button>
    </div>
  );
};

export default InputBox;
