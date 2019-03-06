import React from "react";
import "./Messages.css";

const Message = (props) => {
  return (
    <div className="container-messages">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24Ex0UpYOaFW0Yb-d7RX0oIGArhjZ8DVzd860Lbra6IeJMjly"
        alt="Avatar"
      />
      <p>
        id {props.info.user_id}:
        {props.info.text}
      </p>
      {/* <button onClick={() => props.deleteHandler(props.info)}>Delete Message</button> */}
      <button onClick={() => props.editHandler(props.info)}>Edit Message</button>
      <span className="time-right">11:00</span>
    </div>
  );
};

export default Message;
