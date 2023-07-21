import { useContext } from "react";
import context from "../../../homeContext/context";
import styles from "./clear.module.css";

export default Context = () => {
  const { clearFilters } = useContext(context);
  return (
    <button className={styles.clear} onClick={() => clearFilters()}>
      Clear filters
    </button>
  );
};
