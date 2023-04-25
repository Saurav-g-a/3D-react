const PValidation = (value) => {
    let error = {};
  
    if (!value.name) {
      error.name = "name Required";
    } else if (value.name.length < 4) {
      error.name = "Name must be more than 4 char";
    }
  
    if (!value.title) {
      error.title = "Product title Required";
    } else if (value.title.length < 5) {
      error.title = "Product title must be more than 5 char";
    }
  
    if (!value.tag) {
      error.tag = "Password Required";
    } 
    else if (value.tag.length < 5) {
      error.tag = "Password must be more than 5 char";
    }
  
    if (!value.embed_code) {
      error.embed_code = "Confirm Password Required";
    } else if (value.embed_code.length < 5) {
      error.embed_code = "password must be more than 5 char";
    }
  
    return error;
  };
  
  export default PValidation;
  