import React from 'react';
// TODO: import useFormik from formik library
import { useFormik } from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Field Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Username should be an email';
    }

    if (!values.password) {
      errors.password = 'Field required';
    } else if (values.password.length < 6) {
      errors.password = 'Must be 6 characters or more';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      //alert login successful when there are no errors on submit
      if (Object.keys(validate(values).length === 0)) {
        alert('login successful');
      }
    },
    validate,
    onChange: (e) => {
      console.log(formik.values);
    },
  });

  return (
    <div>
      <p>
        The app is ready! You can proceed with the task instructions. TODO:
        build your form here.
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div>Username</div>
        <input
          type="text"
          name="email"
          id="emailField"
          onChange={formik.handleChange}
          value={formik.values.email}
        ></input>
        {formik.errors.email ? (
          <div id="emailError" style={{ color: 'red' }}>
            {formik.errors.email}
          </div>
        ) : null}

        <div>Password</div>
        <input
          type="text"
          name="password"
          id="pswField"
          onChange={formik.handleChange}
          value={formik.values.password}
        ></input>
        {formik.errors.password ? (
          <div id="pswError" style={{ color: 'red' }}>
            {formik.errors.password}
          </div>
        ) : null}

        <div>
          <button type="submit" id="submitBtn" value="Submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
