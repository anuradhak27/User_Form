import React from "react";
import Address from "./Address";
import Email from "./Email";
import Name from "./Name";
import Phone from "./Phone";
import { useNavigate } from "react-router-dom";

function Person() {
  const navigate = useNavigate();
  return (
    <div className="Person">
      <Name />
      <br />
      <Email />
      <br />
      <Phone />
      <br />
      <Address />
      <br />
      <button
        id="submit"
        onClick={() => {
          navigate("display");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Person;
