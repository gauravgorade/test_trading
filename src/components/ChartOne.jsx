import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';
import Chart1_Data from '../Data/returns.json';
import PeriodsData from '../Data/ddperiod.json';

const chart1_data = Chart1_Data.data.NIFTY_MODSS;
const periodsData = PeriodsData.data;

const ChartOne = () => {
    const ChartComponent = () => {
        const chartContainerRef = useRef(null);

        useEffect(() => {
            const chartOptions = {
                layout: {
                    textColor: 'black',
                    background: { type: ColorType.Solid, color: 'white' }
                }
            };

            const chart = createChart(chartContainerRef.current, chartOptions);
            const lineSeries = chart.addLineSeries();

            // Extracting data from chart1_data
            const data = chart1_data.map(item => ({
                time: item.date,  // Assuming the date is formatted correctly
                value: item.cumsum,
                color: checkPeriodColor(item.date) // Checking if the time falls within any period
            }));

            lineSeries.setData(data);

            // Here, you can add code to create custom time markers or other desired features

            return () => {
                chart.remove();
            };
        }, []);

        // Function to check if the provided time falls within any period and return color accordingly
        const checkPeriodColor = (time) => {
            for (let i = 0; i < periodsData.length; i++) {
                if (time >= periodsData[i].Start_Date && time <= periodsData[i].End_Date) {
                    return 'red'; // Change to red if time falls within any period
                }
            }
            return undefined; // Default color if no matching period found
        };

        return (
            <div ref={chartContainerRef} style={{ width: '100%', height: '400px' }}></div>
        );
    };

    return (
        <div>
            {/* Add any other components or content here */}
            <ChartComponent />
        </div>
    );
};

export default ChartOne;
