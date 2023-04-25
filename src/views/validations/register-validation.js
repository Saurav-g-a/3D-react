const RValidation = (value) => {
  let error = {};

  if (!value.name) {
    error.name = "name Required";
  } else if (value.name.length < 4) {
    error.name = "Name must be more than 4 char";
  }

  if (!value.email) {
    error.email = "email Required";
  } else if (value.email.length < 5) {
    error.email = "Email must be more than 5 char";
  }

  if (!value.password) {
    error.password = "Password Required";
  } 
  else if (value.password.length < 5) {
    error.password = "Password must be more than 5 char";
  }

  if (!value.c_password) {
    error.c_password = "Confirm Password Required";
  } else if (value.c_password.length < 5) {
    error.c_password = "password must be more than 5 char";
  }

  return error;
};

export default RValidation;
