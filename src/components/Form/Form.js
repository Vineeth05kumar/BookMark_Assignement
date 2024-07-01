import React, { useContext, useState } from "react";
import AppContext from "../Context/app-context";

const Form = () => {
  const { formSubmitHandler,  closeModal } = useContext(AppContext);
  const [enteredUrl, setEnteredUrl] = useState("");
  const [editItemId, setEditItemId] = useState(null); 

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUrl.trim() !== "") {
      formSubmitHandler({ url: enteredUrl, id: editItemId || Math.random().toString() });
      setEnteredUrl("");
      setEditItemId(null); 
    }
  };

  const inputHandler = (e) => {
    setEnteredUrl(e.target.value);
  };

  const isEditMode = editItemId !== null; 

  return (
    <form onSubmit={onSubmitHandler}>
      <label>{isEditMode ? "Update Link:" : "Add New Link:"}</label>
      <input type="url" value={enteredUrl} onChange={inputHandler} />
      <button type="submit">{isEditMode ? "Update" : "Save"}</button>
      <button type="button" onClick={closeModal}>Cancel</button>
    </form>
  );
};

export default Form;
