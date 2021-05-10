import { useState } from "react";

const Entry = (props) => {
  const [rows, setRows] = useState(props.data);
  const [editing, setEditing] = useState(false);

  const [newRows, setNewRows] = useState([]);

  const saveEntry = () => {
    props.onSave(rows);
    setEditing(false);
    setNewRows([]);
  };

  return (
    <div className="flex flex-col flex-shrink-0 w-full max-w-xl p-4 space-y-4 transition-all duration-100 bg-gray-100 rounded-lg shadow-lg h-1/2">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-lg font-black">{props.title}</h1>
        {editing ? (
          <>
            <button
              disabled={!editing}
              onClick={() => {
                setNewRows([
                  ...newRows,
                  { type: "test", id: Date.now(), text: "" },
                ]);
              }}
              className="w-8 h-8 text-xl font-black text-white bg-yellow-400 rounded-lg"
            >
              T
            </button>
            <button
              disabled={!editing}
              onClick={() => {
                setNewRows([
                  ...newRows,
                  { type: "hw", id: Date.now(), text: "" },
                ]);
              }}
              className="w-8 h-8 text-xl font-black text-white bg-yellow-400 rounded-lg"
            >
              -
            </button>
            <button
              disabled={!editing}
              onClick={() => {
                setNewRows([
                  ...newRows,
                  { type: "urgent", id: Date.now(), text: "" },
                ]);
              }}
              className="w-8 h-8 text-xl font-black text-white bg-yellow-400 rounded-lg"
            >
              !
            </button>
            <button
              disabled={!editing}
              onClick={() => saveEntry()}
              className="w-8 h-8 text-xl font-black text-white bg-green-400 rounded-lg"
            >
              S
            </button>
            <button
              disabled={!editing}
              onClick={props.onClose}
              className="w-8 h-8 text-xl font-black text-white bg-red-400 rounded-lg"
            >
              X
            </button>
          </>
        ) : null}
        {!editing ? (
          <button
            disabled={editing}
            onClick={() => {
              setEditing(true);
            }}
            className={
              "w-8 h-8 text-xl font-black text-white bg-yellow-400 rounded-lg"
            }
          >
            E
          </button>
        ) : null}
      </div>
      <div className="flex flex-col w-full h-full px-1 space-y-1 overflow-scroll">
        {rows.map((row) => {
          return (
            <div
              key={row.id}
              className="flex items-center flex-shrink-0 w-full py-1 bg-white rounded-lg shadow-md"
            >
              {row.type == "test" ? (
                <p className="ml-2 mr-4 text-lg font-bold ">T</p>
              ) : null}
              {row.type == "hw" ? (
                <p className="ml-2 mr-4 text-lg font-bold ">-</p>
              ) : null}
              {row.type == "urgent" ? (
                <p className="ml-2 mr-4 text-lg font-bold ">!</p>
              ) : null}
              <p className="w-full italic">{row.text}</p>
              {editing ? (
                <button
                  onClick={() =>
                    setRows(rows.filter((curr) => curr.id != row.id))
                  }
                  className="flex-shrink-0 w-6 h-6 mr-1 font-black text-white bg-red-400 rounded-lg"
                >
                  X
                </button>
              ) : null}
            </div>
          );
        })}
        {newRows.length > 0
          ? newRows.map((newRow) => (
              <div
                key={Math.random() + Date.now()}
                className="flex items-center flex-shrink-0 w-full px-1 py-1 bg-white rounded-lg shadow-md "
              >
                {newRow.type == "test" ? (
                  <p className="ml-1 mr-4 text-lg font-bold ">T</p>
                ) : null}
                {newRow.type == "hw" ? (
                  <p className="ml-1 mr-4 text-lg font-bold ">-</p>
                ) : null}
                {newRow.type == "urgent" ? (
                  <p className="ml-1 mr-4 text-lg font-bold ">!</p>
                ) : null}
                <input
                  className="w-full outline-none "
                  placeholder="enter text here"
                  onChange={(e) => (newRow.text = e.target.value)}
                ></input>
                <button
                  onClick={() => {
                    setRows([
                      ...rows,
                      {
                        type: newRow.type,
                        text: newRow.text,
                        id: Date.now(),
                      },
                    ]);
                    setNewRows(newRows.filter((row) => row.id != newRow.id));
                  }}
                  className="flex-shrink-0 w-6 h-6 ml-1 font-black text-white bg-green-400 rounded-lg"
                >
                  S
                </button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Entry;
