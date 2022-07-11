import { React, useState } from "react";
import { Formik, Form } from "formik";
import { Box, Button, Typography } from "@material-ui/core";
import VpnKeyTwoToneIcon from "@material-ui/icons/VpnKeyTwoTone";
import { useDispatch } from "react-redux";

import { login } from "../../store/uiSlice";
import { useStyles } from "./login.style";
import { InputField } from "../../Components/FormComponents/InputField";
import { CustomizedSnackbars } from "../../Components/Snackbar/Snackbar";
import {
  CHECKOUT_OBJ,
  VALIDATION_SCHEMA,
} from "../../constants/LoginValidation";

export function Login() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleSubmit = (values) => {
    dispatch(login({ values, setOpen }));
  };

  return (
    <>
      <CustomizedSnackbars open={open} setOpen={setOpen} />
      <Formik
        initialValues={CHECKOUT_OBJ}
        validationSchema={VALIDATION_SCHEMA}
        onSubmit={handleSubmit}
      >
        <Box className={classes.container}>
          <Form className={classes.form}>
            <Typography variant="h5" component="h5" className={classes.title}>
              <VpnKeyTwoToneIcon className={classes.icon} />
              Log In
            </Typography>
            <InputField
              className={classes.input}
              type="text"
              label="E-mail"
              name="email"
            />
            <InputField
              className={classes.input}
              type="password"
              label="Password"
              name="password"
            />
            <Button className={classes.root} type="submit">
              Log In
            </Button>
          </Form>
        </Box>
      </Formik>
    </>
  );
}
