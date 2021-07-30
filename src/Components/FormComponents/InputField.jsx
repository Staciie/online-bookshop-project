import React from "react";
import { useField } from "formik";
import { TextField } from "@material-ui/core";

export function InputField(props) {
  const [field, meta] = useField(props);
  const { label, name, type, className } = props;
  const { value, onChange, onBlur } = field;
  const { touched, error } = meta;
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
      className={className}
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
