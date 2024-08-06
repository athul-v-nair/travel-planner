import React, { useState } from "react";
import styles from "./Form.module.css";
import { FormProps, Item } from "./types";

const Form = ({handleAddItems}: FormProps) => {
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!description) return;

    const newItem:Item = {id: Date.now(), description, quantity, packed: false}
    handleAddItems(newItem);
    // After submittion
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className={styles.formcontainer} onSubmit={handleSubmit}>
      <h3>Start adding items to the list</h3>
      <div className={styles.inputcontainer}>
        <select
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
            <option value={number} key={number}>
              {number}
            </option>
          ))}
        </select>
        <input
          placeholder="Item"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </div>
    </form>
  );
};

export default Form;
