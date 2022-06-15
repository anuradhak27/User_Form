import React, { useContext, useState } from "react";
import { userDetailsContext } from "../Context";

function Address() {
  const { dispatch } = useContext(userDetailsContext);
  const [address, setaddress] = useState({
    door_no: "",
    street: "",
    district: "",
    state: "",
    pincode: "",
  });

  const submitHandler = e => {
    e.preventDefault();
    dispatch({
      type: "save_address",
      payload: address,
    });
  };

  const changeHandler = e => {
    setaddress(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form onSubmit={submitHandler}>
      <details>
        <summary>
          <h3>Address</h3>
          <button>save</button>
        </summary>

        <div>
          <label>Door No:</label>
          <input
            type="number"
            required
            name="door_no"
            value={address.door_no}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Street:</label>
          <input
            type="text"
            required
            name="street"
            value={address.street}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>District:</label>
          <input
            type="text"
            required
            name="district"
            value={address.district}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>State:</label>
          <input
            type="text"
            required
            name="state"
            value={address.state}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>Pin Code:</label>
          <input
            type="number"
            required
            name="pincode"
            value={address.pincode}
            onChange={changeHandler}
          />
        </div>
      </details>
    </form>
  );
}

export default Address;
