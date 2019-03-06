import React from "react";

const NewMessageForm = props => {
  return (
    <div>
      <form onSubmit={event => props.onSubmitHandler(event)}>
        <label for="text">For {props.activeTeam.name}</label>
        <br />
        <textarea
          onChange={event => props.onChangeHandler(event)}
          value={props.value}
          name="text"
          type="textarea"
          placeholder="type here!"
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default NewMessageForm;
