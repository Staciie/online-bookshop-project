import React from "react";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { useStyles } from "./checkoutForm.style";
import { minDate } from "../../constants/checkoutValidation";

export function Calendar(props) {
  const { label, values, setFieldValue } = props;
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        ampm={false}
        className={classes.input}
        inputVariant="outlined"
        label={label}
        minDate={new Date(minDate)}
        value={values.deliveryDate}
        onChange={(date) => setFieldValue("deliveryDate", date)}
      />
    </MuiPickersUtilsProvider>
  );
}
