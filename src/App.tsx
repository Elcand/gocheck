import { useState } from "react";
import "./App.css";

const listItems = [
  {
    id: 1,
    title: "Makan",
    done: false,
  },
  {
    id: 2,
    title: "Minum",
    done: false,
  },
  {
    id: 3,
    title: "Tidur",
    done: true,
  },
  {
    id: 4,
    title: "Ngobrol",
    done: false,
  },
  {
    id: 5,
    title: "Nonton",
    done: false,
  },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <Checklist />
      <Stats />
    </div>
  );
}

function Logo() {
  return <span className="logo">🤞 GoCheck</span>;
}

function Form() {
  const [title, setTitle] = useState("");

  function handleSubmit(e: any) {
    // ini untk contoh penggunaan any
    e.preventDefault();
    console.log("refresh manual");
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

function Checklist() {
  return (
    <div className="list">
      <ul>
        {listItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

type TodoItem = {
  // ini untk pengganti 'any' di ts, kalo js ga perlu
  id: number;
  title: string;
  done: boolean;
};

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
      <span># You have x notes & only x have been checked off (x%) </span>
    </footer>
  );
}

export default App;
