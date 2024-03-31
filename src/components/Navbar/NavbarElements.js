import { NavLink } from "./NavLink";
import { NavMenu } from "./NavMenu";
import styled from "styled-components";

export const Link = styled(NavLink)`
    color: white; /* Установка белого цвета для ссылок */
    display: flex;
    align-items: center;
    text-decoration: white;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.a {
        color: white;
    }
`;
 
export const Menu = styled(NavMenu)`
    display: flex;
    align-items: right;
    @media screen and (max-width: 100px) {
        display: none;
    }
`;
