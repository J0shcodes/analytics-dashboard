import { FC } from "react";

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
    <div className="col-span-4 bg-white p-4 rounded-[0.875rem] border border-solid border-[#edf2f7]">
      <div className="flex justify-between items-center">
        <div className="border border-solid border-[#e6e6e6] w-10 h-10 flex justify-center items-center rounded-full">
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
