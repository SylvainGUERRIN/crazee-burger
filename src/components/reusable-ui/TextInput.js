import styled from 'styled-components';
import { theme } from '../../theme';

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
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon{
    color: ${theme.colors.greySemiDark};
    font-size: ${theme.fonts.size.P0};
    margin-right: 8px;
    }
    input{
    //background-color: #8e8b8b;
    border: none;
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.dark};
    width: 100%;

      &::placeholder{
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
      }
    }
    
`;