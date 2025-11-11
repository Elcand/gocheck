import { useState } from "react";
import Item from "./Item";

function Checklist({ items, onDeleteItem, onToggleItem, onClearItems }: any) {
  const [sortBy, setSortBy] = useState("input");

  function sortItems() {
    switch (sortBy) {
      case "title":
        return items
          .slice()
          .sort((a: any, b: any) => a.title.localeCompare(b.title));
      case "status":
        return items
          .slice()
          .sort((a: any, b: any) => Number(a.done) - Number(b.done));
      case "input":
      default:
        return items;
    }
  }

  const sortedItems = sortItems();

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item: any) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan input</option>
          <option value="title">Urutkan berdasarkan judul</option>
          <option value="status">Urutkan berdasarkan status</option>
        </select>
        <button onClick={onClearItems}>Clear</button>
      </div>
    </div>
  );
}

export default Checklist;
