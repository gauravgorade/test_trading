import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import Chart1_Data from '../Data/returns.json';

const chart1_data = Chart1_Data.data.NIFTY_MODSS;

const ChartOne = () => {
    const [state, setState] = useState({
        series: [
            {
                name: 'PnL',
                data: chart1_data.map(item => item.pnl), // pnl values from the data
            },
            
        ],
    });

    // min and max values from the data
    const minPnl = Math.min(...chart1_data.map(item => item.pnl));
    const maxPnl = Math.max(...chart1_data.map(item => item.pnl));
    

    const options = {
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'left',
        },
        colors: ['#3C50E0', '#80CAEE'],
        chart: {
            fontFamily: 'Montserrat, sans-serif',
            height: 335,
            type: 'area',
            dropShadow: {
                enabled: true,
                color: '#623CEA14',
                top: 10,
                blur: 4,
                left: 0,
                opacity: 0.1,
            },
            toolbar: {
                show: false,
            },
        },
        responsive: [
            {
                breakpoint: 1024,
                options: {
                    chart: {
                        height: 300,
                    },
                },
            },
            {
                breakpoint: 1366,
                options: {
                    chart: {
                        height: 350,
                    },
                },
            },
        ],
        stroke: {
            width: [2, 2],
            curve: 'smooth',
        },
        grid: {
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 0,
            colors: '#fff',
            strokeColors: ['#3056D3', '#80CAEE'],
            strokeWidth: 3,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            hover: {
                size: undefined,
                sizeOffset: 5,
            },
        },
        xaxis: {
            type: 'category',
            categories: chart1_data.map(item => item.date), // date values from the data
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: [
            {
                title: {
                    text: 'PnL',
                    style: {
                        fontSize: '12px',
                    },
                },
                min: minPnl, // min value based on data
                max: maxPnl, // max value based on data
            },
            
        ],
    };

    const handleReset = () => {
        setState(prevState => ({
            ...prevState,
        }));
    };

    return (
        <div className="relative">
            {/* Watermark image */}
            
            

            {/* Chart */}
            <div className="mx-auto z-10">
                <ReactApexChart options={options} series={state.series} type="area" height={550} />
            </div>
        </div>
    );
};

export default ChartOne;
