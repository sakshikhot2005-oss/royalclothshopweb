export function validateEmail(
  email
) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );
}

export function validatePassword(
  password
) {
  return (
    password &&
    password.length >= 6
  );
}

export function validateRequired(
  value
) {
  return (
    value !== undefined &&
    value !== null &&
    String(value).trim() !== ""
  );
}

export function validateRegisterForm(
  data
) {
  const errors = {};

  if (
    !validateRequired(
      data.name
    )
  ) {
    errors.name =
      "Name is required";
  }

  if (
    !validateEmail(
      data.email
    )
  ) {
    errors.email =
      "Valid email is required";
  }

  if (
    !validatePassword(
      data.password
    )
  ) {
    errors.password =
      "Password must contain at least 6 characters";
  }

  if (
    data.confirmPassword !==
    data.password
  ) {
    errors.confirmPassword =
      "Passwords do not match";
  }

  return errors;
}