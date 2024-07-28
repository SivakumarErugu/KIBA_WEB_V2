
import styled from "styled-components"

import { Link } from 'react-router-dom';

export const SideNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 17vw;
    height: 100vh;
    padding-top: 1%;
    position: relative;
    /* border: 1px solid red; */

    @media screen and (max-width: 320px){
        display: none;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        display: none;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        display: none;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        
    }

    @media screen and (min-width: 1025px) {
        
    }
`
export const ImgTag = styled.img`
    top: 0.5rem;
    left: 0rem;

    @media screen and (min-width: 769px) and (max-width:1024px) {
        height: 5rem;
        width: 6rem;
    }

    @media screen and (min-width: 1025px) {
        height: 7rem;
        width: 9rem;
    }

`
export const IconContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0;

    @media screen and (min-width: 769px) and (max-width:1024px) {
        margin-top: 2rem;
    }

    @media screen and (min-width: 1025px) {
        margin-top: 0.5rem;
    }
`;

export const NavOption = styled.li`
    height: 2.5rem;
    width: 100%;
    color: ${props => (props.active ? '#fff' : '#000')};
    margin: 0.5rem 0rem;
    display: flex;
    align-items: center;
    border-radius: 7px;
    padding: 0rem 0.5rem;
    background: ${props => (props.active ? '#4361ee' : 'transparent')};
    cursor: pointer;

    &:hover {
        background: ${props => (props.active ? '#4361ee' : '#D9D9D9')};
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        padding: 0rem 0.3rem;
    }

    @media screen and (min-width: 1025px) {
        
    }
`;

export const PTag = styled.p`
    font-size: 1.2rem;
    width: 100%;
    color: ${props => (props.active ? '#fff' : '#000')};

    @media screen and (min-width: 769px) and (max-width:1024px) {
        font-size: 1rem;
    }

    @media screen and (min-width: 1025px) {
        
    }
`

export const HamburgerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    /* border: 1px solid red; */

    @media screen and (max-width: 320px){
        width: 3rem;
        height: 3rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        width: 3.5rem;
        height: 3.5rem;
        margin-top: 0.5rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        display: none;
    }

    @media screen and (min-width: 1025px) {
        display: none;
    }
`
export const HamburgerButton = styled.button`
    width: 35px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 2;
    border: none !important;
    outline: none !important;
`

export const Menu = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-end;
    background: #333;
    position: absolute;
    top: 35px;
    left: -0;
    width: 200px;
    transform: ${({ isOpen }) =>
        isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out;  
    z-index: 1;
    border-radius: 0rem 1rem 1rem 0rem;

    a {
    padding: 15px;
    color: white;
    text-decoration: none;
    text-align: right;
    width: 100%;

    &:hover {
    background: #444;
    }
}

    @media screen and (max-width: 320px){
        
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        
    }

    @media screen and (min-width: 1025px) {
        
    }
`