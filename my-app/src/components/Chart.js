import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const data=[
    {
        name:"2019-06-19 12:00:00",
        uv:291.432,
        pv:4300,
        amt:2100
    },
    {
        name:"2019-06-19 12:00:00",
        uv:291.432,
        pv:4300,
        amt:2100
    },
    {
        name:"2019-06-19 12:00:00",
        uv:291.432,
        pv:4300,
        amt:2100
    },
    {
        name:"2019-06-19 12:00:00",
        uv:291.432,
        pv:4300,
        amt:2100
    },
    {
        name:"2019-06-19 12:00:00",
        uv:291.432,
        pv:4300,
        amt:2100
    }
];

export default class Example extends PureComponent {

    render() {
        console.log(this.props.chartData);
        console.log(this.data);
        return (
            <LineChart
                width={500}
                height={300}
                data={this.props.data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        );
    }
}
