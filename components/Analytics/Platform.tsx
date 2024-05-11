import { useTheme } from "next-themes";

const Platform = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={`xl:col-span-5 col-span-12 ${
        resolvedTheme === "dark" ? "bg-transparent" : "bg-white"
      } px-5 py-[1.13rem] border border-solid border-[#edf2f7] rounded-[0.875rem]`}
    >
      <div className="flex justify-between items-center">
        <h2
          className={`${
            resolvedTheme === "dark" ? "text-white" : "text-analytics-dark"
          } text-lg font-semibold`}
        >
          Top Platform
        </h2>
        <button className="text-analytics-green text-lg font-medium text-center">
          See All
        </button>
      </div>
      <div className="mt-5">
        <div>
          <div
            className={`text-lg ${
              resolvedTheme === "dark" ? "text-white" : "text-analytics-dark-4"
            } font-semibold mb-[1.06rem]`}
          >
            Book Bazaar
          </div>
          <div className="h-3 rounded-[2.5rem] bg-analytics-grey-2">
            <div className="h-[100%] w-[50%] rounded-[2.5rem] bg-[#6160dc]"></div>
          </div>
          <div
            className={`mt-4 mb-5 flex justify-between items-center text-lg text-analytics-grey-3 ${
              resolvedTheme === "dark" ? "text-white" : "text-analytics-grey-3"
            }`}
          >
            <p> $2,500,000</p>
            <p>+15%</p>
          </div>
        </div>
        <div>
          <div
            className={`text-lg ${
              resolvedTheme === "dark" ? "text-white" : "text-analytics-dark-4"
            } font-semibold mb-[1.06rem]`}
          >
            Artisan Aisle
          </div>
          <div className="h-3 rounded-[2.5rem] bg-analytics-grey-2">
            <div className="h-[100%] w-[40%] rounded-[2.5rem] bg-[#54c5eb]"></div>
          </div>
          <div
            className={`mt-4 mb-5 flex justify-between items-center text-lg text-analytics-grey-3 ${
              resolvedTheme === "dark" ? "text-white" : "text-analytics-grey-3"
            }`}
          >
            <p>$1,800,000</p>
            <p>+10%</p>
          </div>
        </div>
        <div>
          <div
            className={`text-lg ${
              resolvedTheme === "dark" ? "text-white" : "text-analytics-dark-4"
            } font-semibold mb-[1.06rem]`}
          >
            Toy Troop
          </div>
          <div className="h-3 rounded-[2.5rem] bg-analytics-grey-2">
            <div className="h-[100%] w-[30%] rounded-[2.5rem] bg-[#ffb74a]"></div>
          </div>
          <div
            className={`mt-4 mb-5 flex justify-between items-center text-lg text-analytics-grey-3 ${
              resolvedTheme === "dark" ? "text-white" : "text-analytics-grey-3"
            }`}
          >
            <p>$1,200,00</p>
            <p>+8%</p>
          </div>
        </div>
        <div>
          <div
            className={`text-lg ${
              resolvedTheme === "dark" ? "text-white" : "text-analytics-dark-4"
            } font-semibold mb-[1.06rem]`}
          >
            XStore
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
