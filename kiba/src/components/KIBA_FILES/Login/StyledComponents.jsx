import styled from 'styled-components';

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
    justify-content: center;
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
`
export const CustomContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    padding: 5rem;

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
`

export const Heading = styled.h1`
    font-size: 2rem;
    color: #000;
    margin: 1rem 1rem 0rem 0rem;
    align-self: self-start;
    z-index: 100;

    @media screen and (max-width: 320px){
        font-size: 1.5rem;
        width: 100%;
        margin-top: 5rem;
        text-align: left;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        font-size: 1.8rem;
        width: 100%;
        margin-top: 5rem;
        text-align: left;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        font-size: 2rem;
        width: 100%;
        margin-top: 8rem;
        text-align: left;
    }
    @media screen and (min-width: 1025px) {
        font-size: 2.2rem;
        width: 100%;
        text-align: left;
    }
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
    text-align: left;

    @media screen and (max-width: 320px){
        font-size: 0.9rem;
        width: 100%;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        font-size: 1rem;
        width: 100%;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        font-size: 1.1rem;
        width: 100%;
    }
    @media screen and (min-width: 1025px) {
        font-size: 1.2rem;
        width: 100%;
    }
`
export const RememberContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const Btn = styled.button`
    width: 100%;
    background: #1e88e5;
    color: #fff;
    border-radius: 5px;
    margin-top: 1rem;
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
`

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

export const ForgotPasswordText = styled.span`
    font-size: 0.75rem;
    text-decoration: underline;
    color: blue;
    font-weight: 700;
    margin-top: 0.30rem;

    @media screen and (max-width: 1080px){
        font-size: 0.75rem;
    }
    @media screen and (min-width: 1566px){
        font-size: 0.80rem;
        font-weight: 0;
    }

`