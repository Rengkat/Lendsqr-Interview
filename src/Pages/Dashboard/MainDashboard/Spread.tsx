import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "January",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "February",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "March",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "April",
    uv: 1480,
    pv: 1200,
    amt: 128,
  },
  {
    name: "May",
    uv: 1520,
    pv: 1108,
    amt: 100,
  },
  {
    name: "Jun",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: "Jul",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Aug",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: "Sept",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Oct",
    uv: 1400,
    pv: 7080,
    amt: 3800,
  },
  {
    name: "Nov",
    uv: 1700,
    pv: 6800,
    amt: 2700,
  },
  {
    name: "Dec",
    uv: 1400,
    pv: 780,
    amt: 1700,
  },
];

const Spread = () => {
  return (
    // <div style={{ width: "100%" }}>
    <div style={{ width: "95%", height: 400, padding: "2PZ" }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
    // </div>
  );
};

export default Spread;
