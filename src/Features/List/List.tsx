import { useState } from "react";
import styles from "./List.module.css";
import { ListProps } from "./types";
import { Item } from "../Form/types";

const List = ({
  item,
  handleDeleteItem,
  handlePacked,
  handleRemoveAllItem,
}: ListProps) => {
  const [sortBy, setSortBy] = useState<string>('input')
  let sortedItems: Item[] = item
  if(sortBy === 'input') 
    sortedItems = item
  else if(sortBy === 'description') 
    sortedItems = item.slice().sort((a,b) => a.description.localeCompare(b.description))
  else if(sortBy === 'packed') 
    sortedItems = item.slice().sort((a,b) => Number(a.packed) - Number(b.packed))
  else if(sortBy === 'numberofitems') 
    sortedItems = item.slice().sort((a,b) => a.quantity - b.quantity)

  return (
    <div className={styles.listcontainer}>
      <h2>List of items</h2>
      <ul>
        {sortedItems && sortedItems.map((i) => (
          <li key={i.id}>
            <input
              type="checkbox"
              checked={i.packed}
              onChange={() => handlePacked(i.id)}
            />
            <span style={i.packed ? { textDecoration: "line-through" } : {}}>
              {i.quantity}. {i.description}
            </span>
            <button onClick={() => handleDeleteItem(i.id)}>❌</button>
          </li>
        ))}
      </ul>
      <div className={styles.listhead}>
        <select name="sortBy" id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
          <option value="numberofitems">Sort by Number of Items</option>
        </select>
        <button onClick={handleRemoveAllItem}>Remove All</button>
      </div>
    </div>
  );
};

export default List;
