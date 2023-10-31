import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "In stock", value: 400 },
  { name: "Out of stock", value: 300 },
];
const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];
const PieCharts = () => {
  return (
    // <ResponsiveContainer>
    <PieChart
      style={{
        // marginTop: "-5rem",
        background: "white",
        paddingBottom: "2rem",
      }}
      width={350}
      height={300}>
      <Pie data={data01} dataKey="value" cx={160} cy={150} outerRadius={50} fill="#8884d8" />
      <Pie
        data={data02}
        dataKey="value"
        cx={160}
        cy={150}
        innerRadius={70}
        outerRadius={90}
        fill="#82ca9d"
        label
      />
    </PieChart>
    // </ResponsiveContainer>
  );
};

export default PieCharts;
