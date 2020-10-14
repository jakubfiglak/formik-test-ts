import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as yup from 'yup';
import {
  TextField,
  Checkbox,
  Button,
  Select,
  MenuItem,
} from '@material-ui/core';
import { MyRadio } from './MyRadio';
import { MyTextField } from './MyTextField';

const validationSchema = yup.object({
  firstName: yup.string().required().max(10),
  lastName: yup.string().required().max(10),
  pets: yup.array().of(
    yup.object({
      name: yup.string().required(),
    })
  ),
});

export const BasicForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: 'bob',
          lastName: 'smith',
          isTall: false,
          cookies: [],
          yogurt: '',
          pets: [{ type: 'cat', name: 'jarvis', id: `${Math.random()}` }],
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log('submit: ', data);
          setSubmitting(false);
        }}
        validationSchema={validationSchema}
      >
        {({ values, isSubmitting, errors }) => (
          <Form>
            <div>
              <MyTextField
                name="firstName"
                type="input"
                as={TextField}
                placeholder="first name"
              />
            </div>
            <div>
              <MyTextField
                name="lastName"
                type="input"
                as={TextField}
                placeholder="last name"
              />
            </div>
            <Field name="isTall" type="checkbox" as={Checkbox} />
            <div>cookies: </div>
            <Field
              name="cookies"
              type="checkbox"
              value="chocolate chip"
              as={Checkbox}
            />
            <Field
              name="cookies"
              type="checkbox"
              value="snickerdoodle"
              as={Checkbox}
            />
            <Field name="cookies" type="checkbox" value="sugar" as={Checkbox} />
            <div>yogurt:</div>
            <MyRadio name="yogurt" type="radio" value="peach" label="peach" />
            <MyRadio
              name="yogurt"
              type="radio"
              value="blueberry"
              label="blueberry"
            />
            <MyRadio name="yogurt" type="radio" value="apple" label="apple" />
            <FieldArray name="pets">
              {(arrayHelpers) => (
                <div>
                  <Button
                    onClick={() =>
                      arrayHelpers.push({
                        type: 'frog',
                        name: '',
                        id: `${Math.random()}`,
                      })
                    }
                  >
                    add pet
                  </Button>

                  {values.pets.map((pet, index) => {
                    return (
                      <div key={pet.id}>
                        <MyTextField
                          placeholder="pet name"
                          name={`pets.${index}.name`}
                        />
                        <div>
                          <Field
                            name={`pets.${index}.type`}
                            type="select"
                            as={Select}
                            variant="outlined"
                          >
                            <MenuItem value="cat">cat</MenuItem>
                            <MenuItem value="dog">dog</MenuItem>
                            <MenuItem value="frog">frog</MenuItem>
                          </Field>
                          <Button onClick={() => arrayHelpers.remove(index)}>
                            DELETE
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </FieldArray>
            <div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                submit
              </Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};
