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
    /* border: 1px solid red; */
    position: relative;
`
export const ProfileIcon = styled.div`
    background: #4361ee; 
    color: #FFF;
    border-radius: 50%;
    height: 2.9rem;
    width: 2.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    border: 1px solid #ccc;
    background-position: center;
    /* position: relative; */
    cursor: pointer;

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
export const PopUp = styled.div`
    position: absolute;
    height: 300%;
    width: 500%;
    background: #fff;
    top: 110%;
    right: 0;
    z-index: 1000;
    border-radius: 0.5rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.2);
    /* row-gap: 0.8rem; */
`

export const PopUpItem = styled.span`
    background: #176B87;
    color: #FFF;
    height: 2rem;
    width: 100%;
    padding: 0;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-bottom: 0.8rem;
`