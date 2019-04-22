import React from "react";
import "./NewMessageForm.css";

const NewMessageForm = props => {
  return (
    <div>
      <form onSubmit={event => props.onSubmitHandler(event)}>
        {/* <label for="text">For {props.activeTeam.name}</label> */}
        <input
          className="input-style"
          onChange={event => props.onChangeHandler(event)}
          value={props.value}
          name="text"
          type="text"
          placeholder="Enter Message Here!"
        />
        <button className="button-style">
          <i className="fas fa-arrow-circle-up fa-2x" />
        </button>
      </form>
    </div>
  );
};

export default NewMessageForm;
