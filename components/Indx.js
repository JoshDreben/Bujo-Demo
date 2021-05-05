import { useState } from "react";

const Indx = ({ years, setYear, setQuarter, setWeek }) => {
  return (
    <div className="z-50 flex-col items-center hidden w-48 h-full p-4 bg-gray-100 rounded-md shadow-xl min-w-min sm:flex">
      <h1 className="w-full mb-4 text-lg font-black text-left text-red-400 select-none">
        INDEX
      </h1>
      {years.map((year) => {
        const [spanOpen, setSpanOpen] = useState(false);
        const [weeksOpen, setWeeksOpen] = useState(null);

        return (
          <div key={Date.now() * Math.random()} className="w-full">
            <button
              onClick={() => {
                setSpanOpen(!spanOpen);
                setYear(year.year);
              }}
              className="w-full px-2 py-1 text-sm font-bold text-left bg-white rounded-md shadow-md "
            >
              YEAR {year.year + 1}
            </button>
            <span
              className={
                "flex mt-1 flex-col space-y-1 w-full pl-2 invisible" +
                (spanOpen ? "visible" : "")
              }
            >
              <button
                onClick={() => {
                  setQuarter("q1");

                  if (weeksOpen && weeksOpen == 1) {
                    setWeeksOpen(null);
                  } else {
                    setWeeksOpen(1);
                  }
                }}
                className="px-2 py-1 text-sm font-bold text-left bg-white rounded-md shadow-md"
              >
                Q1
              </button>
              <span
                className={
                  " w-full hidden" +
                  (weeksOpen && weeksOpen == 1 ? "flex flex-col" : "")
                }
              >
                {[...Array(9).keys()].map((i) => {
                  return (
                    <button
                      key={Date.now() * Math.random()}
                      onClick={() => setWeek("w" + (i + 1))}
                      className="px-2 py-1 mb-1 text-sm font-bold bg-white rounded-md shadow-md"
                    >
                      {"WEEK " + (i + 1)}
                    </button>
                  );
                })}
              </span>
              <button
                onClick={() => {
                  setQuarter("q2");

                  if (weeksOpen && weeksOpen == 2) {
                    setWeeksOpen(null);
                  } else {
                    setWeeksOpen(2);
                  }
                }}
                className="px-2 py-1 text-sm font-bold text-left bg-white rounded-md shadow-md"
              >
                Q2
              </button>
              <span
                className={
                  " w-full hidden" +
                  (weeksOpen && weeksOpen == 2 ? "flex flex-col" : "")
                }
              >
                {[...Array(9).keys()].map((i) => {
                  return (
                    <button
                      key={Date.now() * Math.random()}
                      onClick={() => setWeek("w" + (i + 1))}
                      className="px-2 py-1 mb-1 text-sm font-bold bg-white rounded-md shadow-md"
                    >
                      {"WEEK " + (i + 1)}
                    </button>
                  );
                })}
              </span>
              <button
                onClick={() => {
                  setQuarter("q3");

                  if (weeksOpen && weeksOpen == 3) {
                    setWeeksOpen(null);
                  } else {
                    setWeeksOpen(3);
                  }
                }}
                className="px-2 py-1 text-sm font-bold text-left bg-white rounded-md shadow-md"
              >
                Q3
              </button>
              <span
                className={
                  " w-full hidden" +
                  (weeksOpen && weeksOpen == 3 ? "flex flex-col" : "")
                }
              >
                {[...Array(9).keys()].map((i) => {
                  return (
                    <button
                      key={Date.now() * Math.random()}
                      onClick={() => setWeek("w" + (i + 1))}
                      className="px-2 py-1 mb-1 text-sm font-bold bg-white rounded-md shadow-md"
                    >
                      {"WEEK " + (i + 1)}
                    </button>
                  );
                })}
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Indx;
