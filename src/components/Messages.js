import React from "react";
import "./Messages.css";

const Messages = () => {
  return (
    <div className="container-messages">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24Ex0UpYOaFW0Yb-d7RX0oIGArhjZ8DVzd860Lbra6IeJMjly"
        alt="Avatar"
      />
      <p>
        Hello. How are you? asdfasdfasdfasdfsdafasdfa dsfasdfasdfsadfadsfadsf
        asdfadsfadsfasdfasd
      </p>
      <span className="time-right">11:00</span>
    </div>
  );
};

export default Messages;
