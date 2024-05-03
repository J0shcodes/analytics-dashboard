import { FC } from "react";
import {
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

interface SummaryProps {
  title: string;
  icon: JSX.Element;
  readings: JSX.Element;
  value: string;
  secondIcon: JSX.Element;
  profit: boolean;
}

const Summary: FC<SummaryProps> = ({
  title,
  icon,
  readings,
  value,
  secondIcon,
  profit,
}) => {
  return (
    <div className="xl:col-span-4 col-span-12 bg-white p-4 rounded-[0.875rem] border border-solid border-[#edf2f7]">
      <div className="flex justify-between items-center">
        <div className="border border-solid border-[#e6e6e6] w-10 h-10 flex justify-center items-center rounded-[9999px]">
          {icon}
        </div>
        <div>{readings}</div>

      </div>
      <div className="mt-2.5">
        <h2 className="text-[#898989] text-lg font-medium">{title}</h2>
        <div className="text-analytics-dark-2 text-2xl font-semibold">
          {value}
        </div>
      </div>
      <div className="flex items-center gap-2.5 mt-2.5">
        <div
          className={
            profit
              ? "flex justify-center items-center gap-1 py-1 px-2 rounded-[62.5rem] bg-analytics-green-2"
              : "flex justify-center items-center gap-1 py-1 px-2 rounded-[62.5rem] bg-analytics-red"
          }
        >
          <div>{secondIcon}</div>
          <div
            className={
              profit
                ? "text-xs font-medium text-analytics-green"
                : "text-xs font-medium text-[#ed544e]"
            }
          >
            23.5%
          </div>
        </div>
        <div className="text-[#606060] text-sm">vs. previous month</div>
      </div>
    </div>
  );
};

export default Summary;
