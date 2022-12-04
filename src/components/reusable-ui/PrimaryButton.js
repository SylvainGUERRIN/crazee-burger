import styled from 'styled-components';
import { theme } from '../../theme';

export default function PrimaryButton({label, Icon}) {
  return (
    <PrimaryButtonStyled>
        <span>{label}</span>
        {Icon && Icon}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
  
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
    background-color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};

    &:hover:not(:disabled){
    background-color: white;
    color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};
    transition: all 200ms ease-out;
    }
    &:active{
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary_burger};
    }

    &:disabled{
    opacity: 0.6;
    cursor: not-allowed;
    }
    
`;