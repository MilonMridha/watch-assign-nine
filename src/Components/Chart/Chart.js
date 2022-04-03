import React from 'react';
import { Line, LineChart } from 'recharts';

const Chart = ({chart}) => {
    const {investment,month, revenue,sell} = chart;
    return (
        <LineChart width={500} height={500} data={chart}>
            <Line dataKey={"investment"}></Line>
        </LineChart>
    );
};

export default Chart;