import { useState } from "react";
import { createSearchParams, Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate()
  //state
  const [inputValue, setInputValue] = useState("");

  //comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  /*const navigateToOrderPage = () => {
    navigate({
      pathname: '/order-page',
      search: createSearchParams({
        name: inputValue
      }).toString()
    })
  }*/

  return (
    <form action="submit" onSubmit={handleSubmit}>
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
      <Link to="/order-page">
        <button>Accédez à votre espace</button>
      </Link>
    </form>
  );
}
