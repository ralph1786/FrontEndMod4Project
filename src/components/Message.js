import React from "react";
import "./Messages.css";
import moment from "moment";

const Message = props => {
  const time = moment(props.info.created_at).format("h:mm");
  return (
    <div className="container-messages">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24Ex0UpYOaFW0Yb-d7RX0oIGArhjZ8DVzd860Lbra6IeJMjly"
        alt="Avatar"
      />
      <p>{props.info.text}</p>
      <span className="time-right">{time}</span>
    </div>
  );
};

export default Message;
