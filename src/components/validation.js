function validation(value) {
  let error = {};
  if (!value.name) {
    error.name = "Name is required";
  }
  if (!value.email) {
    error.email = "Email is required";
  } else if (!/\$+@\$+\.\$+/.test(value.email)) {
    error.email = "Email is invalid.";
  }
  return error;
}

export default validation;
