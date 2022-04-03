import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import Chart from '../Chart/Chart';

const DashBoard = () => {

    // const [charts, setCharts] = useState([]);

    // useEffect(()=>{
    //     fetch('rechartData.json')
    //     .then(res => res.json())
    //     .then(data =>setCharts(data))
    // },[])

    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (
        <div className='container mt-5'>
            <div className=' container row row-cols-1'>
            <div>
                <h3>LineChart</h3>
                <LineChart width={700} height={500} data={data}>
                    <Line type="monotone" dataKey={'sell'} stroke="red"></Line>
                    <Line type="monotone" dataKey={'revenue'} stroke="green"></Line>
                    <Line type="monotone" dataKey={'investment'} stroke="blue"></Line>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div className='mt-5 '>
                <h3>BarChart</h3>
                <BarChart width={700} height={500} data={data}>
                    <Bar dataKey={'revenue'} barSize={40} fill='red' ></Bar>
                    <Bar dataKey={'investment'} barSize={50} fill='purple'></Bar>
                    <XAxis dataKey='month'></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>

                </BarChart>
            </div>
            </div>
            
        </div>

    );
};

export default DashBoard;