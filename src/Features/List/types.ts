import { Item } from "../Form/types";

export interface ListProps{
    item: Item[];
    handleDeleteItem: (id: number)=> void
    handlePacked:  (id: number)=> void
    handleRemoveAllItem: ()=>void
}