import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

export default function LoginForm() {
  const navigate = useNavigate()
  //state
  const [inputValue, setInputValue] = useState("");

  //comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`/order/${inputValue}`)
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br></br>
      <h2>Connectez-vous</h2>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prénom..."
        required
      />
      <button>Accédez à votre espace</button>
    </LoginFormStyled>
  );
  
}

const LoginFormStyled = styled.form`
    border: 2px solid green;
    background: red;
    display: flex;
    flex-direction: column;
  `;