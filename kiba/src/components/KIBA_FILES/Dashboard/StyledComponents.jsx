
import styled from "styled-components";

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    background: #B4D4FF;
`
export const InnerContainer = styled.div`
    width: 83%;
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #B4D4FF;
    padding: 1rem;

    @media screen and (max-width: 320px){
        padding: 0;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        padding: 0.3rem;
    }

    @media screen and (min-width: 481px) {
        padding: 0.3rem;
    }

    @media screen and (min-width: 769px) {
        padding: 1rem;
    }
`

export const DashboardContainer = styled.div`
    height: 93%;
    flex-grow: 1;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 320px){
        margin-top: 1.5rem;
        padding: 0.3rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        margin-top: 1.5rem;
        padding: 0.3rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        margin-top: 1.5rem;
        padding: 0.3rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        margin-top: 1.8rem;
        padding: 0.3rem;
    }
`
export const Label = styled.h1`
    font-size: 1.5rem;
    color: #000;
    padding: 0px;

    @media screen and (max-width: 320px){
        font-size: 1rem;
        margin: 0rem 0rem 0.3rem 0.5rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        font-size: 1rem;
        margin: 0rem 0rem 0.3rem 0.5rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        font-size: 1.2rem;
        margin: 0rem 0rem 0.3rem 0.5rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        font-size: 1.2rem;
        margin: 0rem 0rem 0.3rem 0.5rem;
    }

    @media screen and (min-width: 1025px) {
        font-size: 1.5rem;
    }
`
export const DashBoard = styled.div`
    height: 95%;
    width: 100%;
    border-radius: 1rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #EEF5FF;

    @media screen and (max-width: 320px){
        height: 93%;
        padding: 0.5rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        height: 96%;
        padding: 0.5rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        height: 95%;
        padding: 0.5rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        height: 95%;
        padding: 0.5rem;
    }

    @media screen and (min-width: 1025px) {
        height: 95%;
        padding: 0.5rem;
    }

`
export const TilesContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 320px){
        align-items: flex-start;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        align-items: flex-start;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        align-items: flex-start;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        align-items: flex-start;
    }

    @media screen and (min-width: 1025px) {
        align-items: flex-start;
    }
`
export const Tile = styled.div`
    background: #4361ee;
    width: 20%;
    height: 100%;
    border-radius: 1rem;
    color: #FFF;
    padding: 1rem;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 320px){
        width: 6.5rem;
        height: 6rem;
        padding: 0.4rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        width: 7rem;
        height: 7rem;
        padding: 0.4rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        width: 9rem;
        height: 7rem;
        padding: 0.4rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        width: 11rem;
        height: 7rem;
        padding: 0.4rem;
    }

    @media screen and (min-width: 1025px) {
        width: 14rem;
        height: 8rem;
        padding: 0.4rem;
    }
`
export const Title = styled.span`
    width: 100%;
    font-size: 1rem;
    margin: 0px;
    font-weight: 550;
    padding: 0;
    text-align: right;

    @media screen and (max-width: 320px){
        font-size: 0.7rem;
        margin-top: 0.6rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        font-size: 0.7rem;
        margin-top: 0.6rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        font-size: 0.9rem;
        margin-top: 0.6rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        font-size: 1rem;
        margin-top: 0.5rem;
    }

    @media screen and (min-width: 1025px) {
        font-size: 1.3rem;
        margin-top: 0.2rem;
    }
`
export const Count = styled.span`
    margin-top: 0.1rem;
    color: #FFF;
    text-align: right;
    padding: 0;
    height: fit-content;
    font-size: 1rem;

    @media screen and (max-width: 320px){
        font-size: 1rem;
        font-weight: 600;
        margin-top: 0.3rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        font-size: 1.2rem;
        font-weight: 600;
        margin-top: 0.5rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0.3rem 0.3rem 0rem 0rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        font-size: 1.4rem;
        font-weight: 600;
        margin: 0.1rem 0.3rem 0.5rem 0rem;
    }

    @media screen and (min-width: 1025px) {
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0.1rem 0.3rem 0.5rem 0rem;
    }
`
export const ChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    border: 1px solid #ccc;
    border-radius: 1rem;
    text-align: center;
    padding: 0.5rem;
    overflow: hidden;

    @media screen and (max-width: 320px){
        height: 60%;
        padding: 0.1rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        height: 62%;
        padding: 0.1rem;
    }

    @media screen and (min-width: 481px) {
        height: 65%;
    }
`
export const Icon = styled.div`
    width: 2rem;
    height: 2rem;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 320px){
        width: 1.5rem;
        height: 1.5rem;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        width: 2rem;
        height: 2rem;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        width: 2.2rem;
        height: 2.2rem;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        width: 2.4rem;
        height: 2.4rem;
    }

    @media screen and (min-width: 1025px) {
        width: 2.9rem;
        height: 2.9rem;
    }

`;

export const DivX = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 80%;

    @media screen and (max-width: 320px){
        width: 100%;
    }

    @media screen and (min-width: 321px) and (max-width:480px) {
        width: 100%;
    }

    @media screen and (min-width: 481px) and (max-width:768px) {
        width: 90%;
    }

    @media screen and (min-width: 769px) and (max-width:1024px) {
        width: 90%;
    }

    @media screen and (min-width: 1025px) {
        width: 90%;
    }
`