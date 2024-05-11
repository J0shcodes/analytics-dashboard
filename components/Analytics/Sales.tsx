"use client";

import { ReactNode } from "react";
import { useTheme } from "next-themes";

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
  AreaChart,
  Area,
} from "recharts";

import Line from "@/public/assets/icons/Line";

const data = [
  {
    name: "Jan",
    pv: 5200,
    amt: 2400,
  },
  {
    name: "Feb",
    pv: 16000,
    amt: 2210,
  },
  {
    name: "Mar",
    pv: 4400,
    amt: 2290,
  },
  {
    name: "Apr",
    pv: 27000,
    amt: 2000,
  },
  {
    name: "May",
    pv: 9000,
    amt: 2181,
  },
  {
    name: "Jun",
    pv: 45000,
    amt: 2500,
  },
  {
    name: "Jul",
    pv: 9000,
    amt: 2100,
  },
  {
    name: "Aug",
    pv: 26000,
    amt: 2100,
  },
  {
    name: "Sep",
    pv: 33000,
    amt: 2100,
  },
  {
    name: "Oct",
    pv: 4800,
    amt: 2100,
  },
  {
    name: "Nov",
    pv: 30000,
    amt: 2100,
  },
  {
    name: "Dec",
    pv: 22000,
    amt: 2100,
  },
];

import ArrowDown2 from "@/public/assets/icons/ArrowDown2";

const Sales = () => {
  const renderCartesianLines = () => {
    for (let i = 1; i <= 10; i++) {
      return <div></div>;
    }
  };

  const { resolvedTheme } = useTheme();

  renderCartesianLines();
  return (
    <div
      className={`xl:col-span-7 col-span-12 ${
        resolvedTheme === "dark" ? "bg-transparent" : "bg-white"
      } px-5 py-[1.34rem] border border-solid border-[#edf2f7] rounded-[0.875rem] h-[23.375rem]`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2
          className={`${
            resolvedTheme === "dark" ? "text-white" : "text-analytics-dark"
          } text-lg font-semibold"`}
        >
          Sales Trends
        </h2>
        <div className="flex items-center gap-2.5">
          <p
            className={`text-sm font-medium ${
              resolvedTheme === "dark" ? "text-white" : "text-analytics-dark-2"
            }`}
          >
            Short by:
          </p>
          <select className="py-1.5 px-3 rounded-[1.25rem] border border-solid border-[#e1dfdf] outline-none">
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Annually</option>
          </select>
          {/* <div className="flex items-center flex-col gap-2.5 py-1.5 px-3 rounded-[1.25rem] border border-solid border-[#e1dfdf]">
            <p className="text-xs text-analytics-dark-2">Weekly</p>
            <ArrowDown2 />
          </div> */}
        </div>
      </div>
      {/* <div> */}
      {/* <div> */}
      <ResponsiveContainer width="100%" height={277}>
        <BarChart width={11.2506} height={216} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar
            dataKey="pv"
            fill="rgba(52, 202, 165, 0.10)"
            activeBar={<Rectangle fill="#34CAA5" stroke="blue" />}
            barSize={30}
          />
          {/* <Bar
              dataKey="uv"
              fill="#82"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            /> */}
        </BarChart>
      </ResponsiveContainer>
      {/* </div> */}
    </div>
  );
};

export default Sales;
