{
  /* Comments here */
}
import React, { useState } from "react";
import "./ToDoList.css";
import todoImage from "../../assets/images/todoImage.png";

function ToDoList() {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");

  //function to get data form form:
  function addItem(form) {
    form.preventDefault();

    //if form is empty, stop script:
    if (!newItem) return;

    //if form is no empty, next:
    setList([...list, { text: newItem, iscompleted: false }]);
    document.getElementById("input-enter").focus();
  }

  //clickec functi on:
  function clicked(index) {
    const listAux = [...list];
    listAux[index].iscompleted = !listAux[index].iscompleted;
    setList(listAux);
  }

  //Delete item from list:
  function delItem(index) {
    const listAux = [...list];
    listAux.splice(index, 1);
    setList(listAux);
  }

  //delete all tasks:
  function delItens() {
    setList([]);
  }

  return (
    <div>
      <h1>Todo List iControl</h1>
      <form onSubmit={addItem}>
        <input
          id="input-enter"
          type="text"
          placeholder="Add new task here"
          value={newItem}
          onChange={(event) => {
            setNewItem(event.target.value);
          }}
        />
        <button className="add">Add now</button>
      </form>

      {/* Tasks saved */}

      <div className="tasks">
        <div style={{ textAlign: "center" }}>
          {list.length < 1 ? (
            <img className="todoIcon" src={todoImage} />
          ) : (
            list.map((item, index) => (
              <div
                key={index}
                className={item.iscompleted ? "item done" : "item"}
              >
                <span
                  onClick={() => {
                    clicked(index);
                  }}
                >
                  {item.text}
                </span>
                <button
                  onClick={() => {
                    delItem(index);
                  }}
                  className="del"
                >
                  Del
                </button>
              </div>
            ))
          )}

          {list.length > 0 && (
            <button
              onClick={() => {
                delItens();
              }}
              className="delAll"
            >
              Delete all tasks
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
