import InputText from "../components/Input/InputText";
import Button from "../components/button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = () => {
    if (username === "Carl" && password === "123") {
      onLogin();
      navigate("/tasks");
    } else {
      setError("Username or password is not correct.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <InputText
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <InputText
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button onClick={login}>Login</Button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default LoginPage;
