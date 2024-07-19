import styled from "styled-components";

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    background: #FFF;
`
export const InnerContainer = styled.div`
    width: 83%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #FFF;
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
    margin: 0px;
`
export const DashBoard = styled.div`
    height: 95%;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 1rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const TilesContainer = styled.div`
    height: 25%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Tile = styled.div`
    background: #E1D1D1;
    width: 20%;
    height: 100%;
    border-radius: 1rem;
    color: #000;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`
export const Title = styled.span`
width: 100%;
    font-size: 1.rem;
    margin: 0px;
    font-weight: 550;
    padding: 0;
    text-align: right;
`
export const Count = styled.span`
    margin-top: 0.1rem;
    font-size: 1.8rem;
    font-weight: 600;
    color: #000;
    text-align: right;
    padding: 0;
    height: fit-content;
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
export const Hamburger = styled.div`
    color: red;
    background: #000;
    width: fit-content;
`