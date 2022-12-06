import styled from 'styled-components';
import Logo from "../Logo";
import { Link} from "react-router-dom"
import {IoPersonCircleOutline} from "react-icons/io5"
import {theme} from "../../../theme"

export default function Navbar({username}) {
  return (
    <NavbarStyled>
        <Logo scale={"1"}/>
        <div className='rightSide'>
            <div className='menu'>
                <div className='menu-link'>
                    <p>Hey, <strong className='name'>{username}</strong></p>
                    <Link to="/login">
                        <button>Se déconnecter</button>
                    </Link>
                </div>
                <IoPersonCircleOutline className='icon'/>
            </div>
        </div>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  border-radius: 15px 15px 0 0;
  background-color: ${theme.colors.white}; 

  .rightSide{
    width: 50%;
    display: flex;
    justify-content: flex-end;
    .menu{
        display: flex;
        align-items: center;
        gap: 10px;
        .menu-link{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            p{
            color: ${theme.colors.greyDark};
            margin-top: 0;
            margin-bottom: 0;
            }
            .name{
                color: ${theme.colors.primary};
            }
            button{
                border: none;
                background-color: ${theme.colors.white};
                text-decoration: none;
                padding-right: 0;
                color: ${theme.colors.greySemiDark};
            }
        }
        .icon{
            font-size: 48px;
            color: ${theme.colors.greyDark};
        }
    }
  }
`;