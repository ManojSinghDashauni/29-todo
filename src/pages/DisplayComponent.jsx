import React, { useState } from "react";
import { useContextApi } from "../context/Context";
import { DeleteSVG, EditSVG } from "../svg/index";

const DisplayComponent = () => {
  const { notes, setNotes } = useContextApi();
  // const [show, setShow] = useState(false);
  const deleteNote = (id) =>
    setNotes((prev) => prev.filter((todo) => todo.id !== id));
  return (
    <div className="grid grid-cols-4 gap-10 p-20">
      {notes.map((item) => {
        console.log(item);
        return (
          <ul
            key={item.id}
            className="onlyelevation w-full p-4 flex flex-col gap-1"
          >
            <li className="font-bold text-xl uppercase">{item.title}</li>
            <li className="text-base capitalize">{item.name}</li>
            <li className="text-base lowercase mb-2">{item.content}</li>
            <div className="flex justify-between px-10">
              <button onClick={() => deleteNote(item.id)}>
                <DeleteSVG />
              </button>
              {/* <button onClick={() => setShow(!show)}>
                <EditSVG />
              </button> */}
            </div>
          </ul>
        );
      })}
      {/* {show && <Model />} */}
    </div>
  );
};

export default DisplayComponent;
