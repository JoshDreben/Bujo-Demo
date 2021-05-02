import { useState, useEffect } from "react";
import Indx from "@components/Indx";
import NewEntryBtn from "@components/NewEntryBtn";
import Entry from "@components/Entry";

export default function Index() {
  const [entries, setEntries] = useState([]);

  const [years, setYears] = useState([]);
  const [currQ, setCurrQ] = useState("q1");
  const [currY, setCurrY] = useState(0);

  useEffect(() => {
    const getYears = localStorage.getItem("years");
    if (getYears) {
      setYears(JSON.parse(getYears));
      setEntries(JSON.parse(getYears)[currY][currQ]);
    } else {
      let year0 = { year: 0, q1: [], q2: [], q3: [], id: Date.now() };
      setYears([year0]);
      localStorage.setItem("years", JSON.stringify([year0]));
    }
  }, []);

  useEffect(() => {
    if (years.length > 0) {
      let updateY = years;
      updateY[currY][currQ] = [...entries];
      localStorage.setItem("years", JSON.stringify(updateY));
    }
  }, [entries]);

  return (
    <div className="z-0 flex flex-col items-center justify-between h-screen p-4 bg-blue-300 sm:space-x-8 sm:flex-row sm:items-start ">
      <Indx years={years} />
      <div className="z-10 flex flex-col items-center w-full h-full p-2 space-y-4 overflow-y-auto ">
        {entries.length > 0 ? (
          entries.map((entry) => {
            return (
              <Entry
                data={entry.rows}
                key={entry.id}
                onSave={(rows) => {
                  entry.rows = rows;
                  let newEntries = [...entries];
                  let index = entries.findIndex((elem) => elem.id == entry.id);
                  newEntries[index] = entry;
                  setEntries(newEntries);
                }}
                onClose={() => {
                  setEntries(entries.filter((curr) => curr.id != entry.id));
                }}
                title={entry.title}
              />
            );
          })
        ) : (
          <h2 className="px-4 py-2 font-bold text-red-400 bg-white rounded-lg ">
            Create your first Entry!
          </h2>
        )}
      </div>
      <NewEntryBtn
        onClick={() => {
          let d = new Date();
          setEntries([
            {
              title: d.toDateString(),
              rows: [],
              id: Date.now(),
            },
            ...entries,
          ]);
        }}
      />
    </div>
  );
}
