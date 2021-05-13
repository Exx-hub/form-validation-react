export const validate = (values) => {
  let errors = {};
  if (Object.keys(values) !== 0) {
    if (!values.username) {
      errors.username = "Username is required.";
    }
    if (!values.password) {
      errors.password = "Password is required.";
    } else if (values.password.length < 6) {
      errors.password = "Password needs to have at least 6 characters.";
    }
    if (!values.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S/.test(values.email)) {
      errors.email = "Please enter a valid email.";
    }
    if (!values.confirm) {
      errors.confirm = "Need to confirm password.";
    } else if (values.confirm !== values.password) {
      errors.confirm = "Passwords do not match.";
    }
  }

  return errors;
};
