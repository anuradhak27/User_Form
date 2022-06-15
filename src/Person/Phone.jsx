import { useContext, useState } from "react";
import { userDetailsContext } from "../Context";

function Phone() {
  const { dispatch } = useContext(userDetailsContext);

  const [Phone, setPhone] = useState({
    primary_phoneNo: "",
    secondary_phoneNo: "",
  });

  const submitHandler = e => {
    e.preventDefault();
    dispatch({
      type: "save_phone",
      payload: Phone,
    });
  };

  const changeHandler = e => {
    setPhone(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={submitHandler}>
      <details>
        <summary>
          <h3>Phone</h3>
          <button>save</button>
        </summary>

        <div>
          <label>Phone No : </label>
          <input
            type="text"
            required
            name="primary_phoneNo"
            value={Phone.primary_phoneNo}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>Alternate Phone No : </label>
          <input
            type="text"
            name="secondary_phoneNo"
            value={Phone.secondary_phoneNo}
            onChange={changeHandler}
          />
        </div>
      </details>
    </form>
  );
}

export default Phone;
