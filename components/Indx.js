const Indx = ({ years }) => {
  return (
    <div className="flex-col items-center hidden w-64 h-full p-4 bg-white rounded-md shadow-xl min-w-min sm:flex">
      <h1 className="w-full mb-4 text-lg font-black text-left text-red-400 select-none">
        INDEX
      </h1>
      {years.map((year) => {
        return (
          <button className="w-full ml-4 text-sm font-bold text-left">
            YEAR {year.year + 1}
          </button>
        );
      })}
    </div>
  );
};

export default Indx;
