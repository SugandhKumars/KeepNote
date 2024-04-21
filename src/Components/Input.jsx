import React, { useContext, useEffect, useRef, useState } from "react";
import { NoteContext } from "../Context/NoteContext";
import NoteCard from "./NoteCard";

const Input = () => {
  const [showTitle, setShowTitle] = useState(false);
  const { mainData, setMainData } = useContext(NoteContext);
  const [Title, setTitle] = useState("");
  const [Note, setNote] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    if (showTitle) inputRef.current.focus();
  }, [showTitle]);
  const handleShow = () => {
    setShowTitle(!showTitle);
  };
  const handleClose = () => {
    setShowTitle(false);
    if (Title.trim().length > 0 || Note.trim().length) {
      setMainData([...mainData, { Title, Note, id: Math.random() }]);
    }

    setTitle("");
    setNote("");
  };
  console.log(mainData);
  return (
    <div className="w-full relative h-screen border-2 border-red-300">
      <div className="w-[40%] flex flex-col justify-center mx-auto mt-10 border-[1px] shadow-xl  rounded-lg  ">
        {showTitle ? (
          <>
            <input
              type="text"
              className="w-[97%] flex flex-wrap text-sm   px-2 py-2 outline-none"
              placeholder="Title"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="w-[97%] px-2 py-1 outline-none "
              placeholder="Take a Note..."
              value={Note}
              onChange={(e) => setNote(e.target.value)}
              ref={inputRef}
            ></textarea>
            <div className="flex p-2 justify-between">
              <p>Color</p>
              <p
                className="text-zinc-500 hover:bg-zinc-100 px-2 py-1 rounded-lg cursor-pointer"
                onClick={() => handleClose()}
              >
                Close
              </p>
            </div>
          </>
        ) : (
          <>
            <input
              type="text"
              className="w-[97%] flex flex-wrap  text-sm  px-2 py-2 outline-none"
              placeholder="Take A Note..."
              onClick={() => handleShow()}
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </>
        )}
      </div>
      <div className="w-[70%] mx-auto flex flex-wrap border-2 mt-10 gap-6 p-2">
        {mainData.map((data) => (
          <NoteCard
            key={data.id}
            title={data.Title}
            note={data.Note}
            id={data.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Input;
