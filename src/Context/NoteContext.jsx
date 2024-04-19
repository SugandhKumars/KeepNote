import { createContext, useState } from "react";

export const NoteContext = createContext();

export const Note = ({ children }) => {
  const [mainData, setMainData] = useState([]);
  console.log(mainData);
  return (
    <>
      <NoteContext.Provider value={{ setMainData, mainData }}>
        {children}
      </NoteContext.Provider>
    </>
  );
};
