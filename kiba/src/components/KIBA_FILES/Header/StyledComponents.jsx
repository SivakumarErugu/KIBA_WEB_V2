import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 7vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    /* border: 1px solid red; */
`
export const CustomProfile = styled.div`
    width: 5%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* justify-content: space-between; */
    color: #000;
    padding: 0.5rem;
    /* border: 1px solid #ccc; */
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
    border-radius: 10px;
    /* border: 1px solid #ccc; */
`
export const ProfileIcon = styled.div`
    background: #E1D1D1; 
    border-radius: 50%;
    height: 2.9rem;
    width: 2.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    border: 1px solid #ccc;
    background-position: center;

`
export const SpanTag = styled.span`
    font-size: 1.2rem;
    background: #ccc;
    padding: 0rem 0.4rem 0rem 0.4rem;
    border-radius: 0.3rem;
`
export const Span = styled.span`
    font-size: 1.5rem;
`