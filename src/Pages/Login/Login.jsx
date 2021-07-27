import { React } from "react";
import { Formik, Form } from "formik";
import { Box, Button, Typography } from "@material-ui/core";
import VpnKeyTwoToneIcon from "@material-ui/icons/VpnKeyTwoTone";

import { useStyles } from "./login.style";
import { InputField } from "../../components/FormComponents/InputField";
import {
  CHECKOUT_OBJ,
  VALIDATION_SCHEMA,
} from "../../constants/LoginValidation";
import { history } from "../../store/history";

export function Login() {
  const classes = useStyles();
  const handleSubmit = () => history.push("/books");
  return (
    <Formik
      initialValues={CHECKOUT_OBJ}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {() => (
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
      )}
    </Formik>
  );
}
