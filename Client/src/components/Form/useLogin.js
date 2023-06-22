import { useState } from "react";

const regexEmail =
  /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/i;
const validations = {
  email: (value) =>
    regexEmail.test(value) && value.length <= 35
      ? ""
      : "Ingrese un email valido.",
  password: (value) =>
    value.length > 5 && value.length <= 15
      ? ""
      : "Ingrese entre 6 y 15 caracteres.",
};

const useLogin = (login) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    submit: true,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newUserData = {
      ...userData,
      [name]: value,
    };
    setUserData(newUserData);
    const newErrors = { ...errors, [name]: validations[name](value) };
    newErrors.submit =
      !newUserData.email ||
      !newUserData.password ||
      newErrors.email ||
      newErrors.password;
    console.log(newErrors);
    setErrors(newErrors);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return { handleSubmit, handleChange, userData, errors };
};

export default useLogin;
