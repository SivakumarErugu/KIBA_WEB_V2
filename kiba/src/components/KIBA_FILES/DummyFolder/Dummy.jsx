import React, { useState, useEffect } from 'react';

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
    const apiUrl = import.meta.env.VITE_API_URL;

    // GETTING THE TOTAL CUSTOMER LIST
    useEffect(() => {
        getCustomersData();
    }, []);

    const getCustomersData = async () => {
        setLoader(true);
        try {
            const url = `${apiUrl}/customers`;
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
        labels: ['Shrimp', 'Fish', 'Poultry', 'Bovine'],
        datasets: [
          {
            data: [cultivations.shrimp, cultivations.fish, cultivations.poultry, cultivations.bovine],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            borderWidth: 0,
          },
        ],
      };

    const customPlugin = {
        id: 'customPlugin',
        afterDraw: (chart) => {
          const ctx = chart.ctx;
          const meta = chart.getDatasetMeta(0);
          const total = chart.data.datasets[0].data.reduce((acc, value) => acc + value, 0);
      
          meta.data.forEach((element) => {
            const value = chart.data.datasets[0].data[element.index];
            const percentage = ((value / total) * 100).toFixed(2) + '%';
      
            const model = element.tooltipPosition();
            const midAngle = (element.startAngle + element.endAngle) / 2;
            const radius = element.outerRadius;
      
            // Increase radius to extend arrow outside the chart
            const arrowLength = 20; // Adjust arrow length as needed
            const extendedRadius = radius + arrowLength;
      
            // Calculate arrowhead coordinates
            const startX = model.x;
            const startY = model.y;
            const endX1 = startX + extendedRadius * Math.cos(midAngle);
            const endY1 = startY + extendedRadius * Math.sin(midAngle);
            const arrowheadLength = 10; // Adjust arrowhead length as needed
            const endX2 = endX1 - arrowheadLength * Math.cos(midAngle - Math.PI / 2);
            const endY2 = endY1 - arrowheadLength * Math.sin(midAngle - Math.PI / 2);
      
            // Draw the arrow line and text
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX1, endY1);
            ctx.lineWidth = 1.5;
            ctx.strokeStyle = element.options.backgroundColor;
            ctx.stroke();
      
            ctx.fillStyle = element.options.backgroundColor;
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
      
            // Position text slightly above the arrowhead
            const textX = endX1 + (arrowheadLength / 2) * Math.cos(midAngle);
            const textY = endY1 + (arrowheadLength / 2) * Math.sin(midAngle);
            ctx.fillText(percentage, textX, textY);
          });
        },
      };

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 10,
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
          customPlugin, // Adding the custom plugin here
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
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '50%', background: '#ccc' }}>
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