import useLogin from "./useLogin";
import s from "./Form.module.css";

const Form = ({ login }) => {
  const { handleSubmit, handleChange, userData, errors } = useLogin(login);
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.email}>
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
          className={errors.email && s.error || s.normal}
        />
        <p>{errors.email}</p>
      </div>
      <div className={s.password}>
        <input
          placeholder="Password"
          type="text"
          name="password"
          value={userData.password}
          onChange={handleChange}
          className={errors.password && s.error || s.normal}
        />
        <p>{errors.password}</p>
      </div>
      <div className={errors.submit && s.hidden}>
        <button type="submit">Ingresar</button>
      </div>
    </form>
  );
};

export default Form;
