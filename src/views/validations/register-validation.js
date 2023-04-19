const RValidation = (value) => {
  let error = {};

  if (!value.name) {
    error.name = "name Required";
  } else if (value.name.length < 5) {
    error.name = "name must be more than 5 char";
  }

  if (!value.email) {
    error.email = "email Required";
  } else if (value.email.length < 5) {
    error.email = "name must be more than 5 char";
  }

  if (!value.password) {
    error.password = "password Required";
  } else if (value.password.length < 9) {
    error.password = "password must be more than 5 char";
  }

  if (!value.c_password) {
    error.c_password = "password Required";
  } else if (value.c_password.length < 9) {
    error.c_password = "password must be more than 5 char";
  }

  return error;
};

export default RValidation;
