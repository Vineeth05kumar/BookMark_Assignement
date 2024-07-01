import {createContext} from "react";

const AppContext = createContext({
modalIsOpen:false,
bookMarks:[],
modalIsClose:() =>{},
formSubmitHandler:(item) => {},
editHandler: (id) =>{},
deleteHandler:(id) =>{},
});

export default AppContext;