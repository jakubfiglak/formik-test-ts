import React from 'react';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

export const NameSubform = () => {
  const [firstNameField, firstNameMeta] = useField('firstName');
  const [lastNameField, lastNameMeta] = useField('lastName');

  return (
    <>
      <TextField
        {...firstNameField}
        variant="outlined"
        label="first name"
        error={!!firstNameMeta.error && firstNameMeta.touched}
        helperText={
          !!firstNameMeta.error && firstNameMeta.touched && firstNameMeta.error
        }
      />
      <TextField
        {...lastNameField}
        variant="outlined"
        label="last name"
        error={!!lastNameMeta.error && lastNameMeta.touched}
        helperText={
          !!lastNameMeta.error && lastNameMeta.touched && lastNameMeta.error
        }
      />
    </>
  );
};
