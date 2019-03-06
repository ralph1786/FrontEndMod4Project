import React from "react";

const stylesTextArea = {
  position: "absolute",
  bottom: "0",
  width: "90%",
  height: "7%",
  fontSize: "1.4em"
};

const stylesButton = {
  position: "absolute",
  right: "0",
  bottom: "0",
  width: "10%",
  height: "7%",
  fontSize: "1.4em",
  backgroundColor: "#007AFF",
  color: "white"
};

const NewMessageForm = props => {
  return (
    <div>
      <form onSubmit={event => props.onSubmitHandler(event)}>
        {/* <label for="text">For {props.activeTeam.name}</label> */}
        <br />
        <textarea
          style={stylesTextArea}
          onChange={event => props.onChangeHandler(event)}
          value={props.value}
          name="text"
          type="textarea"
          placeholder="type here!"
        />
        <button style={stylesButton}>
          <i class="fas fa-arrow-circle-up fa-2x" />
        </button>
      </form>
    </div>
  );
};

export default NewMessageForm;
