import styled from 'styled-components';

export default function TextInput({value, onChange, Icon, ...restProps}) {
    //console.log(restProps);
  return (
    <InputStyled>
        {Icon && Icon}
        <input
        value={value}
        onChange={onChange}
        type="text"
        {...restProps}
        />
    </InputStyled>
  )
}

const InputStyled = styled.div`
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
    
`;