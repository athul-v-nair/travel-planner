import styles from "./Footer.module.css";
import { FooterProps } from "./types";
const Footer = ({ numberOfItems, packedItems }: FooterProps) => {
  if (!numberOfItems) {
    return (
      <div className={styles.footercontainer}>
        <h1>Start adding items to your list</h1>
      </div>
    );
  }

  return (
    <div className={styles.footercontainer}>
      {numberOfItems === packedItems ? (
        <h1>You are ready to go</h1>
      ) : (
        <h1>
          There are {numberOfItems} items in the list, and you have packed{" "}
          {packedItems} items
        </h1>
      )}
    </div>
  );
};

export default Footer;
