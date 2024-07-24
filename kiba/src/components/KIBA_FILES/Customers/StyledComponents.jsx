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
    width: 40%;
    justify-content: flex-end;

    @media (max-width: ${breakpoints.tablet}) {
        width: 50%;
    }

    @media (max-width: ${breakpoints.mobile}) {
        width: 100%;
        justify-content: center;
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

// ColumnText styling
export const ColumnText = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

// Count styling
export const Count = styled.div`
  width: 50%;
  display: flex;
  align-items: center;

    @media (max-width: ${breakpoints.mobile}) {
        width: 100%;
        justify-content: center;
        margin-bottom: 1rem;
    }
`;

// CreateNewContainer styling
export const CreateNewContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column;
        align-items: center;
    }
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
    margin: 0rem 0rem 0rem 0rem;
    border: none;
    outline: none;
    cursor: pointer;
`;

// CustomContainer styling
export const CustomContainer = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
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

  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

// CustomSpan styling
export const CustomSpan = styled.span`
  color: #660708;
  font-weight: bold;
  margin-right: 1rem;
`;

// CancelBtn styling
export const CancelBtn = styled.button`
  padding: 0;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  outline: none;
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
`;

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

// FilterBtn styling
export const FilterBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  width: fit-content;
  padding: 0.4rem;
  margin: 0rem 0.2rem 0rem 0.3rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  position: relative;
  z-index: 10;
`;

// FilterDropdown styling
export const FilterDropdown = styled.div`
  min-width: 550%;
  /* max-width: fit-content; */
  height: 1000%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 2.5rem;
  right: 0;
  /* background: #dee2e6; */
  background: #fff;
  padding: 0.1rem;
  border-radius: 0.7rem;
  overflow-y: auto;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);


  &::-webkit-scrollbar{
    width: 0.2rem;
  }
`;

// FilterItem styling
export const FilterItem = styled.p`
  margin: 0.2rem;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  color: #000;
  text-align: left;
  font-size: 0.8rem;
  border-bottom: 1px solid #000;

  &:hover{
    background: #dee2e6;
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
  width: 2rem;
  height: 2rem;
  max-width: 2rem;
  max-height: 2rem;
  border-radius: 50%;
  margin: 0.4rem 0.4rem 0.4rem 0.4rem;
`;

// InnerContainer styling
export const InnerContainer = styled.div`
  width: 83%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #B4D4FF;
  padding: 1rem;

  @media (max-width: ${breakpoints.desktop}) {
    width: 90%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
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

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

// MainContainer styling
export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background: #B4D4FF;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

// New styling
export const New = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
  }
`;

// PaginationContainer styling
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  padding: 0rem 0.5rem 0rem 0.5rem;
  /* border: 1px solid red; */

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
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
  align-items: center;
  justify-content: space-between;
  height: 7%;
  width: 100%;
  margin-top: 0.4rem;
  border-radius: 0.7rem;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

// SearchBar styling
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  width: 60%;
  height: 80%;
  padding: 0rem 0rem 0rem 0rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

// SpanTag styling
export const SpanTag = styled.sup`
  color: #000;
  height: 1.3rem;
  width: 1.3rem;
  margin-left: 0.2rem;
  background: #F9F5FF;
  color: #93312B;
  padding: 0.3rem;
  font-size: 0.8rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// TableTag styling
export const TableTag = styled.table`
  border: 2px solid #ccc;
  height: fit-content;
  max-height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  border-radius: 1rem;
  margin-top: 0.4rem;
  background: #EEF5FF;

  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
    padding: 0.2rem;
  }
`;

// Tabs styling
export const Tabs = styled.div`
  height: 5%;
  width: 100%;
  padding: 0rem;
  display: flex;
  align-items: center;
`;

// Tab styling
export const Tab = styled.button`
  height: 100%;
  padding: 0.4rem;
  border: none;
  border-bottom: ${props => (props.active ? '2px solid #6A1039' : 'none')};   
  border-radius: 0;
  margin: 0rem 0.5rem 0rem 0.5rem;
  outline: none !important;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 0rem 0.2rem;
    padding: 0.2rem;
  }
`;

// TdTag styling
export const TdTag = styled.td`
  width: 23.5%;
  display: flex;
  align-items: center;
`;

// ThTag styling
export const ThTag = styled.th`
  width: 23.5%;
  text-align: left;
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

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DivX =styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 80%;
  border: 2px solid #ccc;
  border-radius: 0.5rem;
  background: #fff;
  padding: 0rem 0.3rem 0rem 0.3rem;

`