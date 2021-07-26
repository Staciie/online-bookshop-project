import { React, useState } from "react";
import { Formik, Form } from "formik";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import LocalShippingTwoToneIcon from "@material-ui/icons/LocalShippingTwoTone";
import { useRouteMatch } from "react-router-dom";

import { history } from "../../store/history";
import { checkoutAsync } from "../../store/cartSlice";
import { InputField } from "./InputField";
import { useStyles } from "./checkoutForm.style";
import {
  CHECKOUT_OBJ,
  VALIDATION_SCHEMA,
} from "../../constants/checkoutValidation";
import { Calendar } from "./Calendar";

export function CheckoutForm() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const match = useRouteMatch("/cart/checkout");
  const onClose = history.goBack;
  const open = useState(Boolean(match));

  const handleSubmit = (values) => {
    try {
      dispatch(checkoutAsync(values));
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <Formik
      initialValues={CHECKOUT_OBJ}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Dialog onClose={onClose} open={open} fullWidth>
          <DialogTitle
            id="dialog-form-title"
            className={classes.title_container}
          >
            <Typography className={classes.title} variant="h5" component="h5">
              <LocalShippingTwoToneIcon
                className={classes.icon}
                fontSize="large"
              />
              Shipping details
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Form className={classes.form_container}>
              <InputField name="city" label="City" type="text" />
              <InputField name="address" label="Address" type="text" />
              <InputField name="number" label="Phone number" type="text" />
              <Calendar
                label="Delivery date/time"
                values={values}
                setFieldValue={setFieldValue}
              />
              <DialogActions className={classes.action_container}>
                <Button className={classes.root} type="submit">
                  Submit
                </Button>
              </DialogActions>
            </Form>
          </DialogContent>
        </Dialog>
      )}
    </Formik>
  );
}
