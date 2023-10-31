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
    mnw: 590,
    wnw: 800,
    mcw: 1400,
    wcw: 300,
  },
  {
    name: "February",
    mnw: 868,
    wnw: 967,
    amt: 1506,
    wcw: 900,
  },
  {
    name: "March",
    mnw: 1397,
    wnw: 1098,
    mcw: 989,
    wcw: 1200,
  },
  {
    name: "April",
    mnw: 1397,
    wnw: 1098,
    mcw: 989,
    wcw: 1200,
  },
  {
    name: "May",
    mnw: 1397,
    wnw: 888,
    mcw: 989,
    wcw: 190,
  },
  {
    name: "Jun",
    mnw: 1397,
    wnw: 1398,
    mcw: 989,
    wcw: 100,
  },
];
// #13e908

const Spread = () => {
  return (
    // <div style={{ width: "100%" }}>
    <div style={{ width: "100%", height: 400, padding: "2PZ" }}>
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
          <Area type="monotone" dataKey="mnw" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="wnw" barSize={20} fill="#413ea0" />
          <Bar dataKey="wcw" barSize={20} fill="#0810ff" />
          <Line type="monotone" dataKey="wcw" stroke="#ff1408" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
    // </div>
  );
};

export default Spread;
