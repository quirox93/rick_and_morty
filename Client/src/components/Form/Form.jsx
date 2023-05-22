import { useState } from "react";
import { validations } from "../../Utils/validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newUserData = {
      ...userData,
      [name]: value,
    };
    setUserData(newUserData);
    const errors = validations(newUserData);
    setErrors(errors);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        {errors.email}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit"></button>
    </form>
  );
};

export default Form;
