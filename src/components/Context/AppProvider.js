import React, { useState } from "react";
import AppContext from "./app-context";

const AppProvider = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [bookMarks, setBookMarks] = useState([]);
  const [editItemId, setEditItemId] = useState(null); // Track the id of the item being edited

  const modalOpen = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditItemId(null); 
  };

  const formSubmitHandler = (item) => {
    if (editItemId !== null) {

      setBookMarks((prev) =>
        prev.map((bookmark) =>
          bookmark.id === editItemId ? { ...bookmark, url: item.url } : bookmark
        )
      );
      setEditItemId(null); 
    } else {
     
      setBookMarks((prev) => [...prev, { url: item.url, id: item.id }]);
    }
    closeModal();
  };

  const deleteHandler = (id) => {
    setBookMarks((prev) => prev.filter((item) => item.id !== id));
  };

  const editHandler = (id) => {
    const bookmarkToEdit = bookMarks.find((item) => item.id === id);
    if (bookmarkToEdit) {
      
      setEditItemId(id);
     
      modalOpen();
    }
  };

  const appContext = {
    modalIsOpen,
    modalOpen,
    closeModal,
    formSubmitHandler,
    editHandler,
    deleteHandler,
    bookMarks,
  };

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
