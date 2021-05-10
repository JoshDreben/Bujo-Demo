const NewEntryBtn = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-all duration-100 transform translate-y-1 bg-white rounded-full shadow-lg cursor-pointer select-none min-w-max hover:bg-red-500 group active:bg-red-400 active:translate-y-2"
    >
      <h1 className="pb-1 text-4xl font-black text-red-400 select-none group-hover:text-white">
        +
      </h1>
    </button>
  );
};

export default NewEntryBtn;
