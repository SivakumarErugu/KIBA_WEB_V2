import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

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
    Icon,
    DivX
} from './StyledComponents'

import SideNav from '../SideNav/SideNav'
import Header from '../Header/Header'

import { FaUsers } from "react-icons/fa";
import { GrTest } from "react-icons/gr";

import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);


const Dashboard = () => {
    const cookies = new Cookies();
    const [loader, setLoader] = useState(true)
    const [customers, setCustomersData] = useState([])
    const [freeSamples, setFreeSamples] = useState(0)
    const [cultivations, setCultivations] = useState({
        shrimp: 0,
        fish: 0,
        poultry: 0,
        bovine: 0
    })
    const apiUrl = import.meta.env.VITE_API_URL;

    // GETTING THE TOTAL CUSTOMER LIST
    useEffect(() => {
        getCustomersData();
    }, []);

    const getCustomersData = async () => {
        const savedToken = cookies.get('KIBAJWTToken');
        setLoader(true);
        try {
            const url = `${apiUrl}/customers`;
            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${savedToken}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setCustomersData(data);

            // Safely handle data and calculate counts
            const shrimps = data?.filter(each => each.cultivation === 'Shrimps') || [];
            const fishes = data?.filter(each => each.cultivation === 'Fish') || [];
            const poultrys = data?.filter(each => each.cultivation === 'Poultry') || [];
            const bovines = data?.filter(each => each.cultivation === 'Bovine') || [];
            const freeSamples = data?.filter(each => each.trail_pack === 'true') || []
            setFreeSamples(freeSamples.length)

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
                position: 'bottom',  // Position legend to the right
                labels: {
                    boxWidth: 20,  // Width of the legend box

                },
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        const dataset = tooltipItem.dataset;
                        const total = dataset.data.reduce((acc, value) => acc + value, 0);
                        const value = dataset.data[tooltipItem.dataIndex];
                        const percentage = ((value / total) * 100).toFixed(2) + '%';
                        return `${tooltipItem.label}: ${percentage}`;
                    },
                },
            },
        },
        cutout: '0%',
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
                                <Icon>
                                    <FaUsers style={{height:'95%',width:'95%'}}  />
                                </Icon>
                                <Title>Total Customers</Title>
                                <Count>{customers.length}</Count>
                            </Tile>
                            <Tile>
                                <Icon>
                                    <GrTest style={{height:'90%',width:'90%'}}/>
                                </Icon>
                                <Title>Free Samples</Title>
                                <Count>{freeSamples}</Count>
                            </Tile>
                        </TilesContainer>

                        <ChartContainer>
                            <DivX>
                                <Doughnut data={data} options={options} />
                            </DivX>
                        </ChartContainer>


                    </DashBoard>

                </DashboardContainer>

            </InnerContainer>

        </MainContainer>
    )
}

export default Dashboard