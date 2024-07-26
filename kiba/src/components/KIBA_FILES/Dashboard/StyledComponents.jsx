import styled from "styled-components";

export const MainContainer = styled.div`
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
    background: #B4D4FF;
    padding: 1rem;
`

export const DashboardContainer = styled.div`
    height: 93%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Label = styled.h1`
    font-size: 1.5rem;
    color: #000;
    padding: 0px;
    margin: 1rem;
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
`
export const TilesContainer = styled.div`
    height: 25%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
`
export const Title = styled.span`
    width: 100%;
    font-size: 1rem;
    margin: 0px;
    font-weight: 550;
    padding: 0;
    text-align: right;

    @media only screen and (min-width:1080px){
        font-size: 1rem;
    }
    @media screen and (min-width:768px) and (max-width:1024px) {
        font-size: 0.7rem;
    }
    @media screen and (min-width:350px)and (max-width:600px){
        font-size: 0.4rem;
    }
`
export const Count = styled.span`
    margin-top: 0.1rem;
    color: #FFF;
    text-align: right;
    padding: 0;
    height: fit-content;
    font-size: 1rem;

    @media screen and (min-width:1080px) {
        font-size: 1.8rem;
    }
    @media screen and (min-width:768px) and (max-width:1024px) {
        font-size: 1.3rem;
    }
`
export const ChartContainer = styled.div`
    height: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    border: 1px solid #ccc;
    border-radius: 1rem;
    text-align: center;
    padding: 0.5rem;
`
export const Icon = styled.div`
    width: 2rem;
    height: 2rem;
    padding: 0;

    @media only screen and (min-width: 1366px) {
        width: 3rem;
        height: 3rem;
    }

    @media only screen and (max-width: 1366px) {
        width: 2rem;
        height: 2rem;
    }

    @media only screen and (max-width: 1080px) {
        width: 1.5rem;
        height: 1.5rem;
    }

`;