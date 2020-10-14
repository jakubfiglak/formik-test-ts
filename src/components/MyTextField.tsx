import React from 'react';
import { FieldAttributes, useField } from 'formik';
import { TextField } from '@material-ui/core';

export const MyTextField = (props: FieldAttributes<{}>) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <TextField
      variant="outlined"
      {...field}
      helperText={errorText}
      error={meta.touched && !!meta.error}
    />
  );
};
