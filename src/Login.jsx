import { FaApple, FaGoogle, FaFacebook } from "react-icons/fa";
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import "./Login.css"; // Import the CSS file

const Login = () => {
    const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms: false,
  });
   const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.terms) {
      alert("Please accept the terms and conditions.");
      return;
    }
    navigate("/dashboard");
  };
    
  return (
    <div className="login-container">
      
      {/* Left Panel */}
      <div className="login-left">
        <h2>Branding Section</h2>
      </div>

      {/* Right Panel */}
      <div className="login-right">
        <div className="login-card">
          {/* Title */}
          <div className="login-title">
            <h2>Create Account</h2>
            <p>Please fill in the details to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {/* Name Fields */}
            <div className="name-fields">
              <div>
                <label>First Name</label>
                <input type="text" name="firstName" value={form.firstName} onChange={handleChange}/>
              </div>
              <div>
                <label >Last Name</label>
                <input type="text" name="lastName" value={form.lastName} onChange={handleChange}/>
              </div>
            </div>

            {/* Email */}
            <div>
              <label>Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange}/>
            </div>

            {/* Password */}
            <div>
              <label>Password</label>
              <input type="password" name="password" value={form.password} onChange={handleChange}/>
            </div>

            {/* Checkbox */}
            <div className="checkbox">
              <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange} />
              <span>I agree to the terms and conditions</span>
            </div>

            {/* Submit Button */}
            <button type="submit" onClick={toggleTheme}>Create Account</button>

            {/* Divider */}
            <div className="divider">
              <hr />
              <span>OR</span>
              <hr />
            </div>

            {/* Social Buttons */}
            <div className="social-buttons">
              <button type="button">
                <FaApple /> Continue with Apple
              </button>
              <button type="button">
                <FaGoogle /> Continue with Google
              </button>
              <button type="button">
                <FaFacebook /> Continue with Meta
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Login;