"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
} from "recharts";
const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Sep",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
import ArrowDown2 from "@/public/assets/icons/ArrowDown2";

const Sales = () => {
  return (
    <div className="col-span-7 bg-white px-5 py-[1.34rem] border border-solid border-[#edf2f7] rounded-[0.875rem]">
      <div className="flex justify-between items-center">
        <h2 className="text-analytics-dark text-lg font-semibold">
          Sales Trends
        </h2>
        <div className="flex items-center gap-2.5">
          <p className="text-sm font-medium text-analytics-dark-2">Short by:</p>
          <div className="flex items-center flex-col gap-2.5 py-1.5 px-3 rounded-[1.25rem] border border-solid border-[#e1dfdf]">
            <p className="text-xs text-analytics-dark-2">Weekly</p>
            <ArrowDown2 />
          </div>
        </div>
      </div>
      {/* <div> */}
        <ResponsiveContainer width="100%" height={277}>
          <BarChart width={11.2506} height={216} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="pv"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
              barSize={30}
            />
            {/* <Bar
              dataKey="uv"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            /> */}
          </BarChart>
        </ResponsiveContainer>
      {/* </div> */}
    </div>
  );
};

export default Sales;
