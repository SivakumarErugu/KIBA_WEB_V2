import styled, { keyframes } from 'styled-components';

const pulse0112 = keyframes`
  0%,
  100% {
    transform: scale(0);
    opacity: 0.5;
  }

  50% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Define breakpoints for responsiveness
const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

// Actions styling
export const Actions = styled.div`
    display: flex;
    align-items: center;
    width: 10%;
    height: 100% !important;
    justify-content: flex-end;

    @media screen and (max-width: 320px){
      display: none;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
      display: none;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
      display: none;
    }
`;

// AlertText styling
export const AlertText = styled.h1`
  color: red;
  width: fit-content;
  margin: 0;
  padding: 0.5rem;
  right: 50%;
  position: absolute;
  top: 2rem;
  font-size: 1rem;
`;

// Checkbox styling
export const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  border: 1px solid red !important;
`;

// CreeteNewBtn styling
export const CreateNewBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 10rem;
    height: 100%;
    padding: 0.5rem;
    background: #176B87;
    color: #FFF;
    margin: 0rem;
    border: none;
    outline: none;
    cursor: pointer;

    @media screen and (max-width: 320px){
      width: 2rem;
      height: 2rem;
      justify-content: center;
      margin: 0;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
      width: 2rem;
      height: 2rem;
      justify-content: center;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
      width: 2rem;
      height: 2rem;
      justify-content: center;
      margin-right: 0.2rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
      width: fit-content;
      height: 2rem;
      justify-content: center;
      margin-right: 0.2rem;
    }

    @media screen and (min-width: 1025px) {
      width: fit-content;
      height: 90% !important;
      justify-content: center;
      margin-right: 0.2rem;
    }
`;

// CustomContainer styling
export const CustomContainer = styled.div`
    max-height: 93vh;
    width: 100%;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    padding: 0.5rem 0.5rem 0.3rem 0.5rem;
`;

// CustomInput styling
export const CustomInput = styled.input`
  width: 90%;
  flex-grow: 1;
  height: 80%;
  padding: 0.4rem;
  font-size: 1.2rem;
  margin-left: 0.5rem;
  border: none;
  border-left: 2px solid #ccc;
  outline: none;
  overflow: hidden;

  @media screen and (max-width: 320px){
    font-size: 0.9rem;
    margin-left: 0.3rem;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    font-size: 0.9rem;
    margin-left: 0.3rem;
  }

  @media screen and (min-width: 481px) and (max-width:768px) {
    font-size: 1rem;
    margin-left: 0.3rem;
  }
`;

// CustomSpan styling
export const CustomSpan = styled.span`
  color: #660708;
  font-weight: bold;
  margin-right: 0.5rem;
  font-size: 0.8rem;

  @media screen and (min-width: 769px) and (max-width:1024px) {
    font-size: 0.6rem;
  }
`;

// DeleteBtn styling
export const DeleteBtn = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  cursor: pointer;
  outline: none;
  border: none;

  @media screen and (max-width: 320px){
    height: 1rem;
    width: 1rem;
  }

  @media screen and (min-width: 321px) and (max-width:1024px) {
    height: 1rem;
    width: 1rem;
  }

  @media screen and (min-width: 1025px) {
    height: 1.5rem;
    width: 1.5rem;
  }
`;
export const MulDeleteBtn = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  cursor: pointer;
  outline: none;
  border: none;

  @media screen and (min-width: 769px){
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 0.5rem;
  }
`

// DotSpinner styling
export const DotSpinner = styled.div`
  --uib-size: 2.8rem;
  --uib-speed: .9s;
  --uib-color: #183153;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: var(--uib-size);
  width: var(--uib-size);
`;

// DotSpinnerDot styling
export const DotSpinnerDot = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;

  &:nth-child(1)::before {
    animation: ${pulse0112} calc(var(--uib-speed) * 1.111) ease-in-out infinite;
    animation-delay: calc(var(--uib-speed) * 0);
  }

  &:nth-child(2) {
    transform: rotate(45deg);
  }
  
  &:nth-child(2)::before {
    animation: ${pulse0112} calc(var(--uib-speed) * 1.111) ease-in-out infinite;
    animation-delay: calc(var(--uib-speed) * -0.875);
  }
  
  &:nth-child(3) {
    transform: rotate(90deg);
  }
  
  &:nth-child(3)::before {
    animation: ${pulse0112} calc(var(--uib-speed) * 1.111) ease-in-out infinite;
    animation-delay: calc(var(--uib-speed) * -0.75);
  }
  
  &:nth-child(4) {
    transform: rotate(135deg);
  }
  
  &:nth-child(4)::before {
    animation: ${pulse0112} calc(var(--uib-speed) * 1.111) ease-in-out infinite;
    animation-delay: calc(var(--uib-speed) * -0.625);
  }
  
  &:nth-child(5) {
    transform: rotate(180deg);
  }
  
  &:nth-child(5)::before {
    animation: ${pulse0112} calc(var(--uib-speed) * 1.111) ease-in-out infinite;
    animation-delay: calc(var(--uib-speed) * -0.5);
  }
  
  &:nth-child(6) {
    transform: rotate(225deg);
  }
  
  &:nth-child(6)::before {
    animation: ${pulse0112} calc(var(--uib-speed) * 1.111) ease-in-out infinite;
    animation-delay: calc(var(--uib-speed) * -0.375);
  }
  
  &:nth-child(7) {
    transform: rotate(270deg);
  }
  
  &:nth-child(7)::before {
    animation: ${pulse0112} calc(var(--uib-speed) * 1.111) ease-in-out infinite;
    animation-delay: calc(var(--uib-speed) * -0.25);
  }
  
  &:nth-child(8) {
    transform: rotate(315deg);
  }
  
  &:nth-child(8)::before {
    animation: ${pulse0112} calc(var(--uib-speed) * 1.111) ease-in-out infinite;
    animation-delay: calc(var(--uib-speed) * -0.125);
  }
  
  &::before {
    content: '';
    height: 20%;
    width: 20%;
    border-radius: 50%;
    background-color: var(--uib-color);
    transform: scale(0);
    opacity: 0.5;
    box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
  }
`;

// HighlightText styling
export const HighlightText = styled.span`
  background-color: yellow;
  padding: 2px 0px 2px 2px;
  border-radius: 0.5rem;
`;

// ImgTag styling
export const ImgTag = styled.img`
  max-width: 2rem;
  max-height: 2rem;
  border-radius: 50%;
  margin: 0.4rem 0.4rem 0.4rem 0.4rem;

  @media screen and (max-width: 320px){
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.1rem;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.1rem;
  }

  @media screen and (min-width: 481px) and (max-width:768px) {
    width: 1.6rem;
    height: 1.6rem;
    margin: 0.1rem 0.2rem 0.1rem 0.1rem;
  }

  @media screen and (min-width: 769px) {
    width: 2rem;
    height: 2rem;
  }


`;

// InnerContainer styling
export const InnerContainer = styled.div`
  width: 83%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #B4D4FF;
  padding: 1rem;

  @media screen and (max-width: 320px){
    width: 100%;
    padding: 0;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    width: 100%;
  }

  @media screen and (min-width: 481px) and (max-width:768px) {
    width: 100%;
  }

  @media screen and (min-width: 769px) and (max-width:1024px) {
      
  }

  @media screen and (min-width: 1025px) {
      
  }
`;

// Label styling
export const Label = styled.h1`
  font-size: 1.5rem;
  color: #000;
  padding: 0px;
  margin: 0px;
  text-align: center;
  display: flex;

  @media screen and (max-width: 320px){
    width: fit-content;
    height: fit-content;
    font-size: 1rem;
    margin-left: 0.2rem;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    width: fit-content;
    height: fit-content;
    font-size: 1rem;
    margin-left: 0.2rem;
  }

  @media screen and (min-width: 481px) and (max-width:768px) {
    width: fit-content;
    height: fit-content;
    font-size: 1.1rem;
    margin-left: 0.2rem;
  }

  @media screen and (min-width: 769px){
    width: fit-content;
    height: fit-content;
    font-size: 1.2rem;
    margin-left: 0.2rem;
  }
`;

// MainContainer styling
export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background: #B4D4FF;

`;

// PaginationContainer styling
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3vh;
  width: 100%;
  padding: 0rem 0.5rem 0rem 0.5rem;

  @media screen and (max-width: 320px){
    margin-top: 0.5rem;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    margin-top: 0.5rem;
  }

  @media screen and (min-width: 481px) and (max-width:768px) {
      
  }

  @media screen and (min-width: 769px) and (max-width:1024px) {
      
  }

  @media screen and (min-width: 1025px) {
    margin-top: 1rem;
  }
`;

// PaginationBtn styling
export const PaginationBtn = styled.button`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 0.2rem 0;
  }
`;

// SearchActionsBar styling
export const SearchActionsBar = styled.div`
  display: flex;
  align-items: center !important;
  justify-content: space-between;
  height: 6vh;
  width: 100%;
  margin-top: 0.4rem;
  border-radius: 0.7rem;

  @media screen and (min-width: 1025px) {
    height: 3rem !important;
  }


`;

// SearchBar styling
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  width: 90%;
  height: 80%;
  padding: 0rem 0rem 0rem 0rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media screen and (max-width: 320px){
    height: 100%;
    width: 100%;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    height: 100%;
    width: 100%;
  }

  @media screen and (min-width: 481px) and (max-width:768px) {
    height: 100%;
    width: 100%;
    padding-left: 0.1rem;
  }

  @media screen and (min-width: 769px) and (max-width:1024px) {
    height: 100%;
    padding-left: 0.2rem;
  }

  @media screen and (min-width: 1025px) {
    padding-left: 0.3rem;
  }
`;

// SpanTag styling
export const SpanTag = styled.sup`
  color: #000;
  margin-left: 0.2rem;
  background: #F9F5FF;
  color: #93312B;
  padding: 0.3rem;
  font-size: 0.8rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 320px){
    height: 0.9rem;
    width: 0.9rem;
    font-size: 0.6rem;
    padding: 0rem;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    height: 0.9rem;
    width: 0.9rem;
    font-size: 0.6rem;
    padding: 0rem;
  }

  @media screen and (min-width: 481px) and (max-width:768px) {
    height: 0.9rem;
    width: 0.9rem;
    font-size: 0.6rem;
    padding: 0rem;
  }

  @media screen and (min-width: 769px) and (max-width:1024px) {
    height: 0.9rem;
    width: 0.9rem;
    font-size: 0.6rem;
    padding: 0rem;
  }

  @media screen and (min-width: 1025px) {
    height: 0.9rem;
    width: 0.9rem;
    font-size: 0.6rem;
    padding: 0.4rem;
  }
`;

// TableTag styling
export const TableTag = styled.table`
  border: 2px solid #ccc;
  height: 100%;
  max-height: 100%;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  border-radius: 1rem;
  background: #EEF5FF;
  overflow-y: auto;

  @media screen and (max-width: 320px){
    border-radius: 0.7rem;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    border-radius: 0.7rem;
    padding: 0.3rem;
  }

  @media screen and (min-width: 481px) and (max-width:768px) {
      
  }

  @media screen and (min-width: 769px) and (max-width:1024px) {
      
  }

  @media screen and (min-width: 1025px) {
      
  }
`;

// TdTag styling
export const TdTag = styled.td`
  width: 23.5%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 320px){
    width: 23.5%;
    font-size: 0.4rem;
    overflow: hidden;
    padding: 0.1rem;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    width: 23.5%;
    font-size: 0.5rem;
    overflow: hidden;
    padding: 0.1rem;
  }

  @media screen and (min-width: 481px) and (max-width:768px) {
    font-size: 0.7rem;
    overflow: hidden;
    padding: 0.1rem;
  }

  @media screen and (min-width: 769px) and (max-width:1024px) {
    font-size: 0.9rem;
    overflow: hidden;
    padding: 0.1rem;
  }

  @media screen and (min-width: 1025px) {

  }
`;

// ThTag styling
export const ThTag = styled.th`
  width: 23.5%;
  text-align: left;

  @media screen and (max-width: 320px){
    font-size: 0.5rem;

  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    font-size: 0.5rem;
  }

  @media screen and (min-width: 481px) and (max-width:768px) {
    font-size: 0.7rem;
  }

  @media screen and (min-width: 769px) and (max-width:1024px) {
    font-size: 0.9rem;
  }

  @media screen and (min-width: 1025px) {
      
  }
`;

// TrTag styling
export const TrTag = styled.tr`
  color: #000;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  margin: 2px 0px 2px 0px;
  border-bottom: 1px solid #ccc;
  background: #EEF5FF;
  overflow-y: auto;
    &:hover {
        background-color: #e5e5e5;
    }
`;

export const DivX =styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  width: 70%;
  border: 2px solid #ccc;
  border-radius: 0.5rem;
  background: #fff;
  padding: 0rem 0.3rem 0rem 0.3rem;

  @media screen and (max-width: 320px){
    height: 2rem;
    width: 11.5rem;
    padding: 0rem 0rem 0rem 0.1rem;
    margin-left: 0.2rem;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    height: 2rem;
    width: 60%;
    padding: 0rem 0rem 0rem 0.1rem;
    margin-left: 0.2rem;
  }

  @media screen and (min-width: 481px) and (max-width:768px) {
    height: 2rem;
    width: 60%;
    padding: 0rem 0rem 0rem 0.1rem;
    margin-left: 0.2rem;
  }

  @media screen and (min-width: 769px) and (max-width:1024px) {
    height: 2rem;
    width: 60%;
    padding: 0rem 0rem 0rem 0.1rem;
    margin-left: 0.2rem;
  }

  @media screen and (min-width: 1025px) {
    height: 90%;
    width: 60%;
    padding: 0rem 0rem 0rem 0.1rem;
    margin-left: 0.2rem;
    padding-left: 0.3rem;
  }

`

export const DivY = styled.div`
  height: 70vh;
  margin-top: 0.5rem;
`

export const Span = styled.span`
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
      margin-left: 0.3rem;
  }

  @media screen and (min-width: 1025px) {
    margin-left: 0.4rem;
  }
`
export const TdTagCheckbox = styled.td`
  width: 2%;
  display: flex;
  align-items: center;

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
export const TdTagDelete = styled.td`
  right: 0.3%;
  display: flex;
  align-items: center;
  position: absolute;


  @media screen and (max-width: 320px){
    right: 0.5%;
    width: fit-content;
  }

  @media screen and (min-width: 321px) and (max-width:480px) {
    right: 0.5%;
    width: fit-content;
  }

  @media screen and (min-width: 481px) and (max-width:768px) {
      
  }

  @media screen and (min-width: 769px) and (max-width:1024px) {
      
  }

  @media screen and (min-width: 1025px) {
    right: 0.3%;
  }
`