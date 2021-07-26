/* eslint-disable no-return-assign */
import { React } from "react";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Formik, Form } from "formik";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import LocalShippingTwoToneIcon from "@material-ui/icons/LocalShippingTwoTone";

import { checkoutAsync, emptyCart } from "../../store/cartSlice";
import { cartListSelector } from "../../store/selectors";
import { InputField } from "./InputField";
import { useStyles } from "./checkoutForm.style";
import {
  minDate,
  CHECKOUT_OBJ,
  VALIDATION_SCHEMA,
} from "../../constants/checkoutValidation";

export function CheckoutForm({ onClose, open }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const cartItems = useSelector(cartListSelector);
  const order = {};
  cartItems.map((item) => (order[item.id] = item.count));

  const handleSubmit = (values) => {
    dispatch(emptyCart());
    dispatch(checkoutAsync({ order, ...values }));
  };
  return (
    <>
      <Formik
        initialValues={CHECKOUT_OBJ}
        validationSchema={VALIDATION_SCHEMA}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ setFieldValue, values }) => (
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
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DateTimePicker
                    ampm={false}
                    className={classes.input}
                    inputVariant="outlined"
                    label="Delivery date/time"
                    minDate={new Date(minDate)}
                    value={values.deliveryDate}
                    onChange={(date) => setFieldValue("deliveryDate", date)}
                  />
                </MuiPickersUtilsProvider>
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
    </>
  );
}
