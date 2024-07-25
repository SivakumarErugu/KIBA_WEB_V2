import styled from "styled-components";
import { Link } from 'react-router-dom';


export const ProfileCon = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    background: #B4D4FF;
`
export const InnerContainer = styled.div`
    width: 83%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #B4D4FF;
    padding: 1rem;
    /* border: 1px solid red; */
`
export const CustomContainer = styled.div`
    height: 92%;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
`
export const CustomProfile = styled.form`
    display: flex;
    justify-content: center;
    /* align-items: center; */
    border: 2px solid #ccc;
    height: 93%;
    flex-grow: 1;
    padding: 1rem;
    border-radius: 1rem;
    background: #EEF5FF;
`
export const Title = styled.h1`
    font-size: 1.5rem;
    color: #000;
    width: fit-content;
    height: 100%;
    margin: 0px;
    padding: 0px;
    margin: 0rem 0rem 0rem 0rem;
`
export const FieldContainer = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    margin: 0.5rem;
    height: 2.5rem;
    background: transparent;
    border-radius: 0.5rem;
    padding:  0.3rem;
    position: relative;
    /* border: 1px solid red; */
`
export const LabelTag = styled.label`
    width: 18%;
    color: #000;
    text-align: right;
    margin-right: 1rem;
    /* border: 1px solid red; */
`
export const H1Tag = styled.h1`
    padding: 0;
    margin: 0;
    width: 78%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 0.3rem;
    font-size: 1rem;
    color: #000;
    background: #FFF;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
`
export const InputTag = styled.input`
    width: 78%;
    height: 100%;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    color: #000;
    font-size: 1rem;
    font-weight: 700;
    padding-left: 0.3rem;
    background: #FFF;
`
export const Btn = styled.button`
    min-width: 8rem;
    width: fit-content;
    font-size: 1.1rem;
    background: blue;
    color: #FFF;
    position: absolute;
    bottom: 20%;
    padding: 0.5rem;
`

export const BackBtn = styled.button`
    height: 100%;
    color: #000;
    padding: 0;
    width: fit-content;
    border: none; 
    outline: none;
    background: transparent;
    margin-right: 1rem;

    &:focus {
        outline: none; /* Ensure no outline on focus */
    }
`;
export const CustomPart = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid red; */
    position: relative;
    border-radius: 0.9rem;
    /* box-shadow: 0 2px 5px 0 rgba(0,0,0,0.2); */
    background: transparent;
`
export const Title2 = styled.h1`
    color: #000;
    font-size: 1.5rem;
    text-align: center;
    border-bottom: 2px solid #660708;
`
export const SaveBtn = styled.button`
    min-width: 8rem;
    width: fit-content;
    font-size: 1.1rem;
    background: blue;
    color: #FFF;
    position: absolute;
    padding: 0.5rem;
    bottom: 2rem;
`
export const EyeIconContainer = styled.div`
    position: absolute;
    bottom: 40%;
    right: 1.3rem;
    top: 0.6rem;
`