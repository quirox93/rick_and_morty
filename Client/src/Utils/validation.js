export const validations = (inputs) => {
  const errors = {};
  const regexEmail =
    /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/i;
  const validEmail = regexEmail.test(inputs.email) && inputs.email.length <= 35;
  errors["email"] = "";
  if (!validEmail) {
    errors["email"] = "Debes ingresar un email valido";
  } 
  return errors;
};
