import { useState, useEffect } from 'react';

import {
    ChartContainer,
    Count,
    DashboardContainer,
    DashBoard,
    InnerContainer,
    Label,
    MainContainer,
    Tile,
    TilesContainer,
    Title,
    Hamburger
} from './styledComponent'


import SideNav from '../SideNav/SideNav'
import Header from '../Header/Header'

import { FaUsers } from "react-icons/fa";
import { GrTest } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";

import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);


const Dummy = () => {
    const [showNavExternal3, setShowNavExternal3] = useState(false);
    const [loader, setLoader] = useState(true)
    const [customers, setCustomersData] = useState([])
    const [freeSamples, setFreeSamples] = useState(0)
    const [cultivations, setCultivations] = useState({
        shrimp: 0,
        fish: 0,
        poultry: 0,
        bovine: 0
    })

    // GETTING THE TOTAL CUSTOMER LIST
    useEffect(() => {
        getCustomersData();
    }, []);

    const getCustomersData = async () => {
        setLoader(true);
        try {
            const url = 'http://15.207.110.236:3000/customers';
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            setCustomersData(data);

            // Safely handle data and calculate counts
            const shrimps = data?.filter(each => each.cultivation === 'Shrimps') || [];
            const fishes = data?.filter(each => each.cultivation === 'Fish') || [];
            const poultrys = data?.filter(each => each.cultivation === 'Poultry') || [];
            const bovines = data?.filter(each => each.cultivation === 'Bovine') || [];
            const freeSamples = data?.filter(each => each.trail_pack === 'true') || []
            setFreeSamples(freeSamples.length)
            console.log(shrimps)

            setCultivations({
                shrimp: shrimps.length,
                fish: fishes.length,
                poultry: poultrys.length,
                bovine: bovines.length
            });
        } catch (error) {
            console.error('Error fetching Customers Data:', error);
        } finally {
            setLoader(false);
        }
    };

    const data = {
        labels: ['Shrimp', 'Fish', 'Poultry', 'Bovine'], // Adjusted to match data
        datasets: [
            {
                data: [cultivations.shrimp, cultivations.fish, cultivations.poultry, cultivations.bovine],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Added a color for each data point
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Same as backgroundColor, can be different if needed
                borderWidth: 0,
                borderRadius: 0,
                offset: -0,
            },
        ],
    };


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            tooltip: {
                enabled: true,
            },
        },
        cutout: '70%',
    };


    return (
        <MainContainer>
            <SideNav />

            <InnerContainer>
                <Header />

                <DashboardContainer>
                    <Label>Overview</Label>
                    <DashBoard>
                        <TilesContainer>
                            <Tile>
                                <FaUsers size={45} />
                                <Title>Total Customers</Title>
                                <Count>{customers.length}</Count>
                            </Tile>
                            <Tile>
                                <GrTest size={44} />

                                <Title>Free Samples</Title>
                                <Count>{freeSamples}</Count>
                            </Tile>
                        </TilesContainer>

                        <ChartContainer>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '50%' }}>
                                <Doughnut data={data} options={options} />
                            </div>
                        </ChartContainer>


                    </DashBoard>

                </DashboardContainer>

            </InnerContainer>

        </MainContainer>
    )
}

export default Dummy