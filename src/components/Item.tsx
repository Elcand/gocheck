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

export default Item;
