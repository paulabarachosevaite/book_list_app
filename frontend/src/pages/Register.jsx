import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords don't match");
    }
  };

  return (
    <>
      <section>
        <h1 className="sectionTitle">
          <FaUser /> Register
        </h1>
        <p className="sectionText">Please create an account</p>
      </section>
      <section className="formContainer">
        <form onSubmit={onSubmit}>
          <div className="inputGroup">
            <input
              className="inputGroupItem"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Enter your name"
              required
            />
          </div>
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
          <div className="inputGroup">
            <input
              className="inputGroupItem"
              type="password"
              name="password2"
              id="password2"
              value={password2}
              onChange={onChange}
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="centerElement">
            <button className="formSubmitBtn">Register</button>
          </div>
        </form>
      </section>
    </>
  );
}
export default Register;
