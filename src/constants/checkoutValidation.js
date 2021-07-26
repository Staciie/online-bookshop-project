import * as Yup from "yup";

export const PHONE_REG_EXP =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const newDate = new Date();
export const minDate = newDate.setDate(newDate.getDate() + 1);

export const CHECKOUT_OBJ = {
  city: "",
  address: "",
  phoneNumber: "",
  deliveryDate: new Date(minDate),
};

export const VALIDATION_SCHEMA = Yup.object().shape({
  city: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required(),
  address: Yup.string().required(),
  number: Yup.string()
    .max(10)
    .required()
    .matches(PHONE_REG_EXP, "Phone number is not valid"),
  deliveryDate: Yup.date().required(),
});
