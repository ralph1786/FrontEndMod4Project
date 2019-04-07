import React from "react";

const stylesInput = {
  position: "fixed",
  bottom: "20px",
  width: "48%",
  height: "7%",
  fontSize: "1.4em",
  borderRadius: "25px",
  outline: "none",
  marginLeft: "23px",
  textAlign: "center"
};

const stylesButton = {
  position: "fixed",
  right: "41.5%",
  bottom: "20px",
  width: "7%",
  height: "7%",
  fontSize: "1.4em",
  backgroundColor: "#007AFF",
  color: "white",
  borderRadius: "50px",
  marginRight: "23px",
  outline: "none"
};

const NewMessageForm = props => {
  return (
    <div>
      <form onSubmit={event => props.onSubmitHandler(event)}>
        {/* <label for="text">For {props.activeTeam.name}</label> */}
        <input
          style={stylesInput}
          onChange={event => props.onChangeHandler(event)}
          value={props.value}
          name="text"
          type="text"
          placeholder="Enter Message Here!"
        />
        <button style={stylesButton}>
          <i className="fas fa-arrow-circle-up fa-2x" />
        </button>
      </form>
    </div>
  );
};

export default NewMessageForm;
