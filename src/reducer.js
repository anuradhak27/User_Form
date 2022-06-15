export default function reducer(person, action) {
  switch (action.type) {
    case "save_name":
      return {
        ...person,
        name: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          middleName: action.payload.middleName,
        },
      };

    case "save_phone":
      return {
        ...person,
        phone: {
          phoneNo: action.payload.primary_phoneNo,
          alternateNo: action.payload.secondary_phoneNo,
        },
      };

    case "save_email":
      return {
        ...person,
        email: {
          primary_email: action.payload.pemail,
          alternate_email: action.payload.semail,
        },
      };

    case "save_address":
      return {
        ...person,
        address: {
          door_no: action.payload.door_no,
          street: action.payload.street,
          district: action.payload.district,
          state: action.payload.state,
          pin_code: action.payload.pincode,
        },
      };

    default:
      return person;
  }
}
