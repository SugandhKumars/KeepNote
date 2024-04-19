import React, { useContext, useState } from "react";
import { NoteContext } from "../Context/NoteContext";

const NoteCard = ({ title, note, id }) => {
  const [isEdit, setIsEdit] = useState(false);
  //   const [Title, setTitle] = useState("");
  //   const [Note, setNote] = useState("");
  //   const [editTitle, setEditTitle] = useState(Title);
  //   const [editNote, setEditNote] = useState(Note);
  const { mainData, setMainData } = useContext(NoteContext);

  const deleteNote = (key) => {
    let FilterData = mainData.filter((data) => data.id !== key);
    setMainData(FilterData);
  };
  const EditNote = (key) => {
    setIsEdit(true);
    const EditedNote = mainData.filter((data) => data.id == key);
    let title = EditedNote[0].Title;
    let note = EditedNote[0].Note;
    // setTitle(title);
    // setNote(note);
  };
  const handleClose = () => {
    setIsEdit(false);
  };
  //   console.log(Title);

  return (
    <>
      <div className="border-[1px] rounded-lg p-2 w-[23%] min-h-28 flex flex-col gap-4">
        <p className="font-semibold w-full break-words">{title}</p>

        <p className="w-full break-words">{note}</p>
        <div>
          <button
            className="bg-blue-100 px-2 py-1 rounded-md ml-2"
            onClick={() => EditNote(id)}
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
              className="w-[97%] flex flex-wrap text-sm   px-2 py-2 outline-none"
              placeholder="Title"
            />
            <textarea
              className="w-[97%] px-2 py-1 outline-none "
              placeholder="Take a Note..."
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
          </div>
        </div>
      )}
    </>
  );
};

export default NoteCard;
