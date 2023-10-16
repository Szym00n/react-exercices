import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

import Form from "./Form";
import Items from "./Items";

import "react-toastify/dist/ReactToastify.css";

function setLocalStorage(items) {
  localStorage.setItem("list", JSON.stringify(items));
}

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("list") || "[]"));
  }, []);

  function addItem(itemName) {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  }

  function removeItem(id) {
    const newItems = items.filter((item) => item.id != id);
    setItems(newItems);
    setLocalStorage(newItems);
  }

  function toggleCompleted(id) {
    const newItems = items.map((item) => {
      if (item.id === id) item.completed = !item.completed;
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  }

  return (
    <>
      <section className="section-center">
        <Form addItem={addItem} />
        <Items
          items={items}
          removeItem={removeItem}
          toggleCompleted={toggleCompleted}
        />
      </section>
      <ToastContainer position="top-center" />
    </>
  );
};

export default App;
