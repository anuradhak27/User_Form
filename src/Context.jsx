import React, { createContext } from "react";

export const person = {
  name: {
    firstName: "",
    middleName: "",
    lastName: "",
  },

  email: {
    primary_email: "",
    alternate_email: "",
  },

  phone: {
    phoneNo: "",
    alternateNo: "",
  },

  address: {
    door_no: "",
    street: "",
    district: "",
    state: "",
    pin_code: " ",
  },
};

export const userDetailsContext = createContext();
