import { useState } from "react";

export const Inventory = () => {
  const [bookcount, setbookcount] = useState(10);
  const [notebookcount, setnotebookcount] = useState(13);
  const [pencount, setpencount] = useState(40);
  const [inkpencount, setinkpencount] = useState(10);

  const bookAddHandler = (value) => {
    if(bookcount >= 0){
        setbookcount(bookcount + value);
    } else {
        setbookcount(bookcount);
    }
  }

  const bookOutHandler = (value) => {
    if(bookcount > 0){
        setbookcount(bookcount - value);
    } else {
        setbookcount(bookcount);
    }
  }

  const notebookAddHandler = (value) => {
      setnotebookcount(notebookcount + value);
  }

  const notebookOutHandler = (value) => {
      if(notebookcount > 0){
        setnotebookcount(notebookcount - value);
      } else{
        setnotebookcount(notebookcount)
      }
  }

  const penAddHandler = (value) => {
      setpencount(pencount + value);
  }

  const penOutHandler = (value) => {
      if(pencount > 0){
        setpencount(pencount - value);
      } else{
        setpencount(pencount)
      }
    
  }


  const inkpenAddHandler = (value) => {
      setinkpencount(inkpencount + value);
  }

  const inkpenOutHandler = (value) => {
    if(inkpencount > 0){
        setinkpencount(inkpencount - value);
    }
    else {
        setinkpencount(inkpencount);
    }
    
 }


    // Create add and remove functions here that changes the
    // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={() => {
            bookAddHandler(1);
        }}>+</button>
        <button className="circlularButton" onClick={() => {
            bookOutHandler(1);
        }}>-</button>
        <span>{bookcount}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={() => {
            notebookAddHandler(1);
        }}>+</button>
        <button className="circlularButton"onClick={() => {
            notebookOutHandler(1);
        }}>-</button>
        <span>{notebookcount}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={() => {
            penAddHandler(1);
        }}>+</button>
        <button className="circlularButton" onClick={() => {
            penOutHandler(1);
        }}>-</button>
        <span>{pencount}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={() => {
            inkpenAddHandler(1);
        }}>+</button>
        <button className="circlularButton" onClick={() => {
            inkpenOutHandler(1);
        }}>-</button>
        <span>{inkpencount}</span>
      </div>
            {/*calculate total and show it*/}
      total: {bookcount + pencount + notebookcount + inkpencount}
    </div>
  );
};