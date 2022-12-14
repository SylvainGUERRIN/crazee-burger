import styled from 'styled-components';
import { theme } from '../../theme';

export default function PrimaryButton({label, Icon, className}) {
  return (
    <PrimaryButtonStyled className={className}>
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

    /* &:hover:not(:disabled){
    background-color: white;
    color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};
    transition: all 200ms ease-out;
    } */
    :hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.primary};
      transition: all 200ms ease-out;
    }
    &:active{
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary_burger};
    }

    &:disabled{
    opacity: 0.6;
    cursor: not-allowed;
    z-index: 2;
    }
    
    &.with-focus {
    border: 1px solid white;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
    }
    :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }
`;