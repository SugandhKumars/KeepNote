import React, { useContext, useState } from "react";
import { NoteContext } from "../Context/NoteContext";

const NoteCard = ({ title, note, id }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title); // State variable to track edited title
  const [editedNote, setEditedNote] = useState(note); // State variable to track edited note

  const { mainData, setMainData } = useContext(NoteContext);

  const deleteNote = (key) => {
    let filteredData = mainData.filter((data) => data.id !== key);
    setMainData(filteredData);
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleClose = () => {
    setIsEdit(false);
    // Update the mainData state with edited values
    const updatedData = mainData.map((data) =>
      data.id === id ? { ...data, Title: editedTitle, Note: editedNote } : data
    );
    setMainData(updatedData);
  };

  return (
    <>
      <div className="border-[1px] rounded-lg p-2 w-[23%] min-h-28 flex flex-col gap-4">
        <p className="font-semibold w-full break-words">{title}</p>
        <p className="w-full break-words">{note}</p>
        <div>
          <button
            className="bg-blue-100 px-2 py-1 rounded-md ml-2"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="bg-blue-100 px-2 py-1 rounded-md ml-2"
            onClick={() => deleteNote(id)}
          >
            Delete
          </button>
        </div>
      </div>
      {isEdit && (
        <div className="absolute flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-zinc-300 bg-opacity-45 ">
          <div className="w-[40%] bg-white rounded-lg">
            <input
              type="text"
              className="w-[97%] flex flex-wrap text-sm px-2 py-2 outline-none"
              placeholder="Title"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <textarea
              className="w-[97%] px-2 py-1 outline-none "
              placeholder="Take a Note..."
              value={editedNote}
              onChange={(e) => setEditedNote(e.target.value)}
            ></textarea>
            <div className="flex p-2 justify-between">
              <p>Color</p>
              <p
                className="text-zinc-500 hover:bg-zinc-100 px-2 py-1 rounded-lg cursor-pointer"
                onClick={handleClose}
              >
                Close
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteCard;
