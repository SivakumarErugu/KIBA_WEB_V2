import styled, { css } from 'styled-components';
import Slider from "react-slick";

// General Media Query Breakpoints
const breakpoints = {
    mobileS: '320px',   // Small mobile devices
    mobileM: '375px',   // Medium mobile devices
    mobileL: '425px',   // Large mobile devices
    tablet: '768px',    // Tablets
    laptop: '1024px',   // Laptops
    laptopL: '1440px',  // Large laptops
    desktop: '2560px'   // Desktops
};

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background: #86B6F6;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`;

export const InnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0px;
    background: transparent;
    position: relative;
`;

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    @media screen and (max-width: 320px){
        width: 100%;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        width: 100%;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        width: 100%;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        width: 50%;
    }

    @media screen and (min-width: 1025px) {
        width: 40%;
    }
`;

export const CustomContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    padding: 5rem;
    position: relative;

    @media screen and (max-width: 320px){
        width: 100%;
        padding: 0;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        width: 100%;
        padding: 0;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        width: 90%;
        padding: 2rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        width: 100%;
        padding: 0;
    }
    @media screen and (min-width: 1025px) {
        width: 90%;
        padding: 4rem;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52%;
    height: 100%;
    background-size: cover;

    @media only screen and (max-width: ${breakpoints.mobileL}) {
        width: 100%;
        display: none;
    }
    
`;

export const Heading = styled.h1`
    font-size: 2rem;
    color: #000;
    margin: 1rem 1rem 0rem 0rem;
    align-self: self-start;
    z-index: 100;

    @media screen and (max-width: 320px){
        font-size: 1.1rem;
        width: 100%;
        margin-top: 5rem;
        text-align: left;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        font-size: 1.4rem;
        width: 100%;
        margin-top: 5rem;
        text-align: left;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        font-size: 1.5rem;
        width: 100%;
        margin-top: 8rem;
        text-align: left;
    }
    @media screen and (min-width: 1025px) {
        font-size: 2rem;
        width: 100%;
        text-align: left;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const CustomDiv = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 1rem;

    @media (max-width: ${breakpoints.mobileL}) {
        margin-bottom: 0.5rem;
    }
`;

export const Btn = styled.button`
    background: #1e88e5;
    color: #fff;
    border-radius: 5px;
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;

    @media (max-width: ${breakpoints.mobileL}) {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
    }
`;

export const Line = styled.div`
    display: flex;
    align-items: center;
    width: 102%;
    text-align: center;
    margin-top: 2rem;

    &::before,
    &::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid #ccc;
        margin: 0 10px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        width: 100%;
        margin-top: 1.5rem;
    }

    @media (max-width: ${breakpoints.mobileL}) {
        margin-top: 1rem;
    }
`;

export const EyeIconContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: 0.6rem;
    right: 0.4rem;

    @media (max-width: ${breakpoints.mobileL}) {
        bottom: 0.4rem;
        right: 0.2rem;
    }
`;

export const ImgTag = styled.img`
    width: 7rem;
    height: 6rem;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;

    @media screen and (max-width: 320px){
        width: 12rem;
        height: 9rem;
        top: 0.5rem;
        left: 50%;
        transform: translateX(-50%);
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        width: 17rem;
        height: 10rem;
        top: 0.5rem;
        left: 50%;
        transform: translateX(-50%);
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        width: 19rem;
        height: 12rem;
        top: 0.5rem;
        left: 50%;
        transform: translateX(-50%);
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        width: 8rem;
        height: 6rem;
        top: 0.8rem;
        left: 0.8rem;
    }
    @media screen and (min-width: 1025px) {
        width: 9rem;
        height: 7rem;
        top: 0.8rem;
        left: 0.8rem;
    }
`;

export const StyledSlider = styled(Slider)`
    width: 52%;
    height: 95%;
    background: transparent;
    border-radius: 8px;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    /* border: 1px solid red; */
`;

export const SliderItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 42rem; */
    /* height: 90% ; */
    height: fit-content;
    width: 95%; 
    background-color: #000;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 1.5rem;
    overflow: hidden;
`;
export const SlideImage = styled.img`
    width: 100%;
    height: 100%  !important;
    object-fit: cover; 
`;



export const CoolInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    position: relative;
`;

export const LabelText = styled.label`
    font-size: 0.75rem;
    color: #000;
    font-weight: 700;
    padding: 0 3px;
    background: transparent;
    width: 100%;

    @media screen and (min-width: 1025px) {
        font-size: 0.85rem;
    }
`;

export const TextInput = styled.input`
    width: 100%;
    padding: 11px 10px;
    font-size: 0.75rem;
    border: 2px #000 solid;
    border-radius: 5px;
    background: #FFFFFF;

    &:focus {
        outline: none;
    }
`;


export const SlideItem = styled.div`
    width: 100%;
    height: 100%;
`;
export const PopUpText = styled.span`
    font-size: 1rem;
    position: absolute;
    top: 10%;
    color: green;
    font-weight: 600;
`