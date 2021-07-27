import React from "react";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useField } from "formik";

import { useStyles } from "./checkoutForm.style";
import { minDate } from "../../constants/checkoutValidation";

export function Calendar(props) {
  const [meta, helpers] = useField(props);
  const { value } = meta;
  const { setValue } = helpers;
  const { label } = props;
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        ampm={false}
        className={classes.input}
        inputVariant="outlined"
        label={label}
        minDate={new Date(minDate)}
        value={value.deliveryDate}
        onChange={(date) => setValue("deliveryDate", date)}
      />
    </MuiPickersUtilsProvider>
  );
}
