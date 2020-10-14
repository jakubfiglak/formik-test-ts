import React from 'react';
import { FieldAttributes, useField } from 'formik';
import { FormControlLabel, Radio } from '@material-ui/core';

type MyRadioProps = {
  label: string;
} & FieldAttributes<{}>;

export const MyRadio = ({ label, ...props }: MyRadioProps) => {
  const [field] = useField(props);

  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};
