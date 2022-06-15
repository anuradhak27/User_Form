import React, { useContext, useState } from "react";
import { userDetailsContext } from "../Context";

function Email() {
  const { dispatch } = useContext(userDetailsContext);
  const [email, setemail] = useState({
    pemail: "",
    semail: "",
  });

  const changeHandler = e => {
    setemail(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch({
      type: "save_email",
      payload: email,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <details>
        <summary>
          <h3>Email</h3>
          <button>save</button>
        </summary>

        <div>
          <label>Primary Email : </label>
          <input
            type="email"
            name="pemail"
            value={email.pemail}
            required
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>Secondary Email : </label>
          <input
            type="email"
            name="semail"
            value={email.semail}
            required
            onChange={changeHandler}
          />
        </div>
      </details>
    </form>
  );
}

export default Email;
