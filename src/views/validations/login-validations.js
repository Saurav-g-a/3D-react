const Validation = (value) => {
  let error = {};

  if (!value.email) {
    error.email = "email Required";
  } else if (value.email.length < 5) {
    error.email = "name must be more than 5 char";
  }

  if (!value.password) {
    error.password = "password Required";
  } else if (value.password.length < 5) {
    error.password = "password must be more than 5 char";
  }

  return error;
};

export default Validation;
