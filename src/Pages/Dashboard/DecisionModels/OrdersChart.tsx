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
import { sales } from "../../../Constants/constants";

// #13e908

const OrderChart = () => {
  return (
    <div style={{ width: "100%", height: 400, padding: "2PZ" }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={sales}
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
          {/* <Area type="monotone" dataKey="mnw" fill="#8884d8" stroke="#8884d8" /> */}
          <Bar dataKey="pending" barSize={22} fill="#a0830c" />
          <Bar dataKey="canceled" barSize={22} fill="#a12626" />
          <Bar dataKey="delivered" barSize={22} fill="#449117" />
          {/* <Line type="monotone" dataKey="pending" stroke="#a0830c" />
          <Line type="monotone" dataKey="canceled" stroke="#a12626" />
          <Line type="monotone" dataKey="delivered" stroke="#449117" /> */}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderChart;
