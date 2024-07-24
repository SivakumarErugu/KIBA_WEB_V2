import styled, { css } from 'styled-components';
import Slider from "react-slick";

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background: #86B6F6;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`
export const InnerContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0px;
    background: transparent;
    position: relative;
`
export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48%;
    height: 100%;
`
export const CustomContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    padding: 5rem;
`

export const Heading = styled.h1`
    font-size: 2rem;
    color: #000;
    margin: 1rem 1rem 0rem 0rem;
    align-self: self-start;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const Ptag = styled.p`
    margin: 0;
    align-self: self-start;
    margin: 1rem 1rem 1rem 0rem;
`
export const RememberContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const Btn = styled.button`
    background: #1e88e5;
    color: #fff;
    border-radius: 5px;
`
export const EyeIconContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: 0.6rem;
    right: 0.4rem;

`
export const ImgTag = styled.img`
    width: 7rem;
    height: 6rem;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
`


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
    width: fit-content;
    position: static;
    min-width: 240px;
    width: 100%;
    margin-top: 1rem;
    position: relative;
`;

export const LabelText = styled.label`
    font-size: 0.75rem;
    color: #000;
    font-weight: 700;
    /* position: relative; */
    /* top: 0.5rem; */
    /* margin: 0 0 0 7px; */
    padding: 0 3px;
    background: #86B6F6;
    width: fit-content;
`;

const InputStyles = css`
    padding: 11px 10px;
    font-size: 0.75rem;
    border: 2px #000 solid;
    border-radius: 5px;
    background: #FFFFFF;

    &:focus {
        outline: none;
    }
`;

export const TextInput = styled.input`
    ${InputStyles}
`;


export const SlideItem = styled.div`
    width: 100%;
    height: 100%;
`;