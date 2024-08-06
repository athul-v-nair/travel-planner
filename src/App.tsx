import { useState } from "react";
import styles from "./App.module.css" ;
import Footer from "./Features/Footer/Footer";
import Form from "./Features/Form/Form";
import { Item } from "./Features/Form/types";
import List from "./Features/List/List";
import Logo from "./Features/Logo/Logo";

function App() {
  const [item, setItem] = useState<Item[]>([]);
  const numberOfItems: number = item.length;
  const packedItems: number = item.filter(item => item.packed).length
  function handleAddItems(newItem: Item){
    setItem((prev: Item[]) => [...prev, newItem])
  }

  function handleDeleteItem(id: number){
    setItem((items) => items.filter((item) => item.id !== id))
  }

  function handlePacked(id: number){
    setItem(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
  }

  function handleRemoveAllItem(){
    setItem([])
  }
  return (
  <div className={styles.container}>
      <Logo />
      <Form handleAddItems={handleAddItems}/>
      <List item={item} handleDeleteItem={handleDeleteItem} handlePacked={handlePacked} handleRemoveAllItem={handleRemoveAllItem}/>
      <Footer numberOfItems={numberOfItems} packedItems={packedItems}/>
  </div>
  );
}

export default App;
