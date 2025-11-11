import { useState } from "react";
import type { TodoItem } from "../App";

function Form({ onAddItem }: { onAddItem: (item: TodoItem) => void }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e: any) {
    // ini untk contoh penggunaan any
    e.preventDefault();

    if (!title) return;

    const newItem = {
      id: Date.now(),
      title,
      done: false,
    };

    onAddItem(newItem);
    setTitle("");

    console.log(e);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Add a ToDo</h3>
      <input
        type="text"
        name="title"
        id=""
        value={title}
        onChange={(e) => {
          console.log(e);
          setTitle(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
