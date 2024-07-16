import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    ".",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    "=",
  ];
  return (
    <div className={styles.btnContainer}>
      {buttonNames.map((items) => (
        <button className={styles.button} onClick={() => onButtonClick(items)}>
          {items}
        </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
