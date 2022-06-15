import { useContext } from "react";
import { userDetailsContext } from "./Context";

function Display() {
  const { new_person } = useContext(userDetailsContext);
  const person_array = Object.entries(new_person);
  return (
    <div>
      <h2>Thank you for registering {new_person.name.firstName}</h2>
      {
        <div>
          <h2>User Details :</h2>
          <span>
            {new_person.name.firstName + " "}
            {new_person.name.middleName + " "}
            {new_person.name.lastName + " "}
          </span>
          <br />
          <span>
            {new_person.email.primary_email + " "}
            {"[ " + new_person.email.alternate_email + " ]"}
          </span>
          <br />
          <span>
            {new_person.phone.phoneNo + " "}
            {"[ " + new_person.phone.alternateNo + " ]"}
          </span>
          <br />
          <span>
            {new_person.address.door_no + " "}
            {new_person.address.street + " "}
            {new_person.address.district + " "}
            {new_person.address.state + " "}
            {new_person.address.pin_code + " "}
          </span>
        </div>
      }
      <hr />
    </div>
  );
}

export default Display;
