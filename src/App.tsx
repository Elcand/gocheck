import { useState } from "react";
import "./App.css";

import Logo from "./components/Logo";
import Form from "./components/Form";
import Checklist from "./components/Checklist";
import Stats from "./components/Stats";

export type TodoItem = {
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

  function handleClearitems() {
    const confirmed = window.confirm(
      "Are you sure you want to clear this list?"
    );
    if (confirmed) {
      setListItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <Checklist
        items={listItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearitems}
      />
      <Stats items={listItems} />
    </div>
  );
}

export default App;
