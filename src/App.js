import React, { useContext } from "react";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import classes from "./App.module.css";
import AppContext from "./components/Context/app-context";

const App = () => {
  const { modalIsOpen,bookMarks,modalOpen,closeModal,formSubmitHandler,editHandler,deleteHandler }= useContext(AppContext);

  return (
    <div className={classes.container}>
      <h1>Bookmark Website</h1>
      <Button onClick={modalOpen}>Add New</Button>
      {modalIsOpen && (
        <Modal onClose={closeModal}>
          <Form formIsSubmitted={formSubmitHandler} />
        </Modal>
      )}
      <ul>
        {bookMarks.map((item) => (
          <li key={item.id}>
            <a href={item.url}>{item.url}</a>
            <Button onClick={() => editHandler(item.id)}>Edit</Button>
            <Button onClick={() => deleteHandler(item.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
