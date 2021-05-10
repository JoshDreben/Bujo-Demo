import { useState, useEffect } from 'react';
import NewEntryBtn from '../components/NewEntryBtn';
import Entry from '../components/Entry';
import Indx from '../components/Indx';

export default function Index() {
  const [entries, setEntries] = useState([]);

  const [beenHere, setBeenHere] = useState(false);

  const [years, setYears] = useState([]);
  const [currQ, setCurrQ] = useState('q1');
  const [currY, setCurrY] = useState(0);
  const [currW, setCurrW] = useState('w1');

  useEffect(() => {
    const getYears = localStorage.getItem('years');
    if (getYears) {
      setYears(JSON.parse(getYears));
      setEntries(JSON.parse(getYears)[currY][currQ][currW]);
      setBeenHere(true);
    } else {
      const year0 = {
        year: 0,
        q1: {
          w1: [],
          w2: [],
          w3: [],
          w4: [],
          w5: [],
          w6: [],
          w7: [],
          w8: [],
          w9: [],
          w10: [],
        },
        q2: {
          w1: [],
          w2: [],
          w3: [],
          w4: [],
          w5: [],
          w6: [],
          w7: [],
          w8: [],
          w9: [],
          w10: [],
        },
        q3: {
          w1: [],
          w2: [],
          w3: [],
          w4: [],
          w5: [],
          w6: [],
          w7: [],
          w8: [],
          w9: [],
          w10: [],
        },
        id: Date.now(),
      };
      setYears([year0]);
      localStorage.setItem('years', JSON.stringify([year0]));
    }
  }, []);

  useEffect(() => {
    setBeenHere(true);
    if (years.length > 0) {
      const updateY = years;
      updateY[currY][currQ][currW] = [...entries];
      localStorage.setItem('years', JSON.stringify(updateY));
    }
  }, [entries]);

  useEffect(() => {
    if (years.length > 0) {
      const showEntries = years[currY][currQ][currW];
      if (showEntries) {
        setEntries(showEntries);
      }
    }
  }, [currQ, currY, currW]);

  return (
    <div className="z-0 flex flex-col items-center justify-between h-screen p-4 bg-blue-300 sm:space-x-8 sm:flex-row sm:items-start ">
      <Indx
        years={years}
        setYear={(year) => setCurrY(year)}
        setWeek={(week) => setCurrW(week)}
        setQuarter={(quarter) => setCurrQ(quarter)}
      />
      <div className="z-10 flex flex-col items-center w-full h-full p-2 space-y-4 overflow-y-auto ">
        {entries.length > 0 ? (
          entries.map((entry) => (
            <Entry
              data={entry.rows}
              key={entry.id}
              onSave={(rows) => {
                // eslint-disable-next-line no-param-reassign
                entry.rows = rows;
                const newEntries = [...entries];
                const index = entries.findIndex((elem) => elem.id === entry.id);
                newEntries[index] = entry;
                setEntries(newEntries);
              }}
              onClose={() => {
                setEntries(entries.filter((curr) => curr.id !== entry.id));
              }}
              title={entry.title}
            />
          ))
        ) : (
          <h2 className="px-4 py-2 font-bold text-red-400 bg-white rounded-lg">
            {beenHere ? 'No Entries Here!' : 'Create Your First Entry!'}
          </h2>
        )}
      </div>
      <NewEntryBtn
        onClick={() => {
          const d = new Date();
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
