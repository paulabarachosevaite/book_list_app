import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { toast } from "react-toastify";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section>
        <h1 className="sectionTitle">
          <FaSignInAlt /> Login
        </h1>
        <p className="sectionText">Please login</p>
      </section>
      <section className="formContainer">
        <form onSubmit={onSubmit}>
          <div className="inputGroup">
            <input
              className="inputGroupItem"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="inputGroup">
            <input
              className="inputGroupItem"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={onChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="centerElement">
            <button className="formSubmitBtn">Login</button>
          </div>
        </form>
      </section>
    </>
  );
}
export default Login;
