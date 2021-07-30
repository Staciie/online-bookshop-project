const yup = require("yup");
require("yup-password")(yup);

export const PHONE_REG_EXP =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const newDate = new Date();
export const minDate = newDate.setDate(newDate.getDate() + 1);

export const CHECKOUT_OBJ = {
  email: "",
  password: "",
};

export const VALIDATION_SCHEMA = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .password()
    .min(6)
    .minSymbols(0)
    .matches("^[a-zA-Z0-9_.-]*$", "password mustn't contain symbols")
    .required(),
});

export const USERS = [
  { email: "123@gmail.com", password: "Aa12345" },
  { email: "makey15069@insgogc.com", password: "XRkQl1aq" },
  { email: "evet1950@rhyta.com", password: "PTfr4KPh" },
  { email: "taxemab9@mail.com", password: "RykE84fe" },
];
