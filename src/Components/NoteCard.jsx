import React from "react";

const NoteCard = ({ title, note }) => {
  return (
    <>
      <div className="border-[1px] rounded-lg p-2 w-[23%] h-28 flex flex-col gap-4">
        <p className="font-semibold">{title}</p>
        <p>{note}</p>
      </div>
    </>
  );
};

export default NoteCard;
