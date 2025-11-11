import type { TodoItem } from "../App";

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

export default Stats;
