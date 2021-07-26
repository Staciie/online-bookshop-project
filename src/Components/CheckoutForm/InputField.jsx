import React from "react";
import { useField } from "formik";
import { TextField } from "@material-ui/core";

import { useStyles } from "./checkoutForm.style";

export function InputField(props) {
  const [field, meta] = useField(props);
  const { label, name, type } = props;
  const { value, onChange, onBlur } = field;
  const { touched, error } = meta;
  const classes = useStyles();
  const handleChange = (e) => {
    onChange(e);
    if (props.onChange) props.onChange(value);
  };

  const handleBlur = (e) => {
    onBlur(e);
    if (props.onBlur) props.onBlur(value);
  };

  return (
    <TextField
      className={classes.input}
      variant="outlined"
      fullWidth="true"
      margin="dense"
      {...field}
      name={name}
      type={type}
      label={label}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched && Boolean(error)}
      helperText={touched && error}
    />
  );
}
