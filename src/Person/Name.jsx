import React, { useContext, useState, useRef, Fragment } from "react";
import { userDetailsContext } from "../Context";

function Name() {
  const { dispatch } = useContext(userDetailsContext);
  const [name, setName] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
  });

  const changeHandler = e => {
    setName(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const submitHandler = e => {
    e.preventDefault();

    dispatch({
      type: "save_name",
      payload: name,
    });
  };

  return (
    <form onSubmit={submitHandler} class="name">
      <details>
        <summary className="summary">
          <h3>Name</h3>
          <button>save</button>
        </summary>
        <div>
          <label>First Name : </label>
          <input
            type="text"
            required
            name="firstName"
            value={name.firstName}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Middle Name : </label>
          <input
            type="text"
            name="middleName"
            value={name.middleName}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Last Name : </label>
          <input
            type="text"
            required
            name="lastName"
            value={name.lastName}
            onChange={changeHandler}
          />
        </div>
      </details>
    </form>
  );
}

export default Name;
