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

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <Checklist items={listItems} />
      <Stats />
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

function Checklist({ items }: { items: TodoItem[] }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }: { item: TodoItem }) {
  return (
    <li>
      <input type="checkbox" />
      <span style={{ textDecoration: item.done ? "line-through" : "none" }}>
        {item.title}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <span>✅ You have x notes & only x have been checked off (x%) </span>
    </footer>
  );
}

export default App;
