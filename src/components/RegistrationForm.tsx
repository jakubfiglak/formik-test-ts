import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { TextField } from '@material-ui/core';
import { NameSubform } from './NameSubform';

const validationSchema = yup.object({
  firstName: yup.string().required().max(10),
  lastName: yup.string().required().max(10),
  email: yup.string().email().required(),
});

export const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        console.log('submit: ', data);
        setSubmitting(false);
      }}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <div>
          <Form>
            <NameSubform />
            <Field
              name="email"
              type="input"
              as={TextField}
              variant="outlined"
              label="email"
            />
          </Form>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </div>
      )}
    </Formik>
  );
};
