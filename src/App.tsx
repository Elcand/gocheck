import { useState } from "react";
import "./App.css";

type TodoItem = {
  // ini untk pengganti 'any' di ts, kalo js ga perlu
  id: number;
  title: string;
  done: boolean;
};

function App() {
  const [listItems, setListItems] = useState<TodoItem[]>([]);

  function handleAddItem(item: TodoItem) {
    setListItems((listItems) => [...listItems, item]);
  }

  function handleDeleteItem(id: TodoItem["id"]) {
    setListItems((listItems) => listItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id: TodoItem["id"]) {
    setListItems((listItems) =>
      listItems.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <Checklist
        items={listItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={listItems} />
    </div>
  );
}

function Logo() {
  return <span className="logo">🤞 GoCheck</span>;
}

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

function Checklist({ items, onDeleteItem, onToggleItem }: any) {
  return (
    <div className="list">
      <ul>
        {items.map((item: any) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }: any) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={{ textDecoration: item.done ? "line-through" : "" }}>
        {item.title}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }: { items: TodoItem[] }) {
  const totalItems = items.length; // proses driving state
  const doneItems = items.filter((item) => item.done).length; // ini juga
  const percentage = Math.round((doneItems / totalItems) * 100); // ini juga sama

  return (
    <footer className="stats">
      <span>
        ✅ You have {totalItems} notes & only {doneItems} have been checked off
        ({percentage}%){" "}
      </span>
    </footer>
  );
}

export default App;
