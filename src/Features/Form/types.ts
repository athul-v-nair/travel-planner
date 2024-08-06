export interface Item {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

export interface FormProps{
  handleAddItems: (newItem: Item)=> void
}