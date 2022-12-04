import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import {BsPersonCircle} from 'react-icons/bs'
import {IoChevronForward} from 'react-icons/io5'

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
      <div>
        <h1>Bienvenue chez nous !</h1>
        <hr/>
        <h2>Connectez-vous</h2>
      </div>
      <div>
        <div className="input-with-icon">
          <BsPersonCircle className="icon"/>
          <input
            value={inputValue}
            onChange={handleChange}
            type="text"
            placeholder="Entrez votre prénom..."
            required
          />
        </div>
        <button className="button-with-icon">
          <span>Accédez à votre espace</span>
          <IoChevronForward className="icon"/>
        </button>   
      </div>
    </LoginFormStyled>
  );
  
}

const LoginFormStyled = styled.form`
    //border: 2px solid green;
    //background: red;
    //display: flex;
    //flex-direction: column;
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    margin: 0 auto;
    padding: 2.5rem 2rem;
    border-radius: 5px;
    font-family: "Amatic SC", cursive;

    hr{
      border: 1.5px solid #f56a2c;
      margin-bottom: 40px;
    }
    h1{
      //color: #f56a2c;
      color: white;
      font-size: 48px;
    }
    h2{
      //color: #8e8b8b;
      color: white;
      margin: 20px 10px 10px;
      font-size: 36px;
    }

    .input-with-icon{
      //border: 1px solid red;
      background-color: #ffffff;
      border-radius: 5px;
      display: flex;
      align-items: center;
      padding: 18px 24px;
      margin: 18px 0;

      .icon{
        color: grey;
        font-size: 15px;
        margin-right: 8px;
      }
      input{
        //background-color: #8e8b8b;
        border: none;
        font-size: 15px;
        color: #17161a;
      }
      &::placeholder{
        background: white;
        color: lightgrey;
      }
    }
    .button-with-icon{
      width: 100%;
      border: 1px solid red;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      position: relative;
      white-space: nowrap;
      text-decoration: none;
      line-height: 1;

      padding: 18px 24px;
      border-radius: 5px;
      font-size: 15px;
      font-weight: 800;
      color: white;
      background-color: #ff9f1b;
      border: 1px solid #ff9f1b;

      &:hover:not(:disabled){
        background-color: white;
        color: #ff9f1b;
        border: 1px solid #ff9f1b;
        transition: all 200ms ease-out;
      }
      &:active{
        color: white;
        background-color: #ff9f1b;
      }

      &:disabled{
        opacity: 0.6;
        cursor: not-allowed;
      }
      .icon{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        margin-left: 10px;
      }
    }
  `;