import { IoMoonOutline } from "react-icons/io5";
import styles from "./App.module.css";
import { IoMdSearch } from "react-icons/io";

export default function App() {
  return (
    <div className={styles.wrapper}>
      <header>
        <h5>Where in the world?</h5>
        <div className={styles.themeSwitchContainer}>
          <IoMoonOutline />
          <span>Dark mode</span>
        </div>
      </header>
      <div className={styles.body}>
        <div className={styles.searContainer}>
          {/* <IoMdSearch className={styles.searchIcon} /> */}
          <input type="text" placeholder="Search for a country" />
        </div>
      </div>
    </div>
  );
}
