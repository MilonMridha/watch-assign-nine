
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const DashBoard = () => {


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
        <div className='container mx-auto w-100 ps-0 mt-5 '>
            <div className='row'>
                <div className='col-md-6 col-12'>
                    <h3 className='text-start'>LineChart</h3>
                    <LineChart width={370} height={400} data={data}>
                        <Line type="monotone" dataKey={'sell'} stroke="red"></Line>
                        <Line type="monotone" dataKey={'revenue'} stroke="green"></Line>
                        <Line type="monotone" dataKey={'investment'} stroke="blue"></Line>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                    </LineChart>
                </div>
                <div className='col-md-6 col-12'>
                    <h3 className='text-start'>BarChart</h3>
                    <BarChart width={370} height={400} data={data}>
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