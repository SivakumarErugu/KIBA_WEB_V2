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
`
export const ImgTag = styled.img`
    height: 13%;
    width: 50%;
    top: 0.5rem;
    left: 0rem;
    /* align-self: flex-start; */
    /* margin-left: 1rem; */

`
export const IconContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0;
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
    background: ${props => (props.active ? '#F3ACAC' : '#dee2e6')};
    cursor: pointer;

    &:hover {
        /* color: #fff; */
        background: ${props => (props.active ? '#fcd5ce' : '#D9D9D9')};
    }
`;

export const PTag = styled.p`
    font-size: 1.2rem;
    width: 100%;
`
export const SettingsCon = styled.div`
    width: 100%;
    position: absolute;
    bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* border: 1px solid red; */
`
export const LogOutBtn = styled.button`
    font-size: 1.2rem;
    width: 100%;
    height: 2.5rem;
    background: transparent;
    color: #FFF;
    text-align: center;
    border: none;
    outline: none;
    cursor: pointer;
    background: #463f3a;
`