import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 7vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border: 1px solid red;

    @media screen and (max-width: 320px){
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        
    }

    @media screen and (min-width: 1025px) {
        
    }
`
export const CustomProfile = styled.div`
    /* width: 5%; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    border-radius: 10px;
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
    cursor: pointer;
    border: 1px solid red;

    @media screen and (max-width: 320px){
        height: 2.5rem !important;
        width: 2.5rem !important;
        margin-right: 0.2rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        height: 2.5rem !important;
        width: 2.5rem !important;
        margin-right: 0.2rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        height: 2.5rem !important;
        width: 2.5rem !important;
        margin-right: 0.2rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        height: 2.5rem !important;
        width: 2.5rem !important;
        margin-right: 0.2rem;
    }

    @media screen and (min-width: 1025px) {
        height: 2.5rem !important;
        width: 2.5rem !important;
        margin-right: 0.5rem;
    }


`
export const SpanTag = styled.span`
    font-size: 1.2rem;
    background: #ccc;
    padding: 0 0.4rem;
    border-radius: 0.3rem;

    @media screen and (max-width: 1024px) {
        font-size: 0.5rem;
    }
`;

export const Span = styled.span`
    font-size: 1.5rem;

    @media screen and (max-width: 320px){
        font-size: 1rem;
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
export const PopUp = styled.div`
    position: absolute;
    height: 11rem;
    width: 15rem;
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

export const HamburgerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border: 1px solid red;

    @media screen and (max-width: 320px){
        width: 2.5rem;
        height: 2rem;
        align-items: center;
        justify-content: center;
        padding: 0;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        width: 2.5rem;
        height: 2rem;
        align-items: center;
        justify-content: center;
        padding: 0;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        width: 2.5rem;
        height: 2.5rem;
        align-items: center;
        justify-content: center;
        padding: 0;
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
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 2;
    border: none !important;
    outline: none !important;
    border: 1px solid green !important;

    @media screen and (max-width: 320px){
        width: 100%;
        height: 100%;
        padding: 0;
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